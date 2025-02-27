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
        
        console.log(createdCommentaire)

        return {
            code: 201,
            message: 'Commentaire has been created',
            success: true,
            commentaire: createdCommentaire
        }
    } catch (e) {
        if (e instanceof Error) {
            return {
                code: 400,
                message: e.message,
                success: false,
                commentaire: null
            }
        }
        return {
            code: 400,
            message: 'Commentaire has not been created',
            success: false,
            commentaire: null
        }
    }
}