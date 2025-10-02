import React from "react";
import { Truck, BarChart3, ShieldCheck, DollarSign, Leaf } from "lucide-react";
import video from "../../assets/home/video1.mp4";

export default function Home() {
  return (
    <div className="w-full text-white font-sans">
      <section className="relative w-full min-h-[80vh] flex flex-col justify-center px-6 md:px-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-3xl text-left">
          <h1 className="text-3xl md:text-6xl font-bold font-heading mb-4 leading-snug">
            Maximize Fleet Efficiency, Ensure Consistency
          </h1>
          <h2 className="text-xl md:text-2xl font-medium font-heading mb-6 leading-snug">
            with Transtech World Logistics Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-200 font-body leading-relaxed">
            Streamline the tracking and management of your transportation and 3PL
            operations. Optimize performance, reduce costs, and drive reliability
            across your supply chain.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-black/90 py-12 md:py-16">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center px-6">
          <div className="flex flex-col items-center">
            <BarChart3 className="h-10 w-10 mb-2 text-blue-400" />
            <h3 className="font-semibold text-lg md:text-xl font-heading mb-1">
              Improve
            </h3>
            <p className="text-sm md:text-base text-gray-300">Fleet Efficiency</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-10 w-10 mb-2 text-green-400" />
            <h3 className="font-semibold text-lg md:text-xl font-heading mb-1">
              Increase
            </h3>
            <p className="text-sm md:text-base text-gray-300">Business Productivity</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-10 w-10 mb-2 text-yellow-400" />
            <h3 className="font-semibold text-lg md:text-xl font-heading mb-1">
              Maximize
            </h3>
            <p className="text-sm md:text-base text-gray-300">Operational Effectiveness</p>
          </div>
          <div className="flex flex-col items-center">
            <DollarSign className="h-10 w-10 mb-2 text-red-400" />
            <h3 className="font-semibold text-lg md:text-xl font-heading mb-1">
              Reduce
            </h3>
            <p className="text-sm md:text-base text-gray-300">Operational Costs</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="h-10 w-10 mb-2 text-teal-400" />
            <h3 className="font-semibold text-lg md:text-xl font-heading mb-1">
              Enhance
            </h3>
            <p className="text-sm md:text-base text-gray-300">Sustainability</p>
          </div>
        </div>
      </section>
    </div>
  );
}
