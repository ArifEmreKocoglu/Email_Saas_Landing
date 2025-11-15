"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const layer1 = useRef();
  const layer2 = useRef();
  const layer3 = useRef();

  useEffect(() => {
    let t = 0;

    const animate = () => {
      t += 0.008;

      if (layer1.current)
        layer1.current.style.transform = `translateY(${Math.sin(t) * 20}px)`;

      if (layer2.current)
        layer2.current.style.transform = `translateY(${Math.cos(t * 0.7) * 25}px)`;

      if (layer3.current)
        layer3.current.style.transform = `translateY(${Math.sin(t * 1.4) * 15}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Layer 1 */}
      <div
        ref={layer1}
        className="absolute w-[120%] h-[120%] -top-1/4 -left-1/4 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.45), transparent 70%)",
        }}
      />

      {/* Layer 2 */}
      <div
        ref={layer2}
        className="absolute w-[140%] h-[140%] top-1/4 left-1/4 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.45), transparent 70%)",
        }}
      />

      {/* Layer 3 */}
      <div
        ref={layer3}
        className="absolute w-[130%] h-[130%] top-1/3 left-[-10%] rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.35), transparent 70%)",
        }}
      />
    </div>
  );
}