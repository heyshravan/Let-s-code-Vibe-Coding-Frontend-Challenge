import type { Metadata } from "next";
import { Bebas_Neue, Caveat, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Let's Code — Free Placement Prep & DSA Roadmaps for Students",
  description:
    "Let's Code is a free platform helping students crack placement interviews. Get DSA roadmaps, company-wise PYQs, aptitude resources, interview experiences, and 8 free AI career tools.",
  keywords: [
    "placement preparation",
    "DSA roadmap",
    "coding interview",
    "TCS NQT",
    "Infosys",
    "Wipro",
    "previous year questions",
    "aptitude test",
    "interview experience",
    "free placement resources",
    "let's code",
    "letscode",
    "lets-code.co.in",
  ],
  openGraph: {
    title: "Let's Code — Free Placement Prep & DSA Roadmaps",
    description:
      "Free platform for students to crack placement interviews with DSA roadmaps, PYQs, aptitude prep, and interview experiences.",
    type: "website",
    url: "https://lets-code.co.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${caveat.variable} ${dmSans.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <body
        style={{ fontFamily: "var(--font-dm-sans), var(--font-space-grotesk), sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
