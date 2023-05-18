const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
    blogs: [String]!
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
  }

  type Mutation {
    
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth


    addBlog(profileId: ID!, blog: String!): User
    removeUser(userId: ID!): User
    removeBlog(userId: ID!, blog: String!): User
   
    
  }
`
module.exports = typeDefs;