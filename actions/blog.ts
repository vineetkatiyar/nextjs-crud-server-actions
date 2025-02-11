"use server";

import { addBlog, deleteBlog, updateBlog } from "@/prisma-db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type Errors = {
  title?: string;
  content?: string;
};

export type FormState = {
  errors: Errors;
};

export async function createBlogData(prevState: FormState, formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title not specified";
  }

  if (!content) {
    errors.content = "Content not specified";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addBlog(title, content);
  redirect("/blog");
}
export async function editBlogData(
  id: string,
  prevState: FormState,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const errors: Errors = {};

  if (!title) {
    errors.title = "Title not specified";
  }

  if (!content) {
    errors.content = "Content not specified";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateBlog(id, title, content);
  redirect("/blog");
}

export async function deleteBlogData(id: string) {
  await deleteBlog(id);
  revalidatePath("/blog");
}
