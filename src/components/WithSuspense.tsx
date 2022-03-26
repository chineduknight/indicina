import { Suspense } from 'react';
import Loader from 'components/Loader'

// eslint-disable-next-line react/display-name
const WithSuspense = (Component) => (props) => {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  )
};
export default WithSuspense;
