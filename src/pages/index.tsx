import UnAuthenticated from './UnAuthenticated';
import Authenticated from './Authenticated';

const Pages = () => {
  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Authenticated />
  }

  return <UnAuthenticated />
}

export default Pages
