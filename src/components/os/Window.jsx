import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Square, Maximize2 } from "lucide-react";

export default function Window({
  id,
  title,
  icon: Icon,
  children,
  isActive,
  isMinimized,
  onClose,
  onMinimize,
  onFocus,
  defaultSize = { width: 800, height: 600 },
  defaultPos = { x: 100, y: 50 },
  minSize = { width: 320, height: 400 }
}) {
  const [isMaximized, setIsMaximized] = useState(false);
  const constraintsRef = useRef(null);

  // Focus window when clicking anywhere inside
  const handlePointerDown = () => {
    if (!isActive) onFocus();
  };

  const toggleMaximize = () => setIsMaximized(!isMaximized);

  if (isMinimized) return null;

  return (
    <motion.div
      drag={!isMaximized}
      dragConstraints={{ top: 0, left: 0, right: window.innerWidth - 100, bottom: window.innerHeight - 100 }}
      dragElastic={0}
      dragMomentum={false}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        ...(isMaximized ? { x: 0, y: 0, width: "100vw", height: "calc(100vh - 64px)" } : { width: defaultSize.width, height: defaultSize.height, x: defaultPos.x, y: defaultPos.y })
      }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ type: "spring", bounce: 0, duration: 0.4 }}
      onPointerDown={handlePointerDown}
      className={`absolute flex flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl ${isActive ? 'z-50 ring-1 ring-white/20' : 'z-40'}`}
      style={{
        minWidth: minSize.width,
        minHeight: minSize.height
      }}
    >
      {/* Title Bar - Drag Handle */}
      <div className="flex h-12 w-full items-center justify-between border-b border-white/10 bg-white/5 px-4 cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} className="text-zinc-400" />}
          <span className="font-medium text-sm text-zinc-300">{title}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={(e) => { e.stopPropagation(); onMinimize(); }} className="text-zinc-500 hover:text-zinc-300 transition-colors">
            <Minus size={16} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); toggleMaximize(); }} className="text-zinc-500 hover:text-zinc-300 transition-colors">
            {isMaximized ? <Square size={14} /> : <Maximize2 size={14} />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-zinc-500 hover:text-red-400 transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto bg-zinc-950/50 p-0 custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );
}
