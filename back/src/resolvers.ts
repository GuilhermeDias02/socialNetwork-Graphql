import { userMutations } from "./domain/user/mutations.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
  },
  Mutation: {
    ...userMutations
  },
}