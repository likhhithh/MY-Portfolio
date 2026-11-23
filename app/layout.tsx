import type { Metadata, Viewport } from "next";
import {
  Inter,
  Antonio,
  Abril_Fatface,
  Playfair_Display,
  Special_Elite,
  Alfa_Slab_One,
  IBM_Plex_Mono,
  Caveat,
} from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import SocialRail from "@/components/SocialRail";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
  weight: ["400", "700"],
  display: "swap",
});

// Cut-out "ransom note" letter fonts + mono for the hero search bar
const abril = Abril_Fatface({ subsets: ["latin"], weight: "400", variable: "--font-abril", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], weight: ["700", "900"], variable: "--font-playfair", display: "swap" });
const specialElite = Special_Elite({ subsets: ["latin"], weight: "400", variable: "--font-special", display: "swap" });
const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", variable: "--font-alfa", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-caveat", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Likhith M — AI/ML Engineer & Full-Stack Builder",
    template: "%s · Likhith M",
  },
  description:
    "I build intelligent systems, full-stack products, and ML pipelines that go from idea to production. Based in India, open to remote.",
  authors: [{ name: "Likhith M", url: "https://github.com/likhhithh" }],
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Full-Stack Developer",
    "Next.js",
    "PyTorch",
    "LLM",
    "India",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Likhith M — AI/ML Engineer & Full-Stack Builder",
    description:
      "I build intelligent systems, full-stack products, and ML pipelines that go from idea to production.",
    siteName: "Likhith M",
  },
  twitter: {
    card: "summary_large_image",
    title: "Likhith M — AI/ML Engineer & Full-Stack Builder",
    description:
      "I build intelligent systems, full-stack products, and ML pipelines that go from idea to production.",
    creator: "@likhhithh",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ebe7de",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${antonio.variable} ${abril.variable} ${playfair.variable} ${specialElite.variable} ${alfa.variable} ${plexMono.variable} ${caveat.variable}`}
    >
      <body>
        <CustomCursor />
        <SocialRail />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
