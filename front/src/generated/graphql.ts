import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Article = {
  __typename?: 'Article';
  /** The article's commentaries */
  commentaires: Array<Maybe<Commentaire>>;
  /** The article's unique identifier */
  id: Scalars['ID']['output'];
  /** The article's likes */
  likes: Array<Maybe<Like>>;
  /** The article's post date and time */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** The article's content */
  text: Scalars['String']['output'];
  /** The user who posted it */
  user: User;
};

export type Commentaire = {
  __typename?: 'Commentaire';
  /** The corresponding article */
  article: Article;
  /** The commentary's unique identifier */
  id: Scalars['ID']['output'];
  /** The commentary's post date and time */
  postDate?: Maybe<Scalars['DateTime']['output']>;
  /** The commentary's unique identifier */
  text: Scalars['String']['output'];
  /** The user who posted it */
  user: User;
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type DeleteArticleResponse = {
  __typename?: 'DeleteArticleResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteCommentaireResponse = {
  __typename?: 'DeleteCommentaireResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type DeleteLikeResponse = {
  __typename?: 'DeleteLikeResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Like = {
  __typename?: 'Like';
  /** The liked article */
  article: Article;
  /** The like's unique identifier */
  id: Scalars['ID']['output'];
  /** The user who liked the article */
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Register a new user */
  createUser: CreateUserResponse;
  /** Delete the article */
  deleteArticle: DeleteArticleResponse;
  /** Delete the commentary */
  deleteCommentaire: DeleteCommentaireResponse;
  /** Unlike a liked article */
  deleteLikeArticle: DeleteLikeResponse;
  /** Change the article's text */
  patchArticle: PostArticleResponse;
  /** Change the commentary's text */
  patchCommentaire: PostCommentaireResponse;
  /** Write a new article */
  postArticle: PostArticleResponse;
  /** Write a new commentary */
  postCommentaire: PostCommentaireResponse;
  /** Like an article */
  postLikeArticle: PostLikeResponse;
  /** Sign in and get a user's token */
  signIn: SignInResponse;
};


export type MutationCreateUserArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommentaireArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteLikeArticleArgs = {
  articleId: Scalars['ID']['input'];
};


export type MutationPatchArticleArgs = {
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};


export type MutationPatchCommentaireArgs = {
  id: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};


export type MutationPostArticleArgs = {
  text: Scalars['String']['input'];
};


export type MutationPostCommentaireArgs = {
  articleId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
};


export type MutationPostLikeArticleArgs = {
  articleId: Scalars['ID']['input'];
};


export type MutationSignInArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type PostArticleResponse = {
  __typename?: 'PostArticleResponse';
  article?: Maybe<Article>;
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PostCommentaireResponse = {
  __typename?: 'PostCommentaireResponse';
  code: Scalars['Int']['output'];
  commentaire?: Maybe<Commentaire>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PostLikeResponse = {
  __typename?: 'PostLikeResponse';
  code: Scalars['Int']['output'];
  like?: Maybe<Like>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** Retrieves all articles, only for testing purposes */
  getArticles: Array<Maybe<Article>>;
  /** Retrieves all articles writen by a user */
  getArticlesByUser: Array<Maybe<Article>>;
  /** Searches 20 articles with a corresponding user by its aproximate username */
  getArticlesByUsername: Array<Maybe<Article>>;
  /** Retrieves all the article's commentaries */
  getCommentairesByArticle: Array<Maybe<Commentaire>>;
  /** Retrieves last 20 articles */
  getLastArticles: Array<Maybe<Article>>;
};


export type QueryGetArticlesByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetArticlesByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetCommentairesByArticleArgs = {
  articleId: Scalars['ID']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  /** The user's unique identifier */
  id: Scalars['ID']['output'];
  /** The user's unique username */
  username: Scalars['String']['output'];
};

export type DeleteArticleMutationVariables = Exact<{
  deleteArticleId: Scalars['ID']['input'];
}>;


export type DeleteArticleMutation = { __typename?: 'Mutation', deleteArticle: { __typename?: 'DeleteArticleResponse', code: number, message: string } };

export type DeleteCommentaireMutationVariables = Exact<{
  deleteCommentaireId: Scalars['ID']['input'];
}>;


export type DeleteCommentaireMutation = { __typename?: 'Mutation', deleteCommentaire: { __typename?: 'DeleteCommentaireResponse', code: number, message: string } };

export type DeleteLikeArticleMutationVariables = Exact<{
  articleId: Scalars['ID']['input'];
}>;


export type DeleteLikeArticleMutation = { __typename?: 'Mutation', deleteLikeArticle: { __typename?: 'DeleteLikeResponse', code: number, message: string } };

export type GetAllArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllArticlesQuery = { __typename?: 'Query', getArticles: Array<{ __typename?: 'Article', id: string, text: string, postDate?: any | null, user: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'Like', user: { __typename?: 'User', username: string } } | null>, commentaires: Array<{ __typename?: 'Commentaire', text: string, id: string, user: { __typename?: 'User', username: string } } | null> } | null> };

export type GetArticlesByUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type GetArticlesByUserQuery = { __typename?: 'Query', getArticlesByUser: Array<{ __typename?: 'Article', id: string, text: string } | null> };

export type GetArticlesByUsernameQueryVariables = Exact<{
  username: Scalars['String']['input'];
}>;


export type GetArticlesByUsernameQuery = { __typename?: 'Query', getArticlesByUsername: Array<{ __typename?: 'Article', id: string, text: string, postDate?: any | null, user: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'Like', user: { __typename?: 'User', username: string } } | null>, commentaires: Array<{ __typename?: 'Commentaire', text: string, id: string, user: { __typename?: 'User', username: string } } | null> } | null> };

export type GetLastArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLastArticlesQuery = { __typename?: 'Query', getLastArticles: Array<{ __typename?: 'Article', id: string, text: string, postDate?: any | null, user: { __typename?: 'User', username: string }, likes: Array<{ __typename?: 'Like', user: { __typename?: 'User', username: string } } | null>, commentaires: Array<{ __typename?: 'Commentaire', text: string, id: string, user: { __typename?: 'User', username: string } } | null> } | null> };

export type SignInMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SignInMutation = { __typename?: 'Mutation', signIn: { __typename?: 'SignInResponse', code: number, success: boolean, message: string, token?: string | null } };

export type PatchArticleMutationVariables = Exact<{
  patchArticleId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
}>;


export type PatchArticleMutation = { __typename?: 'Mutation', patchArticle: { __typename?: 'PostArticleResponse', code: number, message: string } };

export type PatchCommentaireMutationVariables = Exact<{
  patchCommentaireId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
}>;


export type PatchCommentaireMutation = { __typename?: 'Mutation', patchCommentaire: { __typename?: 'PostCommentaireResponse', code: number, message: string } };

export type PostArticleMutationVariables = Exact<{
  text: Scalars['String']['input'];
}>;


export type PostArticleMutation = { __typename?: 'Mutation', postArticle: { __typename?: 'PostArticleResponse', code: number, success: boolean, message: string, article?: { __typename?: 'Article', id: string, text: string, user: { __typename?: 'User', username: string } } | null } };

export type PostCommentaireMutationVariables = Exact<{
  text: Scalars['String']['input'];
  articleId: Scalars['ID']['input'];
}>;


export type PostCommentaireMutation = { __typename?: 'Mutation', postCommentaire: { __typename?: 'PostCommentaireResponse', code: number, message: string } };

export type PostLikeArticleMutationVariables = Exact<{
  articleId: Scalars['ID']['input'];
}>;


export type PostLikeArticleMutation = { __typename?: 'Mutation', postLikeArticle: { __typename?: 'PostLikeResponse', code: number, message: string } };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser: { __typename?: 'CreateUserResponse', code: number, success: boolean, message: string, user?: { __typename?: 'User', username: string } | null } };


