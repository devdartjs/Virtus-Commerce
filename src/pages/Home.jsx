import { useState, useEffect } from "react";
import Header from "../components/Header";

export function HomePage() {
  const [products, setProducts] = useState([]);
  const [cartItens, setCartItens] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    async function fetchCartItems() {
      try {
        const response = await fetch("http://localhost:3000/api/cart-items");
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        console.log(data);
        setCartItens(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }

    fetchProducts();
    fetchCartItems();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Header cartItems={cartItens} />

        <main className="max-w-7xl mx-auto py-8 px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg line-clamp-2">
                  {product.name}
                </h3>

                <div className="relative group aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-contain mb-4 group-hover:opacity-30 transition-opacity"
                  />

                  <div className="absolute inset-0 bg-slate-200 bg-opacity-60 text-justify text-slate-700 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm">{product.description}</p>
                  </div>
                </div>

                <div className="flex items-center mt-2 space-x-2">
                  <img
                    className="h-5"
                    src={`images/ratings/rating-${
                      product.rating.stars * 10
                    }.png`}
                    alt="Rating-Stars"
                  />
                  <span className="text-md text-slate-800 text-bold">
                    {product.rating.count}
                  </span>
                </div>

                <div className="text-xl font-bold text-green-600 mt-2">
                  {`$${(product.priceCents / 100).toFixed(2)}`}
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
