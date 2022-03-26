import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import PROTECTED_ROUTES from 'routes/protected-routes'

const AppWrapper = () => {
  const routes = useRoutes(PROTECTED_ROUTES);
  return routes;
};

const Authenticated = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppWrapper />
    </Router>
  );
};
export default Authenticated;