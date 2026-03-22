"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍁</span>
          <span className="text-xl font-bold tracking-tight">
            Maple<span className="text-maple">List</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#startups"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Startups
          </Link>
          <Link
            href="#talent"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Talent
          </Link>
          <Link
            href="#investors"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            Investors
          </Link>
        </nav>

        {/* CTA buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Log in
          </button>
          <button className="rounded-lg bg-maple px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-maple-dark">
            Sign up
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-4 md:hidden">
          <nav className="flex flex-col gap-3 pt-3">
            <Link href="#startups" className="text-sm font-medium text-gray-600">
              Startups
            </Link>
            <Link href="#talent" className="text-sm font-medium text-gray-600">
              Talent
            </Link>
            <Link href="#investors" className="text-sm font-medium text-gray-600">
              Investors
            </Link>
            <hr className="my-1 border-gray-100" />
            <button className="text-left text-sm font-medium text-gray-700">
              Log in
            </button>
            <button className="rounded-lg bg-maple px-4 py-2 text-sm font-semibold text-white">
              Sign up
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
