import { PROTECTED_PATHS } from './constants';
import { AppRoute } from './types';
import WithSuspense from '../components/WithSuspense';
import { lazy } from 'react';


const Search = WithSuspense(lazy(() => import('pages/Search')));
const { SEARCH } = PROTECTED_PATHS

const PROTECTED_ROUTES: AppRoute[] = [
  { path: SEARCH, element: <Search /> },
  { path: "/", element: <Search /> },
  { path: "*", element: <div>Page not found</div> },
];

export default PROTECTED_ROUTES;