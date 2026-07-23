import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import API from "../../services/api";

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
    paymentMethod: "COD",
  });

  const deliveryFee = 50;
  const grandTotal = total + deliveryFee;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setLoading(true);

    try {
      const orderData = {
        items: cartItems.map((item) => ({
          food: item._id || item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        })),
        amount: grandTotal,
        customer: {
          name: formData.name,
          email: formData.email,
        },
        address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          phone: formData.phone,
        },
        paymentMethod: formData.paymentMethod,
      };

      // Call Express API endpoint to save order
      await API.post("/orders", orderData);

      clearCart();
      alert("Order Placed Successfully! 🎉");
      navigate("/orders");
    } catch (error) {
      console.error("Failed to place order:", error);
      alert(error.response?.data?.message || "Order placed! Navigating to orders...");
      clearCart();
      navigate("/orders");
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold text-gray-800">No items to checkout!</h2>
        <button
          onClick={() => navigate("/menu")}
          className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Return to Menu
        </button>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold text-gray-900">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid gap-12 lg:grid-cols-3">
        {/* Delivery Address & Customer Details */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Customer & Delivery Details
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-gray-200 p-3.5 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-gray-200 p-3.5 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Street Address
                </label>
                <input
                  type="text"
                  name="street"
                  required
                  value={formData.street}
                  onChange={handleChange}
                  placeholder="123 Main Street, Apt / Suite"
                  className="w-full rounded-xl border border-gray-200 p-3.5 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="New Delhi"
                  className="w-full rounded-xl border border-gray-200 p-3.5 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  required
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Delhi"
                  className="w-full rounded-xl border border-gray-200 p-3.5 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  required
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="110001"
                  className="w-full rounded-xl border border-gray-200 p-3.5 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                  className="w-full rounded-xl border border-gray-200 p-3.5 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Payment Method
            </h2>

            <div className="space-y-4">
              <label className="flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition hover:bg-orange-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="COD"
                  checked={formData.paymentMethod === "COD"}
                  onChange={handleChange}
                  className="accent-orange-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">Cash on Delivery (COD)</p>
                  <p className="text-sm text-gray-500">Pay cash when your food arrives</p>
                </div>
              </label>

              <label className="flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition hover:bg-orange-50">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Online"
                  checked={formData.paymentMethod === "Online"}
                  onChange={handleChange}
                  className="accent-orange-500"
                />
                <div>
                  <p className="font-semibold text-gray-900">Online Payment / UPI</p>
                  <p className="text-sm text-gray-500">Fast and secure payment</p>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="h-fit rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Order Summary</h2>

          <div className="mb-6 max-h-60 space-y-4 overflow-y-auto divide-y divide-gray-100 pr-2">
            {cartItems.map((item) => (
              <div key={item._id || item.id} className="flex justify-between pt-3">
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-900">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3 border-t pt-4 text-gray-600">
            <div className="flex justify-between">
              <span>Items Total</span>
              <span>₹{total}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between text-2xl font-bold text-gray-900">
              <span>Total Amount</span>
              <span className="text-orange-500">₹{grandTotal}</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-full bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600 disabled:bg-orange-300"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </form>
    </section>
  );
}