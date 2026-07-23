import { useEffect, useState } from "react";
import { Package, Clock, CheckCircle, Truck } from "lucide-react";
import API from "../../services/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await API.get("/orders");
        setOrders(response.data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-xl font-semibold text-gray-500">
        Loading your orders...
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <Package size={64} className="text-gray-300" />
        <h2 className="text-3xl font-bold text-gray-800">No Orders Placed Yet</h2>
        <p className="text-gray-500">Order some delicious meals from our menu!</p>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-10 text-4xl font-bold text-gray-900">Your Orders</h1>

      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order._id || order.id}
            className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
              <div>
                <p className="text-xs font-semibold uppercase text-gray-400">Order ID</p>
                <p className="font-mono text-sm font-bold text-gray-700">{order._id || order.id}</p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600">
                <Clock size={16} />
                <span>{order.status || "Food Processing"}</span>
              </div>
            </div>

            {/* Items */}
            <div className="my-4 divide-y divide-gray-100">
              {order.items?.map((item, i) => (
                <div key={i} className="flex justify-between py-2 text-sm">
                  <span className="font-medium text-gray-800">
                    {item.name || item.food?.name} x {item.quantity}
                  </span>
                  <span className="font-semibold text-gray-900">
                    ₹{(item.price || 0) * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t pt-4 text-base font-bold">
              <span>Total Amount</span>
              <span className="text-xl text-orange-500">₹{order.amount || order.totalAmount}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}