import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/home/img.jpg";

export default function AboutUsSection() {
  return (
    <section className="w-full bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-red-600">Transtech World</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Transtech World is a trusted partner in <strong>3PL logistics</strong> 
            and <strong>transportation solutions</strong>, dedicated to 
            streamlining supply chain operations across industries. With a 
            strong focus on innovation and technology, we empower businesses 
            to maximize fleet efficiency, reduce costs, and improve service 
            consistency globally.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Our vision is to create a seamlessly connected logistics ecosystem 
            where transparency, reliability, and sustainability drive every 
            operation. From advanced tracking systems to end-to-end fleet 
            management, Transtech World provides tailored solutions that ensure 
            operational excellence and long-term growth.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-black/50 p-6 rounded-xl shadow hover:shadow-red-600/30 transition">
              <h3 className="text-2xl font-bold text-red-500">100+</h3>
              <p className="text-gray-400 text-sm">Clients Served</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl shadow hover:shadow-red-600/30 transition">
              <h3 className="text-2xl font-bold text-red-500">99%</h3>
              <p className="text-gray-400 text-sm">On-Time Delivery</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={aboutImg}
            alt="About Transtech World"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-red-600 px-6 py-4 rounded-xl shadow-xl">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-sm">Years of Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
