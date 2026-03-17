"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Trailer", href: "#trailer" },
  { name: "Mahoyo", href: "#mahoyo" },
  { name: "Screen the film", href: "#screening" },
  { name: "Study material", href: "#study" },
  { name: "Press", href: "#press" },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-4 flex flex-col justify-between cursor-pointer">
      <span
        className={clsx(
          "block h-0.5 bg-foreground transition-all duration-300 origin-center",
          isOpen ? "rotate-45 translate-y-[7px]" : "",
        )}
      />
      <span
        className={clsx(
          "block h-0.5 bg-foreground transition-all duration-300",
          isOpen ? "opacity-0 scale-x-0" : "",
        )}
      />
      <span
        className={clsx(
          "block h-0.5 bg-foreground transition-all duration-300 origin-center",
          isOpen ? "-rotate-45 -translate-y-[7px]" : "",
        )}
      />
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className="w-full py-4 border-b-2 border-foreground fixed top-0 left-0 right-0 bg-background z-50 font-mono">
      <div className="flex items-center justify-between w-full px-4">
        <p className="text-sm uppercase">I Become More With You</p>

        <button
          className="md:hidden z-[60] relative"
          onClick={handleMenuClick}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <HamburgerIcon isOpen={isMenuOpen} />
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-foreground hover:text-ember transition-colors duration-200 uppercase"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-background z-50 flex flex-col items-end justify-center px-10 gap-8 transition-all duration-500 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <ul className="flex flex-col items-end gap-8">
          {navigation.map((item, i) => (
            <li
              key={item.href}
              className={clsx(
                "transition-all duration-500",
                isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms" }}
            >
              <Link
                href={item.href}
                onClick={handleLinkClick}
                className="text-3xl font-mono text-foreground hover:text-ember transition-colors uppercase"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