export const DeleteArticleDocument = gql`
    mutation DeleteArticle($deleteArticleId: ID!) {
  deleteArticle(id: $deleteArticleId) {
    code
    message
  }
}
    `;
export type DeleteArticleMutationFn = Apollo.MutationFunction<DeleteArticleMutation, DeleteArticleMutationVariables>;

/**
 * __useDeleteArticleMutation__
 *
 * To run a mutation, you first call `useDeleteArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArticleMutation, { data, loading, error }] = useDeleteArticleMutation({
 *   variables: {
 *      deleteArticleId: // value for 'deleteArticleId'
 *   },
 * });
 */
export function useDeleteArticleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArticleMutation, DeleteArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArticleMutation, DeleteArticleMutationVariables>(DeleteArticleDocument, options);
      }
export type DeleteArticleMutationHookResult = ReturnType<typeof useDeleteArticleMutation>;
export type DeleteArticleMutationResult = Apollo.MutationResult<DeleteArticleMutation>;
export type DeleteArticleMutationOptions = Apollo.BaseMutationOptions<DeleteArticleMutation, DeleteArticleMutationVariables>;
export const DeleteCommentaireDocument = gql`
    mutation DeleteCommentaire($deleteCommentaireId: ID!) {
  deleteCommentaire(id: $deleteCommentaireId) {
    code
    message
  }
}
    `;
