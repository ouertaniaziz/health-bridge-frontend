import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DoctorProfile from './DoctorProfile';
import DoctorDashboard from './DoctorDashboard';
import UserProvider from './UserProvider';
import Blog from './Blog/blogRouting';

const DoctorRoutes = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DoctorProfile />} />
        <Route path="/dashboard" element={<DoctorDashboard />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </UserProvider>
  );
};

export default DoctorRoutes;
