import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import PatientProfile from './PatientProfile';
const PatientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PatientDashboard />} />
      <Route path="account" element={<PatientProfile />} />
      <Route path="profile" element={<PatientDashboard />} />
    </Routes>
  );
};

export default PatientRoutes;
