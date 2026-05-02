"use client";

import { motion } from "framer-motion";
import { cards } from "./cards.data";

export default function AboutCards() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((item, i) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -14, scale: 1.03 }}
            className="group relative p-8 rounded-xl border border-white/10 bg-white/5 overflow-hidden"
          >
            <div className="flex justify-center mb-5 relative z-10">
              <div className="p-5 rounded-full border border-white/10 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
                <Icon className="text-gray-200 text-xl" />
              </div>
            </div>

            <h3 className="text-center text-gray-200 font-medium relative z-10">
              {item.title}
              <div className="w-30 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto mt-4"></div>
            </h3>

            <p className="text-center text-sm text-gray-400 mt-2 relative z-10">
              {item.desc}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
