import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="nav-glow fixed left-1/2 top-5 z-50 -translate-x-1/2 rounded-full border border-blue-900/60 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="hidden gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-full border border-transparent px-4 py-2 text-sm font-semibold text-slate-100/90 transition-all duration-300 hover:bg-sky-500/10 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="text-2xl text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="animate-fadeIn flex flex-col gap-4 bg-slate-950/95 px-6 pb-6 text-lg font-semibold md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-md px-2 py-2 text-left text-white transition hover:text-sky-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
