export default function Project() {
  return (
    <section className="min-h-screen bg-gray-950 text-white pt-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* ================= TECHNICAL SKILLS ================= */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur p-8 
                        hover:border-teal-400/40 transition">

          <h2 className="text-3xl font-semibold mb-6 text-center">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Java (DSA)",
              "C Programming",
              "React.js",
              "Spring Boot",
              "HTML & CSS",
              "MySQL",
              "MongoDB",
              "Git & GitHub",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium 
                           bg-gray-800 text-gray-300 
                           hover:bg-teal-500/10 hover:text-teal-400 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ================= SOFT SKILLS ================= */}
        <div className="rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur p-8 
                        hover:border-teal-400/40 transition">

          <h2 className="text-3xl font-semibold mb-6 text-center">
            Soft Skills
          </h2>

          <ul className="space-y-4 text-gray-300 text-lg">
            <li>• Strong problem-solving & logical thinking</li>
            <li>• Continuous learning mindset</li>
            <li>• Effective team collaboration</li>
            <li>• Time management & task prioritization</li>
            <li>• Clear and structured communication</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
