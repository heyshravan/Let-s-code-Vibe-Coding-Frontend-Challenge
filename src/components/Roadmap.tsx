"use client";

import { useState } from "react";
import { BookOpen, Terminal, Zap, Users, Briefcase, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Step {
  num: string;
  label: string;
  title: string;
  desc: string;
  icon: any;
  color: string;
  details: string[];
}

export default function Roadmap() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      num: "01",
      label: "Learn",
      title: "Core Fundamentals",
      desc: "DSA roadmaps, system design, DBMS, OS, React, and ML guides.",
      icon: BookOpen,
      color: "#6366f1",
      details: [
        "Step-by-step DSA learning path for beginners and advanced coders.",
        "System Design fundamentals (Scaling, Sharding, Load Balancers).",
        "DBMS, SQL, Operating Systems, and OOPs placement cheat-sheets.",
        "Front-End (React, Next.js) and Back-End (Node.js) roadmaps.",
      ],
    },
    {
      num: "02",
      label: "Practice",
      title: "Real Company Tests",
      desc: "Mock interviews, company PYQs, and daily DSA challenges.",
      icon: Terminal,
      color: "#14b8a6",
      details: [
        "Previous year questions from TCS, Wipro, Infosys, Amazon, Microsoft.",
        "35+ topic-wise automated MCQ practice tests (DSA, Aptitude, Core CS).",
        "Participate in the 100 Days DSA Challenge and win T-shirts.",
        "Read verified real interview experiences shared by students.",
      ],
    },
    {
      num: "03",
      label: "Optimize",
      title: "AI Profile Tune-up",
      desc: "AI tools for resume review, LinkedIn optimizations, and score analysis.",
      icon: Zap,
      color: "#f59e0b",
      details: [
        "ATS Resume Scan with a detailed score and keyword fixes.",
        "LinkedIn profile tuner to maximize recruiter search visibility.",
        "GitHub repository and profile analyzer for high-quality portfolio.",
        "Personalized 90-day action plan generated automatically.",
      ],
    },
    {
      num: "04",
      label: "Connect",
      title: "Tech Community",
      desc: "16+ regional and tech-specific developer rooms on Discord.",
      icon: Users,
      color: "#ec4899",
      details: [
        "Active daily discussion channels with 1 Lakh+ fellow engineering students.",
        "Peer-to-peer programming groups and mentor matching systems.",
        "City-specific off-campus placement alerts.",
        "Weekly virtual mock coding panels and workshops.",
      ],
    },
    {
      num: "05",
      label: "Apply",
      title: "Land the Offer",
      desc: "Target matched jobs, generate ATS cover letters, and track boards.",
      icon: Briefcase,
      color: "#10b981",
      details: [
        "Search 5+ live job boards using direct applicant links.",
        "Score openings against your profile and review mismatch gaps.",
        "Generate cover letters customized to specific Job Descriptions.",
        "Track job applications from Applied to Interviewing to Offer.",
      ],
    },
  ];

  const currentStep = steps[activeStep];

  return (
    <section id="learn" className="relative max-w-7xl mx-auto px-6 py-20 border-b border-border/40 z-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <div
          className="inline-flex items-center px-3 py-1 text-xs font-space-grotesk font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/30 mb-4"
          style={{ border: "1.5px solid #14b8a6", borderRadius: "4px", boxShadow: "2px 2px 0px #14b8a6" }}
        >
          Placement Pathway
        </div>
        <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4" style={{ letterSpacing: "0.03em" }}>
          From Student to Employed
        </h2>
        <p className="font-dm-sans text-muted-foreground text-sm md:text-base leading-relaxed">
          Every stage of your placement journey &mdash; covered in one platform.
        </p>
      </div>

      {/* Timeline Steps — Telusko neo-brutalist cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="p-5 flex flex-col justify-between gap-4 cursor-pointer text-left w-full transition-all duration-200 select-none"
              style={{
                background: isActive ? "var(--card)" : "var(--background)",
                border: isActive ? `2px solid ${step.color}` : "2px solid var(--border)",
                borderRadius: "8px",
                boxShadow: isActive ? `5px 5px 0px ${step.color}` : "3px 3px 0px var(--border)",
                transform: isActive ? "translate(-2px,-2px)" : "none",
              }}
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-10 h-10 flex items-center justify-center text-white shrink-0"
                  style={{
                    backgroundColor: step.color,
                    border: "2px solid rgba(0,0,0,0.15)",
                    boxShadow: "2px 2px 0px rgba(0,0,0,0.15)",
                    borderRadius: "6px",
                  }}
                >
                  <Icon size={17} />
                </div>
                <span className="font-bebas text-4xl leading-none select-none" style={{ color: `${step.color}22`, letterSpacing: "0.02em" }}>
                  {step.num}
                </span>
              </div>
              <div>
                <span
                  className="font-space-grotesk text-[9px] font-extrabold uppercase tracking-widest block mb-1"
                  style={{ color: step.color }}
                >
                  {step.label}
                </span>
                <h3 className="font-space-grotesk text-sm font-bold text-foreground mb-1">{step.title}</h3>
                <p className="font-dm-sans text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Details Panel — Telusko-style */}
      <div
        className="mt-6 p-5 md:p-6 flex flex-col gap-4"
        style={{
          border: `2px solid ${currentStep.color}`,
          borderRadius: "8px",
          boxShadow: `5px 5px 0px ${currentStep.color}`,
          background: "var(--card)",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 flex items-center justify-center text-white shrink-0"
            style={{
              backgroundColor: currentStep.color,
              border: "2px solid rgba(0,0,0,0.15)",
              boxShadow: "2px 2px 0px rgba(0,0,0,0.15)",
              borderRadius: "6px",
            }}
          >
            <currentStep.icon size={18} />
          </div>
          <div>
            <h3 className="font-space-grotesk text-sm font-bold text-foreground">
              What you do in the{" "}
              <span className="font-extrabold uppercase" style={{ color: currentStep.color }}>
                {currentStep.label}
              </span>{" "}
              phase
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentStep.details.map((detail, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 text-xs md:text-sm"
              style={{
                border: "1.5px solid var(--border)",
                borderRadius: "6px",
                boxShadow: "2px 2px 0px var(--border)",
                background: "var(--muted)",
              }}
            >
              <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: currentStep.color }} />
              <span className="font-dm-sans text-foreground leading-relaxed font-medium">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
