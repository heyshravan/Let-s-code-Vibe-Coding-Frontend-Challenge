"use client";

import { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Company {
  name: string;
  domain: string;
  short: string;
  questions: number;
  experiences: number;
  jobs: number;
  color: string;
}

function CompanyLogoImage({ name, color, fallback }: { name: string; color: string; fallback: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span className="font-bebas text-xl font-bold tracking-wider" style={{ color }}>
        {fallback}
      </span>
    );
  }

  const logoUrls: Record<string, string> = {
    Google: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    Amazon: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    TCS: "https://upload.wikimedia.org/wikipedia/commons/9/9b/TATA_Consultancy_Services_Logo.svg",
    Microsoft: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "Goldman Sachs": "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg",
    Nvidia: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    Meta: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    Apple: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    Qualcomm: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Qualcomm-Logo.svg",
    Walmart: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Walmart_logo_%282008%29.svg",
    Wipro: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wipro_new_logo.svg",
    Infosys: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
  };

  const url = logoUrls[name];

  if (!url) {
    return (
      <span className="font-bebas text-xl font-bold tracking-wider" style={{ color }}>
        {fallback}
      </span>
    );
  }

  const darkClasses: Record<string, string> = {
    Apple: "dark:invert",
    Amazon: "dark:brightness-0 dark:invert",
    TCS: "dark:brightness-0 dark:invert",
    Qualcomm: "dark:brightness-0 dark:invert",
    Walmart: "dark:brightness-0 dark:invert",
    Wipro: "dark:brightness-0 dark:invert",
    Infosys: "dark:brightness-0 dark:invert",
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={url}
      alt={`${name} Logo`}
      onError={() => setError(true)}
      className={`w-10 h-10 object-contain ${darkClasses[name] || ""}`}
    />
  );
}


export default function CompanyPrep() {
  const [search, setSearch] = useState("");

  const companies: Company[] = [
    { name: "Google", domain: "google.com", short: "G", questions: 154, experiences: 48, jobs: 12, color: "#4285f4" },
    { name: "Amazon", domain: "amazon.com", short: "AMZ", questions: 182, experiences: 65, jobs: 18, color: "#ff9900" },
    { name: "TCS", domain: "tcs.com", short: "TCS", questions: 95, experiences: 120, jobs: 35, color: "#1e40af" },
    { name: "Microsoft", domain: "microsoft.com", short: "MSFT", questions: 124, experiences: 55, jobs: 14, color: "#737373" },
    { name: "Goldman Sachs", domain: "goldmansachs.com", short: "GS", questions: 78, experiences: 30, jobs: 8, color: "#c39b34" },
    { name: "Nvidia", domain: "nvidia.com", short: "NVDA", questions: 60, experiences: 24, jobs: 9, color: "#76b900" },
    { name: "Meta", domain: "meta.com", short: "META", questions: 110, experiences: 35, jobs: 6, color: "#0081fb" },
    { name: "Apple", domain: "apple.com", short: "APL", questions: 85, experiences: 20, jobs: 5, color: "#111827" },
    { name: "Qualcomm", domain: "qualcomm.com", short: "QCOM", questions: 72, experiences: 18, jobs: 4, color: "#3b82f6" },
    { name: "Walmart", domain: "walmart.com", short: "WMT", questions: 90, experiences: 32, jobs: 10, color: "#ffc220" },
    { name: "Wipro", domain: "wipro.com", short: "WIP", questions: 45, experiences: 85, jobs: 22, color: "#a855f7" },
    { name: "Infosys", domain: "infosys.com", short: "INF", questions: 54, experiences: 90, jobs: 28, color: "#06b6d4" },
  ];

  const filtered = companies.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="companies" className="relative max-w-7xl mx-auto px-6 py-20 border-b border-border/40 z-10">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        <div
          className="inline-flex items-center px-3 py-1 text-xs font-space-grotesk font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 mb-4"
          style={{ border: "1.5px solid #6366f1", borderRadius: "4px", boxShadow: "2px 2px 0px #6366f1" }}
        >
          Company Prep
        </div>
        <h2 className="font-bebas text-5xl md:text-7xl text-foreground mb-4" style={{ letterSpacing: "0.03em" }}>
          Prepare for Any Company in Minutes
        </h2>
        <p className="font-dm-sans text-muted-foreground text-sm md:text-base leading-relaxed">
          One page per company &mdash; PYQs, real interview experiences, open jobs,
          and AI prep tools, all in one place.
        </p>
      </div>

      {/* Search Bar — neo-brutalist style */}
      <div
        className="relative max-w-md mx-auto mb-14 flex items-center"
        style={{ border: "2px solid var(--border)", borderRadius: "8px", boxShadow: "4px 4px 0px var(--border)", background: "var(--card)" }}
      >
        <Search size={16} className="absolute left-3.5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search company (e.g. Google, TCS, Amazon)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 py-5 bg-transparent border-none! font-dm-sans text-xs md:text-sm placeholder:text-muted-foreground/60 focus-visible:ring-0!"
        />
      </div>

      {/* Company Grid — neo-brutalist cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.length > 0 ? (
          filtered.map((company) => (
            <div
              key={company.name}
              className="p-5 flex flex-col items-center text-center cursor-pointer select-none transition-all duration-150 hover:translate-y-[-2px]"
              style={{
                borderTop: `3px solid ${company.color}`,
                borderRight: "2px solid var(--border)",
                borderBottom: "2px solid var(--border)",
                borderLeft: "2px solid var(--border)",
                borderRadius: "8px",
                boxShadow: `4px 4px 0px ${company.color}`,
                background: "var(--card)",
              }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center mb-4 p-2"
                style={{
                  border: `2px solid ${company.color}`,
                  borderRadius: "8px",
                  boxShadow: `3px 3px 0px ${company.color}`,
                  background: "var(--background)",
                }}
              >
                <CompanyLogoImage name={company.name} color={company.color} fallback={company.short} />
              </div>
              <h3 className="font-space-grotesk text-sm font-bold text-foreground mb-3">{company.name}</h3>
              <div className="flex flex-col gap-1 font-dm-sans text-[10px] text-muted-foreground font-semibold mb-4">
                <span>{company.questions} Coding Questions</span>
                <span>{company.experiences} Interview Experiences</span>
                <span>{company.jobs} Open Roles</span>
              </div>
              <div className="font-space-grotesk text-xs font-bold flex items-center gap-0.5 mt-auto" style={{ color: company.color }}>
                <span>View Prep Guide</span>
                <ChevronRight size={12} />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="font-dm-sans text-sm text-muted-foreground">No company guides found matching &quot;{search}&quot;.</p>
            <span className="font-dm-sans text-[10px] text-muted-foreground/60 block mt-1">Try searching for other tech leaders.</span>
          </div>
        )}
      </div>
    </section>
  );
}
