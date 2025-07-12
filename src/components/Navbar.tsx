'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            {/* Logo Circle with S */}
            <div className="w-9 h-9 rounded-full border-2 border-[#0072c6] flex items-center justify-center">
              <span className="text-2xl font-bold text-[#0072c6]">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-[#0072c6]">SUPREME</span>
              <span className="text-xs font-semibold text-[#0072c6]">GROUP</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block p-2">
            <ul className="ml-10 flex items-center gap-10">
              <li>
                <a href="#home" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              <a href="#home" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors">
                Services
              </a>
              <a href="#contact" className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 