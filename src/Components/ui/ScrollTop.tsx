"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
  });

  const strokeDashoffset = useTransform(progress, (v) => 282 - v * 282);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 150);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className="fixed bottom-3 right-4 sm:bottom-8 sm:right-8 z-50"
    >
      <div className="relative flex items-center justify-center">
        {/* subtle single glow */}
        <div className="absolute w-12 h-12 rounded-full bg-white/5 blur-xl" />

        {/* progress ring */}
        <svg className="absolute w-12 h-12 -rotate-90" viewBox="0 0 100 100">
          {/* base */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="4"
            fill="transparent"
          />

          {/* progress */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="282"
            style={{ strokeDashoffset }}
          />
        </svg>

        {/* button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="
            w-10 h-10
            rounded-full
            bg-black/40 backdrop-blur-xl
            border border-white/10
            flex items-center justify-center
            text-white
          "
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
}
