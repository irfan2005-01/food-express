import { useCart } from "../../context/CartContext";

export default function Home() {
  const { cartItems } = useCart();

  return (
    <div className="p-20 text-5xl">
      Cart Items : {cartItems.length}
    </div>
  );
}