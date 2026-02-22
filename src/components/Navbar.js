// src/components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Education", path: "/education" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-16">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-semibold text-white"
          >
            MM<span className="text-accent">.</span>
          </Link>

          {/* Navigation Links (Shifted Right Naturally) */}
          <div className="hidden md:flex ml-auto space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-secondary hover:text-accent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;