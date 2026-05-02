import AboutHeader from "./AboutHeader";
import AboutBadges from "./AboutBadges";
import AboutImage from "./AboutImage";
import AboutCard from "./AboutCard";

export default function AboutSection() {
  return (
    <section className="relative py-32 px-6 flex justify-center overflow-hidden">
      {/* 🌌 BACKGROUND */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-size-[35px_35px]" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <AboutHeader />
        <AboutBadges />
        <AboutImage />
        <AboutCard />
      </div>
    </section>
  );
}
