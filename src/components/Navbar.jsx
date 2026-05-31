const navItems = [
  { label: "Home", id: "home"},
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

import { Logo } from "../assets/ImageDatas";

export default function Navbar() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex fixed bg-slate-950 justify-between items-center w-full z-50 px-4 sm:px-6">
      
      <div className="flex items-center gap-2 px-4 text-xl font-bold text-slate-100/90">
        <img src={Logo} alt="Logo" className="h-8 w-10"/>
        <h1>Mohamednishar J</h1>
      </div>

      <div className="flex max-w-7xl items-center gap-4 px-4 py-3">
        <div className="gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              // className="relative px-4 py-2 text-sm font-semibold text-slate-100/90 transition-all duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              className="group relative px-4 py-2 text-sm font-semibold text-slate-100/90 transition-all duration-300 hover:text-white"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
