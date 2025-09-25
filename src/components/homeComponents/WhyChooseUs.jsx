import React from "react";
import { motion } from "framer-motion";
import { Headphones, Satellite, Clock, Globe2 } from "lucide-react";
import img from "../../assets/home/truck.jpg"

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Satellite className="h-12 w-12 mb-4 text-white" />,
      title: "Compatible",
      desc: "Works with 1000+ GPS trackers worldwide, allowing seamless data management across devices.",
    },
    {
      icon: <Globe2 className="h-12 w-12 mb-4 text-white" />,
      title: "Global Coverage",
      desc: "Utilizing a global SIM card, ensures consistent connectivity for your fleet everywhere.",
    },
    {
      icon: <Clock className="h-12 w-12 mb-4 text-white" />,
      title: "Easy Integration",
      desc: "Easily integrate with existing systems via open API for smooth data exchange.",
    },
    {
      icon: <Headphones className="h-12 w-12 mb-4 text-white" />,
      title: "24/7 Support",
      desc: "Dedicated support team always ready to help with quick solutions and assistance.",
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-black text-white">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-center">
        {/* Left Side - Image Style Layout */}
        <motion.div
          className="relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={img}
            alt="TransTRAC demo"
            className="rounded-xl mb-6 shadow-lg"
          />
          <p className="text-center text-gray-400 text-sm max-w-sm">
            Visual insights and connected solutions that keep your fleet operations seamless and efficient.
          </p>
        </motion.div>

        {/* Right Side - Points */}
        <div>
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Choose <span className="text-gray-400">TransTech?</span>
          </motion.h2>

          <motion.p
            className="max-w-xl text-gray-400 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering reliable, customizable, and globally connected fleet management solutions.
          </motion.p>

          <div className="space-y-6">
            {points.map((p, i) => (
              <motion.div
                key={i}
                className="flex items-start space-x-4 bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div>{p.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-gray-400 text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
