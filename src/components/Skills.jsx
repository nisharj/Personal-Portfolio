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
    items: ["Git", "GitHub", "Postman", "Docker"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white px-6 pb-24 pt-8 text-slate-900 sm:px-10"
    >
      <div className="float-slow absolute left-10 top-10 h-28 w-28 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="float absolute right-10 top-12 h-32 w-32 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="relative container mx-auto border-t border-slate-200 px-0 pt-14 lg:px-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            <FaCode size={16} />
            <span>Skills</span>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
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
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className={`text-xl font-semibold ${skill.color}`}>
                      {skill.title}
                    </h3>

                    <ul className="mt-5 space-y-3 text-base text-slate-800">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <span className="mt-1 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50">
                    <Icon size={30} className={skill.color} />
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
