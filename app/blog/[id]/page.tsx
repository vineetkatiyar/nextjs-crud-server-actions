import { EditBlogForm } from "@/app/blog/[id]/blog-form";
import { getBlogById } from "@/prisma-db";
import { Blog } from "@/app/blog/page";

import { notFound } from "next/navigation";

export default async function EditBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog: Blog | null = await getBlogById(id);
  if (!blog) {
    notFound();
  }
  return <EditBlogForm blog={blog} />;
}
