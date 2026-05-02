"use client";

import { motion } from "framer-motion";
import { Article } from "./articles.data";

export default function ArticleCard({ a, i }: { a: Article; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, y: -10 }}
      transition={{ delay: i * 0.05 }}
      className="group relative w-full max-w-sm p-7 rounded-3xl border border-white/10 bg-white/5 overflow-hidden
                 transition duration-300
                 hover:shadow-[0_0_120px_rgba(255,255,255,0.15)]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-br from-white/20 via-transparent to-transparent" />

      <h2 className="text-xl font-semibold text-white text-center">
        {a.title}
      </h2>

      <p className="text-gray-400 text-sm mt-3 text-center leading-relaxed">
        {a.desc}
      </p>

      <p className="text-xs text-gray-500 mt-4 text-center">{a.date}</p>

      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {a.tags.map((t, i) => (
          <span
            key={i}
            className="text-[11px] px-3 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <button className="px-10 py-3 rounded-full bg-linear-to-r from-white via-gray-350 to-gray-500 text-black font-semibold shadow-lg">
          Read Article →
        </button>
      </div>
    </motion.div>
  );
}
