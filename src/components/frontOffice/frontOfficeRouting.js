import React from 'react';

import { Route, Routes } from 'react-router-dom';
import BlogsComponent from './Blogs/blog';
import Home from './HomePage/Home';
import Contact from './contact/contact';
import About from './About/About';
import SimpleCard from './login/signInForm';
import SignupCard from './login/signUpForm';

const FrontOfficeRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="blog" element={<BlogsComponent />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="signUp" element={<SignupCard />} />
      <Route path="signIn" element={<SimpleCard />} />
    </Routes>
  );
};

export default FrontOfficeRoutes;
