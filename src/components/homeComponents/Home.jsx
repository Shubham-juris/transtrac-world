import React from "react";
import { Truck, BarChart3, ShieldCheck, DollarSign, Leaf } from "lucide-react";
import video from "../../assets/home/video1.mp4";

export default function Home() {
  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-snug">
            Maximize Fleet Efficiency, Ensure Consistency, <br />
            with Transtech World’s Logistics Expertise
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Streamline the tracking and management of your transportation and 3PL
            operations. Optimize performance, reduce costs, and drive reliability
            across your supply chain.
          </p>
          <div className="space-x-4 flex justify-center">
            <button className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold">
              Try Demo
            </button>
            <button className="px-6 py-3 rounded-xl border border-white bg-transparent hover:bg-white hover:text-black transition font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-black/90 py-12 md:py-16">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-center px-6">
          <div className="flex flex-col items-center">
            <BarChart3 className="h-10 w-10 mb-2 text-blue-400" />
            <h3 className="font-semibold">Improve</h3>
            <p className="text-sm text-gray-300">Fleet Efficiency</p>
          </div>
          <div className="flex flex-col items-center">
            <Truck className="h-10 w-10 mb-2 text-green-400" />
            <h3 className="font-semibold">Increase</h3>
            <p className="text-sm text-gray-300">Business Productivity</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="h-10 w-10 mb-2 text-yellow-400" />
            <h3 className="font-semibold">Maximize</h3>
            <p className="text-sm text-gray-300">Operational Effectiveness</p>
          </div>
          <div className="flex flex-col items-center">
            <DollarSign className="h-10 w-10 mb-2 text-red-400" />
            <h3 className="font-semibold">Reduce</h3>
            <p className="text-sm text-gray-300">Operational Costs</p>
          </div>
          <div className="flex flex-col items-center">
            <Leaf className="h-10 w-10 mb-2 text-teal-400" />
            <h3 className="font-semibold">Enhance</h3>
            <p className="text-sm text-gray-300">Sustainability</p>
          </div>
        </div>
      </section>
    </div>
  );
}
