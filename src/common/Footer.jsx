import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/navbar/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand / Logo */}
        <div className="flex flex-col space-y-4">
          <img src={logo} alt="Transtech World" className="w-32" />
          <p className="text-gray-400">
            Enhancing global logistics and transportation solutions with precision and trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-red-500 transition">Home</Link>
          <Link to="/about-us" className="hover:text-red-500 transition">About Us</Link>
          <Link to="/services" className="hover:text-red-500 transition">Services</Link>
          <Link to="/tracking" className="hover:text-red-500 transition">Tracking</Link>
          <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
        </div>

        {/* Contact Info + Social */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p>Location: St John, Newfoundland</p>
          <p>Email: 
            <a href="mailto:infotranstracworld@gmail.com" className="hover:text-red-500 ml-1">
              infotranstracworld@gmail.com
            </a>
          </p>
          <p>Phone: +1-XXX-XXX-XXXX</p> {/* Replace with actual number */}

          <div className="flex space-x-4 mt-2">
            <a href="https://www.facebook.com/yourtrackinglink" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-red-500 transition" />
            </a>
            <a href="https://www.instagram.com/yourtrackinglink" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-red-500 transition" />
            </a>
            <a href="https://www.linkedin.com/yourtrackinglink" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-red-500 transition" />
            </a>
            <a href="https://twitter.com/yourtrackinglink" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Transtech World. All rights reserved.
      </div>
    </footer>
  );
}