export type DeleteCommentaireMutationFn = Apollo.MutationFunction<DeleteCommentaireMutation, DeleteCommentaireMutationVariables>;

/**
 * __useDeleteCommentaireMutation__
 *
 * To run a mutation, you first call `useDeleteCommentaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentaireMutation, { data, loading, error }] = useDeleteCommentaireMutation({
 *   variables: {
 *      deleteCommentaireId: // value for 'deleteCommentaireId'
 *   },
 * });
 */
export function useDeleteCommentaireMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentaireMutation, DeleteCommentaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentaireMutation, DeleteCommentaireMutationVariables>(DeleteCommentaireDocument, options);
      }
export type DeleteCommentaireMutationHookResult = ReturnType<typeof useDeleteCommentaireMutation>;
export type DeleteCommentaireMutationResult = Apollo.MutationResult<DeleteCommentaireMutation>;
export type DeleteCommentaireMutationOptions = Apollo.BaseMutationOptions<DeleteCommentaireMutation, DeleteCommentaireMutationVariables>;
export const DeleteLikeArticleDocument = gql`
    mutation DeleteLikeArticle($articleId: ID!) {
  deleteLikeArticle(articleId: $articleId) {
    code
    message
  }
}
    `;
export type DeleteLikeArticleMutationFn = Apollo.MutationFunction<DeleteLikeArticleMutation, DeleteLikeArticleMutationVariables>;

