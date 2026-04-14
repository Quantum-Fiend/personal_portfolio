"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const strokeDashoffset = useTransform(progress, (v) => 282 - v * 282);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 50,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 160, damping: 20 }}
      className="fixed bottom-8 sm:bottom-10 right-6 sm:right-6 md:right-10 z-50"
    >
      <div className="relative flex items-center justify-center">
        {/* 🌈 Glow Background Ring */}
        <div className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 blur-xl opacity-60" />

        {/* OUTER PROGRESS TRACK */}
        <svg
          className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
            fill="transparent"
          />

          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#grad)"
            strokeWidth="6"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="282"
            style={{ strokeDashoffset }}
          />

          {/* gradient stroke */}
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a1a1aa" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>
        </svg>

        {/* BUTTON */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{
            scale: 1.15,
            boxShadow: "0 0 25px rgba(255,255,255,0.15)",
          }}
          whileTap={{ scale: 0.85 }}
          className="
            relative flex items-center justify-center
            w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12
            rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/20
            text-white
            overflow-hidden
          "
        >
          {/* ✨ glass shine animation */}
          <motion.div
            className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-white/10"
            animate={{ x: [-40, 40] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "linear",
            }}
          />

          {/* arrow */}
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.1,
            }}
          >
            <ArrowUp size={16} />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}
