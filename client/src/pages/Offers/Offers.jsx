import { Tag, Copy } from "lucide-react";

const offers = [
  {
    id: 1,
    code: "FOOD50",
    discount: "50% OFF",
    title: "On First 3 Orders",
    description: "Use code FOOD50 on checkout. Max discount ₹120.",
  },
  {
    id: 2,
    code: "FREEDEL",
    discount: "FREE DELIVERY",
    title: "On Orders Above ₹299",
    description: "Enjoy zero delivery charges on eligible items.",
  },
  {
    id: 3,
    code: "PARTY20",
    discount: "20% OFF",
    title: "Weekend Fiesta",
    description: "Get 20% discount on all family combos and meals.",
  },
];

export default function Offers() {
  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Coupon code "${code}" copied to clipboard!`);
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold text-gray-900">Deals & Coupons</h1>
      <p className="mb-10 text-gray-500">Save big on your favorite meals</p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col justify-between rounded-3xl border border-dashed border-orange-300 bg-orange-50/50 p-6 shadow-sm"
          >
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white">
                <Tag size={16} /> {offer.discount}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{offer.description}</p>
            </div>

            <button
              onClick={() => copyCode(offer.code)}
              className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-white border border-gray-200 py-3 font-mono font-bold text-gray-800 transition hover:bg-orange-500 hover:text-white hover:border-orange-500"
            >
              <Copy size={16} /> {offer.code}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}