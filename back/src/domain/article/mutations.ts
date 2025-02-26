import { MutationResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";
import { postArticle } from "./postArticle.js";

type ArticleMutations = WithRequired<MutationResolvers, 'postArticle'>

export const articleMutations: ArticleMutations = {
  postArticle,
}