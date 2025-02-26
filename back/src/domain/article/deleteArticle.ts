import { MutationResolvers } from "../../types.js";

export const deleteArticle: NonNullable<MutationResolvers['deleteArticle']> = async (_, { id }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const deletedArticle = await db.article.delete({
            where: {
                id: id,
                userId: user.id
            }
        })

        return {
            code: 204,
            message: 'Article has been deleted',
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
            message: 'Article has not been deleted',
            success: false,
        }
    }
}