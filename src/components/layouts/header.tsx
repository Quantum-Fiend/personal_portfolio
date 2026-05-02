"use client";

import { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Sidebar from "@/components/navigation/Sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* HEADER WRAPPER */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* RIGHT FLOATING ORB */}
        <div
          className="
            absolute
            right-1 top-0            /* 📱 SMALL SCREEN: more right + top */
            sm:right-5 sm:top-5
            lg:right-2 lg:top-2     /* 🖥️ BIG SCREEN: more right alignment */
          "
        >
          <button onClick={() => setOpen(true)} className="group relative">
            {/* halo */}
            <span className="absolute -inset-2.5 rounded-full opacity-0 group-hover:opacity-100 transition duration-700 bg-white/4 blur-xl" />

            {/* core */}
            <div
              className="
                relative
                w-18 h-18
                sm:w-20 sm:h-20
                lg:w-24 lg:h-24   /* 🔥 BIGGER + BOLDER */
                rounded-full
                flex items-center justify-center
                transition-all duration-500 ease-out
                group-hover:scale-[1.08]
                active:scale-95
              "
            >
              <HiOutlineBars3BottomRight
                className="
                  text-white
                  text-3xl sm:text-3xl lg:text-4xl  /* 🔥 BOLDER ICON */
                  opacity-100
                  transition-all duration-300
                  group-hover:opacity-100
                "
              />
            </div>

            {/* 🧊 STATUS DOT (slightly stronger visibility) */}
            <span className="absolute top-2 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5">
              {/* 💡 core breathing light */}
              <span className="absolute inset-0 rounded-full bg-linear-to-br from-gray-300 to-white opacity-100 animate-[pulse_3s_ease-in-out_infinite]" />
            </span>
          </button>
        </div>
      </header>

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}
