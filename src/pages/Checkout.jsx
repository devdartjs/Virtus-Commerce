import { useEffect, useState } from "react";
import Header from "../components/Header";

export function CheckoutPage({ cartItems, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  async function fetchDeliveryOptions() {
    const res = await fetch("/api/delivery-options");
    if (!res.ok) throw new Error("Failed to fetch delivery options");
    const data = await res.json();
    setDeliveryOptions(data);
  }

  useEffect(() => {
    fetchDeliveryOptions();
  }, []);

  async function fetchPaymentSummary() {
    const res = await fetch("/api/payment-summary");
    if (!res.ok) throw new Error("Failed to fetch payment summary");
    const data = await res.json();
    setPaymentSummary(data);
  }

  useEffect(() => {
    fetchPaymentSummary();
  }, [cartItems]);

  const getDeliveryOption = (id) =>
    deliveryOptions.find((opt) => String(opt.id) === String(id));

  const updateDeliveryOption = async (productId, deliveryOptionId) => {
    try {
      const updateRes = await fetch(`/api/cart-items/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ deliveryOptionId }),
      });

      if (!updateRes.ok) throw new Error("Failed to update delivery dates");

      await loadCart();
      fetchDeliveryOptions();
      fetchPaymentSummary();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <title>Checkout</title>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <Header cartItems={cartItems} />

        <main className="max-w-7xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6">Review your order</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => {
                const { product, quantity, deliveryOptionId } = item;
                const deliveryOption = getDeliveryOption(deliveryOptionId);

                return (
                  <div
                    key={item.productId}
                    className="bg-white rounded-xl shadow p-4"
                  >
                    <div className="text-lg text-zinc-600 font-medium mb-4">
                      Delivery date:{" "}
                      {deliveryOption?.deliveryDays != null
                        ? new Date(
                            Date.now() +
                              deliveryOption.deliveryDays * 24 * 60 * 60 * 1000
                          ).toDateString()
                        : "N/A"}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                      <img
                        className="h-32 w-32 object-contain"
                        src={product.image}
                        alt={product.name}
                      />

                      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-6 space-y-6 md:space-y-0">
                        <div className="space-y-3 md:w-1/2 w-full">
                          <div>
                            <div className="font-semibold text-lg">
                              {product.name}
                            </div>
                            <div className="text-green-600 font-bold text-lg">
                              ${(product.priceCents / 100).toFixed(2)}
                            </div>
                          </div>

                          <div className="text-sm space-x-2">
                            <span>
                              Quantity:{" "}
                              <span className="font-medium text-gray-700">
                                {quantity}
                              </span>
                            </span>
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={() =>
                                updateDeliveryOption(
                                  item.productId,
                                  deliveryOptionId
                                )
                              }
                            >
                              Update
                            </button>
                            <button
                              className="text-blue-600 hover:underline"
                              onClick={async () => {
                                try {
                                  await fetch(
                                    `/api/cart-items/${item.productId}`,
                                    {
                                      method: "DELETE",
                                    }
                                  );
                                  await loadCart();
                                } catch (err) {
                                  console.log(err);
                                }
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>

                        <div className="md:w-1/2 w-full">
                          <div className="font-medium text-sm mb-2">
                            Choose a delivery option:
                          </div>
                          {deliveryOptions.map((opt) => (
                            <div
                              key={opt.id}
                              className="flex items-start space-x-2 mb-1 cursor-pointer"
                            >
                              <input
                                type="radio"
                                className="mt-1"
                                name={`delivery-option-${item.productId}`}
                                value={opt.id}
                                checked={
                                  String(opt.id) === String(deliveryOptionId)
                                }
                                onChange={() =>
                                  updateDeliveryOption(item.productId, opt.id)
                                }
                              />
                              <div className="text-sm">
                                <div className="font-medium">
                                  {new Date(
                                    Date.now() +
                                      opt.deliveryDays * 24 * 60 * 60 * 1000
                                  ).toDateString()}
                                </div>
                                <div className="text-gray-500">
                                  {opt.priceCents === 0
                                    ? "FREE Shipping"
                                    : `$${(opt.priceCents / 100).toFixed(
                                        2
                                      )} - Shipping`}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment summary */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>

              {paymentSummary ? (
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Items ({paymentSummary.totalItems}):</span>
                    <span className="font-medium">
                      ${(paymentSummary.productCostCents / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping & handling:</span>
                    <span className="font-medium">
                      ${(paymentSummary.shippingCostCents / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span>Total before tax:</span>
                    <span className="font-medium">
                      $
                      {(paymentSummary.totalCostBeforeTaxCents / 100).toFixed(
                        2
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated tax (10%):</span>
                    <span className="font-medium">
                      ${(paymentSummary.taxCents / 100).toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Order total:</span>
                    <span>
                      ${(paymentSummary.totalCostCents / 100).toFixed(2)}
                    </span>
                  </div>
                </div>
              ) : (
                <p>Loading summary...</p>
              )}

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold">
                Place your order
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
