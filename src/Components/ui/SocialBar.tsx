import { FaInstagram, FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialBar() {
  return (
    <>
      {/* Desktop (Right Side) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-5 z-50">
        <div className="w-px h-16 bg-white/30"></div>

        <a href="mailto:tusharbisht706@gmail.com" className="icon email">
          <MdEmail />
        </a>
        <a
          href="https://www.linkedin.com/in/tushar-singh-bisht-a1099a314"
          className="icon linkedin"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Quantum-Fiend" className="icon github">
          <FaGithub />
        </a>
        <a href="1320766944164708352" className="icon discord">
          <FaDiscord />
        </a>
        <a
          href="https://www.instagram.com/tushar___bisht__16/"
          className="icon instagram"
        >
          <FaInstagram />
        </a>

        <div className="w-px h-16 bg-white/30"></div>
      </div>
      {/* Mobile (Bottom Bar) */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 flex md:hidden items-center gap-2 px-2 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg z-50">
        <a
          href="mailto:tusharbisht706@gmail.com"
          className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
        >
          <MdEmail size={16} />
        </a>

        <a
          href="https://www.linkedin.com/in/tushar-singh-bisht-a1099a314"
          target="_blank"
          className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
        >
          <FaLinkedinIn size={15} />
        </a>

        <a
          href="https://github.com/Quantum-Fiend?tab=repositories"
          target="_blank"
          className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
        >
          <FaGithub size={16} />
        </a>

        <a
          href="#"
          className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
        >
          <FaDiscord size={16} />
        </a>

        <a
          href="https://www.instagram.com/tushar___bisht__16/"
          target="_blank"
          className="w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-90"
        >
          <FaInstagram size={16} />
        </a>
      </div>
    </>
  );
}
