"use client";

import { useEffect, useState } from "react";

export default function SplashCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Disable on small screens / touch devices
    const checkDevice = () => {
      const isMobile = window.innerWidth < 768 || "ontouchstart" in window;
      setVisible(!isMobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    let rafId: number;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", checkDevice);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {/* Outer soft glow */}
      <div
        className="absolute w-140 h-140 rounded-full blur-[120px] opacity-70"
        style={{
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.35), rgba(180,180,255,0.15), transparent 75%)",
        }}
      />

      {/* Inner brighter core */}
      <div
        className="absolute w-75 h-75 rounded-full blur-3xl opacity-70 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${pos.x - 125}px, ${pos.y - 125}px) scale(1.05)`,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.7), rgba(200,200,255,0.3), transparent 80%)",
        }}
      />
    </div>
  );
}
