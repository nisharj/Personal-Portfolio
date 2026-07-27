import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "../assets/ImageDatas";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="flex min-w-0 items-center gap-3 text-left"
        >
          <img src={Logo} alt="Logo" className="h-8 w-10 sm:h-9 sm:w-11" />
          <span className="truncate text-sm font-semibold text-slate-100 sm:text-lg">
            Mohamednishar J
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="group relative rounded-full px-4 py-2 text-sm font-semibold text-slate-100/85 transition hover:text-white"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-7" />
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 md:hidden"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-slate-950/95 transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="rounded-xl px-4 py-3 text-left text-sm font-semibold text-slate-100/90 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
