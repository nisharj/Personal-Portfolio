import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  tech,
  code,
  live,
}) {
  return (
    <div className="group relative rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur 
                    p-6 sm:p-8 transition-all duration-300 
                    hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-400/10
                    hover:-translate-y-2">

      
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-4 min-h-[60px]">
          {description}
        </p>

        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs text-gray-500 font-medium">TECH STACK:</span>
          <p className="text-sm text-gray-400">
            {tech}
          </p>
        </div>

        <div className="flex gap-4 text-sm font-medium">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-gray-700 text-gray-300
                       hover:border-teal-400 hover:text-teal-400 hover:shadow-md hover:shadow-teal-400/20
                       transition-all duration-300"
          >
            <FaGithub size={18} />
            <span>Code</span>
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-teal-500/20 to-blue-500/20
                       text-teal-400 border-2 border-teal-500/30
                       hover:from-teal-500/30 hover:to-blue-500/30 hover:border-teal-400/50 hover:shadow-md hover:shadow-teal-400/20
                       transition-all duration-300"
          >
            <FaExternalLinkAlt size={16} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
