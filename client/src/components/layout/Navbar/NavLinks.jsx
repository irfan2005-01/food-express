import { NavLink } from "react-router-dom";
import navLinks from "./navLinks";

export default function NavLinks() {
  return (
    <ul className="hidden lg:flex items-center gap-10">
      {navLinks.map((link) => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `transition-all duration-300 font-medium ${
                isActive
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}