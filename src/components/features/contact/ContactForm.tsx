"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { toast } from "sonner";
import Button from "@/components/ui/Button";

// ✅ FIX: updated API
const MotionButton = motion.create(Button);

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const promise = fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((res) => res.json());

    toast.promise(promise, {
      loading: "Sending your message...",
      success: (data) => {
        if (data.success) {
          setForm({ name: "", email: "", message: "" });
          return "Delivered ~ Thanks For Reaching Out 🙌";
        }
        throw new Error("Ohh ohh Failed");
      },
      error: "Something went wrong. Try again..!",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto space-y-5 px-4 sm:px-0 text-center"
    >
      {/* INPUTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
          focus:border-white/40 outline-none transition text-center"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
          focus:border-white/40 outline-none transition text-center"
        />
      </div>

      {/* TEXTAREA */}
      <div className="flex justify-center">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          placeholder="Your Message..."
          className="w-full max-w-md p-4 rounded-xl bg-white/5 border border-white/10
          focus:border-white/40 outline-none transition resize-none text-center"
        />
      </div>

      {/* BUTTON */}
      <div className="flex justify-center">
        <MotionButton
          type="submit"
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
