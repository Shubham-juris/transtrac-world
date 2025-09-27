import React from "react";
import { motion } from "framer-motion";
import fleetImg from "../../assets/fleet/hero.jpg"; 

export default function FleetHero() {
  return (
    <section className="relative w-full min-h-[70vh] bg-black text-white flex items-center justify-center">
      <img
        src={fleetImg}
        alt="Fleet Management"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smart Fleet Management by <span className="text-red-600">Transtech World</span>
        </motion.h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Optimize routes, monitor performance, and achieve maximum efficiency
          with our advanced fleet management solutions.
        </p>
      </div>
    </section>
  );
}
