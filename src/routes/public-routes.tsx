import { PUBLIC_PATHS } from './constants';
import { AppRoute } from './types';
import Login from 'pages/UnAuthenticated';


const { LOGIN } = PUBLIC_PATHS

export const PUBLIC_ROUTES: AppRoute[] = [
  { path: LOGIN, element: <Login /> },
  { path: "/", element: <Login /> },
  { path: "*", element: <div>Page not found</div> },

]