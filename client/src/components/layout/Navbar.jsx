import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../common/Button";

const navLinks = [
  { label: "Home", href: "#home", isRoute: false },
  { label: "Features", href: "#features", isRoute: false },
  { label: "How It Works", href: "#how-it-works", isRoute: false },
  { label: "Prediction", href: "/prediction", isRoute: true },
  { label: "FAQ", href: "#faq", isRoute: false },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const goToRegister = () => {
    closeMenu();
    navigate("/register");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        {/* ========================= */}
        {/* Logo */}
        {/* ========================= */}

        <a href="#home" onClick={closeMenu} className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-white shadow-md">
            🩺
          </span>

          <div>
            <h1 className="text-lg font-bold text-slate-900">DiaBeta AI</h1>

            <p className="text-xs text-slate-500">Know. Predict. Prevent.</p>
          </div>
        </a>

        {/* ========================= */}
        {/* Desktop Navigation */}
        {/* ========================= */}

        <div className="hidden items-center gap-8 lg:flex">
          <div className="flex items-center gap-6">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-semibold text-slate-600 transition hover:text-teal-600"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 transition hover:text-teal-600"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:text-teal-600"
            >
              Sign In
            </Link>

            <Button size="sm" onClick={goToRegister}>
              Get Started
            </Button>
          </div>
        </div>

        {/* ========================= */}
        {/* Mobile Menu Button */}
        {/* ========================= */}

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="rounded-lg border border-slate-200 p-2 lg:hidden"
        >
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* ========================= */}
      {/* Mobile Navigation */}
      {/* ========================= */}

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="flex flex-col gap-2 px-4 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Sign In
            </Link>

            <Button className="w-full" size="sm" onClick={goToRegister}>
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
