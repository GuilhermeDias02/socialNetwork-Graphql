import gql from "graphql-tag";

export const typeDefs = gql`
  scalar DateTime
  type Query {
    getArticles: [Article]!
    getArticlesByUser(username: String!): [Article]!
  }

  type Mutation {
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
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

  type Article {
    id: ID!
    text: String!
    postDate: DateTime
    user: User!
  }
`;