import { Resolvers } from "../../types.js"

export const CommentaireResolver: Resolvers['Commentaire'] = {
  user: ({userId}, _, {dataSources}) => {
    return dataSources.db.user.findFirstOrThrow({where: {id: userId}})
  },
  article: ({id}, _, {dataSources}) => {
    return dataSources.db.article.findFirstOrThrow({where: {id: id}});
  },
}