import { useState, useEffect } from "react";
import Header from "../components/Header";

export function OrdersPage({ cartItems }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const res = await fetch(
        "http://localhost:3000/api/orders?expand=products"
      );
      if (!res.ok) throw new Error("Failed to fetch orders");
      const data = await res.json();
      setOrders(data);
    }

    fetchOrders();
  }, []);

  function formatDate(ms) {
    const date = new Date(ms);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  }

  function formatCurrency(cents) {
    return `$${(cents / 100).toFixed(2)}`;
  }

  return (
    <>
      <title>Orders</title>

      <Header cartItems={cartItems} />

      <div className="orders-page p-6 max-w-7xl mx-auto font-sans text-gray-800">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

        {orders.map((order) => (
          <div
            key={order.id}
            className="order-container bg-white rounded-xl shadow p-6 mb-8 space-y-4"
          >
            {/* Order Header */}
            <div className="grid sm:grid-cols-3 gap-2 text-sm text-gray-700 bg-white p-4 rounded-xl shadow-sm border mb-4">
              {/* Order ID */}
              <div>
                <div className="font-semibold text-gray-900">Order ID:</div>
                <div className="break-all text-gray-600">{order.id}</div>
              </div>

              {/* Order Date */}
              <div>
                <div className="font-semibold text-gray-900">Order Placed:</div>
                <div className="text-gray-600">
                  {formatDate(order.orderTimeMs)}
                </div>
              </div>

              {/* Total */}
              <div>
                <div className="font-semibold text-gray-900">Total:</div>
                <div className="text-gray-600">
                  {formatCurrency(order.totalCostCents)}
                </div>
              </div>
            </div>

            {/* Order Products */}
            <div className="grid sm:grid-cols-3 gap-6">
              {order.products.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg border p-4 flex flex-col"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-32 w-full object-contain mb-3"
                  />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">
                      {item.product.name}
                    </div>
                    <div className="text-gray-500">
                      Arriving on: {formatDate(item.estimatedDeliveryTimeMs)}
                    </div>
                    <div className="mb-2">Quantity: {item.quantity}</div>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-md">
                      <img
                        src="images/icons/buy-again.png"
                        className="h-4 w-4 mr-2"
                        alt="Buy Again"
                      />
                      Add to Cart
                    </button>
                    <a href="/tracking">
                      <button className="w-full border border-gray-400 text-gray-700 text-sm font-medium py-2 rounded-md hover:bg-gray-100">
                        Track Package
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
