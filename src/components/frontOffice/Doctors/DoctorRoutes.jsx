import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DoctorProfile from './DoctorProfile';
import DoctorDashboard from './DoctorDashboard';
import UserProvider from './UserProvider';

const DoctorRoutes = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DoctorProfile />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
      </Routes>
    </UserProvider>
  );
};

export default DoctorRoutes;
