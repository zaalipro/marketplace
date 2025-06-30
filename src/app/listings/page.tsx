import { Listing } from "@/lib/types";
import { useApi } from "@/hooks/useApi";
import { ListingCard } from "@/components/listings/ListingCard";
import { LISTING_CATEGORIES, SORT_OPTIONS } from "@/utils/constants";
import Link from "next/link";

export default function ListingsPage() {
  const { search, category, sortBy } = useUrlParams();
  const { data: listings, error, loading } = useApi<Listing[]>(
    `/listings?query=${search}&category=${category}&sortBy=${sortBy}`
  );

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-red-500">
          <p>Error loading listings: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Listings</h1>
            <Link
              href="/sell"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Sell Item
            </Link>
          </div>
          <ListingFilters />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <div className="col-span-full text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              </div>
            ) : listings?.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No listings found</p>
              </div>
            ) : (
              listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function useUrlParams() {
  const searchParams = new URLSearchParams(window.location.search);
  return {
    search: searchParams.get("query") || "",
    category: searchParams.get("category") || "",
    sortBy: searchParams.get("sortBy") || "",
  };
}
