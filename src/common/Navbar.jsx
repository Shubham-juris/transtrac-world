import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/navbar/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Services", to: "/services" },
    { name: "Fleet", to: "/fleet" },
    { name: "Solution", to: "/solution" },
    { name: "Industry", to: "/industry" },
    { name: "Experience", to: "/experience" },
    { name: "Resources", to: "/resources" },
  ];

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <nav className="w-full bg-black/90 text-white shadow-md">
          <div className="container mx-auto flex items-center justify-between px-6 py-3">

            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Transtrac World" className="h-14 w-auto object-contain" />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 font-semibold">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "text-red-500 transition" : "hover:text-red-500 transition"
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Contact Button */}
              <NavLink to="/contact">
                <button className="ml-4 px-5 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                  Contact
                </button>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-black/95 px-6 py-4 space-y-4 text-center">
              {navLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  onClick={() => setOpen(false)}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive ? "block text-red-500" : "block hover:text-red-500"
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Contact Button */}
              <NavLink to="/contact">
                <button className="w-full border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
                  Contact
                </button>
              </NavLink>

              {/* Demo / Login Buttons */}
              <button className="w-full border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
                Try Demo
              </button>
              <button className="w-full border border-white rounded-full px-4 py-2 hover:bg-white hover:text-black transition">
                Login
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Spacer so content starts below navbar */}
      <div className="h-[80px]"></div>
    </>
  );
}
