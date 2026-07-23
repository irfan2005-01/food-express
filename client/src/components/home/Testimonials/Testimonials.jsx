import { Star } from "lucide-react";

const reviews = [
  {
    name: "Aarav",
    review:
      "Amazing food, fast delivery and everything arrived fresh.",
  },
  {
    name: "Priya",
    review:
      "The ordering experience was simple and the food tasted great.",
  },
  {
    name: "Rahul",
    review:
      "Beautiful interface and excellent service. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Testimonials
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="leading-7 text-gray-600">
                "{review.review}"
              </p>

              <h4 className="mt-6 font-semibold">
                {review.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}