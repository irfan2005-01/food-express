import heroBurger from "../../../assets/images/hero-burger.png";
import { Clock3, Flame } from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative flex flex-1 items-center justify-center py-10">
      {/* Background Glow */}
      <div className="absolute h-[430px] w-[430px] rounded-full bg-orange-100 blur-3xl"></div>

      {/* Decorative Circle */}
      <div className="absolute h-[520px] w-[520px] rounded-full border border-orange-200"></div>

      {/* Hero Image */}
      <img
        src={heroBurger}
        alt="Burger"
        className="relative z-10 w-full max-w-xl drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)] transition duration-500 hover:scale-105"
      />

      {/* Delivery Badge */}
      <div className="absolute left-0 top-16 z-20 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
        <div className="rounded-full bg-orange-100 p-2 text-orange-500">
          <Clock3 size={20} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Delivery</p>
          <h4 className="font-semibold">30 Minutes</h4>
        </div>
      </div>

      {/* Fresh Badge */}
      <div className="absolute bottom-14 right-0 z-20 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
        <div className="rounded-full bg-orange-100 p-2 text-orange-500">
          <Flame size={20} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Always</p>
          <h4 className="font-semibold">Fresh & Hot</h4>
        </div>
      </div>
    </div>
  );
}