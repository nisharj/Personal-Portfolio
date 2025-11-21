export default function Projects() {
  return (
    <div className="bg-gray-900 text-white min-h-screen pt-28 px-6 flex justify-center">

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* === Card 1 === */}
        <div className="w-full p-6 sm:p-10 border-4 border-gray-500 rounded-xl shadow-lg shadow-gray-500/30 hover:shadow-teal-400/40 transition duration-300">
          <h1 className="text-xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Weather Report Application
          </h1>

          <p className="text-gray-300 mb-4 text-lg md:text-xl tracking-wide">
            Provides real-time <strong>weather updates and air pollution reports</strong>
            based on user location or searched city using OpenWeatherMap API.
          </p>

          <p className="text-gray-400 mb-4 text-lg md:text-xl">
            <span className="font-semibold text-white">Technologies Used:</span> React.js, Tailwind CSS, JavaScript, OpenWeatherMap API
          </p>

          <div className="flex justify-between mt-4 text-lg md:text-xl font-medium">
            <a href="https://github.com/nisharj/Weather-and-Air-Pollution-Report" target="_blank" className="text-blue-400 hover:underline">
              🔗 View Code
            </a>
            <a href="https://nisharj.github.io/Weather-and-Air-Pollution-Report/" target="_blank" className="text-green-400 hover:underline">
              🌐 Live Preview
            </a>
          </div>
        </div>

        {/* === Card 2 === */}
        <div className="w-full p-6 sm:p-10 border-4 border-gray-500 rounded-xl shadow-lg shadow-gray-500/30 hover:shadow-teal-400/40 transition duration-300">
          <h1 className="text-xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Personal Portfolio
          </h1>

          <p className="text-gray-300 mb-4 text-lg md:text-xl tracking-wide">
            Personal portfolio showcasing skills, projects & learning journey. 
            Built using modern frontend technologies for clean responsive UI.
          </p>

          <p className="text-gray-400 mb-4 text-lg md:text-xl">
            <span className="font-semibold text-white">Technologies Used:</span> React.js, Tailwind CSS, JavaScript
          </p>

          <div className="flex justify-between mt-4 text-lg md:text-xl font-medium">
            <a href="https://github.com/nisharj/Personal-Portfolio" target="_blank" className="text-blue-400 hover:underline">
              🔗 View Code
            </a>
            <a href="https://nisharj.github.io/Personal-Portfolio/" target="_blank" className="text-green-400 hover:underline">
              🌐 Live Preview
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
