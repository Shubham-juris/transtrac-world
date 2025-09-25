import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe, BarChart } from "lucide-react";

export default function WhatWeDo() {
  const services = [
    {
      icon: <Truck className="h-10 w-10 text-white" />,
      title: "3PL Logistics",
      desc: "Comprehensive third-party logistics solutions with route optimization and real-time tracking.",
    },
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      title: "Transportation",
      desc: "End-to-end freight and fleet management ensuring timely, reliable, and cost-effective delivery.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-white" />,
      title: "Data-Driven Insights",
      desc: "Analytics-driven operations to optimize performance and reduce logistics inefficiencies.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">What We Do</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-gray-900 rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition"
          >
            <div className="mb-4 flex justify-center">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
