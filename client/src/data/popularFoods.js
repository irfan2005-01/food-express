import burgerClassic from "../assets/images/burger-normal.png";
import burgerDouble from "../assets/images/burger-double.png";
import pizza from "../assets/images/hero-pizza.png";
import pasta from "../assets/images/hero-pasta.png";

const popularFoods = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burger",
    price: 249,
    rating: 4.8,
    image: burgerClassic,
  },
  {
    id: 2,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 399,
    rating: 4.9,
    image: pizza,
  },
  {
    id: 3,
    name: "Italian Pasta",
    category: "Pasta",
    price: 299,
    rating: 4.7,
    image: pasta,
  },
  {
    id: 4,
    name: "Double Burger",
    category: "Burger",
    price: 349,
    rating: 4.9,
    image: burgerDouble,
  },
];

export default popularFoods;