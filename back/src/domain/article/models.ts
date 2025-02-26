import { Resolvers } from "../../types.js"

export const ArticleResolver: Resolvers['Article'] = {
  user: ({userId}, _, {dataSources}) => {
    return dataSources.db.user.findFirstOrThrow({where: {id: userId}})
  },
  commentaires: ({id}, _, {dataSources}) => {
    return dataSources.db.commentaire.findMany({where: {articleId: id}})
  },
  likes: ({id}, _, {dataSources}) => {
    return dataSources.db.like.findMany({where: {articleId: id}})
  },
}