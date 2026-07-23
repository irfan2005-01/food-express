import { ArrowRight, Leaf, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroContent() {
  return (
    <div className="flex-1 space-y-10">
      {/* Badge */}
      <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
        🍔 Freshly Prepared Meals
      </span>

      {/* Heading */}
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Enjoy Fresh & <br />
          <span className="text-orange-500">Delicious Food</span>
          <br />
          Delivered to Your Door
        </h1>

        <p className="max-w-xl text-lg leading-8 text-gray-600">
          Freshly prepared meals made with quality ingredients,
          delivered quickly so you can enjoy every bite without
          leaving your home.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          to="/menu"
          className="rounded-full bg-orange-500 px-8 py-4 text-center font-semibold text-white transition hover:bg-orange-600"
        >
          Order Now
        </Link>

        <Link
          to="/menu"
          className="flex items-center justify-center gap-2 rounded-full border border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-50"
        >
          View Menu
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <Leaf className="text-orange-500" size={24} />
          <div>
            <h3 className="font-semibold text-gray-900">
              Fresh Ingredients
            </h3>
            <p className="text-sm text-gray-500">
              Prepared daily with quality ingredients.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Truck className="text-orange-500" size={24} />
          <div>
            <h3 className="font-semibold text-gray-900">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-500">
              Hot meals delivered quickly to your door.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Award className="text-orange-500" size={24} />
          <div>
            <h3 className="font-semibold text-gray-900">
              Premium Quality
            </h3>
            <p className="text-sm text-gray-500">
              Every meal is prepared with care and taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}