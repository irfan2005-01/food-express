import FoodCard from "../../common/FoodCard/FoodCard";
import popularFoods from "../../../data/popularFoods";
export default function PopularFoods() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold">
          Popular Foods
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Most ordered dishes from our customers.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {popularFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

      </div>
    </section>
  );
}