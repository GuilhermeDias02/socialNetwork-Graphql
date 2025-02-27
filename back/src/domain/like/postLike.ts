import { MutationResolvers } from "../../types.js";

export const postLikeArticle: NonNullable<MutationResolvers['postLikeArticle']> = async (_, { articleId }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const alreadyLiked = await db.like.findMany({
            where: {
                articleId: articleId,
                userId: user.id
            }
        });
        if (alreadyLiked.length !== 0) throw new Error('This user has already liked this article');

        const createdLike = await db.like.create({
            data: {
                articleId: articleId,
                userId: user.id
            }
        });

        return {
            code: 201,
            message: 'Like added to the article',
            success: true,
            like: createdLike
        }
    } catch (e) {
        if (e instanceof Error) {
            return {
                code: 400,
                message: e.message,
                success: false,
                like: null
            }
        }
        return {
            code: 400,
            message: 'Article has not been created',
            success: false,
            like: null
        }
    }
}