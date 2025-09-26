import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    { name: "LogiTech Inc.", feedback: "Transtech World boosted our logistics efficiency by 40%. Outstanding!" },
    { name: "Sarah K.", feedback: "Their fleet management system is top-notch. Highly recommended." },
    { name: "Rajesh P.", feedback: "One of the most reliable 3PL service providers we’ve partnered with." },
  ];

  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-12">What Clients Say About Transtech World</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-red-600/40 transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="text-gray-300 italic mb-4">“{r.feedback}”</p>
            <h4 className="font-semibold">{r.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
