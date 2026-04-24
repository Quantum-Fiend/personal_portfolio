import HeroText from "./HeroTextAnimation";
import HeroImage from "./HeroImage";
import HeroActions from "@/components/features/home/HeroAction";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-start md:items-center px-6 sm:px-12 md:px-24 lg:px-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/10 blur-[180px] rounded-full" />
      </div>

      {/* ✅ more premium top spacing */}
      <div className="w-full max-w-7xl mx-auto pt-24 sm:pt-28 md:pt-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-14 md:gap-16">
          {/* LEFT */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            {/* greeting */}
            <p className="text-gray-300 tracking-[0.25em] text-xs sm:text-sm md:text-base uppercase">
              ✦ Hey there...!
            </p>

            <div className="w-16 h-0.5 bg-linear-to-r from-white/70 to-transparent mx-auto md:mx-0" />

            {/* animated name */}
            <HeroText />

            {/* role badge */}
            <div className="pt-2">
              <h2 className="inline-block text-xs sm:text-sm md:text-base text-white font-medium border border-white/20 px-5 py-2 rounded-full backdrop-blur-md">
                Software Engineer | Full Stack Engineer
              </h2>
            </div>

            {/* short intro */}
            <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
              I’m a Full Stack Developer building scalable applications with
              modern technologies and clean architecture.
            </p>

            <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
              I focus on performance, user experience, and crafting visually
              refined digital products using Next.js, TypeScript, and modern UI
              systems.
            </p>

            {/* actions */}
            <div className="pt-4">
              <HeroActions />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end pt-10 md:pt-0">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
