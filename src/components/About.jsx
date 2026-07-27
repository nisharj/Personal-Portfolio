import { BarChart3 } from "lucide-react";
import { FaGithub, FaUser } from "react-icons/fa";
import { SiGeeksforgeeks, SiHackerrank, SiLeetcode } from "react-icons/si";
import { SOCIAL_LINKS } from "./SocialLinks";

const codingProfiles = [
  {
    title: "LeetCode",
    href: SOCIAL_LINKS.leetcode,
    icon: SiLeetcode,
    iconClassName: "text-amber-500",
    note: "DSA Practice",
  },
  {
    title: "HackerRank",
    href: SOCIAL_LINKS.hackerrank,
    icon: SiHackerrank,
    iconClassName: "text-emerald-600",
    note: "Coding Challenges",
  },
  {
    title: "GeeksforGeeks",
    href: SOCIAL_LINKS.geeksforgeeks,
    icon: SiGeeksforgeeks,
    iconClassName: "text-green-700",
    note: "Problem Solving",
  },
  {
    title: "GitHub",
    href: SOCIAL_LINKS.github,
    icon: FaGithub,
    iconClassName: "text-slate-900",
    note: "Projects & Repos",
  },
];

export default function About() {
  return (
    <section
    className="relative z-10 -mt-10 scroll-mt-24 overflow-hidden rounded-t-[2.5rem] bg-white px-4 py-20 text-slate-900 sm:px-6 sm:py-24 lg:px-10"
    >
      <div id="about" className="float-slow absolute left-4 top-10 h-24 w-24 rounded-full bg-blue-100/70 blur-3xl sm:left-8 sm:top-14 sm:h-28 sm:w-28" />
      <div className="float absolute bottom-10 right-6 h-28 w-28 rounded-full bg-sky-100/70 blur-3xl sm:bottom-12 sm:right-10 sm:h-40 sm:w-40" />

      <div className="relative container mx-auto max-w-7xl px-0 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <FaUser size={12} />
              <span>About Me</span>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I am an M.Tech Computer Science student with strong
              problem-solving skills and hands-on experience in Java, React,
              Node.js, and AI-based applications. I enjoy creating practical
              software that feels clean, useful, and easy to use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Java", "React", "Node.js", "AI Projects"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-up delay-1 rounded-[2rem] border border-slate-200 bg-slate-50/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              What I Focus On
            </p>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Clean frontend experiences
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Building responsive interfaces that feel smooth, clear, and
                  user-friendly.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  Strong backend logic
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Creating reliable application flows with scalable APIs and
                  structured code.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 fade-up delay-2">
          <div className="inline-flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 sm:h-10 sm:w-10">
              <BarChart3 size={18} />
            </span>
            <p className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
              Coding Profiles
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {codingProfiles.map((profile, index) => {
              const Icon = profile.icon;
              const delayClass =
                index === 1
                  ? "delay-1"
                  : index === 2
                    ? "delay-2"
                    : index === 3
                      ? "delay-3"
                      : "";

              return (
                <a
                  key={profile.title}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`fade-up rounded-[1.75rem] border border-slate-200 bg-white p-5 text-center shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_60px_rgba(15,23,42,0.12)] sm:p-6 ${delayClass}`}
                >
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                    <Icon size={30} className={profile.iconClassName} />
                  </span>

                  <h4 className="mt-4 text-lg font-semibold text-slate-900 sm:text-xl">
                    {profile.title}
                  </h4>

                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {profile.note}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
