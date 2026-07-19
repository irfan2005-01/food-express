import { useMemo, useState } from "react";

import popularFoods from "../../data/popularFoods";

import MenuSearch from "../../components/menu/MenuSearch";
import CategoryFilter from "../../components/menu/CategoryFilter";
import FoodGrid from "../../components/menu/FoodGrid";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredFoods = useMemo(() => {
    return popularFoods.filter((food) => {
      const matchesSearch = food.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || food.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

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