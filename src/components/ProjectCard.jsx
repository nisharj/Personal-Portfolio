import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  code,
  live,
  delayClass = "",
}) {

  const techItems = Array.isArray(tech) ? tech : tech.split(",").map((item) => item.trim());

  return (
    <article
      className={`fade-up group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] ${delayClass}`}
    >
      <div className="aspect-[16/10] overflow-hidden bg-slate-100 sm:aspect-[16/9]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600 sm:min-h-[96px] sm:text-base sm:leading-7">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {techItems.map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6 text-sm font-semibold sm:text-base">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-700"
          >
            <span>Live Demo</span>
            <ArrowUpRight size={17} />
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-900 transition hover:text-blue-700"
          >
            <FaGithub size={17} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  );
}
