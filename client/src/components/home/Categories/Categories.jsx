import categories from "../../../data/categories";

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center">
        Browse By Category
      </h2>

      <p className="text-center text-gray-500 mt-3 mb-12">
        Choose from hundreds of delicious meals.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div
              key={category.id}
              className="
              bg-white
              rounded-2xl
              shadow-md
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              p-6
              flex
              flex-col
              items-center
              cursor-pointer"
            >

              <div className="bg-orange-100 p-4 rounded-full">

                <Icon
                  size={34}
                  className="text-orange-500"
                />

              </div>

              <h3 className="mt-4 font-semibold">
                {category.name}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}