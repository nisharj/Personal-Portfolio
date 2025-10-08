export default function Projects() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">

        <div className="w-full p-6 sm:p-10 border-4 border-gray-500 rounded-lg shadow-lg shadow-gray-500/50">
          <h1 className="text-xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Weather Report Application
          </h1>
          <p className="text-gray-300 mb-4 text-lg md:text-xl font-medium tracking-wide">
            A web application that provides real-time <strong>weather updates and air pollution reports</strong> based on user location or searched city. 
            It fetches data from the OpenWeatherMap API and displays temperature, humidity, wind speed, and air quality in a clean, user-friendly interface.
          </p>
          <p className="text-gray-400 mb-2 text-lg md:text-xl font-medium">
            <span className="font-semibold text-white">Technologies Used:</span> React.js, Tailwind CSS, JavaScript, OpenWeatherMap API
          </p>
          <div className="flex justify-between mt-4 space-x-4 text-lg md:text-xl font-medium">
            <a href="https://github.com/nisharj/Weather-and-Air-Pollution-Report" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">🔗 View Code</a>
            <a href="https://nisharj.github.io/Weather-and-Air-Pollution-Report/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">🌐 Live Preview</a>
          </div>
        </div>

        <div className="w-full p-6 sm:p-10 border-4 border-gray-500 rounded-lg shadow-lg shadow-gray-500/50">
          <h1 className="text-xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Personal Portfolio
          </h1>
          <p className="text-gray-300 mb-4 text-lg md:text-xl font-medium tracking-wide">
            This is my personal portfolio showcasing my projects, skills, and learning journey. 
            It helped me practice web development, UI/UX design, and building interactive applications. 
            I built it using modern frontend technologies to create a responsive and clean design.
          </p>
          <p className="text-gray-400 mb-2 text-lg md:text-xl font-medium">
            <span className="font-semibold text-white">Technologies Used:</span> React.js, Tailwind CSS, JavaScript
          </p>
          <div className="flex justify-between mt-4 space-x-4 text-lg md:text-xl font-medium">
            <a href="https://github.com/nisharj/Personal-Portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">🔗 View Code</a>
            <a href="https://nisharj.github.io/Personal-Portfolio/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">🌐 Live Preview</a>
          </div>
        </div>


        {/* <div className="w-full p-6 sm:p-10 border-4 border-gray-500 rounded-lg shadow-lg shadow-gray-500/50">
          <h1 className="text-xl md:text-3xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            Speech-to-Text Web App
          </h1>
          <p className="text-gray-300 mb-4 text-lg md:text-xl font-medium tracking-wide">
            A web application that converts real-time speech into text using the browser’s Speech Recognition API. 
            Users can transcribe audio directly from their microphone, providing a smooth and interactive interface. 
            This project helped me practice React.js, Tailwind CSS, and handling real-time input and state management.
          </p>
          <p className="text-gray-400 mb-2 text-lg md:text-xl font-medium">
            <span className="font-semibold text-white">Technologies Used:</span> React.js, Tailwind CSS, JavaScript, Web Speech API
          </p>
          <div className="flex justify-between mt-4 space-x-4 text-lg md:text-xl font-medium">
            <a href="https://github.com/nisharj/Speech-to-Text-Web-App" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">🔗 View Code</a>
            <a href="https://nisharj.github.io/Speech-to-Text-Web-App/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">🌐 Live Preview</a>
          </div>
        </div> */}

      </div>
    </div>
  );
}
