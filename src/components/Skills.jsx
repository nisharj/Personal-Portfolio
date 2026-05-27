const technicalSkills = [
  "Java (DSA)",
  "C Programming",
  "React.js",
  "Spring Boot",
  "HTML & CSS",
  "Tailwind CSS",
  "JavaScript",
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Git & GitHub",
  "Docker",
];

const softSkills = [
  "Strong problem-solving and logical thinking",
  "Continuous learning mindset",
  "Effective team collaboration",
  "Time management and task prioritization",
  "Clear and structured communication",
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#172554] px-6 pb-20 pt-28 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold uppercase tracking-[0.12em] text-slate-100 md:text-5xl">
            Skills
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-200/75 md:text-base">
            Core technologies and work habits I use to build reliable, user-focused software.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-blue-900/50 bg-slate-950/45 p-7 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/40 hover:shadow-[0_0_28px_rgba(56,189,248,0.16)] md:p-8">
            <h3 className="mb-6 text-2xl font-semibold text-slate-100">Technical Skills</h3>

            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-800/45 bg-black/25 px-4 py-2 text-sm font-medium text-slate-100/90 transition-all duration-300 hover:border-sky-400/60 hover:bg-sky-500/10 hover:text-white hover:shadow-[0_0_16px_rgba(56,189,248,0.24)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-blue-900/50 bg-slate-950/45 p-7 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/40 hover:shadow-[0_0_28px_rgba(56,189,248,0.16)] md:p-8">
            <h3 className="mb-6 text-2xl font-semibold text-slate-100">Soft Skills</h3>

            <ul className="space-y-3">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-start gap-3 rounded-xl border border-blue-950/50 bg-black/20 px-4 py-3 text-sm text-slate-100/85 md:text-base"
                >
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sky-300" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
