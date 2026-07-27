import { useState, useEffect } from "react";
import { Folder, User, Terminal as TerminalIcon, BarChart2, Mail } from "lucide-react";
import BootScreen from "./BootScreen";
import DesktopBackground from "./DesktopBackground";
import Dock from "./Dock";
import Window from "./Window";

// Apps
import DashboardApp from "./apps/DashboardApp";
import ProjectsApp from "./apps/ProjectsApp";
import SkillsApp from "./apps/SkillsApp";
import ContactApp from "./apps/ContactApp";
import TerminalApp from "./apps/TerminalApp";

const APPS = [
  { id: "dashboard", title: "Dashboard", icon: BarChart2, component: DashboardApp, size: { width: 900, height: 650 } },
  { id: "projects", title: "Projects", icon: Folder, component: ProjectsApp, size: { width: 1000, height: 700 } },
  { id: "skills", title: "Skills & Resume", icon: User, component: SkillsApp, size: { width: 800, height: 600 } },
  { id: "terminal", title: "Terminal", icon: TerminalIcon, component: TerminalApp, size: { width: 700, height: 500 } },
  { id: "contact", title: "Contact", icon: Mail, component: ContactApp, size: { width: 500, height: 600 } }
];

export default function DesktopOS() {
  const [booted, setBooted] = useState(false);
  const [openApps, setOpenApps] = useState(["dashboard"]);
  const [activeApp, setActiveApp] = useState("dashboard");
  const [minimizedApps, setMinimizedApps] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("booted")) {
      setBooted(true);
    }
  }, []);

  const handleBootComplete = () => {
    setBooted(true);
    sessionStorage.setItem("booted", "true");
  };

  const launchApp = (id) => {
    if (!openApps.includes(id)) {
      setOpenApps([...openApps, id]);
    }
    if (minimizedApps.includes(id)) {
      setMinimizedApps(minimizedApps.filter(app => app !== id));
    }
    setActiveApp(id);
  };

  const closeApp = (id) => {
    setOpenApps(openApps.filter(app => app !== id));
    setMinimizedApps(minimizedApps.filter(app => app !== id));
    if (activeApp === id) {
      setActiveApp(openApps.length > 1 ? openApps[openApps.length - 2] : null);
    }
  };

  const minimizeApp = (id) => {
    setMinimizedApps([...minimizedApps, id]);
    if (activeApp === id) setActiveApp(null);
  };

  // Command Palette (Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        launchApp("terminal");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openApps, minimizedApps]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-zinc-950 font-sans text-white">
      {!booted && <BootScreen onComplete={handleBootComplete} />}

      <DesktopBackground />

      {/* Render Open Windows */}
      {openApps.map((id, index) => {
        const app = APPS.find(a => a.id === id);
        if (!app) return null;
        
        const offset = index * 30; // slight offset for new windows
        const defaultPos = { x: 100 + offset, y: 50 + offset };

        return (
          <Window
            key={id}
            id={id}
            title={app.title}
            icon={app.icon}
            isActive={activeApp === id}
            isMinimized={minimizedApps.includes(id)}
            defaultSize={app.size}
            defaultPos={defaultPos}
            onClose={() => closeApp(id)}
            onMinimize={() => minimizeApp(id)}
            onFocus={() => setActiveApp(id)}
          >
            <app.component />
          </Window>
        );
      })}

      <Dock 
        apps={APPS} 
        activeApp={activeApp} 
        openApps={openApps} 
        onLaunch={launchApp} 
      />
    </div>
  );
}
