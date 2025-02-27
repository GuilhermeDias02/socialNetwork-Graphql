import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: '/graphql',
  credentials: 'include', 
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token'); // Récupère le token stocké
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "", // 🔥 Ajoute le token dans les headers
    }
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
