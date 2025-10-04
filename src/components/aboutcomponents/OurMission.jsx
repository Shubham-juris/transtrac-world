import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function OurMission() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const reasons = [
    "Specialized in AI-driven 3PL logistics solutions.",
    "24/7 real-time vehicle & shipment tracking.",
    "Seamless integration with warehouse operations.",
    "Trusted by leading transport enterprises worldwide.",
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Our Mission */}
        <div data-aos="fade-right" className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            To empower global supply chains with{" "}
            <span className="font-semibold text-white">
              end-to-end visibility, intelligent route optimization, and
              predictive fleet analytics.
            </span>{" "}
            We aim to reduce inefficiencies, minimize costs, and maximize
            delivery reliability.
          </p>
        </div>

        {/* Right Side - Why Choose Us */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-center md:text-left mb-8">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-1 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex items-center bg-gray-800 rounded-xl p-5 shadow-lg hover:shadow-2xl transition"
              >
                <CheckCircle className="h-7 w-7 text-gray-300 mr-4" />
                <p className="text-gray-300 text-base">{r}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
