import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col-reverse items-center gap-16 px-6 py-16 md:flex-row">
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}