import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PharmacistDashboard from './PharmacistDashbord';
import PharmacistProfile from './PharmacistProfile';
import PharacistProvider  from './UserPharmacist';
const PharmacistHome= React.lazy(() => import('./PharmacistHome'));


const PharmacistRoutes = () => {
  return (

    <PharacistProvider>
      <Routes>
        <Route path="/" element= {<PharmacistProfile />} />
        <Route path="/dashboard" element={<PharmacistDashboard />} />
        <Route path="/Home" element={< PharmacistHome />} />
        {/* <Route path="/GetPrespiction" element={<GetPrespiction />} /> */}
      </Routes>
    </PharacistProvider>
  );
};

export default PharmacistRoutes;


