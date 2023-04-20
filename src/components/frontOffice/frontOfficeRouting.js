import React, { Suspense, useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './feature/signIn';
import { Route, Routes } from 'react-router-dom';
import BlogsComponent from './Blogs/blog';
import Home from './HomePage/Home';
import Contact from './contact/contact';
import Community from './Community/Community';
import About from './About/About';
import Donationcomponent from './Donation/Donationscomponent';


import Abonnements from './Abonnements/Abonnement';
import SimpleCard from './login/signIn/signInForm';
import Multistep from './login/signUp/signUpForm';



const FrontOfficeRoutes = () => {
  const [isDoctor, setisDoctor] = useState(false);
  const [isPatient, setisPatient] = useState(false);
  const { user: currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  useEffect(() => {
    if (currentUser) {
      if (currentUser.role.includes('doctor')) {
        setisDoctor(true);
      } else if (currentUser.role.includes('patient')) {
        setisPatient(true);
      }
    }
  }, [currentUser]);

  const PatientRoutes = React.lazy(() => import('./Patient/PatientRoutes'));
  // const DoctorRoutes = React.lazy(() => import('./Doctors/DoctorRoutes'));
   const DonationRoutes = React.lazy(() => import('./Donation/DonationRoutes'));
  

  return (
    <Suspense>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<BlogsComponent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="community" element={<Community />} />
        <Route path="abonnement" element={<Abonnements />} />
        <Route path="Donation" element={<Donationcomponent />} />
       
        
{/* <Route path="/donation/register" element={<Donationadd />} /> */}






        
        
        <Route path="signUp" element={<Multistep />} />
        <Route path="signIn" element={<SimpleCard />} />
        {isPatient && <Route path="patient/*" element={<PatientRoutes />} />}
        {/* {isDoctor && <Route path="doctor/*" element={<DoctorRoutes />} />}
        */}
         
      </Routes>
    </Suspense>
  );
};

export default FrontOfficeRoutes;
