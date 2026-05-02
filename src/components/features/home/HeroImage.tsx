"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="w-full flex justify-center lg:translate-x-20">
      <motion.div
        initial={{ opacity: 0, scale: 1 }} // 👈 no initial scale down
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Image
          src="/Banner.png"
          alt="hero banner"
          width={1200} // 👈 FIXED
          height={800} // 👈 FIXED
          sizes="100vw"
          priority
          quality={75} // 👈 compress
          className="
            w-full 
            h-auto 
            rounded-full
            object-contain
            md:scale-110 
            lg:scale-140   // 👈 reduced from 150
            drop-shadow-2xl
          "
        />
      </motion.div>
    </div>
  );
}
