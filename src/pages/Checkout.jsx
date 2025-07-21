export function CheckoutPage() {
  return (
    <>
      <title>Checkout</title>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <header className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <a href="/">
                <img
                  className="h-8 hidden sm:block"
                  src="images/logo-white.png"
                  alt="Logo"
                />
                <img
                  className="h-8 sm:hidden"
                  src="images/mobile-logo-white.png"
                  alt="Mobile Logo"
                />
              </a>
            </div>

            {/* Middle Section */}
            <div className="text-sm sm:text-base">
              Checkout (
              <a href="/" className="underline hover:text-blue-400">
                3 items
              </a>
              )
            </div>

            {/* Right Section */}
            <div>
              <img
                className="h-6"
                src="images/icons/checkout-lock-icon.png"
                alt="Secure"
              />
            </div>
          </div>
        </header>

        {/* Checkout Content */}
        <main className="max-w-7xl mx-auto p-4">
          <h2 className="text-2xl font-bold mb-6">Review your order</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Order Summary */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Item */}
              {[1, 2].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow p-4">
                  <div className="text-sm text-gray-600 font-medium mb-2">
                    Delivery date:{" "}
                    {i === 0 ? "Tuesday, June 21" : "Wednesday, June 15"}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
                    <img
                      className="h-32 w-32 object-contain"
                      src={
                        i === 0
                          ? "images/products/athletic-cotton-socks-6-pairs.jpg"
                          : "images/products/intermediate-composite-basketball.jpg"
                      }
                      alt="Product"
                    />

                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-lg">
                          {i === 0
                            ? "Black and Gray Athletic Cotton Socks - 6 Pairs"
                            : "Intermediate Size Basketball"}
                        </div>
                        <div className="text-green-600 font-bold text-lg">
                          {i === 0 ? "$10.90" : "$20.95"}
                        </div>
                      </div>

                      <div className="text-sm space-x-2">
                        <span>
                          Quantity:{" "}
                          <span className="font-medium text-gray-700">
                            {i === 0 ? "2" : "1"}
                          </span>
                        </span>
                        <button className="text-blue-600 hover:underline">
                          Update
                        </button>
                        <button className="text-blue-600 hover:underline">
                          Delete
                        </button>
                      </div>

                      <div>
                        <div className="font-medium text-sm mb-2">
                          Choose a delivery option:
                        </div>
                        {[
                          ["Tuesday, June 21", "FREE Shipping", i === 0],
                          ["Wednesday, June 15", "$4.99 - Shipping", i === 1],
                          ["Monday, June 13", "$9.99 - Shipping", false],
                        ].map(([date, price, checked], j) => (
                          <label
                            key={j}
                            className="flex items-start space-x-2 mb-1 cursor-pointer"
                          >
                            <input
                              type="radio"
                              className="mt-1"
                              name={`delivery-option-${i}`}
                              defaultChecked={checked}
                            />
                            <div className="text-sm">
                              <div className="font-medium">{date}</div>
                              <div className="text-gray-500">{price}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Summary */}
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-xl font-semibold mb-4">Payment Summary</h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Items (3):</span>
                  <span className="font-medium">$42.75</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping & handling:</span>
                  <span className="font-medium">$4.99</span>
                </div>
                <div className="flex justify-between border-t pt-2">
                  <span>Total before tax:</span>
                  <span className="font-medium">$47.74</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated tax (10%):</span>
                  <span className="font-medium">$4.77</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Order total:</span>
                  <span>$52.51</span>
                </div>
              </div>

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
