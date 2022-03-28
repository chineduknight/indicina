import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import PROTECTED_ROUTES from 'routes/protected-routes'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

// https://www.apollographql.com/docs/react/networking/authentication/
const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem('token');
  const token = "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";
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const AppWrapper = () => {
  const routes = useRoutes(PROTECTED_ROUTES);
  return routes;
};
const Authenticated = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ScrollToTop />
        <AppWrapper />
      </Router>
    </ApolloProvider>
  );
};
export default Authenticated;