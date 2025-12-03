"use client";

import Link from "next/link";

export default function Header() {
  const navItems = [
    { href: "/", label: "ホーム" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/works", label: "Works" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-gradient-header border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary-accent">
          Yuma Kobuchi
        </Link>
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-primary-text hover:text-primary-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
