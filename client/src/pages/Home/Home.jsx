import Hero from "../../components/home/Hero/Hero";
import Categories from "../../components/home/Categories/Categories";
import PopularFoods from "../../components/home/PopularFoods/PopularFoods";
import FeaturedRestaurants from "../../components/home/FeaturedRestaurants/FeaturedRestaurants";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularFoods />
      <FeaturedRestaurants />
    </>
  );
}