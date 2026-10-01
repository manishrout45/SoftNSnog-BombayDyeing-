import React from "react";
import { Search } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
  placeholder = "Search products...",
}) {
  return (
    <div className="max-w-xl mx-auto mb-10 relative">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-14 pr-5 py-4 rounded-full bg-[#1b1b1b] border border-gray-700 text-white outline-none focus:border-orange-500 transition"
      />

    </div>
  );
}