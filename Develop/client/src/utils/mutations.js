import { gql } from '@apollo/client';

// export const CREATE_USER = gql`
//   mutation createUser($username: String!, $email: String!, $password: String!) {
//     createUser(username: $username, email: $email, password: $password) {
//       _id
//       username
//       email
//       password
//     }
//   }
// `

export const ADD_USER = gql`
  mutation addUser(
    $username: String!,
    $email: String!,
    $password: String!
  ) {
    addUser(
      username: $username,
      email: $email,
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login(
    $email: String!,
    $password: String!
  ) {
    login(
      email: $email,
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation addBook(
    $bookData: bookInput!
  ) {
    addBook(
      bookData: $bookData
    ) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook(
    $bookId: ID!
  ) {
    deleteBook(
      bookId: $bookId
    ) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`