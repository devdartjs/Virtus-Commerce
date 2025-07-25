import { Link } from "react-router";

function Header({ cartItems }) {
  let totalQuantity = 0;

  cartItems.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return (
    <>
      <header className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <img
                className="h-8 hidden sm:block"
                src="/public/images/icons/svg/logo-white-temp.svg"
                alt="Logo"
              />
              <img
                className="h-8 sm:hidden"
                src="/public/images/icons/svg/logo-white-temp.svg"
                alt="Mobile Logo"
              />
            </Link>
          </div>

          <div className="flex items-center w-full max-w-md mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-l-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-slate-400 hover:bg-blue-600 px-4 py-2 rounded-r-md ml-2">
              <img
                className="h-7"
                src="public/images/icons/svg/search-icon.svg"
                alt="Search"
              />
            </button>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/orders" className="hover:underline">
              Orders
            </Link>
            <Link
              to="/checkout"
              className="relative flex items-center space-x-1 hover:underline"
            >
              <img
                className="h-6"
                src="public/images/icons/cart-icon.png"
                alt="Cart"
              />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {totalQuantity || "0"}
              </span>

              <span>Cart</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
