import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AIToolkit from "@/components/AIToolkit";
import Roadmap from "@/components/Roadmap";
import ResumeTemplates from "@/components/ResumeTemplates";
import CompanyPrep from "@/components/CompanyPrep";
import JobMatcher from "@/components/JobMatcher";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-background text-foreground selection:bg-teal-500 selection:text-slate-950">
      {/* Telusko-style subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-30 dark:opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      {/* Subtle gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none z-0" />

      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* 8 AI Toolkit Interactive Sandbox */}
        <AIToolkit />

        {/* Student placement timeline roadmap */}
        <Roadmap />

        {/* ATS Resume Studio previewer switcher */}
        <ResumeTemplates />

        {/* Company interview prep and guides finder */}
        <CompanyPrep />

        {/* Dynamic Job fit finder and updates zone */}
        <JobMatcher />

        {/* Discord Community Server Rooms catalog */}
        <Community />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
