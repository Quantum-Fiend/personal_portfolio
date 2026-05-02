import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutCards from "./AboutCards";
import AboutFinalStatement from "./AboutFinalStatement";

export default function AboutSection() {
  return (
    <section className="relative w-full py-36 px-6 overflow-hidden">
      {/* background (UNCHANGED) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[90px_90px]" />

      <div className="absolute -top-45 -left-45 w-150 h-150 bg-white/10 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-50 -right-50 w-175 h-175 bg-gray-400/10 blur-3xl rounded-full animate-pulse" />

      <div className="relative max-w-6xl mx-auto space-y-28">
        <AboutHero />
        <AboutIntro />
        <AboutCards />
        <AboutFinalStatement />
      </div>
    </section>
  );
}
