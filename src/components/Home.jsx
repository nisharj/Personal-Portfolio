import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { profileImg } from "../assets/ImageDatas";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center sm:px-2 py-10">
      <div className="max-w-9xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        <div className="space-y-6 animate-fadeIn md:pl-2 md:ml-20 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 tracking-wide">
            MOHAMEDNISHAR J
          </h1>

          <p className="text-xm sm:text-sm md:text-base text-gray-300 leading-relaxed">
            I’m <span className="font-semibold text-white">Mohamednishar J</span>, 
            an M.Tech Computer Science and Engineering student at 
            <span className="text-teal-400"> Sri Krishna College of Engineering and Technology</span> (2028 batch). 
            Passionate about building intelligent systems, modern web apps, and 
            user-friendly interfaces.
          </p>

          <p className="text-sm sm:text-base md:text-xl text-gray-400 leading-relaxed">
            Skilled in <span className="text-white">Java, Data Structures & Algorithms</span>, 
            and experienced with <span className="text-white">React & Tailwind</span>. 
            I love working on projects that combine <span className="text-teal-400">AI, automation, and full-stack development</span>. 
            My mission: keep learning, experimenting, and creating impactful solutions.
          </p>

        <div className="flex justify-center md:justify-start gap-4 sm:gap-5 mt-6 flex-wrap">
        <a href="https://github.com/nisharj" target="_blank" className="hover:text-teal-400">
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
        </a>
        <a href="https://www.linkedin.com/in/mohamednishar-j-b9118b274/" target="_blank" className="hover:text-blue-500">
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
        </a>
        <a href="https://leetcode.com/u/Mr_God/" target="_blank" className="hover:text-orange-500">
            <SiLeetcode className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
        </a>
        <a href="https://www.geeksforgeeks.org/user/mrmoham685c/" target="_blank" className="hover:text-green-500">
            <SiGeeksforgeeks className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
        </a>
        <a href="https://www.instagram.com/mohamednishar_j/" target="_blank" className="hover:text-pink-500">
            <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6" />
        </a>
        </div>

          <div className="flex justify-center md:justify-start">
            <a 
              href="/Personal-Portfolio/contact" 
              className="mt-6 inline-block bg-gradient-to-r from-teal-400 to-blue-500 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center -mt-15">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 border-4 border-gray-700 rounded-full overflow-hidden shadow-lg shadow-teal-500/30 hover:scale-105 hover:shadow-teal-400/40 transition duration-300">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
