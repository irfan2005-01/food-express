import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <NavLinks />

        <NavActions />
      </div>
    </header>
  );
}