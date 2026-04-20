"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import Button from "@/components/ui/Button"; // ✅ import your button

const MotionButton = motion(Button); // ✅ wrap it

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Send Successfully...! 😊");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Error sending message");
    }
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
          onChange={handleChange}
          value={form.message}
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
