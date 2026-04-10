"use client";

import { motion } from "framer-motion";

const COUNT = 20;

// deterministic pseudo-random generator (no Math.random)
const getValue = (i: number, mod: number, offset = 0) => {
  return ((i * 37 + offset * 17) % mod) / mod;
};

export default function ShootingStars() {
  const stars = Array.from({ length: COUNT }).map((_, i) => {
    const left = getValue(i, 100) * 100;
    const duration = 1.5 + getValue(i, 10, 2) * 2;
    const delay = getValue(i, 20, 5) * 5;
    const size = 80 + getValue(i, 50, 3) * 120;

    return { id: i, left, duration, delay, size };
  });

  const dots = Array.from({ length: 40 }).map((_, i) => {
    const left = getValue(i, 100, 7) * 100;
    const top = getValue(i, 100, 11) * 100;
    const delay = getValue(i, 30, 13) * 5;
    const scale = 0.5 + getValue(i, 10, 17);

    return { id: i, left, top, delay, scale };
  });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Shooting streaks */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ y: "-10%", opacity: 0 }}
          animate={{ y: "110%", opacity: [0, 1, 0] }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${star.left}%`,
            height: `${star.size}px`,
          }}
          className="absolute top-0 w-[2px] 
             bg-gradient-to-b from-white via-gray-200 to-transparent 
             blur-[1.5px]"
        />
      ))}

      {/* Dotted stars */}
      {dots.map((dot) => (
        <motion.div
          key={`dot-${dot.id}`}
          initial={{ opacity: 0.2, scale: dot.scale }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{
            duration: 2,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
          }}
          className="absolute w-[2px] h-[2px] bg-white rounded-full"
        />
      ))}
    </div>
  );
}
