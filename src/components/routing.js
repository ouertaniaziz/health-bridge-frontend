import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SidebarWithHeader from './frontOffice/Doctors/SideBarMenu';
import WithSubnavigation from './navbar/NavBar';
const RoutesPage = () => {
  const FrontOfficeRoutes = React.lazy(() =>
    import('./frontOffice/frontOfficeRouting')
  );
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <>
      {' '}
      {!isLoggedIn ? <WithSubnavigation /> : <SidebarWithHeader />}
      <Suspense>
        <Routes>
          <Route path="/*" element={<FrontOfficeRoutes />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesPage;
