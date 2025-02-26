import { QueryResolvers } from "../../types.js";

export const getCommentairesByArticle: NonNullable<QueryResolvers['getCommentairesByArticle']> = async (_, {articleId}, { dataSources: { db } }) => {
    return await db.commentaire.findMany({
        where: { articleId: articleId }
    });
}