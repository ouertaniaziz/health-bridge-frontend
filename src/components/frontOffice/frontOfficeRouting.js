import React, { Suspense } from 'react';
import { logout } from './feature/signIn';
import { Route, Routes } from 'react-router-dom';
import Home from './HomePage/Home';
import Contact from './contact/contact';
import Community from './Community/Community';
import About from './About/About';
import Donationcomponent from './Donation/Donationscomponent';
import Signupdonation from './Donation/signinsignupdonor/signup';
import Signindonation from './Donation/signinsignupdonor/signin';
import MedicationForm from './Donation/MedicationForm';
import MaterialForm from './Donation/MaterialForm';
import MedicationList from './Donation/MaterialList';
import MaterialList from './Donation/MedicationList';
import Abonnements from './Abonnements/Abonnement';
import SimpleCard from './login/signIn/signInForm';
import Multistep from './login/signUp/signUpForm';
import { Emailverificiation } from './Emailverification/Emailverificiation';

const FrontOfficeRoutes = () => {



  return (
    <Suspense fallback={<div>Loading...</div>}> {/* fixed: add fallback prop to Suspense */}
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/abonnement" element={<Abonnements />} />
         <Route path="/donation" element={<Donationcomponent />} />
         <Route path="/donation/signup" element={<Signupdonation/>} /> {/* fixed: add closing tag */}
        <Route path="/donation/signin" element={<Signindonation />} /> {/* fixed: add closing tag */}
        <Route path="/medicationform" element={<MedicationForm />} />
         <Route path="/materialform" element={<MaterialForm />} />
         <Route path="/medicationlist" element={<MedicationList />} />
         <Route path="/medicationlist" element={< MaterialList/>} />
         <Route path="/verify/:token" element={< Emailverificiation/>} />
        <Route path="/signup" element={<Multistep />} />
        <Route path="/signin" element={<SimpleCard />} />
      </Routes>

    </Suspense>
  );
};

export default FrontOfficeRoutes;
