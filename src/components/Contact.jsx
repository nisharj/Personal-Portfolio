import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { SiX } from "react-icons/si";

export default function Project() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("Please fill all fields.");
      return;
    }

    const telegramMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const botToken = "7914568011:AAGJV3odrv49nJIzJmgbWR41VuyXmSXoCFY";
    const chatId = "5181502452";
    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(telegramURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text: telegramMessage }),
      });
      const data = await response.json();
      if (data.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else setStatus("Error sending message.");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="bg-gray-900 text-white w-full min-h-screen">

      <div className="max-w-[600px] mx-auto py-10 sm:py-20 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full h-auto p-4 sm:p-6 border-4 border-gray-500 rounded-lg shadow-lg shadow-gray-500/50 flex flex-col gap-4 sm:gap-5"
        >
          <h1 className="text-lg md:text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 text-center">
            Contact
          </h1>

          <input
            className={`w-full border-2 border-gray-500 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              name ? "bg-white text-black" : "bg-gray-200 text-black"
            }`}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className={`w-full border-2 border-gray-500 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              email ? "bg-white text-black" : "bg-gray-200 text-black"
            }`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            className={`w-full border-2 border-gray-500 rounded-md p-2 sm:p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400 ${
              message ? "bg-white text-black" : "bg-gray-200 text-black"
            }`}
            rows="4"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            className="w-full sm:w-auto bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 px-6 rounded-md font-semibold text-base sm:text-lg hover:opacity-90 transition"
            type="submit"
          >
            Send
          </button>

          {status && (
            <p
              className={`mt-2 text-center ${
                status.includes("success") ? "text-green-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5">
            <a href="https://github.com/nisharj" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
              <FaGithub className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a href="https://www.linkedin.com/in/mohamednishar-j-b9118b274/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7" />
            </a>
            <a href="https://leetcode.com/u/Mr_God/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <SiLeetcode size={30} />
            </a>
            <a href="https://www.geeksforgeeks.org/user/mrmoham685c/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
              <SiGeeksforgeeks size={30} />
            </a>
            <a href="https://www.instagram.com/mohamednishar_j/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <FaInstagram size={30} />
            </a>
            <a href="https://x.com/MMohamed31100" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <SiX size={30} />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