/**
 * __useDeleteLikeArticleMutation__
 *
 * To run a mutation, you first call `useDeleteLikeArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLikeArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLikeArticleMutation, { data, loading, error }] = useDeleteLikeArticleMutation({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function useDeleteLikeArticleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLikeArticleMutation, DeleteLikeArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLikeArticleMutation, DeleteLikeArticleMutationVariables>(DeleteLikeArticleDocument, options);
      }
export type DeleteLikeArticleMutationHookResult = ReturnType<typeof useDeleteLikeArticleMutation>;
export type DeleteLikeArticleMutationResult = Apollo.MutationResult<DeleteLikeArticleMutation>;
export type DeleteLikeArticleMutationOptions = Apollo.BaseMutationOptions<DeleteLikeArticleMutation, DeleteLikeArticleMutationVariables>;
export const GetAllArticlesDocument = gql`
    query GetAllArticles {
  getArticles {
    id
    text
    postDate
    user {
      username
    }
    likes {
      user {
        username
      }
    }
    commentaires {
      text
      id
      user {
        username
      }
    }
  }
}
    `;

/**
 * __useGetAllArticlesQuery__
 *
 * To run a query within a React component, call `useGetAllArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, options);
      }
export function useGetAllArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, options);
        }
export function useGetAllArticlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllArticlesQuery, GetAllArticlesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllArticlesQuery, GetAllArticlesQueryVariables>(GetAllArticlesDocument, options);
        }
export type GetAllArticlesQueryHookResult = ReturnType<typeof useGetAllArticlesQuery>;
export type GetAllArticlesLazyQueryHookResult = ReturnType<typeof useGetAllArticlesLazyQuery>;
export type GetAllArticlesSuspenseQueryHookResult = ReturnType<typeof useGetAllArticlesSuspenseQuery>;
export type GetAllArticlesQueryResult = Apollo.QueryResult<GetAllArticlesQuery, GetAllArticlesQueryVariables>;
export const GetArticlesByUserDocument = gql`
    query GetArticlesByUser($userId: ID!) {
  getArticlesByUser(userId: $userId) {
    id
    text
  }
}
    `;

/**
 * __useGetArticlesByUserQuery__
 *
 * To run a query within a React component, call `useGetArticlesByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesByUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetArticlesByUserQuery(baseOptions: Apollo.QueryHookOptions<GetArticlesByUserQuery, GetArticlesByUserQueryVariables> & ({ variables: GetArticlesByUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesByUserQuery, GetArticlesByUserQueryVariables>(GetArticlesByUserDocument, options);
      }
export function useGetArticlesByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesByUserQuery, GetArticlesByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesByUserQuery, GetArticlesByUserQueryVariables>(GetArticlesByUserDocument, options);
        }
export function useGetArticlesByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetArticlesByUserQuery, GetArticlesByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArticlesByUserQuery, GetArticlesByUserQueryVariables>(GetArticlesByUserDocument, options);
        }
export type GetArticlesByUserQueryHookResult = ReturnType<typeof useGetArticlesByUserQuery>;
export type GetArticlesByUserLazyQueryHookResult = ReturnType<typeof useGetArticlesByUserLazyQuery>;
export type GetArticlesByUserSuspenseQueryHookResult = ReturnType<typeof useGetArticlesByUserSuspenseQuery>;
export type GetArticlesByUserQueryResult = Apollo.QueryResult<GetArticlesByUserQuery, GetArticlesByUserQueryVariables>;
export const GetArticlesByUsernameDocument = gql`
    query GetArticlesByUsername($username: String!) {
  getArticlesByUsername(username: $username) {
    id
    text
    postDate
    user {
      username
    }
    likes {
      user {
        username
      }
    }
    commentaires {
      text
      id
      user {
        username
      }
    }
  }
}
    `;

/**
 * __useGetArticlesByUsernameQuery__
 *
 * To run a query within a React component, call `useGetArticlesByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetArticlesByUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetArticlesByUsernameQuery, GetArticlesByUsernameQueryVariables> & ({ variables: GetArticlesByUsernameQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesByUsernameQuery, GetArticlesByUsernameQueryVariables>(GetArticlesByUsernameDocument, options);
      }
export function useGetArticlesByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesByUsernameQuery, GetArticlesByUsernameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesByUsernameQuery, GetArticlesByUsernameQueryVariables>(GetArticlesByUsernameDocument, options);
        }
export function useGetArticlesByUsernameSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetArticlesByUsernameQuery, GetArticlesByUsernameQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetArticlesByUsernameQuery, GetArticlesByUsernameQueryVariables>(GetArticlesByUsernameDocument, options);
        }
export type GetArticlesByUsernameQueryHookResult = ReturnType<typeof useGetArticlesByUsernameQuery>;
export type GetArticlesByUsernameLazyQueryHookResult = ReturnType<typeof useGetArticlesByUsernameLazyQuery>;
export type GetArticlesByUsernameSuspenseQueryHookResult = ReturnType<typeof useGetArticlesByUsernameSuspenseQuery>;
export type GetArticlesByUsernameQueryResult = Apollo.QueryResult<GetArticlesByUsernameQuery, GetArticlesByUsernameQueryVariables>;
export const GetLastArticlesDocument = gql`
    query GetLastArticles {
  getLastArticles {
    id
    text
    postDate
    user {
      username
    }
    likes {
      user {
        username
      }
    }
    commentaires {
      text
      id
      user {
        username
      }
    }
  }
}
    `;

/**
 * __useGetLastArticlesQuery__
 *
 * To run a query within a React component, call `useGetLastArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLastArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetLastArticlesQuery, GetLastArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLastArticlesQuery, GetLastArticlesQueryVariables>(GetLastArticlesDocument, options);
      }
export function useGetLastArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLastArticlesQuery, GetLastArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLastArticlesQuery, GetLastArticlesQueryVariables>(GetLastArticlesDocument, options);
        }
export function useGetLastArticlesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetLastArticlesQuery, GetLastArticlesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetLastArticlesQuery, GetLastArticlesQueryVariables>(GetLastArticlesDocument, options);
        }
export type GetLastArticlesQueryHookResult = ReturnType<typeof useGetLastArticlesQuery>;
export type GetLastArticlesLazyQueryHookResult = ReturnType<typeof useGetLastArticlesLazyQuery>;
export type GetLastArticlesSuspenseQueryHookResult = ReturnType<typeof useGetLastArticlesSuspenseQuery>;
export type GetLastArticlesQueryResult = Apollo.QueryResult<GetLastArticlesQuery, GetLastArticlesQueryVariables>;
export const SignInDocument = gql`
    mutation SignIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password) {
    code
    success
    message
    token
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const PatchArticleDocument = gql`
    mutation PatchArticle($patchArticleId: ID!, $text: String!) {
  patchArticle(id: $patchArticleId, text: $text) {
    code
    message
  }
}
    `;
export type PatchArticleMutationFn = Apollo.MutationFunction<PatchArticleMutation, PatchArticleMutationVariables>;

/**
 * __usePatchArticleMutation__
 *
 * To run a mutation, you first call `usePatchArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchArticleMutation, { data, loading, error }] = usePatchArticleMutation({
 *   variables: {
 *      patchArticleId: // value for 'patchArticleId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function usePatchArticleMutation(baseOptions?: Apollo.MutationHookOptions<PatchArticleMutation, PatchArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PatchArticleMutation, PatchArticleMutationVariables>(PatchArticleDocument, options);
      }
export type PatchArticleMutationHookResult = ReturnType<typeof usePatchArticleMutation>;
export type PatchArticleMutationResult = Apollo.MutationResult<PatchArticleMutation>;
export type PatchArticleMutationOptions = Apollo.BaseMutationOptions<PatchArticleMutation, PatchArticleMutationVariables>;
export const PatchCommentaireDocument = gql`
    mutation PatchCommentaire($patchCommentaireId: ID!, $text: String!) {
  patchCommentaire(id: $patchCommentaireId, text: $text) {
    code
    message
  }
}
    `;
export type PatchCommentaireMutationFn = Apollo.MutationFunction<PatchCommentaireMutation, PatchCommentaireMutationVariables>;

/**
 * __usePatchCommentaireMutation__
 *
 * To run a mutation, you first call `usePatchCommentaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePatchCommentaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [patchCommentaireMutation, { data, loading, error }] = usePatchCommentaireMutation({
 *   variables: {
 *      patchCommentaireId: // value for 'patchCommentaireId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function usePatchCommentaireMutation(baseOptions?: Apollo.MutationHookOptions<PatchCommentaireMutation, PatchCommentaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PatchCommentaireMutation, PatchCommentaireMutationVariables>(PatchCommentaireDocument, options);
      }
export type PatchCommentaireMutationHookResult = ReturnType<typeof usePatchCommentaireMutation>;
export type PatchCommentaireMutationResult = Apollo.MutationResult<PatchCommentaireMutation>;
export type PatchCommentaireMutationOptions = Apollo.BaseMutationOptions<PatchCommentaireMutation, PatchCommentaireMutationVariables>;
export const PostArticleDocument = gql`
    mutation PostArticle($text: String!) {
  postArticle(text: $text) {
    code
    success
    message
    article {
      id
      text
      user {
        username
      }
    }
  }
}
    `;
export type PostArticleMutationFn = Apollo.MutationFunction<PostArticleMutation, PostArticleMutationVariables>;

/**
 * __usePostArticleMutation__
 *
 * To run a mutation, you first call `usePostArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postArticleMutation, { data, loading, error }] = usePostArticleMutation({
 *   variables: {
 *      text: // value for 'text'
 *   },
 * });
 */
