import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/services/hero.webp";

export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rentals & <span className="text-red-600">Services</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Reliable fleet rentals and logistics services tailored for businesses of all sizes.
        </motion.p>
      </motion.div>
    </section>
  );
}
