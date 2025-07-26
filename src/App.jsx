import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import { CheckoutPage } from "./pages/Checkout";
import { OrdersPage } from "./pages/Orders";
import { TrackingPage } from "./pages/Tracking";
import "./App.css";

function App() {
  const [cartItems, setCartItens] = useState([]);

  async function loadCart() {
    try {
      const response = await fetch("http://localhost:3000/api/v1/cart-items");
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      setCartItens(data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage cartItems={cartItems} loadCart={loadCart} />}
      />
      <Route
        path="/checkout"
        element={<CheckoutPage cartItems={cartItems} loadCart={loadCart} />}
      />
      <Route
        path="/orders"
        element={<OrdersPage cartItems={cartItems} loadCart={loadCart} />}
      />
      <Route
        path="/tracking"
        element={<TrackingPage cartItems={cartItems} />}
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
