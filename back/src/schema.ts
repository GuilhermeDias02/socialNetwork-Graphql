import gql from "graphql-tag";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    getArticles: [Article]!
    getArticlesByUser(userId: ID!): [Article]!
  }

  type Mutation {
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
    postArticle(text: String!): PostArticleResponse!
    patchArticle(id: ID!, text: String!): PostArticleResponse!
    deleteArticle(id: ID!): DeleteArticleResponse!
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

  type PostArticleResponse {
    code: Int!
    success: Boolean!
    message: String!
    article: Article
  }
  type DeleteArticleResponse {
    code: Int!
    success: Boolean!
    message: String!
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
    commentaires: [Commentaire]!
    likes: [Like]!
  }

  type Commentaire {
    id: ID!
    text: String!
    postDate: DateTime
    user: User!
    article: Article!
  }

  type Like {
    id: ID!
    user: User!
    article: Article!
  }
`;