import { FaCode, FaNodeJs, FaReact } from "react-icons/fa";
import { Code2, Database, Settings } from "lucide-react";

const skills = [
  {
    title: "Languages",
    color: "text-indigo-600",
    icon: Code2,
    items: ["Java", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Frontend",
    color: "text-blue-600",
    icon: FaReact,
    items: ["React", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "text-green-600",
    icon: FaNodeJs,
    items: ["Node.js", "Express.js", "SpringBoot", "FastAPI"],
  },
  {
    title: "Database",
    color: "text-orange-500",
    icon: Database,
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    color: "text-violet-500",
    icon: Settings,
    items: ["Git", "GitHub", "Docker"],
  },
];

export default function Skills() {
  return (
    <section
      
      className="relative scroll-mt-24 overflow-hidden bg-white px-4 pb-20 pt-8 text-slate-900 sm:px-6 sm:pb-24 lg:px-10"
    >
      <div className="float-slow absolute left-4 top-8 h-24 w-24 rounded-full bg-blue-100/60 blur-3xl sm:left-10 sm:top-10 sm:h-28 sm:w-28" />
      <div className="float absolute right-4 top-10 h-24 w-24 rounded-full bg-violet-100/50 blur-3xl sm:right-10 sm:top-12 sm:h-32 sm:w-32" />

      <div className="relative container mx-auto max-w-7xl border-t border-slate-200 px-0 pt-14 lg:px-12">
        <div id="skills" className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
          <FaCode size={16} />
          <span>Skills</span>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className={`fade-up rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] ${
                  index === 1
                    ? "delay-1"
                    : index === 2
                      ? "delay-2"
                      : index >= 3
                        ? "delay-3"
                        : ""
                } sm:p-6`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-lg font-semibold sm:text-xl ${skill.color}`}>
                      {skill.title}
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm text-slate-800 sm:text-base">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 sm:h-14 sm:w-14">
                    <Icon size={26} className={skill.color} />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
