import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";
import { getCommentairesByArticle } from "./getCommentairesByArticle.js";

type CommentaireQueries = WithRequired<QueryResolvers, 'getCommentairesByArticle'>

export const commentaireQueries: CommentaireQueries = {
    getCommentairesByArticle,
}