import React from "react";
import { motion } from "framer-motion";

export default function ProcessSteps() {
  const steps = [
    { title: "Planning", desc: "Strategic supply chain planning designed by Transtech World experts." },
    { title: "Execution", desc: "Seamless operations with real-time visibility and control." },
    { title: "Optimization", desc: "Continuous monitoring, analytics, and cost reductions." },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">Our Process</h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 bg-black rounded-xl shadow-lg hover:shadow-red-600/40 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
