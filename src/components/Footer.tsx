"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const resourceLinks = [
    { name: "DSA Roadmap", href: "#learn" },
    { name: "Mock Interview", href: "#ai-tools" },
    { name: "AI Job Finder", href: "#ai-tools" },
    { name: "Cover Letter", href: "#ai-tools" },
    { name: "Startup Jobs", href: "#jobs" },
  ];

  const exploreLinks = [
    { name: "Feed", href: "#" },
    { name: "Contests", href: "#" },
    { name: "Startups", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Interview Experiences", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  const legalLinks = [
    { name: "About Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <footer className="w-full bg-background border-t border-border/40 py-12 md:py-16 text-muted-foreground transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Logo — Official Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0 w-fit">
              <div
                className="w-10 h-10 overflow-hidden flex items-center justify-center bg-[#111]"
                style={{
                  border: "2px solid #111",
                  boxShadow: "3px 3px 0px #111",
                  borderRadius: "4px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icon.webp"
                  alt="Let's Code Logo"
                  className="w-full h-full object-cover scale-150 transform translate-y-[2px]"
                />
              </div>
              <span className="font-bebas text-xl tracking-wider text-foreground group-hover:text-indigo-500 transition-colors" style={{ letterSpacing: "0.05em" }}>
                Let&apos;s Code
              </span>
            </Link>
            <p className="font-dm-sans text-xs md:text-sm text-muted-foreground leading-relaxed">
              Democratizing tech education and placement prep. Helping engineering
              students learn DSA, practice mock tests, scan resumes, and crack placements.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <h4 className="font-space-grotesk text-xs font-bold text-foreground uppercase tracking-wider">Stay Updated</h4>
              {subscribed ? (
                <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold mt-1">
                  <Check size={14} />
                  <span>Subscribed Successfully!</span>
                </div>
              ) : (
                <form className="flex gap-2 max-w-sm" onSubmit={handleSubscribe}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-card/25 border-border/40 text-xs h-9 placeholder:text-muted-foreground/60 font-dm-sans"
                  />
                  <button
                    type="submit"
                    className="neo-btn flex items-center gap-1 px-4 h-9 font-space-grotesk font-bold text-xs text-white"
                    style={{ background: "#4F46E5", border: "2px solid #312e81", boxShadow: "3px 3px 0px #312e81" }}
                  >
                    <Mail size={12} />
                    <span>Join</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Column 1: Resources */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Resources</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Explore */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Explore</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-foreground uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row gap-4 items-center justify-between text-[11px]">
          <span className="text-muted-foreground/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} Let&apos;s Code. Built with Next.js, Tailwind v4, and shadcn/ui.
          </span>
          <div className="flex gap-4">
            <a href="https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-teal-400 transition-colors font-semibold">
              WhatsApp
            </a>
            <a href="https://t.me/offcampusjobsupdatess" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-teal-400 transition-colors font-semibold">
              Telegram
            </a>
            <a href="https://www.linkedin.com/company/lets-code-forever/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-teal-400 transition-colors font-semibold">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
