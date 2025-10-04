import React from "react";
import { motion } from "framer-motion";
import { Truck, Globe, BarChart } from "lucide-react";

export default function WhoWeAre() {
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
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE – WHAT WE DO */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-10 text-center md:text-left"
          >
            What We Do
          </motion.h3>

          <div className="grid sm:grid-cols-1 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex items-start bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition"
              >
                <div className="mr-4">{s.icon}</div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – WHO WE ARE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6 text-center md:text-left"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Transtech World is a{" "}
            <span className="font-semibold text-white">
              next-generation logistics & transportation partner
            </span>
            , specializing in{" "}
            <span className="font-semibold text-white">
              3PL and real-time tracking solutions.
            </span>{" "}
            With years of experience, we bring together{" "}
            <span className="font-semibold text-white">
              technology, data, and logistics expertise
            </span>{" "}
            to streamline supply chains and deliver unmatched efficiency.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
