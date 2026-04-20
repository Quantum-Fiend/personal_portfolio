//import { notFound } from "next/navigation";
//import { getPostBySlug, getAllSlugs } from "@/lib/mdx";
//import { MDXRemote } from "next-mdx-remote/rsc";

//type Props = {
//  params: Promise<{ slug: string }>;
//};

//// Generate static routes for all MDX files at build time
//export async function generateStaticParams() {
//  return getAllSlugs().map((slug) => ({ slug }));
//}

//export default async function ArticlePage({ params }: Props) {
//  const { slug } = await params;
//  const post = await getPostBySlug(slug);

//  if (!post) return notFound();

//  return (
//    <div className="min-h-screen bg-black text-white px-6 py-20">
//      <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>

//      <p className="text-white/60 mb-10">{post.frontmatter.description}</p>

//      <div className="prose prose-invert max-w-none">
//        <MDXRemote source={post.content} />
//      </div>
//    </div>
//  );
//}
