"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-yellow-400/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-yellow-400 text-2xl">⚡</span>
          <div className="leading-tight">
            <div className="text-white font-bold text-lg">Nunez Electrical</div>
            <div className="text-yellow-400 text-xs tracking-widest uppercase">Your Neighborhood Sparky</div>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-gray-300 hover:text-yellow-400 transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15551234567"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors"
          >
            Call Now
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+15551234567"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm text-center hover:bg-yellow-300 transition-colors"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
}
