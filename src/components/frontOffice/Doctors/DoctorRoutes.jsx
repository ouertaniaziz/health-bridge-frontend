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
const ApoimentDoctor = React.lazy(() => import('./AppointmentsList'));
const DoctorRoutes = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DoctorProfile />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/addPrespiction/:id" element={<AddPrespiction />} />
        <Route path="/appointments" element={<ApoimentDoctor />} />
      </Routes>
    </UserProvider>
  );
};

export default DoctorRoutes;
