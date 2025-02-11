import { Search } from "@/components/search";
import Link from "next/link";
export default async function HomePage() {
  return (
    <div className="w-full h-screen">
      <Search />
      <div className="text-center space-x-5">
        <Link className="bg-gray-600 p-3 rounded text-white" href="/blog">Blogs</Link>
        <Link className="bg-gray-600 p-3 rounded text-white" href="/create-blog">Add blog</Link>
      </div>
    </div>
  );
}
