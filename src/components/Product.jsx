import { useState } from "react";

export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  async function handleAddToCart() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/cart-items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
          quantity,
        }),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error(`Error adding cart: ${response.status}`);
      }

      await loadCart();

      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (error) {
      console.error("Error while adding product to the cart:", error);
      alert("It was not possible to add the product to the cart. Try again.");
    }
  }

  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>

      <div className="relative group aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          src={`public/${product.image}`}
          alt={product.name}
          className="h-48 w-full object-contain mb-4 group-hover:opacity-30 transition-opacity"
        />
      </div>

      <div className="flex items-center mt-2 space-x-2">
        <img
          className="h-5"
          src={`public/images/ratings/rating-${product.stars * 10}.png`}
          alt="Rating-Stars"
        />
        <span className="text-md text-slate-800 text-bold">
          {product.ratingCount}
        </span>
      </div>

      <div className="text-xl font-bold text-green-600 mt-2">
        {`$${(product.priceCents / 100).toFixed(2)}`}
      </div>

      <select
        className="mt-2 border border-gray-300 rounded-md px-2 py-1 focus:ring-blue-500"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>

      <div
        className={`mt-2 ml-16 flex items-center space-x-1 text-green-500 text-sm transition-opacity duration-300 ${
          added ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <img
          src="public/images/icons/checkmark.png"
          className="h-4"
          alt="Checkmark"
        />
        <span>Added</span>
      </div>

      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
