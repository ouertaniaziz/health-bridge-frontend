import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom';
import BlogDetails from './blog-details';
import AddBlog from './addBlog';
import Blog from './Blog';

const BlogRouting = () => {
  return (
      <Routes>
        <Route path="" element={<Blog />} />
        <Route path=":id" element={<BlogDetails />} />
        <Route path="addblog" element={<AddBlog />} />
      </Routes>
  );
};

export default BlogRouting;
