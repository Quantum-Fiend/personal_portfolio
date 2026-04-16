import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesPath = path.join(process.cwd(), "src/content/articles");

export function getPostBySlug(slug: string) {
  if (!slug) return null;

  const fullPath = path.join(articlesPath, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    console.log("FILE NOT FOUND:", fullPath);
    return null;
  }

  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  return {
    frontmatter: data,
    content,
  };
}
export function getAllPosts() {
  const files = fs.readdirSync(articlesPath);

  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const { frontmatter } = getPostBySlug(slug)!;

      return {
        slug,
        frontmatter,
      };
    });

  return posts;
}
