"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
  href,
}: ButtonProps) {
  const baseClass =
    "bg-linear-to-r from-gray-200 via-gray-300 to-gray-400 text-black font-bold py-3 px-6 rounded-full hover:text-black transition-all duration-300 text-lg sm:text-xl w-full sm:w-auto";

  const motionProps = {
    whileHover: {
      scale: 1.1,
      boxShadow: "0px 0px 30px rgba(139,92,246,0.4)",
    },
    whileTap: { scale: 0.95 },
  };

  // ✅ If it's a link → render motion.a inside Link
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a className={`${baseClass} ${className}`} {...motionProps}>
          {children}
        </motion.a>
      </Link>
    );
  }

  // ✅ Normal button
  return (
    <motion.button
      onClick={onClick}
      className={`${baseClass} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
