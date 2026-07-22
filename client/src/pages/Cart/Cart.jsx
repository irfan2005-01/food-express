import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    total,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center text-4xl font-bold">
        Your Cart is Empty 🛒
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-10 text-5xl font-bold">Shopping Cart</h1>

      <div className="grid gap-10 lg:grid-cols-3">

        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 rounded-3xl bg-white p-5 shadow-md"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-32 w-32 object-contain"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold">
                  {item.name}
                </h2>

                <p className="mt-2 text-orange-500 font-semibold">
                  ₹{item.price}
                </p>

                <div className="mt-5 flex items-center gap-4">

                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="rounded-full bg-gray-200 p-2"
                  >
                    <Minus size={18} />
                  </button>

                  <span className="text-xl font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="rounded-full bg-orange-500 p-2 text-white"
                  >
                    <Plus size={18} />
                  </button>

                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                <Trash2 />
              </button>
            </div>
          ))}

        </div>

        <div className="rounded-3xl bg-white p-8 shadow-md h-fit">
          <h2 className="text-3xl font-bold">
            Order Summary
          </h2>

          <div className="mt-8 flex justify-between">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="mt-4 flex justify-between">
            <span>Delivery</span>
            <span>₹50</span>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>₹{total + 50}</span>
          </div>

          <button className="mt-8 w-full rounded-full bg-orange-500 py-4 text-white hover:bg-orange-600">
            Proceed To Checkout
          </button>
        </div>

      </div>
    </section>
  );
}