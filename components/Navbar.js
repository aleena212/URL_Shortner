import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-purple-700/95 backdrop-blur-md shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-extrabold tracking-wide transition hover:scale-105"
        >
          🚀
          <span>BitLinks</span>
        </Link>

        {/* Navigation */}
        <ul className="flex items-center gap-8 text-[16px] font-medium">
          <li>
            <Link href="/" className="transition hover:text-purple-200">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="transition hover:text-purple-200">
              About
            </Link>
          </li>

          <li>
            <Link href="/shorten" className="transition hover:text-purple-200">
              Shorten
            </Link>
          </li>

          <li>
            <Link href="/contact" className="transition hover:text-purple-200">
              Contact
            </Link>
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/shorten">
            <button className="rounded-full bg-white px-6 py-2 font-semibold text-purple-700 transition duration-300 hover:scale-105 hover:bg-purple-100">
              Try Now
            </button>
          </Link>

          <Link href="https://github.com" target="_blank">
            <button className="flex items-center gap-2 rounded-full border border-white px-5 py-2 font-semibold transition duration-300 hover:bg-white hover:text-purple-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M12 .5A12 12 0 000 12.7a12 12 0 008.2 11.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1 .1 1.7 1.1 1.7 1.1 1 .1 1.7-.7 2.1-1.1.1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.4-5.6-6A4.6 4.6 0 014 8.3a4.2 4.2 0 01.1-3.1s1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.5 1 .5 2.1.1 3.1a4.6 4.6 0 011.2 3.2c0 4.6-2.9 5.7-5.7 6 .4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A12 12 0 0024 12.7 12 12 0 0012 .5z" />
              </svg>
              GitHub
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
