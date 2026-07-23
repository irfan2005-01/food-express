import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
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
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6">
        <h2 className="text-4xl font-bold text-gray-800">Your Cart is Empty 🛒</h2>
        <p className="text-gray-500">Looks like you haven't added anything to your cart yet.</p>
        <Link
          to="/menu"
          className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-10 text-5xl font-bold">Shopping Cart</h1>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Cart Items List */}
        <div className="space-y-6 lg:col-span-2">
          {cartItems.map((item) => {
            const itemId = item._id || item.id;

            return (
              <div
                key={itemId}
                className="flex items-center gap-6 rounded-3xl bg-white p-5 shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-32 object-contain"
                />

                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{item.name}</h2>

                  <p className="mt-2 font-semibold text-orange-500">
                    ₹{item.price}
                  </p>

                  <div className="mt-5 flex items-center gap-4">
                    <button
                      onClick={() => decreaseQuantity(itemId)}
                      className="rounded-full bg-gray-200 p-2 transition hover:bg-gray-300"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="text-xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(itemId)}
                      className="rounded-full bg-orange-500 p-2 text-white transition hover:bg-orange-600"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(itemId)}
                  className="text-red-500 transition hover:scale-110"
                >
                  <Trash2 size={22} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="h-fit rounded-3xl bg-white p-8 shadow-md">
          <h2 className="text-3xl font-bold">Order Summary</h2>

          <div className="mt-8 flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-900">₹{total}</span>
          </div>

          <div className="mt-4 flex justify-between text-gray-600">
            <span>Delivery</span>
            <span className="font-semibold text-gray-900">₹50</span>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span className="text-orange-500">₹{total + 50}</span>
          </div>

          <Link
            to="/checkout"
            className="mt-8 block w-full rounded-full bg-orange-500 py-4 text-center font-semibold text-white transition hover:bg-orange-600"
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}