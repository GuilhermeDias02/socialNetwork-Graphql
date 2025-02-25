import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
  }

  type Mutation {
    incrementNumberOfLikes(id: ID!): IncrementNumberOfLikesReponse!
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
  }

  type IncrementTrackViewReponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type IncrementNumberOfLikesReponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
  type SignInResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
  }

  type User {
    id: ID!
    username: String!
  }
`;