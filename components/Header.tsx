"use client";

import Link from "next/link";
import { FC } from "react";
import { useCart } from "@/components/cart/CartContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Eric H. Baker", href: "/about-eric-h-baker" },
  { label: "About Book", href: "/about-book" },
  { label: "Store", href: "/store" },
  { label: "Blogs", href: "/blogs" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact us", href: "/contact-us" },
];

const Header: FC = () => {
  const { totalItems, openCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.25em] text-black"
        >
          ERIC H. BAKER
        </Link>

        {/* Nav */}
        <nav className="hidden gap-6 text-sm font-medium text-neutral-800 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side: search + cart */}
        <div className="flex items-center gap-4">
          {/* Search pill */}
          <div className="hidden items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-neutral-700 shadow-sm lg:flex">
            <input
              className="w-40 bg-transparent text-xs outline-none placeholder:text-neutral-400"
              placeholder="Search"
            />
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
            >
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="15.5"
                y1="15.5"
                x2="20"
                y2="20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Cart icon */}
          <button
            aria-label="Cart"
            onClick={openCart}
            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-neutral-400/60 bg-white/70 text-neutral-800"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
            >
              <path
                d="M6 6h15l-1.5 9h-12z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="19" r="1" fill="currentColor" />
              <circle cx="17" cy="19" r="1" fill="currentColor" />
            </svg>

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-black text-[0.6rem] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
