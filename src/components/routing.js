import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { store } from '../config/store';
import { Provider } from 'react-redux';

import WithSubnavigation from './navbar/NavBar';
const RoutesPage = () => {
  const FrontOfficeRoutes = React.lazy(() =>
    import('./frontOffice/frontOfficeRouting')
  );

  return (
    <>
      {' '}
      <Provider store={store}>
        <WithSubnavigation />
        <Suspense>
          <Routes>
            <Route path="/*" element={<FrontOfficeRoutes />}></Route>
          </Routes>
        </Suspense>
      </Provider>
    </>
  );
};

export default RoutesPage;
