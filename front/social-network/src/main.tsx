import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
});

client
    .query({
        query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
    })
    .then((result) => console.log(result));

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider>
            <App />
        </ApolloProvider>
    </StrictMode>,
)
