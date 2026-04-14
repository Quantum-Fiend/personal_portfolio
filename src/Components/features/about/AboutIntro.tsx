"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function AboutIntro() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ["Backends", "Systems", "Frontends", "Apps", "Websites"];
    let timeout: NodeJS.Timeout;

    const currentWord = words[index];

    const type = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          timeout = setTimeout(() => setIsDeleting(true), 1000);
          return;
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }

      timeout = setTimeout(type, isDeleting ? 60 : 90);
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <h2 className="text-3xl font-semibold">
          I’m Tushar <span className="text-gray-400">Singh Bisht</span>
        </h2>

        <div className="w-48 sm:w-28 md:w-32 h-0.5 bg-linear-to-r from-white/70 to-transparent mt-4 mx-auto lg:mx-0"></div>

        <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
          Full-stack developer | Software developer focused on building scalable
          systems, modern UI experiences, and performance-driven architecture.
        </p>

        <div className="mt-6 text-gray-200">
          <span className="text-gray-100 font-bold text-2xl">I make :</span>{" "}
          <span className="font-bold text-2xl bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            {text}
          </span>
          <span className="animate-pulse">|</span>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
        className="group relative p-10 rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
          <div className="absolute -inset-50 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_55%)] blur-3xl" />
        </div>

        <FiBriefcase className="text-gray-200 text-2xl mb-5 mx-auto" />

        <p className="text-center text-gray-300 text-sm leading-relaxed">
          I build full-stack applications, SaaS platforms, and dashboards that
          combine performance, structure, and user experience.
        </p>
      </motion.div>
    </div>
  );
}
