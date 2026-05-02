"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type SkillProps = {
  name: string;
  level: number;
  icon: LucideIcon;
  index: number;
};

export default function SkillCard({
  name,
  level,
  icon: Icon,
  index,
}: SkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.08, rotate: 0.5 }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-white/10 via-transparent to-gray-500/10" />

      {/* icon */}
      <div className="flex justify-center mb-5">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 border border-white/10">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* text */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-gray-400">{level}% mastery</p>
      </div>

      {/* progress */}
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="h-full bg-linear-to-r from-white via-gray-300 to-gray-500 rounded-full"
        />
      </div>

      {/* floating dot */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full blur-[2px]"
      />
    </motion.div>
  );
}

