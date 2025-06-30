interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{listing.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{listing.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary-600">${listing.price.toFixed(2)}</span>
          <span className="text-sm text-gray-500">{listing.category}</span>
        </div>
        <div className="mt-4 flex items-center">
          <img
            src={listing.user?.image || '/default-avatar.png'}
            alt={listing.user?.name || 'User'}
            className="w-8 h-8 rounded-full"
          />
          <span className="ml-2 text-sm text-gray-600">{listing.user?.name || 'Anonymous'}</span>
        </div>
      </div>
    </div>
  );
}
