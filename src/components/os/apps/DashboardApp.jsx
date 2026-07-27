import { useState, useEffect } from "react";
import { Activity, Cpu, GitCommit, Users, Star } from "lucide-react";
import { profileImg } from "../../../assets/ImageDatas";

export default function DashboardApp() {
  const [githubStats, setGithubStats] = useState({
    commits: "1,248", // Estimate or manual since GitHub doesn't provide total commits easily
    repos: "...",
    followers: "...",
    stars: "..."
  });

  const [topLanguages, setTopLanguages] = useState([
    { name: "React & Next.js", percentage: 90, colorClass: "text-blue-400", bgClass: "bg-blue-500" },
    { name: "Java & Spring", percentage: 85, colorClass: "text-purple-400", bgClass: "bg-purple-500" },
    { name: "Node.js & Express", percentage: 80, colorClass: "text-emerald-400", bgClass: "bg-emerald-500" }
  ]);

  useEffect(() => {
    // Fetch user data
    fetch("https://api.github.com/users/nisharj")
      .then(res => res.json())
      .then(data => {
        if (data && !data.message) {
          setGithubStats(prev => ({
            ...prev,
            repos: data.public_repos?.toString() || "0",
            followers: data.followers?.toString() || "0",
          }));
        }
      })
      .catch(console.error);

    // Fetch repos for total stars and languages
    fetch("https://api.github.com/users/nisharj/repos?per_page=100")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const totalStars = data.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
          setGithubStats(prev => ({
            ...prev,
            stars: totalStars.toString()
          }));

          // Calculate languages
          const languageCounts = {};
          let totalLanguages = 0;
          data.forEach(repo => {
            if (repo.language) {
              languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
              totalLanguages++;
            }
          });

          if (totalLanguages > 0) {
            const sortedLanguages = Object.entries(languageCounts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 3);
            
            const colors = [
              { colorClass: "text-blue-400", bgClass: "bg-blue-500" },
              { colorClass: "text-purple-400", bgClass: "bg-purple-500" },
              { colorClass: "text-emerald-400", bgClass: "bg-emerald-500" }
            ];

            const newTopLanguages = sortedLanguages.map(([name, count], index) => ({
              name,
              percentage: Math.round((count / totalLanguages) * 100),
              ...colors[index]
            }));

            // Fill empty slots if less than 3 languages
            while (newTopLanguages.length < 3) {
              newTopLanguages.push({
                name: "Other",
                percentage: 0,
                ...colors[newTopLanguages.length]
              });
            }

            setTopLanguages(newTopLanguages);
          }
        }
      })
      .catch(console.error);
  }, []);

  const stats = [
    { label: "Total Commits", value: githubStats.commits, icon: GitCommit, color: "text-emerald-400" },
    { label: "Repositories", value: githubStats.repos, icon: Activity, color: "text-blue-400" },
    { label: "Followers", value: githubStats.followers, icon: Users, color: "text-purple-400" },
    { label: "Stars", value: githubStats.stars, icon: Star, color: "text-amber-400" },
  ];

  return (
    <div className="p-6 h-full flex flex-col gap-6 text-white">
      {/* Header Profile */}
      <div className="flex items-center gap-6 rounded-2xl bg-white/5 p-6 border border-white/10">
        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-white/20">
          <img src={profileImg} alt="Profile" className="h-full w-full object-cover" />
        </div>
        <div>
          <h1 className="font-display text-3xl font-bold">Mohamednishar J</h1>
          <p className="text-zinc-400 mt-1">Software Developer • M.Tech CSE</p>
          <div className="mt-3 flex gap-2">
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for work
            </span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-2xl bg-white/5 p-5 border border-white/10 flex flex-col gap-3">
            <div className={`p-3 w-fit rounded-xl bg-white/5 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-zinc-400 text-sm">{stat.label}</p>
              <p className="font-display text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* System & Tech */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
        <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
          <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
            <Cpu size={18} className="text-blue-400" /> Current Tech Stack
          </h3>
          <div className="space-y-4">
            {topLanguages.map((lang, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300">{lang.name}</span>
                  <span className={lang.colorClass}>{lang.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className={`h-full ${lang.bgClass}`} style={{ width: `${lang.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-white/5 p-6 border border-white/10 flex flex-col">
          <h3 className="font-display text-lg font-bold mb-4">Activity Graph</h3>
          <div className="flex-1 flex flex-col justify-end gap-1">
            {/* Simulating a commit graph */}
            <div className="flex gap-1 items-end h-full mt-4">
              {Array.from({ length: 24 }).map((_, i) => {
                const height = Math.random() * 100;
                return (
                  <div 
                    key={i} 
                    className="flex-1 bg-blue-500/40 rounded-t-sm hover:bg-blue-400 transition-colors"
                    style={{ height: `${Math.max(10, height)}%` }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
