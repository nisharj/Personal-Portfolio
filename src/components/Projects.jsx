import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="min-h-screen bg-gray-950 text-white pt-28 px-6">

      <div className="max-w-7xl mx-auto space-y-20">

        {/* ================= MAIN PROJECTS ================= */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Full-scale applications demonstrating real-world problem solving,
            architecture, and integration of modern technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="AI Powered Notes"
              description="Developed a productivity-focused notes application with AI-assisted organization. Built a responsive frontend using React and Tailwind CSS, with backend integration using MongoDB and Python. Focused on clean UI, structured data handling, and scalable design."
              tech="React, Tailwind CSS, MongoDB, Python"
              code="https://github.com/nisharj/AI-Project"
              live="https://ai-notes-phi-three.vercel.app/"
            />
          </div>
        </div>

        {/* ================= MINI PROJECTS ================= */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Mini Projects</h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Focused applications built to strengthen specific skills and explore
            new ideas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard
              title="Personal Portfolio"
              description="Designed and developed a responsive personal portfolio using React and Tailwind CSS. Implemented multi-page routing, reusable components, and clean UI patterns to showcase projects and skills."
              tech="React, Tailwind CSS"
              code="https://github.com/nisharj/Personal-Portfolio"
              live="https://nisharj.github.io/Personal-Portfolio/"
            />

            <ProjectCard
              title="Weather Report Application"
              description="Built a real-time weather and air quality dashboard using OpenWeatherMap API. Implemented API integration, state management, and error handling in React, with a fully responsive UI using Tailwind CSS."
              tech="React, Tailwind CSS, OpenWeatherMap API"
              code="https://github.com/nisharj/Weather-and-Air-Pollution-Report"
              live="https://nisharj.github.io/Weather-and-Air-Pollution-Report/"
            />


          </div>
        </div>

      </div>
    </section>
  );
}
