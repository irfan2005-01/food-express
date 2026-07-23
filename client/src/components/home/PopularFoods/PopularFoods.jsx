import { useEffect, useState } from "react";
import FoodCard from "../../common/FoodCard/FoodCard";
import  SectionTitle  from "../../common/SectionTitle/SectionTitle";
import { getFoods } from "../../../services/foodService";

export default function PopularFoods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularFoods = async () => {
      try {
        const data = await getFoods();
        setFoods(data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching popular foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularFoods();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-lg font-medium text-gray-500">
        Loading popular dishes...
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Customer Favorites"
          title="Popular Food Items"
        />

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {foods.map((food, index) => (
            <FoodCard
              key={food._id || food.id || index}
              food={food}
            />
          ))}
        </div>
      </div>
    </section>
  );
}