"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-8 h-28 flex items-center justify-between">

        {/* Logo + Company Name */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-4 shrink-0"
        >
          <Image
            src="/images/logo.png"
            alt="Genius Medical Logo"
            width={90}
            height={90}
            priority
            className="w-14 h-14 sm:w-[90px] sm:h-[90px] shrink-0"
          />

          <div className="shrink-0">
            <h1 className="text-lg sm:text-2xl font-bold text-purple-700 whitespace-nowrap leading-tight">
              Genius Medical
            </h1>

            <p
              dir="rtl"
              className="text-xl sm:text-3xl font-bold text-pink-600 whitespace-nowrap leading-tight"
            >
              العبقرية الطبية
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">

          <Link
            href="/"
            className="hover:text-purple-700 transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-purple-700 transition"
          >
            Products
          </Link>

          <Link
            href="/categories"
            className="hover:text-purple-700 transition"
          >
            Categories
          </Link>

          <Link
            href="/about"
            className="hover:text-purple-700 transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="hover:text-purple-700 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-6 shrink-0">

          {/* Arabic Button */}
          <button
            type="button"
            className="border border-purple-700 text-purple-700 px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-purple-700 hover:text-white transition"
          >
            العربية
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-xl sm:text-2xl hover:scale-110 transition"
            aria-label="Shopping cart"
            id="cart-icon"
          >
            🛒

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

        </div>

      </div>
    </header>
  );
}