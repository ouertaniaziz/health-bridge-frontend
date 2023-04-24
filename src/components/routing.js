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
  const [isPharmacist, setisPharmacist] = useState(false);
  const { user: currentUser } = useSelector(state => state.auth);

  useEffect(() => {
    if (currentUser) {
      if (currentUser.role.includes('doctor')) {
        console.log('doctor');
        setisDoctor(true);
      } else if (currentUser.role.includes('patient')) {
        console.log('patient');
        setisPatient(true);
      } else if (currentUser.role.includes('pharmacist')) {
        console.log('pharmacist');
        setisPharmacist(true);
      }
    }
  }, [currentUser]);

  const PatientRoutes = React.lazy(() =>
    import('../components/frontOffice/Patient/PatientRoutes')
  );
  const DoctorRoutes = React.lazy(() =>
    import('../components/frontOffice/Doctors/DoctorRoutes')
  );
  const PharmacistRoutes = React.lazy(() =>
    import('../components/frontOffice/Pharmacist/PharmacistRoutes')
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
              {isPatient && (
                <Route path="patient/*" element={<PatientRoutes />} />
              )}
              {isDoctor && <Route path="doctor/*" element={<DoctorRoutes />} />}
              {isPharmacist && <Route path="pharmacist/*" element={<PharmacistRoutes />} />}
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
