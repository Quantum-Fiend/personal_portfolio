import Button from "@/components/ui/Button";
import Link from "next/link";
import { CloudDownloadIcon as Download } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center sm:items-start justify-center sm:justify-start">
      {/* Hire Me */}
      <Link href="/contact" className="w-full sm:w-auto">
        <Button className="inline-flex items-center justify-center font-bold bg-linear-to-r from-white via-gray-350 to-gray-500 text-black rounded-full hover:from-gray-200 hover:to-gray-400 transition-all">
          Hire Me
        </Button>
      </Link>

      {/* Download CV */}
      <Button className="inline-flex items-center justify-center font-bold bg-linear-to-r from-white via-gray-350 to-gray-500 text-black rounded-full hover:from-gray-200 hover:to-gray-400 transition-all">
        <a href="/cv.pdf" download className="flex items-center gap-2">
          Download CV
          <Download className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  );
}
