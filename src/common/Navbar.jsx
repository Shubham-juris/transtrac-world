import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/navbar/logo1.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const topBarRef = useRef(null);
  const [topBarHeight, setTopBarHeight] = useState(0);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about-us" },
    { name: "Services", to: "/services" },
    { name: "Fleet", to: "/fleet" },
  ];

  // Calculate top bar height dynamically
  useEffect(() => {
    if (topBarRef.current) {
      setTopBarHeight(topBarRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (topBarRef.current) setTopBarHeight(topBarRef.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
     <div
  ref={topBarRef}
  className="fixed top-0 w-full bg-yellow-400 text-black z-50"
>
  <div className="flex justify-between items-center px-4 md:px-6 py-1 text-sm">
    {/* Left: Site Name */}
    <div className="font-semibold">Transtech World</div>

    {/* Center: Scrolling Welcome */}
    <div className="flex-1 mx-4 overflow-hidden relative h-5">
      <div className="absolute whitespace-nowrap animate-scroll">
        Welcome to Transtech World – Advanced 3PL Logistics & Transportation Solutions
      </div>
    </div>

    {/* Right: Email */}
    <div>Email: infotranstechworld@gmail.com</div>
  </div>

  <style>
    {`
      @keyframes scroll {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }
      .animate-scroll {
        display: inline-block;
        animation: scroll 15s linear infinite;
      }
    `}
  </style>
</div>


      {/* Navbar */}
      <div
        className="fixed w-full z-40"
        style={{ top: `${topBarHeight}px` }}
      >
        <nav className="relative w-full bg-white shadow-md">
          <div className="relative container mx-auto flex items-center justify-between px-4 md:px-6 py-3 z-10">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Transtech World"
                className="h-14 w-auto object-contain"
              />
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
              <NavLink to="/contact">
                <button className="ml-4 px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                  Contact
                </button>
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-black" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden bg-white px-6 py-4 space-y-4 text-center shadow-lg">
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
              <NavLink to="/contact">
                <button className="w-full border border-black rounded-full px-4 py-2 hover:bg-black hover:text-white transition">
                  Contact
                </button>
              </NavLink>
            </div>
          )}
        </nav>
      </div>

      {/* Spacer to push content below top bar + navbar */}
      <div style={{ height: `${topBarHeight + 80}px` }}></div>
      {/* 80px approx navbar height */}
    </>
  );
}
