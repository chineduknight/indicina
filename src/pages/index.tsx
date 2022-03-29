import UnAuthenticated from './UnAuthenticated';
import Authenticated from './Authenticated';
import { isUserAuthenticated } from 'utils/helpers';

const Pages = () => {
  const isAuthenticated = isUserAuthenticated();
  if (isAuthenticated) {
    return <Authenticated />
  }
  return <UnAuthenticated />
}

export default Pages
