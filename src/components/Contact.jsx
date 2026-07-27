import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { SOCIAL_LINKS } from "./SocialLinks";

const education = {
  college: "Sri Krishna College of Engineering and Technology",
  degree: "M.Tech - Computer Science Engineering",
  duration: "2024 - 2028",
};

const formatLinkLabel = (url) =>
  url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

const contactItems = [
  {
    icon: FaEnvelope,
    iconClassName: "text-blue-600",
    label: "Email",
    value: "mohamednisharj@gmail.com",
    href: "mailto:mohamednisharj@gmail.com",
  },
  {
    icon: FaLinkedin,
    iconClassName: "text-blue-600",
    label: "LinkedIn",
    value: formatLinkLabel(SOCIAL_LINKS.linkedin),
    href: SOCIAL_LINKS.linkedin,
  },
  {
    icon: FaGithub,
    iconClassName: "text-slate-900",
    label: "GitHub",
    value: formatLinkLabel(SOCIAL_LINKS.github),
    href: SOCIAL_LINKS.github,
  },
];

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
    <section
      className="relative scroll-mt-24 h-screen overflow-hidden bg-white px-4 pb-20 pt-8 text-slate-900 sm:px-6 sm:pb-24 lg:px-10"
    >
      <div className="float-slow absolute left-4 top-8 h-24 w-24 rounded-full bg-blue-100/60 blur-3xl sm:left-10 sm:top-10 sm:h-28 sm:w-28" />
      <div className="float absolute bottom-10 right-4 h-24 w-24 rounded-full bg-indigo-100/50 blur-3xl sm:right-10 sm:h-32 sm:w-32" />

      <div id="contact" className="relative container mx-auto max-w-7xl border-t border-slate-200 px-0 pt-14 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
              <FaGraduationCap size={12} />
              <span>
                Education
              </span>
            </div>

            <div className="relative mt-10 pl-7 sm:pl-8">
              <span className="absolute bottom-1 left-[5px] top-3 w-0.5 rounded-full bg-blue-200" />
              <span className="absolute left-0 top-2.5 h-3 w-3 rounded-full bg-blue-600 ring-4 ring-blue-50" />

              <div>
                <h4 className="text-xl font-semibold leading-tight text-slate-900 sm:text-2xl">
                  {education.college}
                </h4>
                <p className="mt-3 text-sm text-slate-600 sm:text-lg">
                  {education.degree}
                </p>
                <p className="mt-2 text-sm font-medium text-slate-700 sm:text-lg">
                  {education.duration}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:items-start">
            <div className="fade-up delay-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
                <FaEnvelope size={12} />
                <span>
                  Contact Me
                </span>
              </div>

              <div className="mt-8 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-50">
                        <Icon size={16} className={item.iconClassName} />
                      </span>

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                          rel={
                            item.href.startsWith("mailto:")
                              ? undefined
                              : "noopener noreferrer"
                          }
                          className="break-all text-sm leading-7 text-slate-700 transition hover:text-blue-600 sm:text-base sm:break-normal"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm leading-7 text-slate-700 sm:text-base">
                          {item.label}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="fade-up delay-2">
              <div className="space-y-4">
                <input
                  id="name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  id="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                  id="message"
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-50"
                  rows="5"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <button
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)] transition hover:from-blue-500 hover:to-indigo-500 hover:shadow-[0_16px_36px_rgba(59,130,246,0.32)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  type="submit"
                  disabled={isLoading}
                >
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                  <Send size={16} />
                </button>
              </div>

              {status && (
                <p
                  className={`mt-4 text-sm ${
                    status.includes("success")
                      ? "text-emerald-600"
                      : "text-rose-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
