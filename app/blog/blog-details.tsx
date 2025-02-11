"use client";

import Link from "next/link";
import { deleteBlogData } from "@/actions/blog";
import { useOptimistic } from "react";

export type Blog = {
  id: string;
  title: string;
  content: string | null;
};

export function BlogDetails({ blogs }: { blogs: Blog[] }) {
  const [optimisticBlogs, setOptmisticBlogs] = useOptimistic(
    blogs,
    (currentBlog, blogId) => {
      return currentBlog.filter((blog) => blog.id !== blogId);
    }
  );

  const removeBlogById = async (blogId: string) => {
    setOptmisticBlogs(blogId);
    await deleteBlogData(blogId);
  };

  return (
    <div className=" ">
      <ul className="space-y-5 max-w-3xl p-10">
        {optimisticBlogs.map((blog) => (
          <li className="bg-green-100 p-10 space-y-3 rounded-md" key={blog.id}>
            <h2 className="font-bold text-2xl text-black">
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </h2>
            <p>{blog.content}</p>
            <form action={removeBlogById.bind(null, blog.id)}>
              <button
                type="submit"
                className="bg-red-700 p-2 rounded text-white"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
