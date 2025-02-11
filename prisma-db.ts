import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const seedBlog = async () => {
  const count = await prisma.blog.count();
  if (count === 0) {
    await prisma.blog.createMany({
      data: [
        { title: "Product 1", content: "Description 1" },
        { title: "Product 2", content: "Description 2" },
        { title: "Product 3", content: "Description 3" },
      ],
    });
  }
};

// Run seed if needed
seedBlog();

export async function getBlogs(query?: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  if (query) {
    return prisma.blog.findMany({
      where: {
        OR: [{ title: { contains: query } }, { content: { contains: query } }],
      },
    });
  }
  return prisma.blog.findMany();
}

export async function getBlogById(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.blog.findUnique({
    where: { id },
  });
}

export async function addBlog(title: string, content: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.blog.create({
    data: { title, content },
  });
}

export async function updateBlog(id: string, title: string, content: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.blog.update({
    where: { id },
    data: { title, content },
  });
}

export async function deleteBlog(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return prisma.blog.delete({
    where: { id },
  });
}
