"use client";

import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* EMAIL CARD */}
      <SpotlightCard
        spotlightColor="rgba(255,255,255,0.10)"
        className="rounded-3xl"
      >
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
          <h3 className="text-white text-lg font-semibold">Email</h3>
          <p className="text-gray-400 mt-2">yourname@gmail.com</p>
        </div>
      </SpotlightCard>

      {/* SOCIAL CARD */}
      <SpotlightCard
        spotlightColor="rgba(255,255,255,0.08)"
        className="rounded-3xl"
      >
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
          <h3 className="text-white text-lg font-semibold">Social</h3>
          <p className="text-gray-400 mt-2">GitHub • LinkedIn • Twitter</p>
        </div>
      </SpotlightCard>

      {/* LOCATION CARD (optional but premium) */}
      <SpotlightCard
        spotlightColor="rgba(255,255,255,0.06)"
        className="rounded-3xl sm:col-span-2"
      >
        <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
          <h3 className="text-white text-lg font-semibold">Location</h3>
          <p className="text-gray-400 mt-2">India • Available Worldwide</p>
        </div>
      </SpotlightCard>
    </div>
  );
}
