import {
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  Flame,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getFoodById } from "../../services/foodService";

export default function FoodDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchFood = async () => {
      // Guard clause: avoid fetching if id is missing or literal "undefined" string
      if (!id || id === "undefined") {
        setLoading(false);
        return;
      }

      try {
        const data = await getFoodById(id);
        setFood(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [id]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(food);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!food) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center text-4xl font-bold">
        Food Not Found
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Image */}
        <div className="relative flex justify-center">
          <div className="absolute h-[420px] w-[420px] rounded-full bg-orange-100 blur-3xl"></div>

          <img
            src={food.image}
            alt={food.name}
            className="relative z-10 w-full max-w-lg transition duration-500 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Star
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />

            <span className="font-semibold">4.8</span>

            <span className="text-gray-500">
              (124 Reviews)
            </span>
          </div>

          <h1 className="text-5xl font-bold">
            {food.name}
          </h1>

          <p className="mt-6 leading-8 text-gray-600">
            {food.description ||
              "Freshly prepared using premium ingredients and delivered hot to your doorstep."}
          </p>

          <h2 className="mt-8 text-5xl font-bold text-orange-500">
            ₹{food.price}
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-orange-600">
              <Truck size={18} />
              30 Min Delivery
            </div>

            <div className="flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-orange-600">
              <Flame size={18} />
              Freshly Made
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <button
              onClick={() =>
                setQuantity((q) => Math.max(1, q - 1))
              }
              className="rounded-full border p-3 transition hover:bg-gray-100"
            >
              <Minus size={18} />
            </button>

            <span className="w-10 text-center text-2xl font-bold">
              {quantity}
            </span>

            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="rounded-full border p-3 transition hover:bg-gray-100"
            >
              <Plus size={18} />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-10 flex items-center gap-3 rounded-full bg-orange-500 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            <ShoppingCart size={22} />
            Add {quantity} to Cart
          </button>
        </div>
      </div>
    </section>
  );
}