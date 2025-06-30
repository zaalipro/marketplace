import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary-600">Marketplace</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/listings" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
                Listings
              </Link>
              <Link href="/sell" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
                Sell
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
                Login
              </Link>
              <Link href="/register" className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Marketplace</h1>
          <p className="text-lg text-gray-600 mb-8">
            Buy and sell items in our community marketplace. Find great deals on electronics, fashion, and more!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Listings</h2>
              <p className="text-gray-600 mb-4">Browse through thousands of items for sale</p>
              <Link href="/listings" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                View Listings
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sell</h2>
              <p className="text-gray-600 mb-4">List your items for sale in minutes</p>
              <Link href="/sell" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                Sell Now
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Community</h2>
              <p className="text-gray-600 mb-4">Join our community of buyers and sellers</p>
              <Link href="/register" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
