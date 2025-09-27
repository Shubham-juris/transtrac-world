import React from "react";
import { motion } from "framer-motion";
import fleetImg from "../../assets/services/img.jpg";

export default function FleetImageText() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <motion.img
          src={fleetImg}
          alt="Fleet Operations"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Optimize Your <span className="text-red-600">Fleet Operations</span>
          </h2>
          <p className="text-gray-300 mb-6">
            From small businesses to enterprise-level operations, Transtech World
            empowers you with fleet optimization tools that reduce downtime,
            minimize costs, and increase delivery reliability.
          </p>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl">
            Explore Solutions
          </button>
        </motion.div>
      </div>
    </section>
  );
}
