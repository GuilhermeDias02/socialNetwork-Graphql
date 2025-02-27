import gql from "graphql-tag";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    """
    Retrieves all articles, only for testing purposes
    """
    getArticles: [Article]!
    """
    Retrieves all articles writen by a user
    """
    getArticlesByUser(userId: ID!): [Article]!
    """
    Searches 20 articles with a corresponding user by its aproximate username
    """
    getArticlesByUsername(username: String!): [Article]!
    """
    Retrieves last 20 articles
    """
    getLastArticles: [Article]!

    """
    Retrieves all the article's commentaries
    """
    getCommentairesByArticle(articleId: ID!): [Commentaire]!
  }

  type Mutation {
    """
    Register a new user
    """
    createUser(username: String!, password: String!): CreateUserResponse!
    """
    Sign in and get a user's token
    """
    signIn(username: String!, password: String!): SignInResponse!

    """
    Write a new article
    """
    postArticle(text: String!): PostArticleResponse!
    """
    Change the article's text
    """
    patchArticle(id: ID!, text: String!): PostArticleResponse!
    """
    Delete the article
    """
    deleteArticle(id: ID!): DeleteArticleResponse!

    """
    Write a new commentary
    """
    postCommentaire(text: String!, articleId: ID!): PostCommentaireResponse!
    """
    Change the commentary's text
    """
    patchCommentaire(id: ID!, text: String!): PostCommentaireResponse!
    """
    Delete the commentary
    """
    deleteCommentaire(id: ID!): DeleteCommentaireResponse!

    """
    Like an article
    """
    postLikeArticle(articleId: ID!): PostLikeResponse!
    """
    Unlike a liked article
    """
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
    "The user's unique identifier"
    id: ID!
    "The user's unique username"
    username: String!
  }

  type Article {
    "The article's unique identifier"
    id: ID!
    "The article's content"
    text: String!
    "The article's post date and time"
    postDate: DateTime
    "The user who posted it"
    user: User!
    "The article's commentaries"
    commentaires: [Commentaire]!
    "The article's likes"
    likes: [Like]!
  }

  type Commentaire {
    "The commentary's unique identifier"
    id: ID!
    "The commentary's unique identifier"
    text: String!
    "The commentary's post date and time"
    postDate: DateTime
    "The user who posted it"
    user: User!
    "The corresponding article"
    article: Article!
  }

  type Like {
    "The like's unique identifier"
    id: ID!
    "The user who liked the article"
    user: User!
    "The liked article"
    article: Article!
  }
`;