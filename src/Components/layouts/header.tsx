"use client";

import { useState, useEffect } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Sidebar from "@/Components/navigation/Sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Prevent scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* TOGGLE BUTTON (RIGHT SIDE, BIG & BOLD) */}
      <div className="fixed top-5 right-0 w-full flex justify-end p-6 z-50">
        <button
          onClick={() => setOpen(true)}
          className="text-white text-4xl md:text-6xl font-extrabold hover:text-gray-400 transition"
        >
          <HiOutlineBars3BottomRight />
        </button>
      </div>

      {/* SIDEBAR */}
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}
