import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="text-3xl font-bold text-orange-500"
    >
      FoodExpress
    </Link>
  );
}