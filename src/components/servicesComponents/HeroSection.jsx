import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[70vh] bg-black text-white flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Transtech World <span className="text-red-600">Services</span>
      </motion.h1>
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Delivering cutting-edge 3PL logistics and transportation solutions to
        optimize your supply chain with efficiency, security, and speed.
      </motion.p>
    </section>
  );
}
