import { ArrowRight, Download, Mail } from "lucide-react";
import { profileImg, resumePDF } from "../assets/ImageDatas";
import About from "./About";
import Contact from "./Contact";
import FloatingIcons from "./FloatingIcons";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Mohamednishar_J.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative min-h-screen scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#172554] px-4 pt-24 text-white sm:px-6 lg:px-10"
      >
        <FloatingIcons />

        <div className="container mx-auto max-w-7xl px-0 lg:px-12">
          <div className="flex min-h-[calc(100vh-6rem)] flex-col-reverse items-center justify-between gap-12 py-10 lg:flex-row lg:gap-16 lg:py-12">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="mb-3 text-base text-slate-300 sm:text-lg">Hi, I&apos;m</p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                Mohamednishar J
              </h1>

              <h2 className="mb-4 mt-4 text-xl font-semibold text-blue-400 sm:text-2xl lg:text-3xl">
                Software Developer
              </h2>

              <p className="mb-3 text-sm text-slate-300 sm:text-base lg:text-lg">
                Java | React | Node.js | AI Applications
              </p>

              <p className="mx-auto mb-8 max-w-xl leading-relaxed text-slate-400 lg:mx-0">
                M.Tech CSE student passionate about building scalable web
                applications and AI-powered solutions.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 sm:w-auto"
                >
                  View Projects
                  <ArrowRight className="ml-2" size={18} />
                </a>

                <button
                  type="button"
                  onClick={downloadResume}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-500 px-6 py-3 font-medium transition hover:border-white sm:w-auto"
                >
                  Download Resume
                  <Download className="ml-2" size={18} />
                </button>

                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-500 px-6 py-3 font-medium transition hover:border-white sm:w-auto"
                >
                  Contact Me
                  <Mail className="ml-2" size={18} />
                </a>
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

              <img
                src={profileImg}
                alt="Profile"
                className="relative h-56 w-56 p-1 object-cover sm:h-72 sm:w-72 lg:h-96 lg:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
