import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./pages/Home";
import { CheckoutPage } from "./pages/Checkout";
import { OrdersPage } from "./pages/Orders";
import { TrackingPage } from "./pages/Tracking";
import "./App.css";

function App() {
  const [cartItems, setCartItens] = useState([]);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await fetch(
          "http://localhost:3000/api/cart-items?expand=product"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        console.log(data);
        setCartItens(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }

    fetchCartItems();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage cartItems={cartItems} />} />
      <Route
        path="/checkout"
        element={<CheckoutPage cartItems={cartItems} />}
      />
      <Route path="/orders" element={<OrdersPage cartItems={cartItems} />} />
      <Route
        path="/tracking"
        element={<TrackingPage cartItems={cartItems} />}
      />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
