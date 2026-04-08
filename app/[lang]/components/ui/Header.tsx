"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleToggler from "./LocaleToggler";

const navigation = [
  { name: "navHome", href: "#home" },
  { name: "navAbout", href: "#about" },
  { name: "navScreenings", href: "#screenings" },
  { name: "navContact", href: "#contact" },
  // { name: "navStudy", href: "#study" },
  { name: "navPress", href: "#press" },
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
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  // TODO: Add scroll lock when menu is open to prevent background scrolling on mobile devices.
  // TODO: Add focus trap for accessibility when menu is open.
  // TODO: Add language switcher in the header for English/Swedish toggle.

  return (
    <header className="w-full py-4 border-b-2 border-foreground fixed top-0 left-0 right-0 bg-background z-50 font-mono">
      <div className="flex items-center justify-between w-full px-4">
        <p className="text-sm uppercase">{t("title")}</p>

        <button
          className="lg:hidden z-[60] relative"
          onClick={handleMenuClick}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <HamburgerIcon isOpen={isMenuOpen} />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-foreground hover:text-ember transition-colors duration-200 uppercase"
              >
                {t(item.name)}
              </Link>
            </li>
          ))}
          <li>
            <LocaleToggler />
          </li>
        </ul>
      </div>

      {/* Mobile nav overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-background z-50 flex flex-col items-end justify-center px-10 gap-8 transition-all duration-500 lg:hidden",
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
                {t(item.name)}
              </Link>
            </li>
          ))}
          <li>
            {" "}
            <LocaleToggler />
          </li>
        </ul>
      </div>
    </header>
  );
}
