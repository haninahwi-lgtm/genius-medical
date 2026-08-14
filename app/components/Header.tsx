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
      <div className="max-w-7xl mx-auto px-8 h-28 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/images/logo.png"
            alt="Genius Medical Logo"
            width={90}
            height={90}
            priority
          />

          <div>
            <h1 className="text-2xl font-bold text-purple-700">
              Genius Medical
            </h1>

            <p className="text-sm text-pink-600 font-medium">
              العبقرية الطبية
            </p>
          </div>
        </Link>

        {/* Navigation */}
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
            href="#"
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
        <div className="flex items-center gap-6">

          {/* Arabic */}
          <button
            type="button"
            className="border border-purple-700 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition"
          >
            العربية
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-2xl hover:scale-110 transition"
            aria-label="Shopping cart"
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