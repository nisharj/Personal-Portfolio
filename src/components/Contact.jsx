import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
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
        { name, email, message },
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
    <section id="contact" className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#172554] px-6 pb-16 pt-28 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 py-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-slate-100">Get In Touch</h2>
          <p className="max-w-md leading-7 text-slate-200/70">
            Let&apos;s collaborate. I am always open to discussing exciting projects and new opportunities.
          </p>

          <div className="space-y-4 text-sm text-slate-100/85">
            <p className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-500/35 bg-slate-900/45 text-sky-300">
                <FaEnvelope size={13} />
              </span>
              <span>mohamednisharj@gmail.com</span>
            </p>
            {/* <p className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-500/35 bg-slate-900/45 text-sky-300">
                <FaPhoneAlt size={12} />
              </span>
              <span>+91 00000 00000</span>
            </p> */}
            <p className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sky-500/35 bg-slate-900/45 text-sky-300">
                <FaMapMarkerAlt size={13} />
              </span>
              <span>Tamil Nadu, India</span>
            </p>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-900/60 bg-slate-950/40 text-slate-100 transition hover:border-sky-400/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
              aria-label="GitHub"
            >
              <FaGithub size={17} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-900/60 bg-slate-950/40 text-slate-100 transition hover:border-sky-400/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-900/60 bg-slate-950/40 text-slate-100 transition hover:border-sky-400/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
              aria-label="Instagram"
            >
              <FaInstagram size={17} />
            </a>
            <a
              href={SOCIAL_LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-900/60 bg-slate-950/40 text-slate-100 transition hover:border-sky-400/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)]"
              aria-label="X (Twitter)"
            >
              <SiX size={15} />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-blue-900/60 bg-slate-950/35 p-6 shadow-[0_0_35px_rgba(56,189,248,0.16)] backdrop-blur-sm md:p-8"
        >
          <div className="space-y-4">
            <input
              id="name"
              className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-100 placeholder:text-slate-100/40 focus:outline-none focus:ring-2 focus:ring-sky-400/70 ${
                name ? "border-sky-500/50 bg-black/30" : "border-blue-900/70 bg-black/25"
              }`}
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              id="email"
              className={`w-full rounded-lg border px-4 py-3 text-sm text-slate-100 placeholder:text-slate-100/40 focus:outline-none focus:ring-2 focus:ring-sky-400/70 ${
                email ? "border-sky-500/50 bg-black/30" : "border-blue-900/70 bg-black/25"
              }`}
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              id="message"
              className={`w-full resize-none rounded-lg border px-4 py-3 text-sm text-slate-100 placeholder:text-slate-100/40 focus:outline-none focus:ring-2 focus:ring-sky-400/70 ${
                message ? "border-sky-500/50 bg-black/30" : "border-blue-900/70 bg-black/25"
              }`}
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="rounded-full border border-sky-500/40 bg-gradient-to-r from-sky-600 to-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:from-sky-500 hover:to-blue-600 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] disabled:cursor-not-allowed disabled:opacity-60"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status && (
            <p className={`mt-3 text-sm ${status.includes("success") ? "text-emerald-400" : "text-sky-300"}`}>
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
