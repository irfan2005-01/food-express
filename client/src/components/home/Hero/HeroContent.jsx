import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex-1 space-y-8">
      <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
        🍔 Fast Delivery in Your City
      </span>

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Delicious Food
        <br />
        <span className="text-orange-500">Delivered Fast</span>
      </h1>

      <p className="max-w-lg text-lg text-gray-600">
        Order your favorite meals from the best restaurants near you.
        Fresh food, quick delivery, and amazing offers every day.
      </p>

      <div className="flex gap-4">
        <button className="rounded-full bg-orange-500 px-8 py-4 text-white font-semibold hover:bg-orange-600 transition">
          Order Now
        </button>

        <button className="flex items-center gap-2 rounded-full border border-orange-500 px-8 py-4 font-semibold text-orange-500 hover:bg-orange-50 transition">
          Explore Menu
          <ArrowRight size={18} />
        </button>
      </div>

      <div className="flex items-center gap-10 pt-6">
        <div>
          <h2 className="text-3xl font-bold">12K+</h2>
          <p className="text-gray-500">Happy Customers</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-gray-500">Restaurants</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">4.9★</h2>
          <p className="text-gray-500">Average Rating</p>
        </div>
      </div>
    </div>
  );
}