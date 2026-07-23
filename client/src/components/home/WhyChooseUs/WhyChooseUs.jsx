import { Leaf, Truck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <Leaf size={34} />,
    title: "Fresh Ingredients",
    description:
      "Every meal is prepared using fresh, carefully selected ingredients.",
  },
  {
    icon: <Truck size={34} />,
    title: "Fast Delivery",
    description:
      "Hot and delicious food delivered quickly to your doorstep.",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Quality Guaranteed",
    description:
      "We focus on taste, hygiene and customer satisfaction in every order.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Fresh Food. Great Taste.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            We believe every meal should be fresh, delicious and delivered with
            care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                {feature.icon}
              </div>

              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}