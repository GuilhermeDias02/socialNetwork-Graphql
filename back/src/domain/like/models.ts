import { Resolvers } from "../../types.js"

export const LikeResolver: Resolvers['Like'] = {
    user: ({ userId }, _, { dataSources }) => {
        return dataSources.db.user.findFirstOrThrow({ where: { id: userId } })
    },
    article: ({ articleId }, _, { dataSources }) => {
        return dataSources.db.article.findFirstOrThrow({ where: { id: articleId } });
    },
}