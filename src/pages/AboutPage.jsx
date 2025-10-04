import React from "react";
import HeroAbout from "../components/aboutcomponents/HeroAbout";
import OurMission from "../components/aboutcomponents/OurMission";
import WhyChooseUs from "../components/aboutcomponents/WhyChooseUs";
import WhoWeAre from "../components/aboutcomponents/WhoWeAre";
import WhatWeDo from "../components/aboutcomponents/WhatWeDo";
import CTA from "../components/aboutcomponents/CTA";
import AboutUsSection from "../components/homeComponents/AboutUsSection";

const AboutPage = () => {
  return (
    <>
      <HeroAbout />
      <AboutUsSection />
      <OurMission />
      <WhyChooseUs />
      <WhoWeAre />
      <WhatWeDo />
      <CTA />
    </>
  );
};

export default AboutPage;
