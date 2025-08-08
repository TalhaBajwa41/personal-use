'use client';
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  User, 
  Heart, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  Sun,
  Moon,
  Globe,
  Bell,
  Star
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navigation = [
    { 
      name: 'Home', 
      href: '/home',
      current: true 
    },
    { 
      name: 'Categories', 
      href: '/categories',
      dropdown: [
        { name: 'Electronics', href: '/categories/electronics', icon: '📱' },
        { name: 'Fashion', href: '/categories/fashion', icon: '👕' },
        { name: 'Home & Living', href: '/categories/home', icon: '🏠' },
        { name: 'Sports', href: '/categories/sports', icon: '⚽' },
        { name: 'Books', href: '/categories/books', icon: '📚' }
      ]
    },
    { 
      name: 'Deals', 
      href: '/deals',
      badge: 'Hot'
    },
    { 
      name: 'About', 
      href: '/about' 
    },
    { 
      name: 'Contact', 
      href: '/contact' 
    }
  ];

  const quickSearchSuggestions = [
    'iPhone 15 Pro',
    'Nike Air Max',
    'MacBook Pro',
    'Samsung TV',
    'Gaming Chair'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDarkMode 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl' 
          : 'bg-white/95 backdrop-blur-md shadow-xl'
        : isDarkMode
          ? 'bg-gray-900/80'
          : 'bg-white/80'
    }`}>
      {/* Top Bar */}
      <div className={`border-b transition-colors ${
        isDarkMode ? 'border-gray-800 bg-gray-800/50' : 'border-gray-100 bg-gray-50/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Globe className="w-4 h-4" />
                Free shipping worldwide
              </span>
              <span className={`flex items-center gap-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <Star className="w-4 h-4 text-yellow-500" />
                4.9/5 Customer Rating
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`p-1 rounded-full transition-colors ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              <select className={`text-sm bg-transparent border-none focus:outline-none ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  ShopPro
                </h1>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Premium Store
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
            <div className={`relative w-full transition-all duration-300 ${
              isSearchFocused ? 'transform scale-105' : ''
            }`}>
              <input
                type="text"
                placeholder="Search for products, brands, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                className={`w-full pl-12 pr-4 py-3 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white border border-gray-700 focus:border-blue-500' 
                    : 'bg-gray-50 text-gray-900 border border-gray-200 focus:border-blue-500 focus:bg-white'
                }`}
              />
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              
              {/* Search Suggestions */}
              {isSearchFocused && (
                <div className={`absolute top-full left-0 right-0 mt-2 py-4 rounded-2xl shadow-2xl border z-50 ${
                  isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                  <div className="px-4 mb-2">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Popular Searches
                    </p>
                  </div>
                  {quickSearchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      className={`w-full px-4 py-2 text-left hover:bg-opacity-50 transition-colors ${
                        isDarkMode ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <Search className="w-4 h-4 inline-block mr-3 opacity-50" />
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <button className={`relative p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}>
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* Wishlist */}
            <button className={`relative p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}>
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart */}
                 <a href="" className={`relative p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}>
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-medium animate-pulse">
                  {cartCount}
                </span>
              )}
            </a>

            {/* User Profile */}
            <button className={`relative p-2 rounded-lg transition-colors duration-200 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}>
              <User className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 pb-4">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <button
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium relative ${
                  item.current
                    ? isDarkMode
                      ? 'text-blue-400 bg-blue-900/20'
                      : 'text-blue-600 bg-blue-50'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full font-bold animate-bounce">
                    {item.badge}
                  </span>
                )}
              </button>

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <div 
                  className={`absolute top-full left-0 mt-2 w-64 py-4 rounded-2xl shadow-2xl border z-40 ${
                    isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown.map((dropdownItem, index) => (
                    <a
                      key={index}
                      href={dropdownItem.href}
                      className={`flex items-center gap-3 px-4 py-3 transition-colors ${
                        isDarkMode 
                          ? 'text-gray-200 hover:bg-gray-700 hover:text-white' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      <span className="text-lg">{dropdownItem.icon}</span>
                      {dropdownItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden border-t transition-colors ${
          isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
        }`}>
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search products..."
                className={`w-full pl-10 pr-4 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-white border border-gray-700' 
                    : 'bg-gray-50 text-gray-900 border border-gray-200'
                }`}
              />
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
            </div>

            {/* Mobile Navigation */}
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-lg transition-colors font-medium ${
                  item.current
                    ? isDarkMode
                      ? 'text-blue-400 bg-blue-900/20'
                      : 'text-blue-600 bg-blue-50'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {item.name}
                {item.badge && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-red-500 text-white rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;