import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurMission() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center">
      <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">
        Our Mission
      </h2>
      <p
        data-aos="zoom-in"
        className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
      >
        To empower global supply chains with **end-to-end visibility,
        intelligent route optimization, and predictive fleet analytics**.  
        We aim to reduce inefficiencies, minimize costs, and maximize delivery
        reliability.
      </p>
    </section>
  );
}
