import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import FleetPage from "../pages/FleetPage";
import ScrollToTop from "../pages/ToptoScroll";
import ContactPage from "../pages/ContactPage";

const RoutesPage = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="fleet" element={<FleetPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
