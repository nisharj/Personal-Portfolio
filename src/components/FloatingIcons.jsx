import {
  Braces,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";

export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <Code2 className="float absolute left-16 top-28 text-blue-500/20" size={36} />
      <Braces
        className="float-slow absolute right-24 top-56 text-indigo-500/20"
        size={40}
      />
      <Terminal
        className="float absolute bottom-36 left-28 text-cyan-500/20"
        size={32}
      />
      <GitBranch
        className="float-fast absolute bottom-24 right-16 text-blue-400/20"
        size={36}
      />
      <Cpu
        className="float-slow absolute left-1/3 top-80 text-purple-500/20"
        size={34}
      />
      <Database
        className="float absolute right-1/4 top-20 text-green-500/20"
        size={38}
      />
    </div>
  );
}
