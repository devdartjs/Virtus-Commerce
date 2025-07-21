export function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          {/* Left Section */}
          <a href="/" className="flex items-center space-x-2">
            <img
              className="h-8 hidden sm:block"
              src="images/logo-white.png"
              alt="Logo"
            />
            <img
              className="h-8 sm:hidden"
              src="images/mobile-logo-white.png"
              alt="Mobile Logo"
            />
          </a>

          {/* Middle Section */}
          <div className="flex items-center w-full max-w-md mx-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Search"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md">
              <img
                className="h-5"
                src="images/icons/search-icon.png"
                alt="Search"
              />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <a href="/orders" className="hover:underline font-medium">
              Orders
            </a>
            <a
              href="/checkout"
              className="relative flex items-center space-x-1 hover:underline"
            >
              <img
                className="h-6"
                src="images/icons/cart-icon.png"
                alt="Cart"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                3
              </span>
              <span>Cart</span>
            </a>
          </div>
        </div>
      </header>

      {/* Tracking Content */}
      <main className="max-w-3xl mx-auto p-6">
        <a
          href="/orders"
          className="text-blue-600 hover:underline text-sm font-medium mb-4 inline-block"
        >
          &larr; View all orders
        </a>

        <div className="bg-white shadow rounded-xl p-6 space-y-4">
          <div className="text-gray-600 text-sm">
            Arriving on Monday, June 13
          </div>

          <h2 className="text-lg font-semibold">
            Black and Gray Athletic Cotton Socks - 6 Pairs
          </h2>

          <div className="text-sm text-gray-700">Quantity: 1</div>

          <img
            src="images/products/athletic-cotton-socks-6-pairs.jpg"
            alt="Product"
            className="w-48 h-48 object-contain mx-auto"
          />

          {/* Progress Labels */}
          <div className="flex justify-between text-sm text-gray-600 font-medium mt-6">
            <div>Preparing</div>
            <div className="text-blue-600">Shipped</div>
            <div>Delivered</div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
            <div className="w-2/3 h-full bg-blue-600 rounded-full transition-all duration-500" />
          </div>
        </div>
      </main>
    </div>
  );
}
