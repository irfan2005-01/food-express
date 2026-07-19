import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function FoodCard({ food }) {
  return (
    <Link
      to={`/food/${food.id}`}
      className="group block rounded-3xl bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative">
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-0 top-0 rounded-full bg-white p-2 shadow"
        >
          <Heart size={18} />
        </button>

        <img
          src={food.image}
          alt={food.name}
          className="mx-auto h-52 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{food.name}</h3>

          <div className="flex items-center gap-1 text-orange-500">
            <Star size={16} fill="currentColor" />
            <span>{food.rating}</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-orange-500">
            ₹{food.price}
          </h2>

          <button
            onClick={(e) => e.preventDefault()}
            className="rounded-full bg-orange-500 p-3 text-white transition hover:bg-orange-600"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </Link>
  );
}