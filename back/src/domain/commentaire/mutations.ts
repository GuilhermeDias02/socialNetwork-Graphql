import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";
import { deleteCommentaire } from "./deleteCommentaire.js";
import { patchCommentaire } from "./patchCommentaire.js";
import { postCommentaire } from "./postCommentaire.js";

type CommentaireMutations = WithRequired<MutationResolvers, 'postCommentaire' | 'patchCommentaire' | 'deleteCommentaire'>

export const commentaireMutations: CommentaireMutations = {
    postCommentaire,
    patchCommentaire,
    deleteCommentaire,
}