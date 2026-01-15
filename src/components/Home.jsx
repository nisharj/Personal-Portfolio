import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { profileImg } from "../assets/ImageDatas";
import CV from "../assets/Mohamednishar J.pdf";
import { SOCIAL_LINKS } from "./SocialLinks";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-gray-950 text-white pt-28 px-6 flex items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 order-2 text-center md:text-left">

            <p className="text-teal-400 font-medium tracking-wide">
              Aspiring Software Engineer · M.Tech CSE
            </p>

            <h1 className="text-4xl md:text-5xl font-bold">
              Mohamednishar J
            </h1>

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

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-5 pt-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                className="hover:text-teal-400 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                className="hover:text-blue-500 transition"
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

              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-pink-500 hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>

            </div>
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-gray-700 
                          hover:border-teal-400 hover:text-teal-400 transition"
              >
                View Resume
              </a>

              <a
                href={CV}
                download
                className="px-6 py-3 rounded-md bg-teal-500/10 text-teal-400 
                          hover:bg-teal-500/20 transition"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-56 h-56 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden 
                            border border-gray-800 shadow-lg shadow-teal-500/30 hover:scale-105 hover:shadow-teal-400/40 transition duration-300">
              <img
                src={profileImg}
                alt="Mohamednishar J"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

          
      </section>
    </>
  );
}
