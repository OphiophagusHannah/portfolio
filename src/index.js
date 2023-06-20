import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.forEach(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                    ),
                );
            if (networkError) console.log(`[Network error]: ${networkError}`);
        }),
        new HttpLink({
            uri: 'https://api-us-east-1.hygraph.com/v2/cl579626s4dsj01up298i8o7r/master',
            credentials: 'same-origin'
        })
    ]),
    cache: new InMemoryCache()
});


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<ApolloProvider client={client}>
    <App />
</ApolloProvider>,
);
reportWebVitals();
