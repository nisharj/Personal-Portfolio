import { useState } from "react";
import { ArrowUpRight, Folder, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import aiNotesImage from "../../../assets/ai-notes.png";
import portfolioImage from "../../../assets/portfolio.png";
import weatherAppImage from "../../../assets/weather-app.png";

const projects = [
  {
    id: "ai-notes",
    title: "AI Notes Application",
    tagline: "Smart notes with AI generation",
    description: "A comprehensive notes application that uses artificial intelligence to generate, summarize, and organize content. Features robust user authentication, cloud syncing via MongoDB, and a highly responsive React frontend.",
    tech: ["React", "MongoDB", "Python", "Tailwind CSS"],
    features: [
      "AI-powered note generation & summarization",
      "Secure user authentication (JWT)",
      "Real-time cloud database syncing",
      "Responsive glassmorphism UI"
    ],
    image: aiNotesImage,
    code: "https://github.com/nisharj/AI-Notes",
    live: "https://ai-notes-phi-three.vercel.app/"
  },
  {
    id: "portfolio",
    title: "OS Portfolio",
    tagline: "Desktop operating system styled portfolio",
    description: "An innovative personal portfolio designed to mimic a modern desktop operating system. Built with React, Framer Motion for window management, and Three.js for interactive 3D backgrounds.",
    tech: ["React", "Framer Motion", "Three.js", "Tailwind"],
    features: [
      "Interactive window management (drag, minimize)",
      "Custom boot sequence animation",
      "Command palette (Ctrl+K) integration",
      "3D particle background with React Three Fiber"
    ],
    image: portfolioImage,
    code: "https://github.com/nisharj/Personal-Portfolio",
    live: "https://nisharj.github.io/Personal-Portfolio/"
  },
  {
    id: "weather",
    title: "Weather Dashboard",
    tagline: "Real-time atmospheric monitoring",
    description: "A detailed real-time weather and air-quality dashboard utilizing public API integration. Displays 7-day forecasts, current air pollution metrics, and dynamic background changes based on the weather.",
    tech: ["React", "REST API", "Tailwind CSS"],
    features: [
      "Real-time weather data & forecasts",
      "Air Quality Index (AQI) monitoring",
      "Location-based automatic weather detection",
      "Data visualization for temperature trends"
    ],
    image: weatherAppImage,
    code: "https://github.com/nisharj/Weather-and-Air-Pollution-Report",
    live: "https://nisharj.github.io/Weather-and-Air-Pollution-Report/"
  }
];

export default function ProjectsApp() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const activeProject = projects.find(p => p.id === activeId);

  return (
    <div className="flex h-full text-white bg-zinc-950/30">
      {/* Sidebar List */}
      <div className="w-1/3 min-w-[250px] border-r border-white/10 p-4 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
        <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2 px-2">Repositories</h2>
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all text-left ${
              activeId === p.id ? "bg-blue-500/20 text-white" : "hover:bg-white/5 text-zinc-400"
            }`}
          >
            <Folder size={18} className={activeId === p.id ? "text-blue-400" : "text-zinc-500"} />
            <div className="flex-1 truncate">
              <p className="font-medium text-sm">{p.title}</p>
              <p className="text-xs opacity-70 truncate">{p.tagline}</p>
            </div>
            {activeId === p.id && <ChevronRight size={16} className="text-blue-400" />}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar relative">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="font-display text-4xl font-bold mb-2">{activeProject.title}</h1>
              <p className="text-xl text-blue-400 font-medium">{activeProject.tagline}</p>
            </div>
            <div className="flex gap-3">
              <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-zinc-200 transition">
                Live App <ArrowUpRight size={16} />
              </a>
              <a href={activeProject.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white/20 transition">
                <FaGithub size={16} /> Code
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-8 bg-zinc-900">
            <img src={activeProject.image} alt={activeProject.title} className="w-full h-full object-cover" />
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h3 className="text-lg font-bold mb-3 border-b border-white/10 pb-2">Overview</h3>
                <p className="text-zinc-300 leading-relaxed text-sm md:text-base">
                  {activeProject.description}
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold mb-3 border-b border-white/10 pb-2">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-zinc-300 text-sm md:text-base marker:text-blue-500">
                  {activeProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-bold mb-3 border-b border-white/10 pb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
