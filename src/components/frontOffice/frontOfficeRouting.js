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
import Signupdonation from './Donation/signinsignupdonor/Signup';
import Signindonation from './Donation/signinsignupdonor/Signin';
import Abonnements from './Abonnements/Abonnement';
import SimpleCard from './login/signIn/signInForm';
import Multistep from './login/signUp/signUpForm';

const FrontOfficeRoutes = () => {
  const [isDoctor, setIsDoctor] = useState(false); // fixed typo: setisDoctor -> setIsDoctor
  const [isPatient, setIsPatient] = useState(false); // fixed typo: setisPatient -> setIsPatient
  const { user: currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  
  useEffect(() => {
    if (currentUser) {
      if (currentUser.role.includes('doctor')) {
        setIsDoctor(true); // fixed typo: setisDoctor -> setIsDoctor
      } else if (currentUser.role.includes('patient')) {
        setIsPatient(true); // fixed typo: setisPatient -> setIsPatient
      }
    }
  }, [currentUser]);

  const PatientRoutes = React.lazy(() => import('./Patient/PatientRoutes'));
   const DoctorRoutes = React.lazy(() => import('./Doctors/DoctorRoutes'));


  return (
    <Suspense fallback={<div>Loading...</div>}> {/* fixed: add fallback prop to Suspense */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<BlogsComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/abonnement" element={<Abonnements />} />
         <Route path="/donation" element={<Donationcomponent />} />
         <Route path="/donation/signup" element={<Signupdonation/>} /> {/* fixed: add closing tag */}
        <Route path="/signin" element={<Signindonation />} /> {/* fixed: add closing tag */}
         
        <Route path="/signup" element={<Multistep />} />
        <Route path="/signin" element={<SimpleCard />} />
        {isPatient && <Route path="/patient/*" element={<PatientRoutes />} />}
        {/* {isDoctor && <Route path="/doctor/*" element={<DoctorRoutes />} />} */}
      </Routes>
    </Suspense>
  );
};

export default FrontOfficeRoutes;
