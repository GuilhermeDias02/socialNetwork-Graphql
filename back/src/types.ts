import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ArticleModel, CommentaireModel, LikeModel } from './models';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  commentaires: Array<Maybe<Commentaire>>;
  id: Scalars['ID']['output'];
  likes: Array<Maybe<Like>>;
  postDate?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  user: User;
};

export type Commentaire = {
  __typename?: 'Commentaire';
  article: Article;
  id: Scalars['ID']['output'];
  postDate?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
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

export type Like = {
  __typename?: 'Like';
  article: Article;
  id: Scalars['ID']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: CreateUserResponse;
  deleteArticle: DeleteArticleResponse;
  deleteCommentaire: DeleteCommentaireResponse;
  patchArticle: PostArticleResponse;
  patchCommentaire: PostCommentaireResponse;
  postArticle: PostArticleResponse;
  postCommentaire: PostCommentaireResponse;
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

export type Query = {
  __typename?: 'Query';
  getArticles: Array<Maybe<Article>>;
  getArticlesByUser: Array<Maybe<Article>>;
  getCommentairesByArticle: Array<Maybe<Commentaire>>;
};


export type QueryGetArticlesByUserArgs = {
  userId: Scalars['ID']['input'];
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
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Article: ResolverTypeWrapper<ArticleModel>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Commentaire: ResolverTypeWrapper<CommentaireModel>;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  DeleteArticleResponse: ResolverTypeWrapper<DeleteArticleResponse>;
  DeleteCommentaireResponse: ResolverTypeWrapper<DeleteCommentaireResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Like: ResolverTypeWrapper<LikeModel>;
  Mutation: ResolverTypeWrapper<{}>;
  PostArticleResponse: ResolverTypeWrapper<Omit<PostArticleResponse, 'article'> & { article?: Maybe<ResolversTypes['Article']> }>;
  PostCommentaireResponse: ResolverTypeWrapper<Omit<PostCommentaireResponse, 'commentaire'> & { commentaire?: Maybe<ResolversTypes['Commentaire']> }>;
  Query: ResolverTypeWrapper<{}>;
  SignInResponse: ResolverTypeWrapper<SignInResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Article: ArticleModel;
  Boolean: Scalars['Boolean']['output'];
  Commentaire: CommentaireModel;
  CreateUserResponse: CreateUserResponse;
  DateTime: Scalars['DateTime']['output'];
  DeleteArticleResponse: DeleteArticleResponse;
  DeleteCommentaireResponse: DeleteCommentaireResponse;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Like: LikeModel;
  Mutation: {};
  PostArticleResponse: Omit<PostArticleResponse, 'article'> & { article?: Maybe<ResolversParentTypes['Article']> };
  PostCommentaireResponse: Omit<PostCommentaireResponse, 'commentaire'> & { commentaire?: Maybe<ResolversParentTypes['Commentaire']> };
  Query: {};
  SignInResponse: SignInResponse;
  String: Scalars['String']['output'];
  User: User;
};

export type ArticleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = {
  commentaires?: Resolver<Array<Maybe<ResolversTypes['Commentaire']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  likes?: Resolver<Array<Maybe<ResolversTypes['Like']>>, ParentType, ContextType>;
  postDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentaireResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Commentaire'] = ResolversParentTypes['Commentaire']> = {
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  postDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DeleteArticleResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteArticleResponse'] = ResolversParentTypes['DeleteArticleResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteCommentaireResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteCommentaireResponse'] = ResolversParentTypes['DeleteCommentaireResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LikeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Like'] = ResolversParentTypes['Like']> = {
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'password' | 'username'>>;
  deleteArticle?: Resolver<ResolversTypes['DeleteArticleResponse'], ParentType, ContextType, RequireFields<MutationDeleteArticleArgs, 'id'>>;
  deleteCommentaire?: Resolver<ResolversTypes['DeleteCommentaireResponse'], ParentType, ContextType, RequireFields<MutationDeleteCommentaireArgs, 'id'>>;
  patchArticle?: Resolver<ResolversTypes['PostArticleResponse'], ParentType, ContextType, RequireFields<MutationPatchArticleArgs, 'id' | 'text'>>;
  patchCommentaire?: Resolver<ResolversTypes['PostCommentaireResponse'], ParentType, ContextType, RequireFields<MutationPatchCommentaireArgs, 'id' | 'text'>>;
  postArticle?: Resolver<ResolversTypes['PostArticleResponse'], ParentType, ContextType, RequireFields<MutationPostArticleArgs, 'text'>>;
  postCommentaire?: Resolver<ResolversTypes['PostCommentaireResponse'], ParentType, ContextType, RequireFields<MutationPostCommentaireArgs, 'articleId' | 'text'>>;
  signIn?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'password' | 'username'>>;
};

export type PostArticleResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PostArticleResponse'] = ResolversParentTypes['PostArticleResponse']> = {
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostCommentaireResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PostCommentaireResponse'] = ResolversParentTypes['PostCommentaireResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  commentaire?: Resolver<Maybe<ResolversTypes['Commentaire']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getArticles?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType>;
  getArticlesByUser?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType, RequireFields<QueryGetArticlesByUserArgs, 'userId'>>;
  getCommentairesByArticle?: Resolver<Array<Maybe<ResolversTypes['Commentaire']>>, ParentType, ContextType, RequireFields<QueryGetCommentairesByArticleArgs, 'articleId'>>;
};

export type SignInResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Article?: ArticleResolvers<ContextType>;
  Commentaire?: CommentaireResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteArticleResponse?: DeleteArticleResponseResolvers<ContextType>;
  DeleteCommentaireResponse?: DeleteCommentaireResponseResolvers<ContextType>;
  Like?: LikeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PostArticleResponse?: PostArticleResponseResolvers<ContextType>;
  PostCommentaireResponse?: PostCommentaireResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SignInResponse?: SignInResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

