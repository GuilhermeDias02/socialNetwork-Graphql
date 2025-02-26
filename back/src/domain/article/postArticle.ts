import { MutationResolvers } from "../../types.js";

export const postArticle: NonNullable<MutationResolvers['postArticle']> = async (_, { text }, { user, dataSources: { db } }) => {
    try {
        if (!user) throw new Error('User is not provided');

        const createdArticle = await db.article.create({
            data: {
                text: text,
                userId: user.id
            }
        });

        return {
            code: 201,
            message: 'Article has been created',
            success: true,
            article: createdArticle
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
            message: 'Article has not been created',
            success: false,
            article: null
        }
    }
}