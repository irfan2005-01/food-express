import { useEffect, useMemo, useState } from "react";

import { getFoods } from "../../services/foodService";

import MenuSearch from "../../components/menu/MenuSearch";
import CategoryFilter from "../../components/menu/CategoryFilter";
import FoodGrid from "../../components/menu/FoodGrid";

export default function Menu() {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const data = await getFoods();
        setFoods(data);
      } catch (error) {
        console.error("Failed to fetch foods:", error);
      }
    };

    fetchFoods();
  }, []);

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesSearch = food.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || food.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [foods, search, category]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-10 text-5xl font-bold">
        Our Menu
      </h1>

      <MenuSearch
        search={search}
        setSearch={setSearch}
      />

      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      <FoodGrid foods={filteredFoods} />
    </section>
  );
}