export function usePostArticleMutation(baseOptions?: Apollo.MutationHookOptions<PostArticleMutation, PostArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostArticleMutation, PostArticleMutationVariables>(PostArticleDocument, options);
      }
export type PostArticleMutationHookResult = ReturnType<typeof usePostArticleMutation>;
export type PostArticleMutationResult = Apollo.MutationResult<PostArticleMutation>;
export type PostArticleMutationOptions = Apollo.BaseMutationOptions<PostArticleMutation, PostArticleMutationVariables>;
export const PostCommentaireDocument = gql`
    mutation PostCommentaire($text: String!, $articleId: ID!) {
  postCommentaire(text: $text, articleId: $articleId) {
    code
    message
  }
}
    `;
export type PostCommentaireMutationFn = Apollo.MutationFunction<PostCommentaireMutation, PostCommentaireMutationVariables>;

/**
 * __usePostCommentaireMutation__
 *
 * To run a mutation, you first call `usePostCommentaireMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostCommentaireMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postCommentaireMutation, { data, loading, error }] = usePostCommentaireMutation({
 *   variables: {
 *      text: // value for 'text'
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function usePostCommentaireMutation(baseOptions?: Apollo.MutationHookOptions<PostCommentaireMutation, PostCommentaireMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostCommentaireMutation, PostCommentaireMutationVariables>(PostCommentaireDocument, options);
      }
export type PostCommentaireMutationHookResult = ReturnType<typeof usePostCommentaireMutation>;
export type PostCommentaireMutationResult = Apollo.MutationResult<PostCommentaireMutation>;
export type PostCommentaireMutationOptions = Apollo.BaseMutationOptions<PostCommentaireMutation, PostCommentaireMutationVariables>;
export const PostLikeArticleDocument = gql`
    mutation PostLikeArticle($articleId: ID!) {
  postLikeArticle(articleId: $articleId) {
    code
    message
  }
}
    `;
export type PostLikeArticleMutationFn = Apollo.MutationFunction<PostLikeArticleMutation, PostLikeArticleMutationVariables>;

/**
 * __usePostLikeArticleMutation__
 *
 * To run a mutation, you first call `usePostLikeArticleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostLikeArticleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postLikeArticleMutation, { data, loading, error }] = usePostLikeArticleMutation({
 *   variables: {
 *      articleId: // value for 'articleId'
 *   },
 * });
 */
export function usePostLikeArticleMutation(baseOptions?: Apollo.MutationHookOptions<PostLikeArticleMutation, PostLikeArticleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostLikeArticleMutation, PostLikeArticleMutationVariables>(PostLikeArticleDocument, options);
      }
export type PostLikeArticleMutationHookResult = ReturnType<typeof usePostLikeArticleMutation>;
export type PostLikeArticleMutationResult = Apollo.MutationResult<PostLikeArticleMutation>;
export type PostLikeArticleMutationOptions = Apollo.BaseMutationOptions<PostLikeArticleMutation, PostLikeArticleMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    code
    success
    message
    user {
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;