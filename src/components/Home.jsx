import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { profileImg } from "../assets/ImageDatas";
import CV from "../assets/Mohamednishar_J.pdf";
import { SOCIAL_LINKS } from "./SocialLinks";

import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <section id="about" className="flex min-h-screen items-center bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#172554] px-6 pt-28 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 order-2 text-center md:text-left">

            {/* <p className="inline-flex rounded-full border border-sky-500/35 bg-slate-900/55 px-3 py-1 text-xs text-sky-200 sm:text-sm">
              Aspiring Software Engineer
            </p> */}

            <h1 className="text-5xl font-extrabold text-slate-50 md:text-6xl">
              Mohamednishar J
            </h1>

            <h2 className="text-2xl font-semibold text-sky-300 md:text-3xl">
              Full Stack Developer
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto md:mx-0">
              M.Tech Computer Science and Engineering student with a good foundation in
              <span className="text-white"> Java and Data Structures & Algorithms</span>.
              Experienced in building clean, responsive web applications using
              <span className="text-white"> React and Tailwind CSS</span>.
            </p>

            <p className="text-gray-400 max-w-xl mx-auto md:mx-0">
              Interested in full-stack development, system automation, and practical
              AI-driven applications. Focused on writing readable code and building
              user-friendly solutions.
            </p>

            {/* CV */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-sky-500/35 px-6 py-3 text-slate-100 transition hover:border-sky-300 hover:bg-sky-500/10 hover:text-white"
              >
                View Resume
              </a>

              <a
                href={CV}
                download
                className="btn-blue-glow rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 px-6 py-3 text-white transition hover:from-sky-500 hover:to-blue-600"
              >
                Download Resume
              </a>
            </div>

            <hr className="my-6 border-blue-800/60" />


            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-5 pt-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                className="transition hover:text-sky-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                className="transition hover:text-sky-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={SOCIAL_LINKS.leetcode}
                target="_blank"
                className="hover:text-orange-500 transition"
              >
                <SiLeetcode size={22} />
              </a>

              <a
                href={SOCIAL_LINKS.geeksforgeeks}
                target="_blank"
                className="hover:text-green-500 transition"
              >
                <SiGeeksforgeeks size={22} />
              </a>

              {/* <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a> */}

            </div>
            

            
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-72 h-72 sm:w-72 sm:h-72 md:w-[23rem] md:h-[23rem] rounded-2xl overflow-hidden 
                            border border-blue-800/60 shadow-xl shadow-slate-950/50 hover:scale-[1.02] hover:shadow-sky-500/20 transition duration-300">
              <img
                src={profileImg}
                alt="Mohamednishar J"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
