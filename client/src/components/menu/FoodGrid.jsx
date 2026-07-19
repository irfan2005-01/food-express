import FoodCard from "../common/FoodCard/FoodCard";

export default function FoodGrid({ foods }) {
  if (foods.length === 0) {
    return (
      <h2 className="py-20 text-center text-3xl font-bold">
        No food found 🍽️
      </h2>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}