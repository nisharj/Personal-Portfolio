import { useState } from "react";
import { Code2, Server, Database, Settings, Layout } from "lucide-react";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    color: "bg-blue-500",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "bg-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "Spring Boot", level: 70 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    color: "bg-purple-500",
    skills: [
      { name: "JavaScript/ES6+", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 80 },
      { name: "TypeScript", level: 75 }
    ]
  },
  {
    id: "database",
    title: "Databases",
    icon: Database,
    color: "bg-amber-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "Redis", level: 60 }
    ]
  },
  {
    id: "tools",
    title: "DevOps & Tools",
    icon: Settings,
    color: "bg-zinc-500",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 75 },
      { name: "Vercel / Netlify", level: 85 }
    ]
  }
];

export default function SkillsApp() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  return (
    <div className="flex h-full text-white">
      {/* Sidebar Navigation */}
      <div className="w-1/3 min-w-[200px] border-r border-white/10 p-4 bg-zinc-950/30">
        <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4 px-2">Skill Trees</h2>
        <div className="flex flex-col gap-2">
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-3 w-full p-3 rounded-xl transition-all text-left ${
                activeCategory === category.id 
                  ? "bg-white/10 text-white shadow-sm ring-1 ring-white/20" 
                  : "hover:bg-white/5 text-zinc-400"
              }`}
            >
              <div className={`p-1.5 rounded-lg ${activeCategory === category.id ? category.color : 'bg-zinc-800'}`}>
                <category.icon size={16} className="text-white" />
              </div>
              <span className="font-medium text-sm">{category.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main View */}
      <div className="flex-1 p-8 bg-zinc-950/10 overflow-y-auto">
        {skillCategories.map(category => (
          category.id === activeCategory && (
            <div key={category.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/10">
                <div className={`p-4 rounded-2xl ${category.color}`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <div>
                  <h1 className="font-display text-3xl font-bold">{category.title}</h1>
                  <p className="text-zinc-400 mt-1">Proficiency metrics and knowledge areas</p>
                </div>
              </div>

              <div className="grid gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-zinc-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-900 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className={`h-full ${category.color} rounded-full`} 
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}
