"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonProps = Omit<HTMLMotionProps<"button">, "href"> & {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = "", href, ...props }, ref) => {
    const baseClass =
      "bg-linear-to-r from-gray-200 via-gray-300 to-gray-400 text-black font-bold py-3 px-6 rounded-full hover:text-black transition-all duration-300 text-lg sm:text-xl w-full sm:w-auto";

    const motionProps = {
      whileHover: {
        scale: 1.1,
        boxShadow: "0px 0px 30px rgba(139,92,246,0.4)",
      },
      whileTap: { scale: 0.95 },
    };

    // ✅ If it's a link
    if (href) {
      return (
        <Link href={href} passHref legacyBehavior>
          <motion.a className={`${baseClass} ${className}`} {...motionProps}>
            {children}
          </motion.a>
        </Link>
      );
    }

    // ✅ Button (now accepts type="submit", disabled, etc.)
    return (
      <motion.button
        ref={ref}
        className={`${baseClass} ${className}`}
        {...motionProps}
        {...props} // ✅ THIS FIXES EVERYTHING
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

export default Button;
