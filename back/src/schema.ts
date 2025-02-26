import gql from "graphql-tag";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    getArticles: [Article]!
    getArticlesByUser(userId: ID!): [Article]!

    getCommentairesByArticle(articleId: ID!): [Commentaire]!
  }

  type Mutation {
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!

    postArticle(text: String!): PostArticleResponse!
    patchArticle(id: ID!, text: String!): PostArticleResponse!
    deleteArticle(id: ID!): DeleteArticleResponse!

    postCommentaire(text: String!, articleId: ID!): PostCommentaireResponse!
    patchCommentaire(id: ID!, text: String!): PostCommentaireResponse!
    deleteCommentaire(id: ID!): DeleteCommentaireResponse!

    postLikeArticle(articleId: ID!): PostLikeResponse!
    deleteLikeArticle(articleId: ID!): DeleteLikeResponse!
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

  type PostCommentaireResponse {
    code: Int!
    success: Boolean!
    message: String!
    commentaire: Commentaire
  }
  type DeleteCommentaireResponse {
    code: Int!
    success: Boolean!
    message: String!
  }

  type PostLikeResponse {
    code: Int!
    success: Boolean!
    message: String!
    like: Like
  }
  type DeleteLikeResponse {
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