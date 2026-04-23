"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AboutImage() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      className="relative mb-16"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);
      }}
    >
      <div className="absolute inset-0 rounded-[40px] bg-linear-to-r from-purple-500 via-blue-500 to-transparent blur-2xl opacity-30 animate-pulse" />

      <motion.div
        className="absolute pointer-events-none w-75 h-75 rounded-full bg-white/20 blur-[120px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      <motion.div
        whileHover={{ scale: 1.06, rotate: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="relative z-10 w-80 md:w-3xl h-80 md:h-90 overflow-hidden rounded-[40px] border border-white/10 shadow-2xl"
      >
        <Image
          src="/AboutSection.jpg"
          alt="about"
          width={1000}
          height={1000}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </motion.div>
    </motion.div>
  );
}
