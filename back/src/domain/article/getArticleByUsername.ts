import { QueryResolvers } from "../../types.js";

export const getArticlesByUsername: NonNullable<QueryResolvers['getArticlesByUsername']> = async (_, { username }, { dataSources: { db } }) => {
    return await db.article.findMany({
        where: {
            user: {
                username: {
                    contains: username
                }
            }
        },
        take: 20,
    });
}