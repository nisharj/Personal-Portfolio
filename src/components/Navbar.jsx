import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `relative font-semibold transition-colors duration-300
     ${isActive ? "text-teal-400" : "text-white hover:text-teal-400"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:bg-teal-400 after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <NavLink
          to="/"
          className="font-extrabold text-xl sm:text-2xl bg-clip-text text-transparent 
                     bg-gradient-to-r from-teal-400 to-blue-500"
          onClick={() => setIsOpen(false)}
        >
          PORTFOLIO
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg">
          <NavLink to="/" end className={navItemClass}>About</NavLink>
          <NavLink to="/skills" className={navItemClass}>Skills</NavLink>
          <NavLink to="/projects" className={navItemClass}>Projects</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur px-6 pb-6 
                        flex flex-col gap-4 text-lg font-semibold animate-fadeIn">
          
          <NavLink
            to="/"
            end
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-2 py-2 rounded-md transition
               ${isActive ? "text-teal-400 bg-gray-700/50" : "text-white hover:text-teal-400"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/skills"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-2 py-2 rounded-md transition
               ${isActive ? "text-teal-400 bg-gray-700/50" : "text-white hover:text-teal-400"}`
            }
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-2 py-2 rounded-md transition
               ${isActive ? "text-teal-400 bg-gray-700/50" : "text-white hover:text-teal-400"}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `px-2 py-2 rounded-md transition
               ${isActive ? "text-teal-400 bg-gray-700/50" : "text-white hover:text-teal-400"}`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
