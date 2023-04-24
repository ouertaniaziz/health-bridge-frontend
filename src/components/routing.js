import React, { Suspense, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SidebarWithHeader from './frontOffice/SideBarMenu';
import WithSubnavigation from './navbar/NavBar';
const RoutesPage = () => {
  const FrontOfficeRoutes = React.lazy(() =>
    import('./frontOffice/frontOfficeRouting')
  );
  const { isLoggedIn } = useSelector(state => state.auth);
  const [isDoctor, setisDoctor] = useState(false);
  const [isPatient, setisPatient] = useState(false);
  const [isPoliclinicAdmin, setisPoliclinicAdmin] = useState(false);

  const { user: currentUser } = useSelector(state => state.auth);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.role.includes('doctor')) {
        console.log('doctor');
        setisDoctor(true);
      } else if (currentUser.role.includes('patient')) {
        console.log('patient');
        setisPatient(true);
      } else if (currentUser.role.includes('PoliclinicAdmin')) {
        console.log('PoliclinicAdmin');
        setisPoliclinicAdmin(true);
      }

    }
  }, [currentUser]);

  const PatientRoutes = React.lazy(() =>
    import('../components/frontOffice/Patient/PatientRoutes')
  );
  const DoctorRoutes = React.lazy(() =>
    import('../components/frontOffice/Doctors/DoctorRoutes')
  );
  const PoliclinicRoutes = React.lazy(() =>
    import('../components/frontOffice/Polyclinic/PoliclinicRoutes')
  );

  return (
    <>
      {' '}
      {!isLoggedIn ? (
        <WithSubnavigation />
      ) : (
        <SidebarWithHeader>
          <Suspense>
            <Routes>
              {isPoliclinicAdmin && (
                <Route path="policlinic/*" element={<PoliclinicRoutes />} />
              )}
              {isPatient && (
                <Route path="patient/*" element={<PatientRoutes />} />
              )}
              {isDoctor && <Route path="doctor/*" element={<DoctorRoutes />} />}
            </Routes>
          </Suspense>
        </SidebarWithHeader>
      )}
      <Suspense>
        <Routes>
          <Route path="/*" element={<FrontOfficeRoutes />}></Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesPage;
