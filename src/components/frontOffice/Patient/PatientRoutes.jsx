import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import PatientProfile from './PatientProfile';
const PatientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PatientProfile />} />
      <Route path="/dashboard" element={<PatientDashboard />} />
    </Routes>
  );
};

export default PatientRoutes;
