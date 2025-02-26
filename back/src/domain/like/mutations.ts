import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";
import { deleteLikeArticle } from "./deleteLike.js";
import { postLikeArticle } from "./postLike.js";

type LikeMutations = WithRequired<MutationResolvers, 'postLikeArticle' | 'deleteLikeArticle'>

export const likeMutations: LikeMutations = {
    postLikeArticle,
    deleteLikeArticle,
}