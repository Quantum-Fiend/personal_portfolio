import HeroText from "./HeroTextAnimation";
import HeroImage from "./HeroImage";
import HeroActions from "@/components/features/home/HeroAction";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center px-6 sm:px-12 md:px-24 lg:px-32 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/10 blur-[180px] rounded-full" />
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* LEFT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* greeting */}
            <p className="text-gray-300 tracking-[0.3em] text-2xl sm:text-base md:text-3xl uppercase mb-6">
              ✦ Hey there...!
            </p>

            <div className="w-20 h-0.5 bg-linear-to-r from-white/70 to-transparent mb-6 mx-auto md:mx-0" />

            {/* animated name */}
            <HeroText />

            {/* role badge */}
            <div className="mt-5 inline-block">
              <h2 className="text-sm sm:text-base md:text-lg text-white font-medium border border-white/20 px-5 py-2 rounded-full backdrop-blur-md">
                Software Engineer | Full Stack Engineer
              </h2>
            </div>

            {/* short intro */}
            <p className="mt-6 text-gray-400 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg leading-relaxed">
              I’m a Full Stack Developer building scalable applications with
              modern technologies and clean architecture.
            </p>

            <p className="mt-4 text-gray-400 max-w-xl mx-auto md:mx-0 text-sm sm:text-base leading-relaxed">
              I focus on performance, user experience, and crafting visually
              refined digital products using Next.js, TypeScript, and modern UI
              systems.
            </p>

            {/* actions */}
            <div className="mt-10">
              <HeroActions />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
