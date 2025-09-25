import React from "react";
import { motion } from "framer-motion";

export default function HeroAbout() {
  return (
    <section className="bg-black text-white py-28 px-6 text-center relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-gray-800 via-black to-gray-900"
      />

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-5xl font-extrabold mb-6 tracking-tight"
      >
        About <span className="text-gray-400">Transtech World</span>
      </motion.h1>

      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed"
      >
        We are revolutionizing the logistics landscape with advanced tracking,
        fleet intelligence, and **3PL transportation solutions**. Our mission is
        to connect carriers, shippers, and warehouses in one seamless ecosystem.
      </motion.p>
    </section>
  );
}
