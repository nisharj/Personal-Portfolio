import { FaUser } from "react-icons/fa";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center px-10 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8 text-white">About Me</h2>

            <p className="text-lg text-slate-300 leading-8">
              I am an M.Tech Computer Science student with strong problem-solving skills and
              experience in Java, React, Node.js, and AI-based applications. I enjoy building
              real-world software solutions and continuously improving my technical expertise
              through projects and learning.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-900">
              <h3 className="text-3xl font-bold text-blue-400">10+</h3>
              <p>Projects</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900">
              <h3 className="text-3xl font-bold text-blue-400">500+</h3>
              <p>DSA Problems</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900">
              <h3 className="text-3xl font-bold text-blue-400">AI</h3>
              <p>Applications</p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900">
              <h3 className="text-3xl font-bold text-blue-400">M.Tech</h3>
              <p>CSE Student</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
