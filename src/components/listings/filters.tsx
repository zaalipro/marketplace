"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function ListingFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("query", value);
    router.push(`?${params.toString()}`);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    router.push(`?${params.toString()}`);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortBy(value);
    const params = new URLSearchParams(searchParams.toString());
    params.set("sortBy", value);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search listings..."
        value={search}
        onChange={handleSearch}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
      <select
        value={category}
        onChange={handleCategory}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home & Living</option>
      </select>
      <select
        value={sortBy}
        onChange={handleSort}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="">Sort by</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="newest">Newest First</option>
      </select>
    </div>
  );
}
