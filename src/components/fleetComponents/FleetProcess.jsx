import React from "react";
import { motion } from "framer-motion";

export default function FleetProcess() {
  const steps = [
    { step: "1", title: "Fleet Setup", desc: "Configure your vehicles and drivers in one platform." },
    { step: "2", title: "Live Monitoring", desc: "Track location, performance, and status of every vehicle." },
    { step: "3", title: "Data Insights", desc: "Leverage AI-driven analytics for smarter decisions." },
    { step: "4", title: "Efficiency Boost", desc: "Cut costs and maximize delivery performance." },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">How Our Fleet Management Works</h2>
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="p-6 bg-black rounded-xl shadow-lg hover:shadow-red-600/40 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-4xl font-bold text-red-600 mb-3">{s.step}</h3>
            <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
