import React from "react";
import { motion } from "framer-motion";

export default function FleetCTA() {
  return (
    <section className="py-20 bg-red-600 text-center text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Ready to Upgrade Your Fleet with Transtech World?
      </motion.h2>
      <p className="max-w-2xl mx-auto mb-8">
        Take your fleet operations to the next level. Contact our experts today
        for a personalized demo.
      </p>
      
    </section>
  );
}
