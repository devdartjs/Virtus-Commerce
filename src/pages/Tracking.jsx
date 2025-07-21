import { Headers } from "../components/Header";

export function TrackingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <Headers />

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
