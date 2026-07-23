export default function Newsletter() {
  return (
    <section className="bg-orange-500 py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Stay Updated
        </h2>

        <p className="mt-4 text-orange-100">
          Subscribe to receive the latest offers and new menu updates.
        </p>

        <div className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full px-6 py-4 outline-none"
          />

          <button className="rounded-full bg-white px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-100">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}