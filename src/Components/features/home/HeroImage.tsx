"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative w-full md:w-1/2 flex items-center justify-center overflow-visible">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-[95vw] md:w-[70vw] lg:w-[60vw] xl:w-[55vw]"
      >
        <Image
          src="/banner.png"
          alt="hero"
          width={2000}
          height={2000}
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
}