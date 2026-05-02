import ArticleCard from "./ArticleCard";
import { articles } from "./articles.data";

export default function ArticlesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {articles.map((a, i) => (
        <ArticleCard key={i} a={a} i={i} />
      ))}
    </div>
  );
}
