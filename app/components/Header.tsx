"use client";

import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 py-4 font-sans">
      <div className="flex items-center justify-between w-full px-4">
        <h1 className="text-xl font-bold">I Become More With You</h1>
        <ul className="flex space-x-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-foreground hover:text-red-900 transition-colors duration-200"
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
