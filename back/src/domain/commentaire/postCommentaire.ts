import { MutationResolvers } from "../../types.js";

export const postCommentaire: NonNullable<MutationResolvers['postCommentaire']> = async (_, { text, articleId }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const createdCommentaire = await db.commentaire.create({
            data: {
                text: text,
                userId: user.id,
                articleId: articleId
            }
        });

        return {
            code: 201,
            message: 'Article has been created',
            success: true,
            article: createdCommentaire
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
            message: 'Commentaire has not been created',
            success: false,
            article: null
        }
    }
}