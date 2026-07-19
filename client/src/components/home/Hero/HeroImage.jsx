import heroBurger from "../../../assets/images/hero-burger.png";

export default function HeroImage() {
  return (
    <div className="flex-1 flex justify-center">
      <img
        src={heroBurger}
        alt="Burger"
        className="w-full max-w-xl drop-shadow-2xl"
      />
    </div>
  );
}