import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logo from "../assets/navbar/logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black backdrop-blur-md text-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-2">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Transtrac World" className="h-15 w-20" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          <Link to="/services" className="hover:text-blue-400 transition">Services</Link>
          <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-center">
          <Link onClick={() => setOpen(false)} to="/" className="block hover:text-blue-400">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block hover:text-blue-400">About</Link>
          <Link onClick={() => setOpen(false)} to="/services" className="block hover:text-blue-400">Services</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  )
}
