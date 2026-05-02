import ArticlesHeader from "./ArticlesHeader";
import ArticlesGrid from "./ArticlesGrid";
import ArticlesCTA from "./ArticlesCTA";

export default function ArticlesPage() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 " />

      <div className="absolute -top-62.5 -left-50 w-175 h-175 bg-white/10 blur-[200px] rounded-full" />
      <div className="absolute -bottom-62.5 -right-50 w-175 h-175 bg-gray-400/10 blur-[220px] rounded-full" />

      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[100px_100px]" />

      <div className="relative max-w-6xl mx-auto space-y-20 text-center">
        <ArticlesHeader />
        <ArticlesGrid />
        <ArticlesCTA />
      </div>
    </section>
  );
}
