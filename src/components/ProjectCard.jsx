import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  code,
  live,
}) {
  const techItems = tech.split(",").map((item) => item.trim());

  return (
    <article className="group relative rounded-2xl border border-blue-900/50 bg-slate-950/45 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 space-y-4">
        <div className="rounded-xl border border-blue-900/50 bg-gradient-to-br from-slate-950/80 to-black/40 p-3">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-700/80" />
          </div>
          <div className="h-32 overflow-hidden rounded-lg border border-blue-900/60 bg-gradient-to-br from-blue-900/25 to-slate-950/60">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-slate-50 transition-colors duration-300 group-hover:text-sky-200">
          {title}
        </h3>

        <p className="min-h-[72px] text-sm leading-relaxed text-slate-100/75">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techItems.map((item) => (
            <span
              key={item}
              className="rounded-full border border-sky-500/25 bg-blue-950/35 px-3 py-1 text-xs font-medium text-slate-100/85"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-1 text-sm font-medium">
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-500/35 bg-slate-950/60 px-4 py-2 text-slate-100/90 transition-all duration-300 hover:border-sky-300 hover:text-white hover:shadow-[0_0_18px_rgba(56,189,248,0.3)]"
          >
            <FaGithub size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/50 bg-gradient-to-r from-sky-600/80 to-blue-700/80 px-4 py-2 text-white transition-all duration-300 hover:from-sky-500 hover:to-blue-600 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
          >
            <FaExternalLinkAlt size={12} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </article>
  );
}
