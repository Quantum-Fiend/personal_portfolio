import Link from "next/link";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function Sidebar({ open, setOpen }: Props) {
  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible w-full"
        }`}
      />

      {/* SIDEBAR PANEL */}
      <div
        className={`fixed top-0 right-0 h-full w-70 sm:w-80 bg-[#0d0d0d] z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
   <button
  onClick={() => setOpen(false)}
  className="
    absolute
    top-4 right-4
    sm:top-6 sm:right-6
    lg:top-8 lg:right-8
    w-10 h-10 sm:w-12 sm:h-12
    rounded-full
    bg-white/10 hover:bg-white/20
    backdrop-blur-md
    text-white text-2xl sm:text-3xl
    flex items-center justify-center
    transition-all duration-300
    hover:scale-110 active:scale-95
  "
>
  ✕
</button>

        {/* MENU ITEMS */}
        <div className="flex flex-col h-full justify-center items-center gap-8 text-lg font-semibold tracking-wide">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-gray-400 transition"
          >
            HOME
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-gray-400 transition"
          >
            ABOUT
          </Link>

          <Link
            href="/projects"
            onClick={() => setOpen(false)}
            className="hover:text-gray-400 transition"
          >
            PROJECTS
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-gray-400 transition"
          >
            CONTACT
          </Link>
        </div>

      </div>
    </>
  );
}
