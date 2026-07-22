import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

export default function NavActions() {
  const { totalItems } = useCart();

  return (
    <div className="flex items-center gap-6">
      <Link to="/cart" className="relative">
        <ShoppingCart
          size={24}
          className="text-gray-700 hover:text-orange-500 transition"
        />

        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
          {totalItems}
        </span>
      </Link>

      <button className="rounded-full bg-orange-500 px-5 py-2 text-white hover:bg-orange-600 transition">
        Login
      </button>
    </div>
  );
}