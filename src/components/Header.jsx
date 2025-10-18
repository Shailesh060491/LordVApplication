import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
// import siteData from '../data/site.json'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'All Services', href: '/services' },
        { name: 'Our Expertise', href: '/expertise' },
        { name: 'Payroll Services', href: '/payroll' }
      ]
    },
    { name: 'Industries', href: '/industries' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <Helmet>
        <title>Lord V Services</title>
        <meta name="description" content="Professional web development services" />
        <meta name="keywords" content="web development, design, services" />
      </Helmet>
      
      <header className="bg-gradient-to-r from-red-50 to-orange-50 shadow-lg sticky top-0 z-50 backdrop-blur-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img 
                    src="/assets/logo/lordv-logo.png.jpg" 
                    alt="Lord V Services Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900">Lord V Services</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <Link
                        to={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 inline-flex items-center ${
                          location.pathname === item.href || item.dropdown.some(drop => location.pathname === drop.href)
                            ? 'text-red-600 bg-red-50'
                            : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                        }`}
                      >
                        <span>{item.name}</span>
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white/95 backdrop-blur-sm rounded-md shadow-lg border border-red-100 z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                location.pathname === dropdownItem.href
                                  ? 'text-red-600 bg-red-50'
                                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-red-600 bg-red-50'
                          : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Phone Number */}
            <div className="hidden lg:flex items-center">
              <a
                href="tel:+919226551568"
                className="text-gray-700 hover:text-red-600 font-medium"
              >
                +91 9226551568
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
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
            <div className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-r from-red-50 to-orange-50 border-t border-red-100">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <div className="px-3 py-2 text-base font-medium text-gray-900 border-b border-gray-200">
                          {item.name}
                        </div>
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                location.pathname === dropdownItem.href
                                  ? 'text-red-600 bg-red-50'
                                  : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                              }`}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                          location.pathname === item.href
                            ? 'text-red-600 bg-red-50'
                            : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <a
                    href="tel:+919226551568"
                    className="block px-3 py-2 text-gray-700 hover:text-red-600"
                  >
                    +91 9226551568
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header
