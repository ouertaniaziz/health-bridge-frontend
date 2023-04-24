import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PoliclinicAdminDashbord from './PoliclinicAdminDashbord';
import PoliclinicProfile from './PoliclinicProfile';
import PoliclinicProvider from './PoliclinicProvider';
import PoliclinicInformations from './PoliclinicInformations';

const PoliclinicRoutes = () => {
  return (
    <PoliclinicProvider>
      <Routes>
        <Route path="/" element={<PoliclinicProfile />} />
        <Route path="/dashboard" element={<PoliclinicAdminDashbord />} />
        <Route path="/informations" element={< PoliclinicInformations/>} />
      </Routes>
    </PoliclinicProvider>
  );
};

export default PoliclinicRoutes ;
