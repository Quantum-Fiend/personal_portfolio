import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/mdx";

type Props = {
  params: { slug: string };
};

export default function ArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>

      <p className="text-white/60 mb-10">{post.frontmatter.description}</p>

      <div className="prose prose-invert max-w-none">{post.content}</div>
    </div>
  );
}
