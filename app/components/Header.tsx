"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">

      {/* Website Under Development Notice */}
      <div className="bg-purple-700 text-white text-center text-sm font-medium py-2 px-4">
        🚧 Website Under Development — Some features are still being completed.
        Thank you for your patience.
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-3 sm:px-8 h-24 sm:h-28 flex items-center justify-between">

        {/* Logo + Company Name */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-4 min-w-0"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.png"
            alt="Genius Medical Logo"
            width={90}
            height={90}
            priority
            className="w-14 h-14 sm:w-[90px] sm:h-[90px] shrink-0"
          />

          <div className="min-w-0">
            <h1 className="text-lg sm:text-2xl font-bold text-purple-700 leading-tight whitespace-nowrap">
              Genius Medical
            </h1>

            <p
              dir="rtl"
              className="text-lg sm:text-3xl font-bold text-pink-600 leading-tight whitespace-nowrap"
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
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">

          {/* Arabic Button */}
          <button
            type="button"
            className="border border-purple-700 text-purple-700 px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base whitespace-nowrap hover:bg-purple-700 hover:text-white transition"
          >
            العربية
          </button>

          {/* Get in Touch */}
          <Link
            href="/contact"
            className="hidden sm:inline-block bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition"
          >
            Get in Touch
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-purple-700 p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">

          <div className="flex flex-col px-6 py-4">

            <Link
              href="/"
              onClick={closeMenu}
              className="py-3 font-medium text-gray-700 hover:text-purple-700 border-b border-gray-100"
            >
              Home
            </Link>

            <Link
              href="/products"
              onClick={closeMenu}
              className="py-3 font-medium text-gray-700 hover:text-purple-700 border-b border-gray-100"
            >
              Products
            </Link>

            <Link
              href="/categories"
              onClick={closeMenu}
              className="py-3 font-medium text-gray-700 hover:text-purple-700 border-b border-gray-100"
            >
              Categories
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="py-3 font-medium text-gray-700 hover:text-purple-700 border-b border-gray-100"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="py-3 font-medium text-gray-700 hover:text-purple-700 border-b border-gray-100"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-xl font-semibold text-center transition"
            >
              Get in Touch
            </Link>

          </div>

        </nav>
      )}

    </header>
  );
}