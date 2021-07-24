const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: [String!]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
    bookCount: Int
  }

  type Query {
    me: User
  }

  type Auth {
    token: ID!
    user: User
  }

  input bookInput{
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookData: ID!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
