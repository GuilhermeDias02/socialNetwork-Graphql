import { ArticleResolver } from "./domain/article/models.js";
import { articleMutations } from "./domain/article/mutations.js";
import { articleQueries } from "./domain/article/queries.js";
import { userMutations } from "./domain/user/mutations.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    ...articleQueries,
  },
  Mutation: {
    ...userMutations,
    ...articleMutations
  },
  Article: ArticleResolver
}