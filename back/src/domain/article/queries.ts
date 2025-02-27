import { QueryResolvers } from "../../types.js";
import { WithRequired } from "../../utils/mapped-types";
import { getArticlesByUsername } from "./getArticleByUsername.js";
import { getArticles } from "./getArticles.js";
import { getArticlesByUser } from "./getArticlesByUser.js";
import { getLastArticles } from "./getLastArticles.js";

type ArticleQueries = WithRequired<QueryResolvers, 'getArticles' | 'getArticlesByUser' | 'getArticlesByUsername' | 'getLastArticles'>

export const articleQueries: ArticleQueries = {
    getArticles,
    getArticlesByUser,
    getArticlesByUsername,
    getLastArticles
}