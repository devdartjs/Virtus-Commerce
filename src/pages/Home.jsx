import { Headers } from "../components/Header";

export function HomePage() {
  return (
    <>
      <title>Home Page</title>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <Headers />
        {/* Products Grid */}
        <main className="max-w-7xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                rating: "images/ratings/rating-45.png",
                reviews: 87,
                price: "$10.90",
              },
              {
                image: "images/products/intermediate-composite-basketball.jpg",
                name: "Intermediate Size Basketball",
                rating: "images/ratings/rating-40.png",
                reviews: 127,
                price: "$20.95",
              },
              {
                image:
                  "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
                name: "Adults Plain Cotton T-Shirt - 2 Pack",
                rating: "images/ratings/rating-45.png",
                reviews: 56,
                price: "$7.99",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-contain mb-4"
                />
                <h3 className="font-semibold text-lg line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center mt-2 space-x-2">
                  <img className="h-5" src={product.rating} alt="Rating" />
                  <span className="text-sm text-blue-600">
                    {product.reviews}
                  </span>
                </div>
                <div className="text-xl font-bold text-green-600 mt-2">
                  {product.price}
                </div>
                <select className="mt-2 border border-gray-300 rounded-md px-2 py-1 focus:ring-blue-500">
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <div className="mt-2 flex items-center space-x-1 text-green-500 text-sm">
                  <img src="images/icons/checkmark.png" className="h-4" />
                  <span>Added</span>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
