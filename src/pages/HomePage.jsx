import React from "react";
import Home from "../components/homeComponents/Home";
import Services from "../components/homeComponents/Services";
import WhyChooseUs from "../components/homeComponents/WhyChooseUs";
import AboutUsSection from "../components/homeComponents/AboutUsSection";

const HomePage = () => {
  return (
    <>
      <Home />
      <AboutUsSection/>
      <WhyChooseUs />
      <Services />

    </>
  );
};

export default HomePage;
