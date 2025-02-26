import { QueryResolvers } from "../../types.js";

export const getArticles: NonNullable<QueryResolvers['getArticles']> = async (_, __, {dataSources: {db}}) => {
    return await db.article.findMany();
}