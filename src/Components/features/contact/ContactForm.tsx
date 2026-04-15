"use client";

import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import Button from "@/components/ui/Button"; // ✅ import your button

const MotionButton = motion(Button); // ✅ wrap it

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto space-y-5 px-4 sm:px-0 text-center"
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
             focus:border-white/40 outline-none transition text-center"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
             focus:border-white/40 outline-none transition text-center"
        />
      </div>

      {/* TEXTAREA */}
      <div className="flex justify-center">
        <textarea
          rows={6}
          placeholder="Your Message..."
          className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
             focus:border-white/40 outline-none transition resize-none text-center"
        />
      </div>

      {/* ✅ BUTTON USING YOUR COMPONENT */}
      <div className="flex justify-center">
        <MotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 py-3 rounded-full bg-linear-to-r from-white via-gray-300 to-gray-500 text-black font-semibold shadow-lg w-96 flex items-center justify-center gap-2"
        >
          Send Message <FiSend />
        </MotionButton>
      </div>
    </motion.form>
  );
}
