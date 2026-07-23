import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `text-base transition-colors hover:text-orange-500 ${
              isActive ? "font-bold text-orange-500" : "font-semibold text-gray-600"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}