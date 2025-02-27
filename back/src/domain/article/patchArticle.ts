import { MutationResolvers } from "../../types.js";

export const patchArticle: NonNullable<MutationResolvers['patchArticle']> = async (_, { id, text }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const updatedArticle = await db.article.update({
            where: {
                id: id,
                userId: user.id,
            },
            data: {
                text: text,
            }
        });

        return {
            code: 204,
            message: 'Article has been updated',
            success: true,
            article: updatedArticle
        }
    } catch (e) {
        if (e instanceof Error) {
            return {
                code: 400,
                message: e.message,
                success: false,
                article: null
            }
        }
        return {
            code: 400,
            message: 'Article has not been updated',
            success: false,
            article: null
        }
    }
}