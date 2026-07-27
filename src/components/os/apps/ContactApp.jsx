import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SOCIAL_LINKS } from "../../SocialLinks";

export default function ContactApp() {
  return (
    <div className="flex flex-col h-full text-white bg-zinc-950/30 p-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-500/20 text-blue-400 mb-4 ring-1 ring-blue-500/30">
          <Mail size={28} />
        </div>
        <h1 className="font-display text-3xl font-bold mb-2">Get in touch</h1>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Currently open to new opportunities. Feel free to reach out for collaborations or just a friendly hello.
        </p>
      </div>

      <div className="grid gap-4 max-w-md mx-auto w-full">
        <a 
          href="mailto:mohamednisharj@gmail.com" 
          className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
        >
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
            <Mail size={20} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-1">Email</p>
            <p className="font-medium">mohamednisharj@gmail.com</p>
          </div>
          <ExternalLink size={16} className="text-zinc-500 group-hover:text-white transition-colors" />
        </a>

        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
            <MapPin size={20} />
          </div>
          <div className="flex-1">
            <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mb-1">Location</p>
            <p className="font-medium">Tamil Nadu, India</p>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-10 pb-4">
        <p className="text-center text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-6">Socials</p>
        <div className="flex justify-center gap-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30 transition-colors">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
