import { Resolvers } from "../../types.js"

export const LikeResolver: Resolvers['Like'] = {
  user: ({userId}, _, {dataSources}) => {
    return dataSources.db.user.findFirstOrThrow({where: {id: userId}})
  },
  article: ({id}, _, {dataSources}) => {
    return dataSources.db.article.findUniqueOrThrow({where: {id: id}});
  },
}