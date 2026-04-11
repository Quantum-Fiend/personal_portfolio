"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Scroll progress (0 → 1)
  const { scrollYProgress } = useScroll();

  // Smooth motion
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  // Convert progress → stroke offset (FIXED)
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
      className="
        fixed 
        bottom-24 sm:bottom-10 
        right-3 sm:right-6 md:right-10 
        z-999
      "
    >
      <div className="relative flex items-center justify-center">
        {/* OUTER PROGRESS TRACK */}
        <svg
          className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -rotate-90"
          viewBox="0 0 100 100"
        >
          {/* background ring */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="6"
            fill="transparent"
          />

          {/* progress ring */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeWidth="6"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="282"
            style={{
              strokeDashoffset,
            }}
          />
        </svg>

        {/* BUTTON */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85 }}
          className="
            relative flex items-center justify-center
            w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12
            rounded-full
            bg-black
            border border-white/20
            text-white
            shadow-[0_0_20px_rgba(255,255,255,0.05)]
            overflow-hidden
          "
        >
          {/* scan line effect */}
          <motion.div
            className="absolute inset-0 bg-white/10"
            animate={{
              y: [-40, 40],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.4,
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
