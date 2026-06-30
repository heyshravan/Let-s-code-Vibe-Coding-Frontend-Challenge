"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Channel {
  id: string;
  name: string;
  desc: string;
  members: string;
  color: string;
}

export default function Community() {
  const [joined, setJoined] = useState<Record<string, boolean>>({});

  const channels: Channel[] = [
    { id: "dsa", name: "dsa-masters", desc: "Master Data Structures & Algorithms with daily problems and coding discussions.", members: "42.8K", color: "#6366f1" },
    { id: "web", name: "full-stack-hub", desc: "Connect with full stack developers and learn modern web development frameworks.", members: "31.2K", color: "#ff9900" },
    { id: "cloud", name: "cloud-ops", desc: "Explore AWS, Azure, GCP, Kubernetes, and cloud-native architecture concepts.", members: "15.4K", color: "#0ea5e9" },
    { id: "os", name: "open-source", desc: "Contribute to open source projects, build portfolios, and collaborate on Git.", members: "12.9K", color: "#10b981" },
    { id: "ml", name: "ai-ml-engineers", desc: "Discuss AI, Machine Learning, Deep Learning models, and NLP frameworks.", members: "22.5K", color: "#14b8a6" },
    { id: "data", name: "data-science", desc: "Learn data analysis, visualizations, statistical modeling, and Python scripting.", members: "18.1K", color: "#f59e0b" },
    { id: "cyber", name: "cyber-security", desc: "Explore security concepts, pen-testing, ethical hacking, and best security practices.", members: "14.2K", color: "#ef4444" },
    { id: "qa", name: "qa-testing", desc: "Connect with QA engineers, learn automation testing, Selenium, and Jest.", members: "9.5K", color: "#ec4899" },
  ];

  const handleJoin = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setJoined((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="community" className="relative max-w-7xl mx-auto px-6 py-20 border-b border-border/40 z-10">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <div
          className="inline-flex items-center px-3 py-1 text-xs font-space-grotesk font-bold uppercase tracking-wider text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 mb-4"
          style={{ border: "1.5px solid #22c55e", borderRadius: "4px", boxShadow: "2px 2px 0px #22c55e" }}
        >
          Community
        </div>
        <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4" style={{ letterSpacing: "0.03em" }}>
          Join Our Tech Communities
        </h2>
        <p className="font-dm-sans text-muted-foreground text-sm md:text-base leading-relaxed">
          Connect with like-minded developers in your area of interest.
          Free to join &bull; 24/7 Support &bull; Instant Discord Access.
        </p>
      </div>

      {/* Channels Grid — neo-brutalist cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {channels.map((ch) => {
          const isJoined = joined[ch.id];
          return (
            <div
              key={ch.id}
              onClick={(e) => handleJoin(ch.id, e)}
              className="p-5 flex flex-col justify-between gap-5 cursor-pointer select-none transition-all duration-150 hover:translate-y-[-2px]"
              style={{
                borderTop: `3px solid ${ch.color}`,
                borderRight: "2px solid var(--border)",
                borderBottom: "2px solid var(--border)",
                borderLeft: "2px solid var(--border)",
                borderRadius: "8px",
                boxShadow: `4px 4px 0px ${ch.color}`,
                background: "var(--card)",
              }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 flex items-center justify-center font-mono text-xl font-extrabold"
                  style={{
                    color: ch.color,
                    border: `2px solid ${ch.color}`,
                    borderRadius: "6px",
                    boxShadow: `2px 2px 0px ${ch.color}`,
                    background: "var(--background)",
                  }}
                >
                  #
                </div>
                <span
                  className="font-space-grotesk text-[9px] font-bold text-muted-foreground px-2 py-0.5"
                  style={{ border: "1px solid var(--border)", borderRadius: "4px", background: "var(--muted)" }}
                >
                  {ch.members} online
                </span>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-space-grotesk text-sm font-bold text-foreground mb-1.5">{ch.name}</h3>
                <p className="font-dm-sans text-xs text-muted-foreground leading-relaxed">{ch.desc}</p>
              </div>

              {/* Join button */}
              <button
                onClick={(e) => handleJoin(ch.id, e)}
                className="w-full py-2 text-xs font-space-grotesk font-bold flex items-center justify-center gap-1 transition-all duration-150"
                style={
                  isJoined
                    ? {
                        border: "2px solid #22c55e",
                        borderRadius: "6px",
                        boxShadow: "2px 2px 0px #22c55e",
                        color: "#22c55e",
                        background: "#f0fdf4",
                      }
                    : {
                        border: `2px solid ${ch.color}`,
                        borderRadius: "6px",
                        boxShadow: `3px 3px 0px ${ch.color}`,
                        color: "white",
                        background: ch.color,
                      }
                }
              >
                {isJoined ? (
                  <>
                    <Check size={12} />
                    <span>Joined</span>
                  </>
                ) : (
                  <span>Join Channel</span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
