import Form from "next/form";
export const Search = () => {
  return (
    <div className="m-10 w-full space-y-5">
      <Form action="/blog" className="space-x-3 w-full text-center">
        <input
          name="query"
          className="h-10 border bg-gray-200 rounded focus:outline-none px-3"
          placeholder="search blogs..."
          type="text"
        />
        <button className="bg-black p-2 text-white rounded" type="submit">
          Search
        </button>
      </Form>
    </div>
  );
};
