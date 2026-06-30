"use client";

import { useState } from "react";
import { UploadCloud, MessageSquare, Bell, MapPin, ExternalLink, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Job {
  company: string;
  role: string;
  match: number;
  location: string;
  link: string;
}

export default function JobMatcher() {
  const [uploadState, setUploadState] = useState<"idle" | "loading" | "success">("idle");
  const [fileName, setFileName] = useState("");

  const matchedJobs: Job[] = [
    { company: "Razorpay", role: "Software Developer Intern", match: 96, location: "Bangalore (Hybrid)", link: "#" },
    { company: "Atlassian", role: "Graduate Cloud Engineer", match: 91, location: "Remote", link: "#" },
    { company: "Swiggy", role: "Associate Software Engineer", match: 86, location: "Pune", link: "#" },
    { company: "TCS", role: "System Engineer", match: 74, location: "Chennai", link: "#" },
  ];

  const handleSimulatedUpload = () => {
    setUploadState("loading");
    setFileName("Resume_Devendra_Singh_2026.pdf");
    setTimeout(() => {
      setUploadState("success");
    }, 1200);
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadState("idle");
    setFileName("");
  };

  return (
    <section id="jobs" className="relative max-w-7xl mx-auto px-6 py-20 border-b border-border/40 z-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
        <Badge variant="outline" className="bg-teal-500/10! text-teal-400! border-teal-500/20! px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
          Job Matcher
        </Badge>
        <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4" style={{ letterSpacing: "0.03em" }}>
          Get Matched Jobs
        </h2>
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          Drop your PDF resume and Let&apos;s Code AI searches 5+ live job boards &mdash;
          scores every opening by fit, and shows you exactly where to apply.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Dropzone & Mock Matches */}
        <Card className="lg:col-span-7 bg-card/25 border-border/40 p-6 flex flex-col gap-6 shadow-lg shadow-black/20">
          {uploadState === "idle" && (
            <div
              onClick={handleSimulatedUpload}
              className="border-2 border-dashed border-border/60 hover:border-indigo-500/80 rounded-xl p-10 text-center cursor-pointer bg-muted/10 hover:bg-indigo-500/5 transition-all duration-300 flex flex-col items-center justify-center gap-4 select-none"
            >
              <UploadCloud size={44} className="text-indigo-400" />
              <div>
                <p className="text-sm font-bold text-foreground">Click to upload your resume</p>
                <p className="text-xs text-muted-foreground mt-1">Supports PDF, DOCX up to 5MB</p>
              </div>
              <Button variant="secondary" size="sm" className="pointer-events-none mt-2 font-bold">
                Select File
              </Button>
            </div>
          )}

          {uploadState === "loading" && (
            <div className="flex flex-col items-center gap-4 py-10 text-center">
              <div className="w-10 h-10 border-4 border-muted border-t-indigo-500 rounded-full animate-spin"></div>
              <p className="text-sm font-semibold text-foreground">Analyzing {fileName}...</p>
              <p className="text-xs text-muted-foreground">
                Scanning keywords, parsing education, and matching experience against openings
              </p>
            </div>
          )}

          {uploadState === "success" && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-border/40 pb-3">
                <div>
                  <h3 className="text-sm font-extrabold text-foreground">Scan Results for {fileName}</h3>
                  <p className="text-[10px] text-muted-foreground font-semibold">
                    AI matching complete &mdash; Found {matchedJobs.length} matches.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleReset}
                  className="gap-1 px-3 h-8 text-xs font-bold"
                >
                  <RefreshCw size={12} />
                  <span>Upload New</span>
                </Button>
              </div>

              <div className="flex flex-col gap-3">
                {matchedJobs.map((job, idx) => (
                  <Card key={idx} className="bg-accent/30 border-border/40 p-4 flex justify-between items-center hover:border-teal-500/40 transition-colors duration-200">
                    <div>
                      <h4 className="text-xs md:text-sm font-extrabold text-foreground mb-1">{job.role}</h4>
                      <div className="flex gap-2 text-[10px] text-muted-foreground font-bold">
                        <strong>{job.company}</strong>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-teal-500/10 text-teal-400 hover:bg-teal-500/15 border border-teal-500/20 text-xs font-bold px-2 py-0.5">
                        {job.match}% Match
                      </Badge>
                      <a
                        href={job.link}
                        title="Apply Direct"
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "w-8 h-8 text-muted-foreground hover:text-foreground hover:bg-muted/50 p-0 flex items-center justify-center"
                        )}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Right Column: Alert cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* ALERT 1: FREE JOB UPDATES */}
          <Card className="bg-card/20 border-border/40 p-6 flex flex-col gap-4 shadow-md hover:border-teal-500/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-400 shadow-sm border border-teal-500/20">
                <MessageSquare size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Free Job Updates</h4>
                <p className="text-[10px] text-muted-foreground font-semibold">WhatsApp & Telegram Channels</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Get daily job alerts, premium batch-wise notifications &amp; startup
              opportunities across India &mdash; free, no spam, direct apply links.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex-1 text-xs font-bold border-border/60 hover:bg-muted/50 text-foreground py-2 h-auto text-center justify-center flex items-center"
                )}
              >
                Join WhatsApp
              </a>
              <a
                href="https://t.me/offcampusjobsupdatess"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex-1 text-xs font-bold border-sky-500/40 text-sky-400 hover:bg-sky-500/5 py-2 h-auto text-center justify-center flex items-center"
                )}
              >
                Join Telegram
              </a>
            </div>
          </Card>

          {/* ALERT 2: BATCH-WISE PREMIUM */}
          <Card className="bg-card/20 border-border/40 p-6 flex flex-col gap-3 shadow-md hover:border-indigo-500/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400 shadow-sm border border-indigo-500/20">
                <Bell size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Batch-wise Updates</h4>
                <p className="text-[10px] text-muted-foreground font-semibold">Premium placement alerts</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Lifetime exclusive access to batch-wise premium alerts, verified
              off-campus hiring updates, and special study materials.
            </p>
          </Card>

          {/* ALERT 3: STARTUP OPPORTUNITIES */}
          <Card className="bg-card/20 border-border/40 p-6 flex flex-col gap-3 shadow-md hover:border-teal-500/50 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-500/15 flex items-center justify-center text-teal-400 shadow-sm border border-teal-500/20">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">Startup Directory</h4>
                <p className="text-[10px] text-muted-foreground font-semibold">The Ultimate Startup Bundle</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Curated startup opportunities from Bangalore, Hyderabad, Pune, remote &amp; unicorns.
              Access our database of 3,200+ startups in one Google Sheet.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
