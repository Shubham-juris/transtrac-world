import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6 text-center">
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        Ready to Transform Your Logistics?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-300 max-w-3xl mx-auto text-lg mb-8"
      >
        Connect with Transtech World today and explore how our **tracking,
        transportation, and 3PL expertise** can redefine your supply chain
        success.
      </motion.p>

      <motion.a
        href="mailto:infotranstracworld@gmail.com"
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
      >
        <Mail className="h-5 w-5 mr-2" />
        Contact Us
      </motion.a>
    </section>
  );
}
