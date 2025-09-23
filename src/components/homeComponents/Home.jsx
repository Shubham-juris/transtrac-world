import React from "react"
import video from "../../assets/home/video1.mp4"

export default function Home() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
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

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transtrac World
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Driving the Future of Logistics with Innovation & Reliability
        </p>
        <div className="space-x-4">
          <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            Get Quote
          </button>
          <button className="px-6 py-3 rounded-xl border border-white bg-transparent hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
