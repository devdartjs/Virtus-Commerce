import { useState, useEffect } from "react";
import Header from "../components/Header";

export function TrackingPage({ cartItems }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const res = await fetch("/api/v1/orders?expand=products");
      if (!res.ok) throw new Error("Failed to fetch orders");
      const data = await res.json();
      console.log(data);

      setOrders(data);
    }

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <Header cartItems={cartItems} />

      {cartItems.map((item) => {
        const order = orders.find((order) =>
          order.products.some((product) => product.productId === item.productId)
        );

        if (order) {
          const product = order.products.find(
            (p) => p.productId === item.productId
          );
          const estimatedDeliveryTimeMs = product.estimatedDeliveryTimeMs;
          const currentTime = Date.now();

          // Check if delivery is in the future or already passed
          const isFutureDelivery = estimatedDeliveryTimeMs > currentTime;
          const estimatedDeliveryTime = new Date(estimatedDeliveryTimeMs);

          // Calculate remaining time (in days) for delivery
          const timeDiff = estimatedDeliveryTimeMs - currentTime;
          const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

          // Format the delivery date
          const deliveryDate = estimatedDeliveryTime.toLocaleDateString(
            "en-US",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );

          return (
            <div key={item.id}>
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
                    {isFutureDelivery ? (
                      daysRemaining > 1 ? (
                        <span>
                          Arriving in {daysRemaining} days on {deliveryDate}
                        </span>
                      ) : (
                        <span>Arriving tomorrow, {deliveryDate}</span>
                      )
                    ) : (
                      <span>December, 3, 2025</span>
                    )}
                  </div>

                  <h2 className="text-lg font-semibold">{item.product.name}</h2>

                  <div className="text-sm text-gray-700">
                    Quantity: {item.quantity}
                  </div>

                  <img
                    src={`public/${item.product.image}`}
                    alt={item.product.name}
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

        return null;
      })}
    </div>
  );
}
