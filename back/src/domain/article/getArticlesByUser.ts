import { QueryResolvers } from "../../types.js";

export const getArticlesByUser: NonNullable<QueryResolvers['getArticlesByUser']> = async (_, {userId}, { dataSources: { db } }) => {
    return await db.article.findMany({
        where: { userId: userId }
    });
}