import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/laylout/Layout";
import Home from "../pages/home/Home";
import About from '../pages/about/About';
import Services from '../pages/services/Services';
import Contact from '../pages/contact/Contact';
import Career from '../pages/career/Career';
import NotFound from '../pages/notFound/NotFound';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
