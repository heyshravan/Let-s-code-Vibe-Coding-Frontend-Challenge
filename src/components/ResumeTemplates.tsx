"use client";

import { useState } from "react";
import { ChevronRight, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Template {
  id: string;
  name: string;
  font: string;
  desc: string;
  color: string;
  borderStyle: string;
}

export default function ResumeTemplates() {
  const [activeTemplate, setActiveTemplate] = useState<string>("campus");

  const templates: Template[] = [
    {
      id: "classic",
      name: "Classic",
      font: "Times New Roman, Georgia, serif",
      desc: "Traditional academic format preferred by finance and legacy enterprises.",
      color: "#1e293b",
      borderStyle: "none",
    },
    {
      id: "executive",
      name: "Executive",
      font: "Georgia, serif",
      desc: "Sleek presentation with left-aligned sections and blue accents.",
      color: "#1e3a8a",
      borderStyle: "4px solid #1e3a8a",
    },
    {
      id: "clean",
      name: "Clean",
      font: "Inter, system-ui, sans-serif",
      desc: "Modern minimalist styling with subtle horizontal lines.",
      color: "#0f172a",
      borderStyle: "none",
    },
    {
      id: "campus",
      name: "Campus",
      font: "Inter, system-ui, sans-serif",
      desc: "Compact design tailored for freshers to fit education and projects.",
      color: "#0d9488",
      borderStyle: "none",
    },
    {
      id: "harvard",
      name: "Harvard",
      font: "Garamond, serif",
      desc: "High-density layout optimized for business roles and Ivy Standard.",
      color: "#991b1b",
      borderStyle: "none",
    },
    {
      id: "sigma",
      name: "Sigma",
      font: "Courier New, monospace",
      desc: "Monospaced technical format highly liked by compilers and tech leads.",
      color: "#059669",
      borderStyle: "6px solid #059669",
    },
  ];

  const current = templates.find((t) => t.id === activeTemplate) || templates[3];

  return (
    <section id="templates" className="relative max-w-7xl mx-auto px-6 py-20 border-b border-border/40 z-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <div
          className="inline-flex items-center px-3 py-1 text-xs font-space-grotesk font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/30 mb-4"
          style={{ border: "1.5px solid #f43f5e", borderRadius: "4px", boxShadow: "2px 2px 0px #f43f5e" }}
        >
          Resume Studio
        </div>
        <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4" style={{ letterSpacing: "0.03em" }}>
          ATS-friendly Resume Templates
        </h2>
        <p className="font-dm-sans text-muted-foreground text-sm md:text-base leading-relaxed">
          6 ATS-friendly templates &mdash; Classic, Campus, Sigma, Harvard and more.
          Fill in your details with live preview and download a PDF instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left selector — neo-brutalist buttons */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 pb-3 lg:pb-0">
          {templates.map((temp) => {
            const isActive = activeTemplate === temp.id;
            return (
              <button
                key={temp.id}
                onClick={() => setActiveTemplate(temp.id)}
                className="flex items-center justify-between px-4 py-3 w-full text-left font-space-grotesk font-bold text-sm transition-all duration-150 shrink-0 lg:shrink"
                style={{
                  background: isActive ? "var(--card)" : "transparent",
                  border: isActive ? `2px solid ${temp.color}` : "2px solid var(--border)",
                  borderRadius: "6px",
                  boxShadow: isActive ? `4px 4px 0px ${temp.color}` : "2px 2px 0px var(--border)",
                  transform: isActive ? "translate(-1px,-1px)" : "none",
                  color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                }}
              >
                <span>{temp.name}</span>
                <ChevronRight size={14} className="hidden lg:block" />
              </button>
            );
          })}
          <div
            className="hidden lg:block mt-auto p-4 text-xs leading-relaxed font-dm-sans text-muted-foreground"
            style={{ border: "1.5px solid var(--border)", borderRadius: "6px", boxShadow: "2px 2px 0px var(--border)" }}
          >
            <strong>Tip:</strong> Technical roles perform best with the <strong>Sigma</strong> or <strong>Campus</strong> templates.
          </div>
        </div>

        {/* Right Preview Sheet — neo-brutalist panel */}
        <div
          className="lg:col-span-8 flex flex-col shadow-lg"
          style={{
            border: `2px solid ${current.color}`,
            borderRadius: "8px",
            boxShadow: `6px 6px 0px ${current.color}`,
            background: "var(--card)",
          }}
        >
          {/* Panel header */}
          <div
            className="flex justify-between items-center px-5 py-3"
            style={{ borderBottom: "2px solid var(--border)" }}
          >
            <span className="font-space-grotesk text-xs font-bold text-foreground">
              Preview:{" "}
              <span style={{ color: current.color }}>{current.name}</span>
              {" — "}
              <span className="text-muted-foreground font-normal">{current.desc}</span>
            </span>
            <button
              className="neo-btn flex items-center gap-1 px-3 py-1.5 text-xs font-space-grotesk font-bold"
              style={{ border: "2px solid var(--border)", boxShadow: "2px 2px 0px var(--border)", borderRadius: "4px" }}
            >
              <FileDown size={12} />
              <span>Download</span>
            </button>
          </div>

          {/* Paper Sheet */}
          <div
            className="m-5 bg-white text-slate-900 p-8 overflow-x-auto leading-normal text-xs transition-all duration-300 min-h-[480px]"
            style={{
              fontFamily: current.font,
              borderRight: "1px solid #e2e8f0",
              borderBottom: "1px solid #e2e8f0",
              borderLeft: "1px solid #e2e8f0",
              borderTop: activeTemplate === "executive" || activeTemplate === "sigma" ? current.borderStyle : "1px solid #e2e8f0",
              fontSize: activeTemplate === "harvard" ? "11px" : "12px",
              borderRadius: "4px",
            }}
          >
            <h2
              className="text-center font-extrabold text-[18px] mb-1"
              style={{
                color: activeTemplate === "executive" || activeTemplate === "harvard" ? current.color : "#0f172a",
                textAlign: activeTemplate === "executive" ? "left" : "center",
                textTransform: activeTemplate === "harvard" ? "uppercase" : "none",
              }}
            >
              Devendra Singh
            </h2>
            <div
              className="flex justify-center gap-2 text-[10px] text-slate-500 font-semibold mb-4 flex-wrap"
              style={{ justifyContent: activeTemplate === "executive" ? "flex-start" : "center" }}
            >
              <span>devendra@letscode.in</span>
              <span>•</span>
              <span>+91 98765 43210</span>
              <span>•</span>
              <span>Bangalore, Karnataka</span>
              <span>•</span>
              <span>github.com/devendra-singh</span>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h3
                className="font-bold text-[13px] uppercase border-b border-slate-200 pb-0.5 mb-2 tracking-wide"
                style={{
                  color: activeTemplate === "executive" || activeTemplate === "sigma" ? current.color : "#0f172a",
                  borderBottomColor: activeTemplate === "harvard" ? "#991b1b" : "#e2e8f0",
                }}
              >
                Education
              </h3>
              <div>
                <div className="flex justify-between font-bold text-slate-900">
                  <span>L.C. Institute of Technology</span>
                  <span>2022 &ndash; 2026</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>B.E in Computer Science &amp; Engineering</span>
                  <span>GPA: 9.4/10</span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-4">
              <h3
                className="font-bold text-[13px] uppercase border-b border-slate-200 pb-0.5 mb-2 tracking-wide"
                style={{
                  color: activeTemplate === "executive" || activeTemplate === "sigma" ? current.color : "#0f172a",
                  borderBottomColor: activeTemplate === "harvard" ? "#991b1b" : "#e2e8f0",
                }}
              >
                Experience
              </h3>
              <div className="mb-3">
                <div className="flex justify-between font-bold text-slate-900">
                  <span>Software Engineer Intern | Razorpay</span>
                  <span>Jan 2025 &ndash; Present</span>
                </div>
                <ul className="list-disc pl-5 mt-1 text-slate-700 space-y-0.5 text-[11px]">
                  <li>Integrated payment gateway modules in mock environments, decreasing processing errors by 12%.</li>
                  <li>Developed responsive front-end dashboard components using React, TypeScript, and CSS Modules.</li>
                  <li>Wrote automated unit test suites covering 85%+ of functional modules.</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3
                className="font-bold text-[13px] uppercase border-b border-slate-200 pb-0.5 mb-2 tracking-wide"
                style={{
                  color: activeTemplate === "executive" || activeTemplate === "sigma" ? current.color : "#0f172a",
                  borderBottomColor: activeTemplate === "harvard" ? "#991b1b" : "#e2e8f0",
                }}
              >
                Skills
              </h3>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                JavaScript, TypeScript, React, Next.js, Node.js, Python, Java, DSA, SQL, Git, REST APIs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
