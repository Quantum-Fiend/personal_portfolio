"use client";

import { useEffect, useState } from "react";

export default function SplashCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <div
        className="absolute w-170 h-170 rounded-full blur-5xl opacity-60 transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${pos.x - 250}px, ${pos.y - 250}px)`,
          background:
            "radial-gradient(circle, rgba(248,248,255,0.45), rgba(200,200,200,0.2), transparent 80%)",
        }}
      />
    </div>
  );
}
