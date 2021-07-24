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
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
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