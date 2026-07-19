import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />
        <NavLinks />
      </div>
    </header>
  );
}