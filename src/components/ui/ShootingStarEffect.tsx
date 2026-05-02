"use client";

import { motion } from "framer-motion";

const STAR_COUNT = 140;
const SHOOTING_COUNT = 6;

// deterministic pseudo-random
const rand = (i: number, seed: number) => {
  const x = Math.sin(i * 999 + seed * 999) * 10000;
  return x - Math.floor(x);
};

export default function ShootingStars() {
  // ⭐ fully scattered deterministic stars
  const stars = Array.from({ length: STAR_COUNT }).map((_, i) => ({
    id: i,
    left: rand(i, 1) * 100,
    top: rand(i, 2) * 100,
    size: rand(i, 3) * 1.6 + 0.4,
    opacity: rand(i, 4) * 0.8 + 0.2,
  }));

  // 🌠 rare shooting stars (clean + spaced out)
  const shooting = Array.from({ length: SHOOTING_COUNT }).map((_, i) => ({
    id: i,
    left: rand(i, 5) * 100,
    delay: rand(i, 6) * 12,
    duration: rand(i, 7) * 2 + 1.8,
    height: rand(i, 8) * 160 + 120,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">

      {/* ⭐ Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* 🌠 Shooting stars (rare & clean) */}
      {shooting.map((s) => (
        <motion.div
          key={s.id}
          initial={{ y: "-20%", opacity: 0 }}
          animate={{ y: "120%", opacity: [0, 1, 0] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          style={{
            left: `${s.left}%`,
            height: `${s.height}px`,
          }}
          className="absolute top-0 w-px bg-linear-to-b from-white via-white/90 to-transparent"
        />
      ))}
    </div>
  );
}