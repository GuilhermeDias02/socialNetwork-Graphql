import { ArticleResolver } from "./domain/article/models.js";
import { articleMutations } from "./domain/article/mutations.js";
import { articleQueries } from "./domain/article/queries.js";
import { CommentaireResolver } from "./domain/commentaire/models.js";
import { LikeResolver } from "./domain/like/models.js";
import { userMutations } from "./domain/user/mutations.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    ...articleQueries,
    // ...commentaireQueries,
  },
  Mutation: {
    ...userMutations,
    ...articleMutations,
    // ...commentaireMutations,
  },
  Article: ArticleResolver,
  Commentaire: CommentaireResolver,
  Like: LikeResolver,
}