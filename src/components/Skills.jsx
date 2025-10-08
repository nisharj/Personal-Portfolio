export default function Project() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
        <div className="w-full h-auto p-6 sm:p-10 border-4 border-gray-500 rounded-lg shadow-lg shadow-gray-500/50">
          <h1 className="text-center text-xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Technical Skills
          </h1>
          <ul className="space-y-2 sm:space-y-4 text-base sm:text-lg md:text-xl font-medium text-gray-300 tracking-wide">
            <li className="py-2">Java (Data Structures & Algorithms)</li>
            <li className="py-2">C programming</li>
            <li className="py-2">Git & GitHub</li>
            <li className="py-2">Reactjs</li>
            <li className="py-2">HTML & CSS</li>
            <li className="py-2">SpringBoot</li>
            <li className="py-2">MYSQL & MongoDB</li>
          </ul>
        </div>
        
        <div className="w-full h-auto p-6 sm:p-10 border-4 border-gray-500 rounded-lg shadow-lg shadow-gray-500/50">
          <h1 className="text-center text-xl md:text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Soft Skills
          </h1>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl font-medium text-gray-300 tracking-wide">
            <li className="py-2">Problem-Solving & Logical Thinking</li>
            <li className="py-2">Continuous Learning & Curiosity</li>
            <li className="py-2">Team Collaboration</li>
            <li className="py-2">Time Management</li>
            <li className="py-2">Communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
