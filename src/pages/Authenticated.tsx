import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import PROTECTED_ROUTES from 'routes/protected-routes'
import { ApolloProvider } from "@apollo/client";
import client from 'services/apolloConfig';

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