import { Star, MapPin, Clock } from "lucide-react";

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{restaurant.name}</h3>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star
              size={16}
              className="text-orange-500"
              fill="currentColor"
            />
            {restaurant.rating}
          </span>

          <span className="flex items-center gap-1">
            <MapPin size={16} />
            {restaurant.location}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={16} />
            {restaurant.delivery}
          </span>
        </div>
      </div>
    </div>
  );
}