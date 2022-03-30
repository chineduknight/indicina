import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { AUTH_USER_KEY, GITHUB_LINK } from 'utils/constant';

const httpLink = createHttpLink({
  uri: GITHUB_LINK,
});

// https://www.apollographql.com/docs/react/networking/authentication/
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_USER_KEY);
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

export default client;