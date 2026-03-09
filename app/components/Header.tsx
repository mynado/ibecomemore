"use client";

import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Trailer", href: "#trailer" },
  { name: "Mahoyo", href: "#mahoyo" },
  { name: "Screen the film", href: "#contact" },
  // { name: "Study material", href: "#study" },
  { name: "Press", href: "#press" },
];

export default function Header() {
  return (
    <header className="w-full py-4 border-b-2 border-foreground fixed top-0 left-0 right-0 bg-background z-50">
      <div className="flex items-center justify-between w-full px-4">
        <p className="text-md font-bold uppercase">I Become More With You</p>
        <ul className="flex space-x-4 hidden md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-foreground text-sm hover:text-red-900 transition-colors duration-200 uppercase"
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
