"use client";

import {
  Trophy,
  Brain,
  FileSearch,
  Sparkles,
  Search,
  FileText,
  Briefcase,
  Github,
  ChevronRight,
  Star,
} from "lucide-react";


export default function Hero() {
  const stats = [
    { number: "1,00,000+", label: "Engineers" },
    { number: "8", label: "Free AI Tools" },
    { number: "35+", label: "Interview Topics" },
    { number: "25+", label: "Company Prep Guides" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/lets-code-forever/",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.gg/XRBheB9QF9",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/offcampusjobsupdatess",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.24-5.54 3.65-.52.36-.97.53-1.34.52-.41-.01-1.21-.23-1.8-.42-.73-.24-1.32-.37-1.27-.77.03-.21.32-.42.87-.64 3.39-1.47 5.65-2.44 6.77-2.91 3.22-1.34 3.89-1.57 4.33-1.57.1 0 .32.02.46.14.12.1.15.24.16.34.02.09.02.26 0 .31z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811",
      svg: (
        <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.348 5.511 0 12.068 0c3.18 0 6.17 1.24 8.418 3.491 2.246 2.248 3.481 5.239 3.479 8.419-.004 6.557-5.355 11.907-11.91 11.907-2.013 0-3.989-.513-5.732-1.49l-6.266 1.673zm6.59-3.807c1.562.928 3.11 1.4 4.901 1.4 5.399 0 9.795-4.394 9.799-9.793.002-2.612-1.012-5.07-2.859-6.918C16.639 3.033 14.178 2 11.56 2 6.161 2 1.766 6.395 1.762 11.794c-.001 1.892.493 3.748 1.433 5.4l-.999 3.648 3.851-.995z" />
        </svg>
      ),
    },
  ];

  const tools = [
    {
      id: "score",
      name: "Job Ready Score",
      badge: "100 pt score",
      color: "#F97316",
      icon: Trophy,
    },
    {
      id: "interview",
      name: "Mock Interview",
      badge: "35+ topics",
      color: "#3B82F6",
      icon: Brain,
    },
    {
      id: "resume",
      name: "AI Resume Studio",
      badge: "95% ATS pass rate",
      color: "#10B981",
      icon: FileSearch,
    },
    {
      id: "linkedin",
      name: "LinkedIn Optimizer",
      badge: "3.5x more views",
      color: "#06B6D4",
      icon: Sparkles,
    },
    {
      id: "jobfinder",
      name: "AI Job Finder",
      badge: "Should I Apply? Engine",
      color: "#8B5CF6",
      icon: Search,
    },
    {
      id: "coverletter",
      name: "Cover Letter AI",
      badge: "8-10 keywords",
      color: "#EC4899",
      icon: FileText,
    },
    {
      id: "tracker",
      name: "Job Tracker",
      badge: "Kanban + List view",
      color: "#14B8A6",
      icon: Briefcase,
    },
    {
      id: "github",
      name: "GitHub Optimizer",
      badge: "100 pt score",
      color: "#64748B",
      icon: Github,
    },
  ];

  const handleToolClick = (toolId: string) => {
    const el = document.getElementById("ai-tools");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    const event = new CustomEvent("select-ai-tool", { detail: { toolId } });
    window.dispatchEvent(event);
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-12 md:py-20 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Slogan, Actions & Statistics */}
      <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
        {/* Animated Badge — Telusko pastel style */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-space-grotesk font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/40"
          style={{ border: "1.5px solid #6366f1", borderRadius: "4px", boxShadow: "2px 2px 0px #6366f1" }}
        >
          <Star size={12} className="fill-indigo-500 text-indigo-500" />
          <span>Trusted by 1,00,000+ Engineers</span>
        </div>

        {/* Hero Slogan — Bebas Neue like Telusko */}
        <h1 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-none tracking-wide mb-2" style={{ letterSpacing: "0.03em" }}>
          Everything You Need
        </h1>
        <div className="mb-3">
          <span className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none" style={{ letterSpacing: "0.03em", color: "#4F46E5" }}>to Land Your Dream</span>
          <br />
          <span className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none text-foreground" style={{ letterSpacing: "0.03em" }}>Tech Job</span>
        </div>

        {/* Caveat script subtitle — Telusko handwriting style */}
        <p className="font-caveat text-xl md:text-2xl text-muted-foreground mb-2" style={{ fontWeight: 600 }}>
          learn at your own{" "}
          <span
            className="text-foreground px-2 py-0.5 inline-block"
            style={{ background: "#FFD24D", borderRadius: "3px", color: "#111" }}
          >
            pace
          </span>
        </p>

        {/* Description — DM Sans clean body */}
        <p className="font-dm-sans text-muted-foreground text-sm md:text-base mb-8 leading-relaxed max-w-xl">
          8 free AI career tools, 1000+ interview resources, company prep guides,
          job tracker, and a community of 1 lakh+ engineers &mdash; all in one place.
        </p>

        {/* CTAs — Telusko neo-brutalist buttons */}
        <div className="flex flex-row flex-wrap gap-4 mb-6 justify-center lg:justify-start">
          <a
            onClick={() => handleToolClick("score")}
            className="neo-btn inline-flex items-center justify-center font-space-grotesk font-bold gap-2 px-6 py-3 text-sm cursor-pointer text-white"
            style={{ background: "#2563eb", border: "2px solid #1d4ed8", boxShadow: "4px 4px 0px #1d4ed8" }}
          >
            <Trophy size={16} />
            <span>Check Job Ready Score</span>
          </a>

          <a
            onClick={() => handleToolClick("interview")}
            className="neo-btn inline-flex items-center justify-center font-space-grotesk font-semibold gap-2 px-6 py-3 text-sm cursor-pointer bg-background text-foreground"
          >
            <Brain size={16} />
            <span>Start Mock Interview</span>
          </a>
        </div>

        {/* Social Icons Panel */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-card/40 border border-border/60 flex items-center justify-center text-muted-foreground hover:text-indigo-400 hover:border-indigo-500/50 hover:scale-108 transition-all duration-150"
              title={social.name}
            >
              {social.svg}
            </a>
          ))}
        </div>

        {/* Stats Grid — Telusko neo-brutalist cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full mt-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="neo-card bg-card p-4 flex flex-col justify-center items-center text-center select-none"
            >
              <div className="font-bebas text-2xl md:text-3xl text-foreground mb-0.5" style={{ letterSpacing: "0.04em" }}>
                {stat.number}
              </div>
              <div className="font-space-grotesk text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Free AI Career Tools Widget — Telusko-style */}
      <div className="lg:col-span-5 w-full flex justify-center">
        <div
          className="w-full max-w-md bg-card p-5 flex flex-col gap-4"
          style={{ border: "2px solid", borderColor: "var(--border)", borderRadius: "8px", boxShadow: "6px 6px 0px rgba(0,0,0,0.15)" }}
        >
          <div>
            <div className="font-space-grotesk text-[10px] text-muted-foreground font-extrabold uppercase tracking-widest px-1">
              8 Free AI Career Tools
            </div>
          </div>

          {/* List of 8 Tools */}
          <div className="flex flex-col gap-2">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <button
                  key={tool.id}
                  onClick={() => handleToolClick(tool.id)}
                  className="group flex items-center gap-3 p-2.5 rounded-xl border border-border/20 bg-card/20 hover:bg-accent/40 w-full text-left transition-all duration-150 select-none cursor-pointer"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 shadow-md transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: tool.color }}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs lg:text-sm font-bold text-foreground leading-snug group-hover:text-indigo-400 transition-colors">
                      {tool.name}
                    </div>
                    <div className="text-[10px] text-muted-foreground truncate leading-none mt-0.5">
                      {tool.badge}
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all ml-auto" />
                </button>
              );
            })}
          </div>

          {/* Bottom toolkit link — Telusko CTA button */}
          <button
            onClick={() => handleToolClick("score")}
            className="neo-btn flex items-center justify-center gap-2 font-space-grotesk font-bold py-3 px-4 text-xs cursor-pointer text-white"
            style={{ background: "#2563eb", border: "2px solid #1d4ed8", boxShadow: "4px 4px 0px #1d4ed8" }}
          >
            <span>Open AI Toolkit</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
