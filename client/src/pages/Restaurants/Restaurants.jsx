import { Star, MapPin, Clock } from "lucide-react";

const mockRestaurants = [
  {
    id: 1,
    name: "Biryani Blues",
    cuisine: "Hyderabadi, Biryani, Mughlai",
    rating: 4.8,
    deliveryTime: "25-30 min",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Pizza Hut Express",
    cuisine: "Italian, Pizzas, Fast Food",
    rating: 4.6,
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    name: "The Burger Club",
    cuisine: "American, Burgers, Shakes",
    rating: 4.5,
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    name: "Pasta Imperium",
    cuisine: "Italian, Continental, Salads",
    rating: 4.7,
    deliveryTime: "35-45 min",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    name: "Sweet Delights Bakery",
    cuisine: "Desserts, Cakes, Ice Creams",
    rating: 4.9,
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    name: "Sichuan Noodle House",
    cuisine: "Chinese, Asian, Noodles",
    rating: 4.4,
    deliveryTime: "30-35 min",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=60",
  },
];

export default function Restaurants() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-2 text-4xl font-bold text-gray-900">Top Restaurants Near You</h1>
      <p className="mb-10 text-gray-500">Explore handpicked food spots available for fast delivery</p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {mockRestaurants.map((res) => (
          <div
            key={res.id}
            className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img src={res.image} alt={res.name} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">{res.name}</h3>
                <span className="flex items-center gap-1 rounded-lg bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-600">
                  <Star size={14} className="fill-orange-500" /> {res.rating}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500">{res.cuisine}</p>
              <div className="mt-4 flex items-center gap-4 text-xs font-medium text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {res.deliveryTime}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} /> 2.5 km away
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}