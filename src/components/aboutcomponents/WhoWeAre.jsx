import React from "react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Who We Are
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed"
      >
        Transtech World is a **next-generation logistics & transportation
        partner**, specializing in **3PL and real-time tracking solutions**.  
        With years of experience, we bring together **technology, data, and
        logistics expertise** to streamline supply chains and deliver unmatched
        efficiency.
      </motion.p>
    </section>
  );
}
