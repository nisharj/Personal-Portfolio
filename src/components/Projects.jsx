import ProjectCard from "./ProjectCard";
import aiNotesImage from "../assets/ai-notes.png";
import portfolioImage from "../assets/portfolio.png";
import weatherAppImage from "../assets/weather-app.png";

export default function Projects() {
  const projects = [
    {
      image: aiNotesImage,
      title: "AI Powered Notes",
      description:
        "Productivity-focused notes app with AI-assisted organization and clean responsive UI.",
      tech: "React, Tailwind CSS, MongoDB, Python",
      code: "https://github.com/nisharj/AI-Notes",
      live: "https://ai-notes-phi-three.vercel.app/",
    },
    {
      image: portfolioImage,
      title: "Personal Portfolio",
      description:
        "Multi-page portfolio using reusable components and clean, modern presentation.",
      tech: "React, Tailwind CSS",
      code: "https://github.com/nisharj/Personal-Portfolio",
      live: "https://nisharj.github.io/Personal-Portfolio/",
    },
    {
      image: weatherAppImage,
      title: "Weather Report Application",
      description:
        "Responsive weather and air-quality dashboard using API integration and state management.",
      tech: "React, Tailwind CSS, OpenWeatherMap API",
      code: "https://github.com/nisharj/Weather-and-Air-Pollution-Report",
      live: "https://nisharj.github.io/Weather-and-Air-Pollution-Report/",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#172554] px-6 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-[0.12em] text-slate-100 md:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200/75 md:text-base">
            A showcase of my recent projects demonstrating expertise in full-stack development,
            modern frameworks, and creative problem-solving.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
