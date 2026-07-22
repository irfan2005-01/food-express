import { useParams } from "react-router-dom";
import popularFoods from "../../data/popularFoods";
import { useCart } from "../../context/CartContext";

export default function FoodDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const food = popularFoods.find(
    (item) => item.id === Number(id)
  );

  if (!food) {
    return (
      <div className="py-40 text-center text-4xl">
        Food Not Found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-16 md:grid-cols-2">
        <img
          src={food.image}
          alt={food.name}
          className="w-full rounded-3xl shadow-xl"
        />

        <div>
          <h1 className="text-5xl font-bold">
            {food.name}
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Freshly prepared using premium ingredients.
            Delivered hot and delicious.
          </p>

          <h2 className="mt-8 text-4xl font-bold text-orange-500">
            ₹{food.price}
          </h2>

          <button
            onClick={() => addToCart(food)}
            className="mt-10 rounded-full bg-orange-500 px-10 py-4 text-white transition hover:bg-orange-600"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </section>
  );
}