import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

export default function NavActions() {
  const { totalItems } = useCart();

  return (
    <div className="flex items-center">
      <Link
        to="/cart"
        className="group relative flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-md"
      >
        <ShoppingCart
          size={20}
          className="text-gray-700 transition group-hover:text-orange-500"
        />

        <span className="font-semibold text-gray-700">
          Cart
        </span>

        {totalItems > 0 && (
          <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-sm">
            {totalItems}
          </span>
        )}
      </Link>
    </div>
  );
}