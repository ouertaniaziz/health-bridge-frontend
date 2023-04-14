import React, { Suspense } from 'react';
import { logout } from './feature/signIn';
import { Route, Routes } from 'react-router-dom';
import BlogsComponent from './Blogs/blog';
import Home from './HomePage/Home';
import Contact from './contact/contact';
import Community from './Community/Community';
import About from './About/About';
import Abonnements from './Abonnements/Abonnement';
import SimpleCard from './login/signIn/signInForm';
import Multistep from './login/signUp/signUpForm';
import { Emailverificiation } from './Emailverification/Emailverificiation';

const FrontOfficeRoutes = () => {
 
  return (
    <Suspense>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<BlogsComponent />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="community" element={<Community />} />
        <Route path="verify/:token" element={<Emailverificiation />} />
        <Route path="abonnement" element={<Abonnements />} />
        <Route path="signUp" element={<Multistep />} />
        <Route path="signIn" element={<SimpleCard />} />
         </Routes>
    </Suspense>
  );
};

export default FrontOfficeRoutes;
