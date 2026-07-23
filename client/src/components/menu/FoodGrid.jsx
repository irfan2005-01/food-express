import FoodCard from "../common/FoodCard/FoodCard";

export default function FoodGrid({ foods }) {
  if (!foods || foods.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500">
        No food items found.
      </div>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {foods.map((food, index) => (
        <FoodCard
          key={food._id || food.id || index}
          food={food}
        />
      ))}
    </div>
  );
}