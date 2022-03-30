import WithSuspense from '../components/WithSuspense';
import { PROTECTED_PATHS } from './constants';
import { AppRoute } from './types';
import { lazy } from 'react';

const Search = WithSuspense(lazy(() => import('pages/Search')));
const Result = WithSuspense(lazy(() => import('pages/Result')));

const { SEARCH, RESULT } = PROTECTED_PATHS

const PROTECTED_ROUTES: AppRoute[] = [
  { path: SEARCH, element: <Search /> },
  { path: RESULT, element: <Result /> },
  { path: "/", element: <Search /> },
  { path: "*", element: <div>Page not found</div> },
];

export default PROTECTED_ROUTES;