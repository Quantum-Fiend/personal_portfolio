import ContactHeader from "./ContactHeader";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import ContactCTA from "./ContactCTA";

export default function ContactSection() {
  return (
    <section className="relative w-full py-36 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0" />

      <div className="absolute -top-50 -left-50 w-125 h-125 bg-white/10 blur-[140px] rounded-full" />
      <div className="absolute -bottom-50 -right-50 w-125 h-125 bg-gray-400/10 blur-[160px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[90px_90px]" />

      <div className="relative max-w-6xl mx-auto space-y-20 text-center">
        <ContactHeader />
        <ContactCards />
        <ContactForm />
        <ContactCTA />
      </div>
    </section>
  );
}
