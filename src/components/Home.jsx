import { profileImg } from "../assets/ImageDatas";
import Navbar from "./Navbar";
import About from "./About";
import FloatingIcons from "./FloatingIcons";
import { Download, Mail, ArrowRight } from "lucide-react";


export default function Home() {
  return (
    <>
        <Navbar />

        <section
            id="home"
            className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#172554] text-white pt-24 px-10"
        >
            <FloatingIcons />

            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[80vh] gap-12">
                    
                    {/* Left Content */}
                    <div className="max-w-2xl">
                        <p className="text-lg text-slate-300 mb-3">Hi, I'm</p>

                        <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                            Mohamednishar J
                        </h1>

                        <h2 className="text-2xl lg:text-3xl font-semibold text-blue-400 mb-4">
                            Software Developer
                        </h2>

                        <p className="text-lg text-slate-300 mb-3">
                            Java • React • Node.js • AI Applications
                        </p>

                        <p className="max-w-xl text-slate-400 leading-relaxed mb-8">
                            M.Tech CSE student passionate about building scalable
                            web applications and AI-powered solutions.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:cursor-pointer hover:bg-blue-700 transition">
                                View Projects
                                <ArrowRight className="inline ml-2" size={20} />
                            </button>

                            <button className="px-6 py-3 border border-slate-500 rounded-lg font-medium hover:cursor-pointer hover:border-white transition">
                                Download Resume 
                                <Download className="inline ml-2" size={20} />
                            </button>

                            <button className="px-6 py-3 border border-slate-500 rounded-lg font-medium hover:cursor-pointer hover:border-white transition">
                                Contact Me
                                <Mail className="inline ml-2" size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

                        <img
                            src={profileImg}
                            alt="Profile"
                            className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 p-1"
                        />
                    </div>

                </div>
            </div>
        </section>

        <About />
    </>
  );
}