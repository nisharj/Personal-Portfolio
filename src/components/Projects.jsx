import { ArrowRight, FolderOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import aiNotesImage from "../assets/ai-notes.png";
import portfolioImage from "../assets/portfolio.png";
import weatherAppImage from "../assets/weather-app.png";
import { SOCIAL_LINKS } from "./SocialLinks";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: aiNotesImage,
    title: "AI Notes Application",
    description:
      "AI-powered notes generation with authentication, cloud storage, and a clean responsive interface.",
    tech: ["React", "MongoDB", "Python", "Tailwind CSS"],
    code: "https://github.com/nisharj/AI-Notes",
    live: "https://ai-notes-phi-three.vercel.app/",
  },
  {
    image: portfolioImage,
    title: "Personal Portfolio",
    description:
      "Modern multi-section portfolio built with reusable React components and a polished presentation.",
    tech: ["React", "Tailwind CSS", "Responsive UI"],
    code: "https://github.com/nisharj/Personal-Portfolio",
    live: "https://nisharj.github.io/Personal-Portfolio/",
  },
  {
    image: weatherAppImage,
    title: "Weather Report Application",
    description:
      "Real-time weather and air-quality dashboard using API integration and easy-to-read visual output.",
    tech: ["React", "API Integration", "Tailwind CSS"],
    code: "https://github.com/nisharj/Weather-and-Air-Pollution-Report",
    live: "https://nisharj.github.io/Weather-and-Air-Pollution-Report/",
  },
];

export default function Projects() {
  return (
    <section
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 pb-20 pt-8 text-slate-900 sm:px-6 sm:pb-24 lg:px-10"
    >
      <div className="float-slow absolute left-4 top-8 h-24 w-24 rounded-full bg-blue-100/60 blur-3xl sm:left-12 sm:top-10 sm:h-28 sm:w-28" />
      <div className="float absolute right-4 top-12 h-28 w-28 rounded-full bg-indigo-100/50 blur-3xl sm:right-12 sm:top-20 sm:h-36 sm:w-36" />

      <div className="relative container mx-auto max-w-7xl border-t border-slate-200 px-0 pt-14 lg:px-12">
        <div id="projects" className="fade-up flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <FolderOpen size={12} />
            <span>Featured Projects</span>
          </div>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 sm:text-base"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              delayClass={
                index === 1 ? "delay-1" : index === 2 ? "delay-2" : ""
              }
              {...project}
            />
          ))}

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up delay-3 group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
          >
            <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#2563eb] via-[#4f46e5] to-[#0f172a] text-white">
              <FaGithub
                className="h-16 w-16 opacity-95 transition duration-300 group-hover:scale-105 sm:h-20 sm:w-20"
              />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                More Projects on GitHub
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:min-h-[96px] sm:text-base sm:leading-7">
                Explore additional repositories, experiments, and source code
                beyond the featured work shown here.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Repositories", "Open Source", "Experiments"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center pt-6 text-sm font-semibold text-blue-600 sm:text-base">
                <span className="inline-flex items-center gap-2 transition group-hover:text-blue-700">
                  <span>Visit GitHub</span>
                  <ArrowRight size={18} />
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
