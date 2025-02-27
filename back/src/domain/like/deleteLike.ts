import { MutationResolvers } from "../../types.js";

export const deleteLikeArticle: NonNullable<MutationResolvers['deleteLikeArticle']> = async (_, { articleId }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const deletedLike = await db.like.deleteMany({
            where: {
                articleId: articleId,
                userId: user.id
            }
        })

        return {
            code: 204,
            message: 'Article unliked',
            success: true,
        }
    } catch (e) {
        if (e instanceof Error) {
            return {
                code: 400,
                message: e.message,
                success: false,
            }
        }
        return {
            code: 400,
            message: 'Like has not been deleted',
            success: false,
        }
    }
}