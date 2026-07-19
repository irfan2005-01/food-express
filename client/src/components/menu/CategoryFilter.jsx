const categories = ["All", "Burger", "Pizza", "Pasta"];

export default function CategoryFilter({
  category,
  setCategory,
}) {
  return (
    <div className="mb-10 flex flex-wrap gap-4">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-6 py-3 transition ${
            category === item
              ? "bg-orange-500 text-white"
              : "bg-gray-100 hover:bg-orange-100"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}