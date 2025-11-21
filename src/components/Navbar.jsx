import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl w-full mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="font-extrabold text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          MY PORTFOLIO
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-bold text-lg">
          <Link to="/" className="hover:text-teal-400 transition">About</Link>
          <Link to="/skills" className="hover:text-teal-400 transition">Skills</Link>
          <Link to="/projects" className="hover:text-teal-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-teal-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-6 flex flex-col text-lg font-semibold gap-4 animate-fadeIn">
          <Link to="/" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/skills" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>
            Skills
          </Link>
          <Link to="/projects" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/contact" className="hover:text-teal-400 transition" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
