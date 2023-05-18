import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUser {
    users {
      _id
      name
      blogs
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      blogs
    }
  }
`;