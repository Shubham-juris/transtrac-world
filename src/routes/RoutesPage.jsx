import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import Services from "../components/homeComponents/Services";
import ServicesPage from "../pages/ServicesPage";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Routes>
    </>
  );
};

export default RoutesPage;
