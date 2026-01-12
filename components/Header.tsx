import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="text-3xl font-bold">MSQ RC</div>
            <span className="text-xs bg-blue-500 px-2 py-1 rounded">Summer Camp Finder</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-200 transition">Home</Link>
          <Link href="/search" className="hover:text-blue-200 transition">Find Camps</Link>
          <Link href="/about" className="hover:text-blue-200 transition">About</Link>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="bg-blue-700 p-4 md:hidden">
          <Link href="/" className="block py-2 hover:text-blue-200">Home</Link>
          <Link href="/search" className="block py-2 hover:text-blue-200">Find Camps</Link>
          <Link href="/about" className="block py-2 hover:text-blue-200">About</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
