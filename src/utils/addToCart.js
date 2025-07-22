export const addToCart = async (product, quantity) => {
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
};
