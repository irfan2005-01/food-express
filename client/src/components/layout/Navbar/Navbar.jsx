import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black text-orange-500">
          FoodExpress
        </Link>

        {/* Navigation Links Component */}
        <NavLinks />

        {/* Cart Action Button Component */}
        <NavActions />
      </div>
    </header>
  );
}