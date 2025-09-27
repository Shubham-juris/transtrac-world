import React from "react";
import { Truck, BarChart3, ShieldCheck, Clock, Globe } from "lucide-react";

export default function FleetFeatures() {
  const features = [
    { icon: <Truck className="w-10 h-10 text-red-500" />, title: "Real-Time Tracking", desc: "Monitor every vehicle’s location and performance in real time." },
    { icon: <BarChart3 className="w-10 h-10 text-red-500" />, title: "Performance Analytics", desc: "Detailed fleet reports and insights for better decision-making." },
    { icon: <ShieldCheck className="w-10 h-10 text-red-500" />, title: "Safety First", desc: "Ensure compliance and driver safety with advanced monitoring." },
    { icon: <Clock className="w-10 h-10 text-red-500" />, title: "On-Time Delivery", desc: "AI-powered route planning for maximum punctuality." },
    { icon: <Globe className="w-10 h-10 text-red-500" />, title: "Global Fleet Coverage", desc: "Seamless fleet operations across international borders." },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-black rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-600/40 transition"
          >
            <div className="mb-4 flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
