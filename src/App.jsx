import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import { CheckoutPage } from "./pages/Checkout";
import { OrdersPage } from "./pages/Orders";
import { TrackingPage } from "./pages/Tracking";
import { PageNotFound } from "./pages/PageNotFound";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  console.log("url:", url);

  async function loadCart() {
    try {
      const response = await fetch(`${url}/api/v1/cart-items?expand=product`);
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }

      const data = await response.json();
      setCartItems(data);
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
        element={
          <HomePage cartItems={cartItems} loadCart={loadCart} url={url} />
        }
      />
      <Route
        path="/checkout"
        element={
          <CheckoutPage cartItems={cartItems} loadCart={loadCart} url={url} />
        }
      />
      <Route
        path="/orders"
        element={
          <OrdersPage cartItems={cartItems} loadCart={loadCart} url={url} />
        }
      />
      <Route
        path="/tracking"
        element={<TrackingPage cartItems={cartItems} url={url} />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
