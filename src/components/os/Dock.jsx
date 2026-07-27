import { motion } from "framer-motion";

export default function Dock({ apps, activeApp, openApps, onLaunch }) {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-950/60 p-2 backdrop-blur-2xl shadow-2xl"
    >
      {apps.map((app) => {
        const Icon = app.icon;
        const isOpen = openApps.includes(app.id);
        const isActive = activeApp === app.id;

        return (
          <div key={app.id} className="relative group">
            <button
              onClick={() => onLaunch(app.id)}
              className={`relative flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 hover:bg-white/10 ${isActive ? 'bg-white/15 shadow-inner' : ''}`}
            >
              <Icon size={24} className={isOpen ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"} />
            </button>
            
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded bg-zinc-800 px-2 py-1 text-xs text-white shadow-lg whitespace-nowrap">
              {app.title}
            </div>

            {/* Active Indicator */}
            {isOpen && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500"
              />
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
