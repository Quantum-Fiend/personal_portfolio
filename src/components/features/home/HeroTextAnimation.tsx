"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroText() {
  const text = "MY NAME IS";
  const name = "TUSHAR SINGH";

  const [typedText, setTypedText] = useState("");
  const [typedName, setTypedName] = useState("");
  const [step, setStep] = useState<"text" | "name" | "done">("text");

  // TYPE SEQUENCE ENGINE
  useEffect(() => {
    let i = 0;

    if (step === "text") {
      const interval = setInterval(() => {
        setTypedText(text.slice(0, i + 1));
        i++;

        if (i === text.length) {
          clearInterval(interval);
          setTimeout(() => setStep("name"), 400);
        }
      }, 60);

      return () => clearInterval(interval);
    }

    if (step === "name") {
      let j = 0;

      const interval = setInterval(() => {
        setTypedName(name.slice(0, j + 1));
        j++;

        if (j === name.length) {
          clearInterval(interval);
          setStep("done");
        }
      }, 70);

      return () => clearInterval(interval);
    }
  }, [step]);

  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        text-4xl sm:text-5xl lg:text-7xl font-bold
        bg-linear-to-r from-white via-gray-330 to-gray-500
        bg-clip-text text-transparent
        leading-tight
      "
    >

      {/* MAIN TEXT */}
      <span className="block min-h-[1.2em]">{typedText}</span>

      <span className="block min-h-[1.2em]">
        {typedName}
        <span className={step === "done" ? "opacity-0" : "animate-pulse"}>
          |
        </span>
      </span>
    </motion.h1>
  );
}
