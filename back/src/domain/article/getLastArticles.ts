import { QueryResolvers } from "../../types.js";

export const getLastArticles: NonNullable<QueryResolvers['getLastArticles']> = async (_, __, { dataSources: { db } }) => {
    return await db.article.findMany({
        orderBy: {
            postDate: "desc"
        },
        take: 20,
    });
}