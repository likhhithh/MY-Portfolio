import type { Metadata, Viewport } from "next";
import { Inter, Antonio } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

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
  themeColor: "#F5F3EE",
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
      className={`${inter.variable} ${antonio.variable}`}
    >
      <body>
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
