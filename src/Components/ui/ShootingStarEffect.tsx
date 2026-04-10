"use client";

import { motion } from "framer-motion";

/* PREDEFINED POSITIONS (NO RANDOM) */
const shootingStars = [
  { left: "5%", delay: 0 },
  { left: "15%", delay: 1 },
  { left: "25%", delay: 2 },
  { left: "35%", delay: 3 },
  { left: "45%", delay: 1.5 },
  { left: "55%", delay: 2.5 },
  { left: "65%", delay: 0.5 },
  { left: "75%", delay: 3.5 },
  { left: "85%", delay: 2 },
  { left: "95%", delay: 4 },
];

export default function ShootingStarsBackground() {
  return (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)]">
      {/* =========================
          STATIC STAR FIELD
      ========================= */}
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] bg-white/60 rounded-full"
          style={{
            top: `${(i * 9) % 100}%`,
            left: `${(i * 17) % 100}%`,
          }}
        />
      ))}

      {/* =========================
          VERTICAL SHOOTING STARS
      ========================= */}
      {shootingStars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ y: "-20%", opacity: 0 }}
          animate={{
            y: "120%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="absolute top-0"
          style={{ left: star.left }}
        >
          {/* STAR TAIL */}
          <div className="w-[2px] h-[120px] bg-gradient-to-b from-white via-gray-300 to-transparent blur-[0.5px]" />
        </motion.div>
      ))}
    </div>
  );
}
