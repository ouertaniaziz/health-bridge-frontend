import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DoctorProfile from './DoctorProfile';
import DoctorDashboard from './DoctorDashboard';

const DoctorRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DoctorProfile />} />
      <Route path="/dashboard" element={<DoctorDashboard />} />
    </Routes>
  );
};

export default DoctorRoutes;
