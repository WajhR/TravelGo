const User = require('../../models/User');
// const {
//     ApolloServer,
//     gql,
//     UserInputError
// } = require('@apollo/server');
const { ApolloError } = require('apollo-server-errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    Mutation: {
        async registerUser(_, { registerInput: { username, email, password } }) {
            // see if an old user exists with email attempting to register

            const oldUser = await User.findOne({ email });

            // Throw error if that user exists
            if (oldUser) {
                throw new ApolloError('User already exists with this email' + email, 'USER_ALREADY_EXISTS')
            }
            // Encrypt password
            var encryptedPassword = await bcrypt.hash(password, 10);

            // Build out mongoose model(User)
            const newUser = new User({
                username: username,
                email: email.toLowerCare(),
                password: encryptedPassword

            });

            // Create out JWT (attach to our User model)
            const token = jwt.sign(
                { user_id: newUser._id, email },
                "UNSAFE_STRING",
                {
                    expiresIn: "2h"
                }
            );

            newUser.token = token;
            // Save our user in MongoDB
            const res = await newUser.save();

            return {
                id: res.id,
                ...res._doc
            };
        },
        async loginUser(_, { loginInput: { email, password } }) {
            // see if a user exists with the email
            const user = await User.findOne({ email });
            // Check if the entered password equals the encrypted password
            if (user && (await bcrypt.compare(password, user.password))) {
                // Create a NEW token   
                const token = jwt.sign(
                    { user_id: newUser._id, email },
                    "UNSAFE_STRING",
                    {
                        expiresIn: "2h"
                    }
                );
                // Attach token to user model that we found above
                user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                }
            } else {
                // if user doesn't exist, return error
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
            }
        }
    },
    Query: {
        user: (_, { ID }) => User.findById(ID)
    }
}