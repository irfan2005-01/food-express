import { Search } from "lucide-react";

export default function MenuSearch({ search, setSearch }) {
  return (
    <div className="relative mb-10">
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Search your favourite food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 py-4 pl-12 pr-4 outline-none focus:border-orange-500"
      />
    </div>
  );
}