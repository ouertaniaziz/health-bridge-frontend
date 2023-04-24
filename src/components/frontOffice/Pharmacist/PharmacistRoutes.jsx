import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PharmacistDashbord from './PharmacistDashbord';
import PharmacistProfile from './PharmacistProfile';
import PharmacistProvider  from './UserPharmacist';
import Medication from './Medications';

const PharmacistHome= React.lazy(() => import('./PharmacistHome'));

const PharmacistRoutes = () => {
  return (

    <PharmacistProvider>
      <Routes>
        <Route path="/" element= {<PharmacistProfile />} />
        <Route path="/dashbord" element={<PharmacistDashbord />} />
        <Route path="/Home" element={< PharmacistHome />} />
        <Route path="/medication" element={<Medication/>} />
        {/* <Route path="/GetPrespiction" element={<GetPrespiction />} /> */}
      </Routes>
    </PharmacistProvider>
  );
};

export default PharmacistRoutes;





