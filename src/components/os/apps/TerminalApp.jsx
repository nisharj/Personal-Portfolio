import { useState, useRef, useEffect } from "react";

export default function TerminalApp() {
  const [history, setHistory] = useState([
    { type: "system", content: "MJ-OS Terminal v1.0.0" },
    { type: "system", content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response = "";

    switch (trimmed) {
      case "help":
        response = `Available commands:
  help       - Show this help message
  whoami     - Display current user info
  clear      - Clear terminal history
  date       - Show current system date/time
  echo [msg] - Print a message
  sudo       - Elevate privileges (requires password)`;
        break;
      case "whoami":
        response = "Mohamednishar_J - Software Developer";
        break;
      case "clear":
        setHistory([]);
        return;
      case "date":
        response = new Date().toString();
        break;
      case "sudo":
        response = "nice try.";
        break;
      default:
        if (trimmed.startsWith("echo ")) {
          response = cmd.substring(5);
        } else {
          response = `Command not found: ${trimmed}. Type 'help' for available commands.`;
        }
    }

    setHistory(prev => [
      ...prev,
      { type: "user", content: cmd },
      { type: "system", content: response }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <div 
      className="h-full bg-zinc-950 p-4 font-mono text-sm sm:text-base text-zinc-300 flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-2">
        {history.map((line, i) => (
          <div key={i} className={line.type === "user" ? "text-blue-400" : "text-zinc-300"}>
            {line.type === "user" && <span className="text-emerald-400 mr-2">guest@mj-os:~$</span>}
            <span className="whitespace-pre-wrap">{line.content}</span>
          </div>
        ))}
        <div className="flex items-center text-blue-400 mt-2">
          <span className="text-emerald-400 mr-2 whitespace-nowrap">guest@mj-os:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-zinc-300"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
