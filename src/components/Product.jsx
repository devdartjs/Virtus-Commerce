import { useState } from "react";

export function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div
        key={product.id}
        className="bg-white shadow rounded-xl p-4 flex flex-col justify-between hover:shadow-lg transition-shadow"
      >
        <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>

        <div className="relative group aspect-w-1 aspect-h-1 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-contain mb-4 group-hover:opacity-30 transition-opacity"
          />
        </div>

        <div className="flex items-center mt-2 space-x-2">
          <img
            className="h-5"
            src={`images/ratings/rating-${product.rating.stars * 10}.png`}
            alt="Rating-Stars"
          />
          <span className="text-md text-slate-800 text-bold">
            {product.rating.count}
          </span>
        </div>

        <div className="text-xl font-bold text-green-600 mt-2">
          {`$${(product.priceCents / 100).toFixed(2)}`}
        </div>
        <select
          className="mt-2 border border-gray-300 rounded-md px-2 py-1 focus:ring-blue-500"
          value={quantity}
          onChange={(e) => {
            const quantitySelector = Number(e.target.value);
            setQuantity(quantitySelector);
          }}
        >
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
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold"
          onClick={async () => {
            await fetch("/api/cart-items", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                productId: product.id,
                quantity,
              }),
            });

            await loadCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
}
