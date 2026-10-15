
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our Impact", path: "/impact" },
  { label: "Insights", path: "/insights" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="tc-header">
      <div className="tc-brand-row">
        <Link
          to="/"
          className="tc-brand"
          onClick={closeMenu}
          aria-label="TConsult home"
        >
          Tconsult<span className="tc-brand-mark">®</span>
        </Link>

        <span className="tc-tagline">
          People <i>|</i> Ideas <i>|</i> Opportunities <i>|</i> Beyond Borders
        </span>

        <Link
          to="/contact"
          className="tc-header-cta"
          onClick={closeMenu}
        >
          Let's Connect <ArrowUpRight size={17} />
        </Link>

        <button
          type="button"
          className="tc-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="tc-main-navigation"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      <nav
        id="tc-main-navigation"
        className={`tc-nav ${menuOpen ? "tc-nav-open" : ""}`}
        aria-label="Main navigation"
      >
        <div className="tc-nav-inner">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `tc-nav-link ${isActive ? "tc-nav-active" : ""}`
              }
              onClick={closeMenu}
            >
              {item.label}
              <span className="tc-nav-indicator" />
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="tc-mobile-connect"
            onClick={closeMenu}
          >
            Let's Connect <ArrowRight size={17} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
