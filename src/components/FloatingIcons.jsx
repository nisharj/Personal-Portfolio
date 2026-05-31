import {
  Braces,
  Code2,
  GitBranch,
  Terminal,
  Cpu,
  Database,
} from "lucide-react";

export default function FloatingIcons() {
  return (
    <>
      <Code2
        className="float absolute top-32 left-20 text-blue-500/20"
        size={40}
      />
      <Braces
        className="float-slow absolute top-64 right-32 text-indigo-500/20"
        size={45}
      />
      <Terminal
        className="float absolute bottom-40 left-40 text-cyan-500/20"
        size={35}
      />
      <GitBranch
        className="float-fast absolute bottom-28 right-20 text-blue-400/20"
        size={40}
      />
      <Cpu
        className="float-slow absolute top-96 left-1/3 text-purple-500/20"
        size={38}
      />
      <Database
        className="float absolute top-20 right-1/4 text-green-500/20"
        size={42}
      />
    </>
  );
}
