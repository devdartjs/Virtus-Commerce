import { Headers } from "../components/Header";

export function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <title>Orders</title>

      {/* Header */}
      <Headers />

      {/* Orders Section */}
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

        <div className="space-y-6">
          {[1, 2].map((orderIndex) => (
            <div
              key={orderIndex}
              className="bg-white shadow rounded-xl p-6 space-y-4"
            >
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-600">
                <div className="flex space-x-12 mb-2 sm:mb-0">
                  <div>
                    <div className="font-semibold">Order Placed:</div>
                    <div>{orderIndex === 1 ? "August 12" : "June 10"}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Total:</div>
                    <div>{orderIndex === 1 ? "$35.06" : "$41.90"}</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Order ID:</div>
                  <div className="break-all">
                    {orderIndex === 1
                      ? "27cba69d-4c3d-4098-b42d-ac7fa62b7664"
                      : "b6b6c212-d30e-4d4a-805d-90b52ce6b37d"}
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="grid sm:grid-cols-3 gap-6">
                {(orderIndex === 1
                  ? [
                      {
                        name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                        quantity: 1,
                        delivery: "August 15",
                        image:
                          "images/products/athletic-cotton-socks-6-pairs.jpg",
                      },
                      {
                        name: "Adults Plain Cotton T-Shirt - 2 Pack",
                        quantity: 2,
                        delivery: "August 19",
                        image:
                          "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
                      },
                    ]
                  : [
                      {
                        name: "Intermediate Size Basketball",
                        quantity: 2,
                        delivery: "June 17",
                        image:
                          "images/products/intermediate-composite-basketball.jpg",
                      },
                    ]
                ).map((product, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg border p-4 flex flex-col justify-between"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-32 w-full object-contain mb-3"
                    />
                    <div className="text-sm">
                      <div className="font-semibold mb-1">{product.name}</div>
                      <div className="text-gray-500">
                        Arriving on: {product.delivery}
                      </div>
                      <div className="mb-2">Quantity: {product.quantity}</div>
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
      </main>
    </div>
  );
}
