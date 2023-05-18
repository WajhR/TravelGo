const { gql } = require('apollo-server-express');

const typeDefs = gql`


 type Blog {
    _id: ID
    blogText: String
    blogAuthor: String
    createdAt: String
 }
 type User {
  _id: ID
  name: String
  email: String
  password: String
  blogs: [Blog]!
}


  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(name: String!): User
    blogs(name: String): [Blog]
    blog(blogId: ID!): Blog
    me: User
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