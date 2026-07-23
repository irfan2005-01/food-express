import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function FoodCard({ food }) {
  // MongoDB uses _id; fallback to id if using local data
  const foodId = food?._id || food?.id;

  return (
    <Link
      to={`/food/${foodId}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative bg-orange-50 p-6">
        <button
          onClick={(e) => e.preventDefault()}
          className="absolute right-4 top-4 rounded-full bg-white p-2 shadow transition hover:scale-110"
        >
          <Heart size={18} />
        </button>

        <img
          src={food.image}
          alt={food.name}
          className="mx-auto h-48 w-full object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
            {food.category}
          </span>

          <div className="flex items-center gap-1 text-orange-500">
            <Star size={15} fill="currentColor" />
            <span className="text-sm font-medium">
              {food.rating}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          {food.name}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {food.description}
        </p>

        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-orange-500">
              ₹{food.price}
            </span>

            <button
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600"
            >
              <ShoppingCart size={18} />
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}