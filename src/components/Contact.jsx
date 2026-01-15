import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiX } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { SOCIAL_LINKS } from "./SocialLinks";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white w-full min-h-screen pt-24 pb-16">

      <div className="max-w-2xl mx-auto py-10 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full p-6 sm:p-8 border-2 border-gray-800 rounded-2xl bg-gray-900/40 backdrop-blur
                     shadow-xl hover:border-teal-400/40 transition-all duration-300 flex flex-col gap-5"
        >

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
            <input
              id="name"
              className={`w-full border-2 rounded-lg p-3 text-base bg-gray-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                         transition-all duration-300 ${
                name ? "border-teal-400/50" : "border-gray-700"
              }`}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
            <input
              id="email"
              className={`w-full border-2 rounded-lg p-3 text-base bg-gray-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                         transition-all duration-300 ${
                email ? "border-teal-400/50" : "border-gray-700"
              }`}
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
            <textarea
              id="message"
              className={`w-full border-2 rounded-lg p-3 text-base bg-gray-800 text-white
                         focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent
                         transition-all duration-300 resize-none ${
                message ? "border-teal-400/50" : "border-gray-700"
              }`}
              rows="5"
              placeholder="Your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 px-6 rounded-lg 
                       font-semibold text-lg hover:from-teal-400 hover:to-blue-400 
                       hover:shadow-lg hover:shadow-teal-400/30 transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`mt-2 text-center font-medium ${
                status.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}

          {/* Social Links */}
          <div className="pt-6 border-t border-gray-800">
            <p className="text-center text-gray-400 mb-4">Or connect with me on</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a 
                href={SOCIAL_LINKS.leetcode} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-orange-500 hover:scale-110 transition-all duration-200"
                aria-label="LeetCode"
              >
                <SiLeetcode size={28} />
              </a>
              <a 
                href={SOCIAL_LINKS.geeksforgeeks} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all duration-200"
                aria-label="GeeksforGeeks"
              >
                <SiGeeksforgeeks size={28} />
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
              <a 
                href={SOCIAL_LINKS.telegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <SiX size={28} />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
