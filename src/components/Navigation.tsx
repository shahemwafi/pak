'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">Pak Lahore Property</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors duration-300">
              Home
            </Link>
            <Link href="/properties" className="text-gray-700 hover:text-primary transition-colors duration-300">
              Properties
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary transition-colors duration-300">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors duration-300">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/properties"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Properties
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 