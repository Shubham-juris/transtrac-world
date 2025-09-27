import React from "react";
import { motion } from "framer-motion";
import { Truck, Warehouse, Boxes, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-red-500 mb-4" />,
      title: "3PL Logistics",
      desc: "Complete third-party logistics solutions that cover transportation, warehousing, and fulfillment. We handle your operations so you can focus on growth.",
    },
    {
      icon: <Boxes className="h-12 w-12 text-blue-400 mb-4" />,
      title: "Transportation",
      desc: "From long-haul trucking to regional and last-mile delivery, we ensure safe, reliable, and on-time transportation of your goods.",
    },
    {
      icon: <Warehouse className="h-12 w-12 text-green-400 mb-4" />,
      title: "Warehousing Solutions",
      desc: "State-of-the-art warehouses with real-time inventory tracking, order fulfillment, and distribution to keep your supply chain agile.",
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-yellow-400 mb-4" />,
      title: "Supply Chain Optimization",
      desc: "Data-driven strategies to maximize efficiency, reduce operational costs, and create smarter supply chain networks.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-950 text-white text-center">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <motion.p
        className="text-lg text-gray-300 max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We deliver cutting-edge logistics and transportation solutions tailored to your business. From 3PL to warehousing and supply chain optimization, we help you move smarter and grow faster.
      </motion.p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white/10 p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {s.icon}
            <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
