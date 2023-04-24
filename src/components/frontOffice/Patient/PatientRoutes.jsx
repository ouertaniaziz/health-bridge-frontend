import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PatientDashboard from './PatientDashboard';
import PatientProfile from './PatientProfile';
import SendNotification from './SendNotification';
import AppoimentsHome from './AppoimentsHome';
const PatientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PatientDashboard />} />
      <Route path="notification/:id" element={<SendNotification />} />
      <Route path="appoiments" element={<AppoimentsHome />} />
      <Route path="profile" element={<PatientProfile />} />
    </Routes>
  );
};

export default PatientRoutes;
