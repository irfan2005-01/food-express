import RestaurantCard from "../../common/RestaurantCard/RestaurantCard";
import restaurants from "../../../data/restaurants";

export default function FeaturedRestaurants() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Featured Restaurants
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Discover the highest-rated restaurants near you.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}