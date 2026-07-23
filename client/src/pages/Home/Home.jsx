import Hero from "../../components/home/Hero/Hero";
import Categories from "../../components/home/Categories/Categories";
import PopularFoods from "../../components/home/PopularFoods/PopularFoods";
import WhyChooseUs from "../../components/home/WhyChooseUs/WhyChooseUs";
import FeaturedRestaurants from "../../components/home/FeaturedRestaurants/FeaturedRestaurants";
import Newsletter from "../../components/home/Newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularFoods />
      <WhyChooseUs />
      <FeaturedRestaurants />
      <Newsletter />
    </>
  );
}