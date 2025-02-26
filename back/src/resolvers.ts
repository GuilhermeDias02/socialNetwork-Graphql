import { articleQueries } from "./domain/article/queries.js";
import { userMutations } from "./domain/user/mutations.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    ...articleQueries,
  },
  Mutation: {
    ...userMutations,
  },
}