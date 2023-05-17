const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
  
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId });
      },
    },

    
  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    addBlog: async (parent, { userId, blog }) => {
      return Profile.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { blogs: blog },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (parent, { userId }) => {
        return User.findOneAndDelete({ _id: userId });
      },
      
    removeBlog: async (parent, { userId, blog }) => {
        return User.findOneAndUpdate(
          { _id: userId },
          { $pull: { blogs: blog } },
          { new: true }
        );
      },

        // async createMessage(_, {messageInput: {text, username} }) {
        //     const newMessage = new Message({
        //         text: text,
        //         createdBy: username,
        //         createdAt: new Date().toISOString()
        //     });

        //     const res = await newMessage.save();
        //     console.log(res);
        //     return {
        //         id: res.id,
        //         ...res._doc
        //     };
        // }
    },
    
}
module.exports = resolvers;