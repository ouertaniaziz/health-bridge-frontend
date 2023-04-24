import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import PatientProfile from './PatientProfile';
import SendNotification from './SendNotification';
import AppoimentsHome from './AppoimentsHome';
import { useSelector } from 'react-redux';
const PatientRoutes = () => {
  //const p = useSelector(state => state.patient.value);

  return (
    <Routes>
      <Route path="/" element={<PatientDashboard />} />
      <Route path="notification/:id" element={<SendNotification />} />
      <Route path="appoiments" element={<AppoimentsHome />} />
      <Route path="account" element={<PatientProfile />} />
    </Routes>
  );
};

export default PatientRoutes;
