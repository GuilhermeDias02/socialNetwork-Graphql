import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";
import { getArticles } from "./getArticles.js";
import { getArticlesByUser } from "./getArticlesByUser.js";

type ArticleQueries = WithRequired<QueryResolvers, 'getArticles' | 'getArticlesByUser'>

export const articleQueries: ArticleQueries = {
  getArticles,
  getArticlesByUser, 
}