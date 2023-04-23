import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DoctorProfile from './DoctorProfile';
import DoctorDashboard from './DoctorDashboard';
import UserProvider from './UserProvider';
import DoctorHome from './DoctorHome';
const HomePage = React.lazy(() => import('./DoctorHome'));
const AddPrespiction = React.lazy(() =>
  import('./prescription/AddPrespiction')
);
const DoctorRoutes = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DoctorProfile />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/addPrespiction" element={<AddPrespiction />} />
      </Routes>
    </UserProvider>
  );
};

export default DoctorRoutes;
