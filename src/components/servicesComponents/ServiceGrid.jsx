import React from "react";
import { Truck, Package, BarChart3, Globe, ShieldCheck, Headphones } from "lucide-react";

export default function ServiceGrid() {
  const services = [
    { icon: <Truck className="w-10 h-10 text-red-500" />, title: "Fleet Transportation", desc: "Reliable and efficient fleet operations powered by Transtech World." },
    { icon: <Package className="w-10 h-10 text-red-500" />, title: "Warehousing", desc: "Smart warehouses with real-time inventory powered by our platform." },
    { icon: <BarChart3 className="w-10 h-10 text-red-500" />, title: "Logistics Analytics", desc: "Insights that improve performance and reduce costs." },
    { icon: <Globe className="w-10 h-10 text-red-500" />, title: "Global Reach", desc: "Seamless cross-border transportation with Transtech World expertise." },
    { icon: <ShieldCheck className="w-10 h-10 text-red-500" />, title: "Secure Delivery", desc: "Trusted, insured, and compliant transport operations." },
    { icon: <Headphones className="w-10 h-10 text-red-500" />, title: "24/7 Support", desc: "Round-the-clock customer support for global clients." },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black rounded-xl p-6 text-center hover:shadow-lg hover:shadow-red-600/40 transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
