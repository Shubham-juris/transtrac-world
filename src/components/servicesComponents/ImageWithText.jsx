import React from "react";
import { motion } from "framer-motion";
import serviceImg from "../../assets/services/img.jpg"; 

export default function ImageWithText() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <motion.img
          src={serviceImg}
          alt="Transtech World Services"
          className="rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Transtech World’s <span className="text-red-600">Next-Gen Logistics</span>
          </h2>
          <p className="text-gray-300 mb-6">
            We bring innovation and technology into logistics. From warehouse
            automation to AI-powered fleet management, Transtech World ensures
            your business never slows down.
          </p>
         
        </motion.div>
      </div>
    </section>
  );
}
