"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X, Zap } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "dark";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "Learn", href: "#learn", pastel: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700" },
    { name: "AI Tools", href: "#ai-tools", pastel: "bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 border-teal-300 dark:border-teal-700" },
    { name: "Resume", href: "#templates", pastel: "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 border-violet-300 dark:border-violet-700" },
    { name: "Company PYQs", href: "#companies", pastel: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700" },
    { name: "Jobs", href: "#jobs", pastel: "bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-700" },
    { name: "Community", href: "#community", pastel: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-300 dark:border-green-700" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-foreground/10 dark:border-white/10 bg-background/95 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 md:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo — Official Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
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
          <span
            className="hidden sm:inline-block font-bebas text-xl tracking-wider text-foreground group-hover:text-indigo-500 transition-colors duration-200"
            style={{ letterSpacing: "0.05em" }}
          >
            Let&apos;s Code
          </span>
        </Link>

        {/* Desktop Navigation — Telusko pastel pill links */}
        <nav className="hidden xl:flex items-center gap-1.5 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-1 rounded text-xs font-space-grotesk font-semibold border transition-all duration-150 active:translate-y-0.5 ${link.pastel}`}
              style={{ boxShadow: "1.5px 1.5px 0px rgba(0,0,0,0.15)" }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded text-foreground hover:bg-muted/50 transition-all border border-border neo-btn"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* AI Toolkit CTA Button — Telusko-style */}
          <Link
            href="#ai-tools"
            className="neo-btn inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-space-grotesk font-bold px-4 py-2 text-sm border-indigo-900! shadow-indigo-800!"
            style={{
              border: "2px solid #312e81",
              boxShadow: "3px 3px 0px #312e81",
            }}
          >
            <Zap size={14} fill="currentColor" />
            <span>AI Toolkit</span>
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded border border-border text-foreground hover:bg-muted/50 transition-all neo-btn"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t-2 border-foreground/10 bg-background px-4 py-4 flex flex-col gap-2 shadow-lg animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2.5 rounded text-sm font-space-grotesk font-semibold border transition-all ${link.pastel}`}
              style={{ boxShadow: "2px 2px 0px rgba(0,0,0,0.1)" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
