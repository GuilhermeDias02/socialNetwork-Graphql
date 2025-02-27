import { MutationResolvers } from "../../types.js";

export const patchCommentaire: NonNullable<MutationResolvers['patchCommentaire']> = async (_, { id, text }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const updatedCommentaire = await db.commentaire.update({
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
            message: 'Commentaire has been updated',
            success: true,
            commentaire: updatedCommentaire
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
            message: 'Commentaire has not been updated',
            success: false,
            commentaire: null
        }
    }
}