"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

interface MarqueeTrackProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function MarqueeTrack({ children, speed = 40, className }: MarqueeTrackProps) {
  const [paused, setPaused] = useState(false);

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex items-center gap-12 marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
