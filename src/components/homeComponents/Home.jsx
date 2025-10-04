import React from "react";
import { Truck, BarChart3, ShieldCheck, DollarSign, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import video from "../../assets/home/video1.mp4";

export default function Home() {
  return (
    <div className="w-full text-white font-sans">
      <section className="w-full bg-black/90 py-10 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 leading-snug">
              Maximize Fleet Efficiency, Ensure Consistency
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 leading-snug text-blue-400">
              with Transtech World Logistics Expertise
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              Streamline the tracking and management of your transportation and
              3PL operations. Optimize performance, reduce costs, and drive
              reliability across your supply chain.
            </p>
            <Link
              to="/about-us" 
              className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>

          {/* RIGHT SIDE – VIDEO BOX */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={video} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-gray-950 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center px-6">
          {[
            {
              icon: <BarChart3 className="h-10 w-10 mb-2 text-blue-400" />,
              title: "Improve",
              desc: "Fleet Efficiency",
            },
            {
              icon: <Truck className="h-10 w-10 mb-2 text-green-400" />,
              title: "Increase",
              desc: "Business Productivity",
            },
            {
              icon: <ShieldCheck className="h-10 w-10 mb-2 text-yellow-400" />,
              title: "Maximize",
              desc: "Operational Effectiveness",
            },
            {
              icon: <DollarSign className="h-10 w-10 mb-2 text-red-400" />,
              title: "Reduce",
              desc: "Operational Costs",
            },
            {
              icon: <Leaf className="h-10 w-10 mb-2 text-teal-400" />,
              title: "Enhance",
              desc: "Sustainability",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              {item.icon}
              <h3 className="font-semibold text-lg md:text-xl mb-1">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
