"use client";

import { useState } from "react";
import {
  Trophy,
  Brain,
  FileSearch,
  Sparkles,
  Search,
  FileText,
  Briefcase,
  Github,
  Check,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

type ToolId =
  | "score"
  | "interview"
  | "resume"
  | "linkedin"
  | "jobfinder"
  | "coverletter"
  | "tracker"
  | "github";

interface Tool {
  id: ToolId;
  name: string;
  desc: string;
  badge: string;
  color: string;
  icon: any;
}

export default function AIToolkit() {
  const [activeTool, setActiveTool] = useState<ToolId>("score");

  const tools: Tool[] = [
    {
      id: "score",
      name: "Job Ready Score",
      desc: "Brutally honest AI score on your resume, LinkedIn & GitHub &mdash; with a 90-day action plan.",
      badge: "100 pt score",
      color: "#f59e0b",
      icon: Trophy,
    },
    {
      id: "interview",
      name: "Mock Interview",
      desc: "AI-generated MCQ tests across 35+ topics &mdash; DSA, CS fundamentals, aptitude & more.",
      badge: "35+ topics",
      color: "#6366f1",
      icon: Brain,
    },
    {
      id: "resume",
      name: "AI Resume Studio",
      desc: "Score, edit & AI-improve your resume in one flow &mdash; download as PDF or DOC.",
      badge: "95% ATS pass rate",
      color: "#10b981",
      icon: FileSearch,
    },
    {
      id: "linkedin",
      name: "LinkedIn Optimizer",
      desc: "AI suggestions to improve headline, summary & skills so recruiters find you first.",
      badge: "3.5x more views",
      color: "#0ea5e9",
      icon: Sparkles,
    },
    {
      id: "jobfinder",
      name: "AI Job Finder",
      desc: "AI searches 5+ live job boards, scores every job by fit, and tells you whether to apply.",
      badge: "Should I Apply?",
      color: "#8b5cf6",
      icon: Search,
    },
    {
      id: "coverletter",
      name: "Cover Letter AI",
      desc: "Paste resume & JD &mdash; AI writes an ATS-optimised cover letter with keywords in seconds.",
      badge: "8-10 keywords",
      color: "#d946ef",
      icon: FileText,
    },
    {
      id: "tracker",
      name: "Job Tracker",
      desc: "Track every application in one Kanban board &mdash; status updates, interview prep links.",
      badge: "Kanban & List views",
      color: "#10b981",
      icon: Briefcase,
    },
    {
      id: "github",
      name: "GitHub Optimizer",
      desc: "Enter any GitHub username and get a full AI review &mdash; profile score, repo analysis.",
      badge: "100 pt score",
      color: "#374151",
      icon: Github,
    },
  ];

  // Interactive States
  const [sliderScore, setSliderScore] = useState(65);
  const [quizSelected, setQuizSelected] = useState<number | null>(null);
  const [resumeTemplate, setResumeTemplate] = useState("campus");
  const [linkedinHeadline, setLinkedinHeadline] = useState("Student at College of Engineering");
  const [linkedinOptimized, setLinkedinOptimized] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("react");
  const [coverLetterInputs, setCoverLetterInputs] = useState({
    title: "Software Engineer",
    company: "Razorpay",
    keywords: "React, TypeScript",
  });
  const [generatedLetter, setGeneratedLetter] = useState("");
  const [kanbanCards, setKanbanCards] = useState([
    { id: 1, company: "Google", role: "SWE Intern", col: "interview" },
    { id: 2, company: "TCS", role: "Ninja Developer", col: "applied" },
    { id: 3, company: "Razorpay", role: "Frontend Engineer", col: "offer" },
  ]);
  const [githubUsername, setGithubUsername] = useState("alex_codes");
  const [githubResults, setGithubResults] = useState<any>(null);
  const [githubLoading, setGithubLoading] = useState(false);

  const getActionPlan = (score: number) => {
    if (score < 45) return "Urgent: Add at least 2 major projects. Re-write resume bullet points using XYZ format. Add 5 core skills.";
    if (score < 75) return "Ready to apply: Solve 50+ DSA problems. Update LinkedIn headline to include target roles. Start networking.";
    return "Top 10%: Start cold emailing managers. Practice mock interviews daily. Set up application tracker.";
  };

  const handleQuizOption = (index: number) => {
    setQuizSelected(index);
  };

  const handleLinkedinOptimize = () => {
    setLinkedinOptimized(true);
    setLinkedinHeadline("Full Stack Engineer | React & Node.js Expert | ex-Google Intern | Building scalable Web Apps");
  };

  const handleGenerateLetter = () => {
    setGeneratedLetter(`Dear Hiring Manager at ${coverLetterInputs.company},

I am writing to express my interest in the ${coverLetterInputs.title} position. With my expertise in ${coverLetterInputs.keywords}, I am confident in my ability to contribute to your team. 

During my previous work, I focused on building high-performance modules and optimizing front-end performance. I look forward to bringing this experience to ${coverLetterInputs.company}.

Sincerely,
Candidate`);
  };

  const handleMoveKanban = (id: number) => {
    setKanbanCards(
      kanbanCards.map((c) => {
        if (c.id === id) {
          const nextCol = c.col === "applied" ? "interview" : c.col === "interview" ? "offer" : "applied";
          return { ...c, col: nextCol };
        }
        return c;
      })
    );
  };

  const handleGithubAnalyze = () => {
    setGithubLoading(true);
    setTimeout(() => {
      setGithubResults({
        score: 84,
        repos: 18,
        stars: 42,
        commits: 340,
        tips: "Optimize repository descriptions. Add a detailed profile README.md.",
      });
      setGithubLoading(false);
    }, 800);
  };

  const currentTool = tools.find((t) => t.id === activeTool)!;

  return (
    <section id="ai-tools" className="relative max-w-7xl mx-auto px-6 py-20 border-b border-border/40 z-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <div
          className="inline-flex items-center px-3 py-1 text-xs font-space-grotesk font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 mb-4"
          style={{ border: "1.5px solid #6366f1", borderRadius: "4px", boxShadow: "2px 2px 0px #6366f1" }}
        >
          AI Career Tools
        </div>
        <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4" style={{ letterSpacing: "0.03em" }}>
          Get Hired Faster with AI
        </h2>
        <p className="font-dm-sans text-muted-foreground text-sm md:text-base leading-relaxed">
          Eight free tools built to crack placements &mdash; resume builder, mock
          tests, ATS scanner, job finder, cover letter, job tracker and more.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
        {/* Left Tool List — Telusko neo-brutalist cards */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            const isActive = activeTool === tool.id;
            return (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
                className={`group flex items-center gap-3 p-3 lg:p-4 w-full text-left cursor-pointer transition-all duration-150 select-none`}
                style={{
                  background: isActive ? "var(--card)" : "transparent",
                  border: isActive ? `2px solid ${tool.color}` : "2px solid var(--border)",
                  borderRadius: "6px",
                  boxShadow: isActive ? `4px 4px 0px ${tool.color}` : "2px 2px 0px var(--border)",
                  transform: isActive ? "translate(-1px, -1px)" : "none",
                }}
              >
                {/* Icon block */}
                <div
                  className="w-10 h-10 rounded flex items-center justify-center text-white shrink-0"
                  style={{
                    backgroundColor: tool.color,
                    border: "2px solid rgba(0,0,0,0.15)",
                    boxShadow: "2px 2px 0px rgba(0,0,0,0.15)",
                    borderRadius: "4px",
                  }}
                >
                  <Icon size={16} />
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-space-grotesk text-sm font-bold text-foreground leading-tight truncate">
                    {tool.name}
                  </h3>
                  <p
                    className="font-dm-sans text-xs text-muted-foreground leading-snug mt-0.5 line-clamp-1"
                    dangerouslySetInnerHTML={{ __html: tool.desc }}
                  />
                </div>
                {/* Arrow */}
                <ChevronRight
                  size={14}
                  className="shrink-0 text-muted-foreground/40 group-hover:text-foreground transition-colors"
                  style={{ color: isActive ? tool.color : undefined }}
                />
              </button>
            );
          })}
        </div>

        {/* Right Sandbox Panel — Telusko-style */}
        <div
          className="lg:col-span-7 order-1 lg:order-2 bg-card min-h-[420px] lg:sticky lg:top-24 flex flex-col"
          style={{
            border: "2px solid var(--border)",
            borderRadius: "8px",
            boxShadow: "6px 6px 0px var(--border)",
          }}
        >
          {/* Tool Header */}
          <div
            className="flex items-center gap-4 p-4 md:p-6"
            style={{ borderBottom: "2px solid var(--border)" }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center text-white shrink-0"
              style={{
                backgroundColor: currentTool.color,
                border: "2px solid rgba(0,0,0,0.2)",
                boxShadow: "3px 3px 0px rgba(0,0,0,0.15)",
                borderRadius: "6px",
              }}
            >
              <currentTool.icon size={22} />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-foreground leading-none" style={{ letterSpacing: "0.04em" }}>
                {currentTool.name}
              </h3>
              <p className="font-space-grotesk text-xs text-muted-foreground mt-1 font-semibold uppercase tracking-wider">
                {currentTool.badge}
              </p>
            </div>
          </div>

          {/* Tool Content */}
          <div className="flex-1 p-4 md:p-6 flex flex-col">
            {/* WIDGET 1: SCORE */}
            {activeTool === "score" && (
              <div className="flex flex-col items-center gap-5">
                {/* Score circle — neo-brutalist style */}
                <div
                  className="relative w-36 h-36 rounded-full flex items-center justify-center bg-card"
                  style={{ border: "4px solid var(--border)", boxShadow: "6px 6px 0px var(--border)" }}
                >
                  <div className="text-center">
                    <span className="font-bebas text-6xl text-foreground leading-none" style={{ letterSpacing: "0.02em" }}>
                      {sliderScore}
                    </span>
                    <span className="font-space-grotesk block text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">
                      ATS Score
                    </span>
                  </div>
                </div>
                {/* Slider */}
                <div className="w-full flex flex-col gap-2">
                  <div className="flex justify-between font-space-grotesk text-xs font-semibold text-muted-foreground">
                    <span>Simulate Profile Score</span>
                    <span>{sliderScore}/100</span>
                  </div>
                  <Slider
                    value={[sliderScore]}
                    onValueChange={(val) => setSliderScore(Array.isArray(val) ? val[0] : val)}
                    max={100}
                    min={20}
                    step={1}
                    className="cursor-pointer"
                  />
                </div>
                <div
                  className="w-full p-4 text-xs leading-relaxed"
                  style={{
                    borderLeft: "4px solid #4F46E5",
                    background: "var(--muted)",
                    borderRadius: "0 6px 6px 0",
                    border: "2px solid var(--border)",
                    borderLeftWidth: "4px",
                    borderLeftColor: "#4F46E5",
                  }}
                >
                  <strong className="font-space-grotesk text-foreground text-xs uppercase tracking-wider">90-Day Action Plan:</strong>
                  <p className="font-dm-sans text-muted-foreground mt-1 leading-relaxed">{getActionPlan(sliderScore)}</p>
                </div>
              </div>
            )}

            {/* WIDGET 2: MCQ INTERVIEW */}
            {activeTool === "interview" && (
              <div className="flex flex-col gap-3">
                <p className="text-sm md:text-base font-bold text-foreground mb-2 leading-relaxed">
                  What is the worst-case time complexity of Quick Sort?
                </p>
                {[
                  { label: "A. O(N log N)", val: 0 },
                  { label: "B. O(N²) — Correct answer (poor pivot)", val: 1, correct: true },
                  { label: "C. O(N)", val: 2 },
                ].map((opt) => (
                  <Button
                    key={opt.val}
                    variant={
                      quizSelected === opt.val
                        ? opt.correct
                          ? "default"
                          : "destructive"
                        : "secondary"
                    }
                    onClick={() => handleQuizOption(opt.val)}
                    className={`w-full justify-start text-left p-4 h-auto font-medium rounded-xl border border-border/40 text-xs md:text-sm hover:scale-[1.01] transition-transform duration-100 ${
                      quizSelected === null
                        ? "bg-muted/40 hover:bg-muted text-foreground"
                        : opt.correct
                        ? "bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 border-teal-500/40"
                        : quizSelected === opt.val
                        ? "bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border-rose-500/40"
                        : "opacity-60"
                    }`}
                  >
                    {opt.label}
                  </Button>
                ))}
                {quizSelected !== null && (
                  <span className="text-xs font-bold mt-2 text-center text-teal-400">
                    {quizSelected === 1 ? "✓ Correct! Good understanding of pivot choices." : "✗ Incorrect. The worst-case is O(N²)."}
                  </span>
                )}
              </div>
            )}

            {/* WIDGET 3: AI RESUME STUDIO */}
            {activeTool === "resume" && (
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 h-full">
                <div className="sm:col-span-4 flex flex-col gap-1.5">
                  <span className="text-xs font-bold text-muted-foreground mb-1">Templates</span>
                  {["classic", "campus", "sigma", "harvard"].map((temp) => (
                    <Button
                      key={temp}
                      variant={resumeTemplate === temp ? "default" : "secondary"}
                      onClick={() => setResumeTemplate(temp)}
                      className="justify-start text-xs font-bold h-9 capitalize"
                    >
                      {temp}
                    </Button>
                  ))}
                </div>
                <div
                  className="sm:col-span-8 bg-white text-slate-900 rounded-xl p-5 shadow-lg max-h-[280px] overflow-y-auto leading-normal text-[10px]"
                  style={{
                    fontFamily:
                      resumeTemplate === "classic"
                        ? "serif"
                        : resumeTemplate === "campus"
                        ? "sans-serif"
                        : resumeTemplate === "sigma"
                        ? "monospace"
                        : "Georgia, serif",
                    borderTop: resumeTemplate === "sigma" ? "4px solid #10b981" : "none",
                  }}
                >
                  <h4 className="text-center font-bold uppercase text-[12px]">John Doe</h4>
                  <p className="text-center text-[8px] text-slate-500">
                    john@example.com | github.com/johndoe | +91 99999 88888
                  </p>
                  <div className="h-px bg-slate-200 my-2" />
                  <strong>EDUCATION</strong>
                  <div className="flex justify-between font-bold">
                    <span>B.Tech in Computer Science</span>
                    <span>GPA: 9.1</span>
                  </div>
                  <strong className="block mt-2">EXPERIENCE</strong>
                  <div className="font-bold">Software Engineer Intern — TechCorp</div>
                  <ul className="list-disc pl-4 mt-0.5 space-y-0.5 text-slate-700">
                    <li>Built a dashboard reducing latency by 20% using React</li>
                    <li>Collaborated in agile team of 5 developers</li>
                  </ul>
                </div>
              </div>
            )}

            {/* WIDGET 4: LINKEDIN OPTIMIZER */}
            {activeTool === "linkedin" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">Current Headline</label>
                  <Input
                    type="text"
                    value={linkedinHeadline}
                    onChange={(e) => setLinkedinHeadline(e.target.value)}
                    disabled={linkedinOptimized}
                    className="bg-muted/40 text-xs md:text-sm"
                  />
                </div>
                <Button
                  onClick={handleLinkedinOptimize}
                  disabled={linkedinOptimized}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold gap-2"
                >
                  <Sparkles size={16} />
                  <span>Optimize Headline</span>
                </Button>
                {linkedinOptimized && (
                  <div className="bg-teal-500/10 border border-teal-500/20 p-4 rounded-xl text-xs leading-normal">
                    <strong className="text-teal-400">Optimized headline suggestion:</strong>
                    <p className="text-foreground mt-1 font-medium">{linkedinHeadline}</p>
                  </div>
                )}
              </div>
            )}

            {/* WIDGET 5: JOB FINDER */}
            {activeTool === "jobfinder" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["react", "python", "sql", "devops"].map((skill) => (
                    <Button
                      key={skill}
                      variant={selectedSkill === skill ? "default" : "secondary"}
                      onClick={() => setSelectedSkill(skill)}
                      className="text-xs font-bold px-3 py-1.5 h-auto capitalize"
                    >
                      {skill}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  {selectedSkill === "react" && (
                    <>
                      <div className="bg-muted/30 border border-border/40 p-3 rounded-lg flex items-center justify-between text-xs">
                        <div>
                          <strong className="block text-foreground">Frontend Engineer — Razorpay</strong>
                          <span className="text-muted-foreground">Bangalore • 95% Skill Match</span>
                        </div>
                        <ChevronRight size={14} className="text-muted-foreground" />
                      </div>
                      <div className="bg-muted/30 border border-border/40 p-3 rounded-lg flex items-center justify-between text-xs">
                        <div>
                          <strong className="block text-foreground">React Developer — Goldman Sachs</strong>
                          <span className="text-muted-foreground">Remote • 84% Skill Match</span>
                        </div>
                        <ChevronRight size={14} className="text-muted-foreground" />
                      </div>
                    </>
                  )}
                  {selectedSkill === "python" && (
                    <>
                      <div className="bg-muted/30 border border-border/40 p-3 rounded-lg flex items-center justify-between text-xs">
                        <div>
                          <strong className="block text-foreground">Data Analyst — Swiggy</strong>
                          <span className="text-muted-foreground">Pune • 90% Skill Match</span>
                        </div>
                        <ChevronRight size={14} className="text-muted-foreground" />
                      </div>
                    </>
                  )}
                  {selectedSkill === "sql" && (
                    <div className="bg-muted/30 border border-border/40 p-3 rounded-lg flex items-center justify-between text-xs">
                      <div>
                        <strong className="block text-foreground">Database Administrator — Atlassian</strong>
                        <span className="text-muted-foreground">Remote • 88% Skill Match</span>
                      </div>
                      <ChevronRight size={14} className="text-muted-foreground" />
                    </div>
                  )}
                  {selectedSkill === "devops" && (
                    <div className="bg-muted/30 border border-border/40 p-3 rounded-lg flex items-center justify-between text-xs">
                      <div>
                        <strong className="block text-foreground">Cloud Engineer — Amazon</strong>
                        <span className="text-muted-foreground">Bangalore • 92% Skill Match</span>
                      </div>
                      <ChevronRight size={14} className="text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* WIDGET 6: COVER LETTER */}
            {activeTool === "coverletter" && (
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-muted-foreground">Job Title</label>
                    <Input
                      type="text"
                      value={coverLetterInputs.title}
                      onChange={(e) => setCoverLetterInputs({ ...coverLetterInputs, title: e.target.value })}
                      className="bg-muted/40 text-xs"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-muted-foreground">Company</label>
                    <Input
                      type="text"
                      value={coverLetterInputs.company}
                      onChange={(e) => setCoverLetterInputs({ ...coverLetterInputs, company: e.target.value })}
                      className="bg-muted/40 text-xs"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-muted-foreground">Keywords</label>
                  <Input
                    type="text"
                    value={coverLetterInputs.keywords}
                    onChange={(e) => setCoverLetterInputs({ ...coverLetterInputs, keywords: e.target.value })}
                    className="bg-muted/40 text-xs"
                  />
                </div>
                <Button onClick={handleGenerateLetter} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Generate Cover Letter
                </Button>
                {generatedLetter && (
                  <Textarea
                    readOnly
                    rows={4}
                    value={generatedLetter}
                    className="bg-muted/40 text-xs font-mono resize-none p-3 border-border/40"
                  />
                )}
              </div>
            )}

            {/* WIDGET 7: KANBAN TRACKER */}
            {activeTool === "tracker" && (
              <div className="grid grid-cols-3 gap-2 flex-1">
                {["applied", "interview", "offer"].map((colName) => (
                  <div key={colName} className="bg-muted/30 border border-border/40 rounded-xl p-2.5 flex flex-col gap-2">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block border-b border-border/40 pb-1 mb-1">
                      {colName}
                    </span>
                    {kanbanCards
                      .filter((c) => c.col === colName)
                      .map((c) => (
                        <div
                          key={c.id}
                          onClick={() => handleMoveKanban(c.id)}
                          className={`bg-card/40 border border-border/40 rounded-lg p-2 cursor-pointer select-none hover:border-indigo-500/50 hover:bg-card transition-all duration-200`}
                        >
                          <h5 className="text-[10px] font-bold text-foreground leading-tight">{c.company}</h5>
                          <p className="text-[9px] text-muted-foreground leading-normal mt-0.5">{c.role}</p>
                          <span className="text-[8px] text-indigo-400 font-semibold block mt-1.5 flex items-center gap-0.5">
                            {colName === "offer" ? "Reset" : "Advance"} <ChevronRight size={8} />
                          </span>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            )}

            {/* WIDGET 8: GITHUB OPTIMIZER */}
            {activeTool === "github" && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-muted-foreground">GitHub Username</label>
                  <Input
                    type="text"
                    value={githubUsername}
                    onChange={(e) => setGithubUsername(e.target.value)}
                    className="bg-muted/40 text-xs"
                  />
                </div>
                <button
                  onClick={handleGithubAnalyze}
                  disabled={githubLoading}
                  className="neo-btn font-space-grotesk font-bold text-sm px-4 py-2 text-white disabled:opacity-50"
                  style={{ background: "#4F46E5", border: "2px solid #312e81", boxShadow: "3px 3px 0px #312e81" }}
                >
                  {githubLoading ? "Analyzing profile..." : "Analyze Profile"}
                </button>
                {githubResults && (
                  <div className="bg-muted/30 border border-border/40 rounded-xl p-4 grid grid-cols-2 gap-3 text-xs">
                    <div><strong>Profile Score:</strong> {githubResults.score}/100</div>
                    <div><strong>Total Commits:</strong> {githubResults.commits}</div>
                    <div><strong>Public Repos:</strong> {githubResults.repos}</div>
                    <div><strong>Total Stars:</strong> {githubResults.stars}</div>
                    <div className="col-span-2 border-t border-border/40 pt-2 mt-1">
                      <strong className="text-teal-400">Optimization Tip:</strong>
                      <p className="text-muted-foreground mt-0.5 leading-relaxed">{githubResults.tips}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
