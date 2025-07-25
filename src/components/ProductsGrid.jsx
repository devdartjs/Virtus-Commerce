import { Product } from "./Product";

export function ProductsGrid({ products, loadCart }) {
  return (
    <main className="max-w-7xl mx-auto py-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <Product
            product={product}
            productId={product.id}
            loadCart={loadCart}
          />
        ))}
      </div>
    </main>
  );
}
