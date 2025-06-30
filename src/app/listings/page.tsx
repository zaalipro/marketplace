import { Listing } from "@/lib/types";
import ListingFilters from "@/components/listings/filters";
import Link from "next/link";

export default async function ListingsPage() {
  const search = "";
  const category = "";
  const sortBy = "";

  try {
    const response = await fetch(
      `http://localhost:3001/api/listings?query=${search}&category=${category}&sortBy=${sortBy}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const listings = await response.json();

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
          </div>
        </main>
      </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No listings found</p>
              </div>
            ) : (
              <>
                {listings.map((listing: Listing) => (
                  <div
                    key={listing.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      {listing.images && listing.images.length > 0 ? (
                        <img
                          src={listing.images[0]}
                          alt={listing.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {listing.title}
                      </h3>
                      <p className="text-gray-600 mb-2 line-clamp-2">
                        {listing.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-primary-600">
                          ${listing.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {listing.category}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center">
                        <img
                          src={listing.user?.image || '/default-avatar.png'}
                          alt={listing.user?.name || 'User'}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {listing.user?.name || 'Anonymous'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-red-500">
          <p>Error loading listings: {error instanceof Error ? error.message : 'Unknown error'}</p>
        </div>
      </div>
    );
  }
}
