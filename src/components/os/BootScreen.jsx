import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BootScreen({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [booted, setBooted] = useState(false);

  const bootSequence = [
    "Initializing MJ-OS kernel v2.4.1...",
    "Loading display drivers... OK",
    "Mounting virtual filesystem... OK",
    "Checking memory integrity... 16GB OK",
    "Starting display manager... OK",
    "Loading user profile: Mohamednishar_J...",
    "Establishing network connection... CONNECTED",
    "Starting workspace environment...",
    "Welcome to MJ-OS."
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((log, index) => {
      delay += Math.random() * 200 + 100;
      setTimeout(() => {
        setLogs(prev => [...prev, log]);
        if (index === bootSequence.length - 1) {
          setTimeout(() => {
            setBooted(true);
            setTimeout(onComplete, 800);
          }, 600);
        }
      }, delay);
    });
  }, []);

  return (
    <AnimatePresence>
      {!booted && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col bg-black p-6 font-mono text-sm sm:text-base text-green-500 overflow-hidden"
        >
          <div className="flex flex-col gap-1">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="whitespace-pre-wrap"
              >
                <span className="text-zinc-500">[{new Date().toISOString().split("T")[1].slice(0, -1)}]</span> {log}
              </motion.div>
            ))}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="mt-2 h-4 w-2 bg-green-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
