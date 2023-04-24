import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import PatientProfile from './PatientProfile';
import { useSelector } from 'react-redux';
const PatientRoutes = () => {
  const p = useSelector(state => state.patient.value);

  return (
    <Routes>
      <Route path="/" element={<PatientDashboard p={p} />} />
      <Route path="account" element={<PatientProfile />} />
      <Route path="profile" element={<PatientDashboard />} />
    </Routes>
  );
};

export default PatientRoutes;
