import { BlogDetails } from "@/app/blog/blog-details";
import { getBlogs } from "@/prisma-db";

export type Blog = {
  id: string;
  title: string;
  content: string | null;
};

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const blogs: Blog[] = await getBlogs(query);

  return <BlogDetails blogs={blogs} />;
}
