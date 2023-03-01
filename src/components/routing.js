import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import WithSubnavigation from './navbar/NavBar';
const RoutesPage = () => {
  const FrontOfficeRoutes = React.lazy(() =>
    import('./frontOffice/frontOfficeRouting')
  );

  return (
    <>
      <WithSubnavigation />
      <Suspense>
        <Routes>
          <Route path="/*" element={<FrontOfficeRoutes />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesPage;
