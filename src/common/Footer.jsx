import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/navbar/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand / Logo */}
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="Transtech World" className="w-36" />
          <p className="text-gray-400 leading-relaxed">
            Transtech World delivers cutting-edge{" "}
            <strong>3PL logistics</strong> and{" "}
            <strong>transportation solutions</strong> designed to boost
            efficiency, reliability, and sustainability across global
            supply chains.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/about-us" className="hover:text-red-500 transition">About Us</Link>
          <Link to="/services" className="hover:text-red-500 transition">Services</Link>
          <Link to="/fleet" className="hover:text-red-500 transition">Fleet</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>

        {/* Contact Info + Social */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">
            📍 St John, Newfoundland, Canada
          </p>
          <p className="text-gray-400">
            📧{" "}
            <a
              href="mailto:infotranstechworld@gmail.com"
              className="hover:text-red-500"
            >
              infotranstechworld@gmail.com
            </a>
          </p>
          {/* <p className="text-gray-400">📞 +1-XXX-XXX-XXXX</p> */}

          {/* Social Icons */}
          <div className="flex space-x-5 mt-3">
            <a
              href="https://www.facebook.com/profile.php?id=100094004298093"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-500 transition" />
            </a>
            <a
              href="https://www.instagram.com/transtech.world"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-red-500 hover:text-red-600 transition" />
            </a>
           
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Transtech World. All rights reserved. | 
       
      </div>
    </footer>
  );
}
