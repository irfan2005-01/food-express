import { Link } from "react-router-dom";

export default function Deals() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-16 text-white">
          <div className="max-w-2xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              Limited Time Offer
            </span>

            <h2 className="mt-6 text-5xl font-bold">
              Get 20% OFF
            </h2>

            <p className="mt-4 text-lg text-orange-100">
              Enjoy your favorite meals at a special discount.
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-orange-500 transition hover:scale-105"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}