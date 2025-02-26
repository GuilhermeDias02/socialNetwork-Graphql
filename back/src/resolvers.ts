import { ArticleResolver } from "./domain/article/models.js";
import { articleMutations } from "./domain/article/mutations.js";
import { articleQueries } from "./domain/article/queries.js";
import { CommentaireResolver } from "./domain/commentaire/models.js";
import { commentaireMutations } from "./domain/commentaire/mutations.js";
import { commentaireQueries } from "./domain/commentaire/queries.js";
import { LikeResolver } from "./domain/like/models.js";
import { likeMutations } from "./domain/like/mutations.js";
import { userMutations } from "./domain/user/mutations.js";
import { Resolvers } from "./types.js";

export const resolvers: Resolvers = {
  Query: {
    ...articleQueries,
    ...commentaireQueries,
  },
  Mutation: {
    ...userMutations,
    ...articleMutations,
    ...commentaireMutations,
    ...likeMutations,
  },
  Article: ArticleResolver,
  Commentaire: CommentaireResolver,
  Like: LikeResolver,
}