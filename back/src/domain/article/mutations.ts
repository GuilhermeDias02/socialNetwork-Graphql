import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";
import { deleteArticle } from "./deleteArticle.js";
import { patchArticle } from "./patchArticle.js";
import { postArticle } from "./postArticle.js";

type ArticleMutations = WithRequired<MutationResolvers, 'postArticle' | 'patchArticle' | 'deleteArticle'>

export const articleMutations: ArticleMutations = {
    postArticle,
    patchArticle,
    deleteArticle,
}