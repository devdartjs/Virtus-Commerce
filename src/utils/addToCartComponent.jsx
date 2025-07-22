export const AddToCart = async (product, quantity, loadCart) => {
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
};
