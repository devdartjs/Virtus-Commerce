import { useState, useEffect } from "react";
import Header from "../components/Header";
import { ProductsGrid } from "../components/ProductsGrid";

export function HomePage({ cartItems, loadCart, url }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${url}/api/v1/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        const products = data.products;

        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  });

  return (
    <>
      <title>Home</title>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Header cartItems={cartItems} />
        <ProductsGrid loadCart={loadCart} products={products} url={url} />
      </div>
    </>
  );
}
