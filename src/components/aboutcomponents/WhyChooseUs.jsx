import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    "Specialized in AI-driven 3PL logistics solutions.",
    "24/7 real-time vehicle & shipment tracking.",
    "Seamless integration with warehouse operations.",
    "Trusted by leading transport enterprises worldwide.",
  ];

  return (
    <section className="bg-black py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Why Choose Us
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="flex items-center bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
          >
            <CheckCircle className="h-8 w-8 text-gray-300 mr-4" />
            <p className="text-gray-300 text-lg">{r}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
