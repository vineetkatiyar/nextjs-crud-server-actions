import { Search } from "@/components/search";
export default async function HomePage() {
  return (
    <div className="w-full h-screen">
      <h1 className="text-center text-3xl">Home Page</h1>
      <Search />
    </div>
  );
}
