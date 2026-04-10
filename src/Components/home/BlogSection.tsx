"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

type Blog = {
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  link?: string;
};

const blogs: Blog[] = [
  {
    title: "Mastering Next.js Performance Optimization",
    description:
      "Learn how to make your Next.js apps insanely fast using caching, rendering strategies, and image optimization.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    date: "April 2026",
    readTime: "6 min read",
    category: "Next.js",
    link: "#",
  },
  {
    title: "Building Beautiful UI with Tailwind CSS",
    description:
      "A deep dive into building modern, responsive, and scalable UI systems using Tailwind best practices.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    date: "March 2026",
    readTime: "5 min read",
    category: "UI Design",
    link: "#",
  },
  {
    title: "Framer Motion Animation Secrets",
    description:
      "Advanced animation techniques to make your React apps feel alive, smooth, and premium.",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    date: "Feb 2026",
    readTime: "7 min read",
    category: "Animations",
    link: "#",
  },
];

export default function BlogsSection() {
  return (
    <section className="w-full py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-8">
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Latest Blogs
            </span>
          </h2>

          <div className="w-28 h-0.5 bg-linear-to-r from-gray-300 to-transparent mx-auto" />
        </motion.div>

        {/* GRID */}
        <div className="relative">
          {/* BACKGROUND GLOW ORBS */}
          <div className="absolute -top-20 left-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative w-full max-w-sm"
              >
                {/* OUTER GLOW */}
                <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500" />

                {/* CARD */}
                <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl shadow-xl transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-purple-500/20">
                  {/* IMAGE */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

                    {/* BADGES */}
                    <div className="absolute top-4 left-4 px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-white/70 backdrop-blur-md">
                      {blog.category}
                    </div>

                    <div className="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-black/40 border border-white/10 text-white/60 backdrop-blur-md">
                      {blog.readTime}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {blog.title}
                    </h3>

                    {/* ACCENT LINE */}
                    <div className="w-10 h-0.5 bg-linear-to-r from-white/60 to-transparent mt-2 group-hover:w-16 transition-all duration-500" />

                    <p className="text-sm text-zinc-400 mt-4 leading-relaxed">
                      {blog.description}
                    </p>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between mt-6">
                      <span className="text-xs text-zinc-500">{blog.date}</span>

                      <a
                        href={blog.link}
                        className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SEE MORE BUTTON */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3 rounded-full bg-linear-to-r from-white via-gray-300 to-gray-500 text-black font-semibold shadow-lg"
          >
            See More Blogs →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
