import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/About/hero.jpg"; 

export default function HeroAbout() {
  return (
    <section
      className="relative bg-black text-white py-28 px-6 text-center overflow-hidden min-h-[70vh]"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-black/70 to-gray-900/70 z-0"
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold mb-6 tracking-tight"
        >
          About <span className="text-red-500">Transtech World</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          We are revolutionizing the logistics landscape with{" "}
          <strong>advanced tracking</strong>, <strong>fleet intelligence</strong>,
          and <strong>3PL transportation solutions</strong>. Our mission is to
          connect carriers, shippers, and warehouses in one seamless ecosystem.
        </motion.p>
      </div>
    </section>
  );
}
