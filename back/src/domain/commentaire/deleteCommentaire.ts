import { MutationResolvers } from "../../types.js";

export const deleteCommentaire: NonNullable<MutationResolvers['deleteCommentaire']> = async (_, { id }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const deletedCommentaire = await db.commentaire.delete({
            where: {
                id: id,
                userId: user.id
            }
        })

        return {
            code: 204,
            message: 'Commentaire has been deleted',
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
            message: 'Commentaire has not been deleted',
            success: false,
        }
    }
}