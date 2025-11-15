"use client";

import { useEffect, useRef } from "react";

export default function MailFlowBackground() {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    const colors = [
      "rgba(99,102,241,0.45)",   // Indigo
      "rgba(56,189,248,0.45)",   // Sky
      "rgba(16,185,129,0.45)",   // Emerald
      "rgba(244,114,182,0.45)",  // Pink
      "rgba(251,191,36,0.45)",   // Amber
      "rgba(147,51,234,0.45)"    // Purple
    ];

    for (let i = 0; i < 6; i++) {
      const line = document.createElement("div");

      line.style.position = "absolute";
      line.style.top = "-150px";
      line.style.left = `${Math.random() * 100}%`;
      line.style.width = `${2 + Math.random() * 4}px`;
      line.style.height = "140px";
      line.style.background = colors[i % colors.length];
      line.style.filter = "blur(8px)";
      line.style.borderRadius = "10px";
      line.style.opacity = 0.8;

      line.style.animation = `mailFlowDown ${4 + Math.random() * 3}s linear infinite`;
      line.style.animationDelay = `${Math.random() * 2}s`;

      container.appendChild(line);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
    />
  );
}