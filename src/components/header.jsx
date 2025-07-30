'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { 
  ShoppingCart, Search, Menu, X, User, Heart, Star, ArrowRight, Zap, 
  Bell, MapPin, Phone, Mail, ChevronDown, Filter, Grid, List, Sun, Moon,
  Gift, Truck, Shield, CreditCard, Percent, TrendingUp, Play, Pause,
  Volume2, VolumeX, Calendar, Clock, Award, Users, Sparkles, Crown,
  Target, Compass, Camera, Share2, Download
} from 'lucide-react';

export default function EnhancedEcommerceHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(2);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [showQuickView, setShowQuickView] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [recentSearches, setRecentSearches] = useState(['iPhone 15', 'Nike Air Max', 'MacBook Pro']);
  const [liveStats, setLiveStats] = useState({
    onlineUsers: 2847,
    todaySales: 15264,
    activeDeals: 42
  });

  const heroSlides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends with up to 60% off",
      cta: "Shop Now",
      secondaryCta: "View Lookbook",
      bg: "from-purple-600 via-pink-600 to-red-500",
      badge: "New Arrivals",
      video: true,
      countdown: "24:15:30"
    },
    {
      title: "Premium Electronics",
      subtitle: "Innovation meets style - Free shipping worldwide",
      cta: "Explore Tech",
      secondaryCta: "Compare Products",
      bg: "from-blue-600 via-cyan-600 to-teal-500",
      badge: "Tech Week",
      video: false,
      countdown: null
    },
    {
      title: "Flash Sale 70% Off",
      subtitle: "Limited time only - Ends in 24 hours",
      cta: "Grab Deals",
      secondaryCta: "Set Alerts",
      bg: "from-orange-600 via-red-600 to-pink-500",
      badge: "Hot Deal",
      video: false,
      countdown: "05:42:18"
    },
    {
      title: "Exclusive Members Only",
      subtitle: "Premium access to luxury brands and early releases",
      cta: "Join VIP",
      secondaryCta: "Learn More",
      bg: "from-yellow-600 via-orange-600 to-red-500",
      badge: "VIP Access",
      video: false,
      countdown: null
    }
  ];

  const notifications = [
    { id: 1, message: "Your order #1234 has been shipped", time: "2m ago", type: "order", read: false },
    { id: 2, message: "New sale: Up to 50% off electronics", time: "1h ago", type: "promo", read: false },
    { id: 3, message: "Item in your wishlist is now on sale", time: "3h ago", type: "wishlist", read: true },
    { id: 4, message: "Flash sale starts in 30 minutes!", time: "5h ago", type: "alert", read: false },
    { id: 5, message: "Your review was featured", time: "1d ago", type: "social", read: true }
  ];

  const quickLinks = [
    { name: "Flash Sales", icon: Percent, color: "text-red-400", count: "234 items" },
    { name: "New Arrivals", icon: TrendingUp, color: "text-green-400", count: "1.2k items" },
    { name: "Free Shipping", icon: Truck, color: "text-blue-400", count: "All orders" },
    { name: "Gift Cards", icon: Gift, color: "text-purple-400", count: "From $10" },
    { name: "VIP Access", icon: Crown, color: "text-yellow-400", count: "Exclusive" },
    { name: "Live Support", icon: Users, color: "text-indigo-400", count: "24/7" }
  ];

  const categories = [
    { name: "Electronics", items: 1250, trending: true },
    { name: "Fashion", items: 3400, trending: true },
    { name: "Home & Garden", items: 890, trending: false },
    { name: "Sports", items: 670, trending: true },
    { name: "Beauty", items: 2100, trending: true },
    { name: "Books", items: 450, trending: false },
    { name: "Toys", items: 780, trending: false },
    { name: "Automotive", items: 320, trending: false }
  ];

  const trendingProducts = [
    { name: "Wireless Earbuds Pro", price: "$299", rating: 4.8, image: "🎧" },
    { name: "Smart Watch Series X", price: "$399", rating: 4.9, image: "⌚" },
    { name: "Ultra HD Camera", price: "$1299", rating: 4.7, image: "📷" },
    { name: "Gaming Laptop Elite", price: "$1999", rating: 4.6, image: "💻" }
  ];

  const suggestionsData = [
    "iPhone 15 Pro Max", "Samsung Galaxy S24", "MacBook Pro M3", "AirPods Pro 2",
    "Nike Air Jordan", "Adidas Ultraboost", "PlayStation 5", "Xbox Series X",
    "Tesla Model 3", "Apple Watch Ultra", "iPad Pro", "Surface Pro 9"
  ];

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Live stats update
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        onlineUsers: prev.onlineUsers + Math.floor(Math.random() * 10) - 5,
        todaySales: prev.todaySales + Math.floor(Math.random() * 50),
        activeDeals: prev.activeDeals + Math.floor(Math.random() * 3) - 1
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Search suggestions
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = suggestionsData.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);
      setSearchSuggestions(filtered);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsLoading(true);
      // Add to recent searches
      setRecentSearches(prev => [searchQuery, ...prev.filter(s => s !== searchQuery)].slice(0, 5));
      setTimeout(() => {
        setIsLoading(false);
        setIsSearchOpen(false);
        console.log('Searching for:', searchQuery);
      }, 1000);
    }
  }, [searchQuery]);

  const navItems = [
    { name: 'Home', href: '/', hasDropdown: false, badge: null },
    
    { name: 'Categories', href: '/categories', hasDropdown: true, badge: 'Hot' },
    { name: 'Deals', href: '/deals', hasDropdown: false, badge: 'Sale' },
    { name: 'VIP Club', href: '/vip', hasDropdown: false, badge: 'New' },
    { name: 'About', href: '/about', hasDropdown: false, badge: null },
    { name: 'Contact', href: '/contact', hasDropdown: false, badge: null }
  ];

  return (
    <div className={`relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} overflow-hidden transition-colors duration-300`}>
      {/* Cursor follower */}
      <div 
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(147,51,234,0.5) 0%, transparent 70%)',
          borderRadius: '50%',
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Enhanced Top Bar */}
      <div className={`relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-2 text-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+92 3400050708</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>talhabajwa1622@gmail.com</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>online shopping</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Truck className="w-4 h-4 text-green-400" />
              <span>Free shipping on orders $50+</span>
            </div>
            <div className="hidden md:flex items-center space-x-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>{liveStats.onlineUsers.toLocaleString()} online</span>
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="relative p-1 hover:bg-white/10 rounded transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Header - Now Fixed Position */}
      <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? `${isDarkMode ? 'bg-black/90' : 'bg-white/90'} backdrop-blur-md py-2 shadow-lg border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}` 
          : 'bg-transparent py-4'
      }`}
      style={{ top: scrolled ? '0' : '40px' }} // Adjust for top bar height
      >
        <div className="relative container mx-auto px-6">
          <div className="relative flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="relative flex items-center space-x-2">
              <div className="relative w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 cursor-pointer group">
                <Zap className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  LUXE
                </span>
                <div className="absolute -top-2 -right-8 px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full animate-bounce">
                  PRO
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className={`relative ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300 flex items-center space-x-1`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => item.hasDropdown && setShowMegaMenu(true)}
                    onMouseLeave={() => item.hasDropdown && setShowMegaMenu(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    {item.badge && (
                      <span className="absolute -top-2 -right-6 px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </a>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </div>
              ))}
            </nav>

            {/* Enhanced Right Side Icons */}
            <div className="relative flex items-center space-x-2">
              {/* Enhanced Search */}
              <div className="relative">
                <button 
                  className={`relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 ${isSearchOpen ? 'bg-white/10' : ''}`}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <Search className="w-5 h-5" />
                  {searchQuery && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                  )}
                </button>
              </div>
              
              {/* Enhanced Notifications */}
              <div className="relative">
                <button 
                  className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110"
                  onClick={() => setShowNotifications(!showNotifications)}
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
                    {notifications.filter(n => !n.read).length}
                  </span>
                </button>
                
                {showNotifications && (
                  <div className={`absolute top-full right-0 mt-2 w-96 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} z-50`}>
                    <div className="relative p-4">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">Notifications</h3>
                        <button className="text-sm text-purple-400 hover:text-purple-300">Mark all read</button>
                      </div>
                      <div className="space-y-3 max-h-80 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div key={notification.id} className={`relative p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} ${!notification.read ? 'border-l-4 border-purple-500' : ''}`}>
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <p className="text-sm">{notification.message}</p>
                                <span className="text-xs text-gray-500">{notification.time}</span>
                              </div>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Enhanced Wishlist */}
              <button className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group">
                <Heart className="w-5 h-5 group-hover:text-red-400 transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              </button>

              {/* Enhanced User Menu */}
              <div className="relative group">
                <button className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
                  <User className="w-5 h-5" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                </button>
                
                {/* User Dropdown */}
                <div className={`absolute top-full right-0 mt-2 w-64 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} z-50`}>
                  <div className="relative p-4">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold">John Doe</div>
                        <div className="text-sm text-gray-500">VIP Member</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <a href="/profile" className={`block px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}>My Profile</a>
                      <a href="/order" className={`block px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}>Order History</a>
                      <a href="/setting" className={`block px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}>Settings</a>
                      <hr className={`my-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                      <a href="/signout" className={`block px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200 text-red-400`}>Sign Out</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Cart */}
              <button className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 group">
                <ShoppingCart className="w-5 h-5 group-hover:text-green-400 transition-colors duration-300" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs flex items-center justify-center font-semibold animate-bounce">
                  {cartCount}
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  $299
                </div>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="relative lg:hidden p-2 hover:bg-white/10 rounded-full transition-all duration-300 ml-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Enhanced Search Bar */}
        {isSearchOpen && (
          <div className={`absolute top-full left-0 right-0 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="relative container mx-auto px-6 py-4">
              <div className="relative max-w-2xl mx-auto">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search products, brands, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full px-4 py-3 pl-12 pr-16 rounded-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
                    autoFocus
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  {isLoading && (
                    <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                      <div className="animate-spin w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full"></div>
                    </div>
                  )}
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
                
                {/* Search Suggestions */}
                {(searchSuggestions.length > 0 || recentSearches.length > 0) && (
                  <div className={`absolute top-full left-0 right-0 mt-2 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} z-50`}>
                    {searchSuggestions.length > 0 && (
                      <div className="p-4">
                        <div className="text-sm font-semibold mb-2 text-gray-500">Suggestions</div>
                        {searchSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            className={`block w-full text-left px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
                            onClick={() => setSearchQuery(suggestion)}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                    {recentSearches.length > 0 && searchSuggestions.length === 0 && (
                      <div className="p-4">
                        <div className="text-sm font-semibold mb-2 text-gray-500">Recent Searches</div>
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            className={`block w-full text-left px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200 flex items-center justify-between`}
                            onClick={() => setSearchQuery(search)}
                          >
                            <span>{search}</span>
                            <Clock className="w-4 h-4 text-gray-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Mega Menu */}
        {showMegaMenu && (
          <div 
            className={`absolute top-full left-0 right-0 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} z-40`}
            onMouseEnter={() => setShowMegaMenu(true)}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <div className="relative container mx-auto px-6 py-8">
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(0, 6).map((category) => (
                      <a
                        key={category.name}
                        href={`/category/${category.name.toLowerCase()}`}
                        className={`flex items-center justify-between px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200 group`}
                      >
                        <span className="flex items-center">
                          {category.name}
                          {category.trending && <TrendingUp className="w-4 h-4 text-red-400 ml-2" />}
                        </span>
                        <span className="text-sm text-gray-500">{category.items}</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Trending Products</h3>
                  <div className="space-y-3">
                    {trendingProducts.map((product, index) => (
                      <div key={index} className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} hover:scale-105 transition-transform duration-300 cursor-pointer`}>
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{product.image}</div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{product.name}</div>
                            <div className="flex items-center justify-between">
                              <span className="text-purple-400 font-semibold">{product.price}</span>
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                <span className="text-xs ml-1">{product.rating}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <a href="#" className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}>
                      <Target className="w-5 h-5 text-purple-400" />
                      <span>Track Order</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}>
                      <Gift className="w-5 h-5 text-green-400" />
                      <span>Gift Cards</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}>
                      <Users className="w-5 h-5 text-blue-400" />
                      <span>Live Support</span>
                    </a>
                    <a href="#" className={`flex items-center space-x-3 px-3 py-2 rounded-md ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors duration-200`}>
                      <Crown className="w-5 h-5 text-yellow-400" />
                      <span>VIP Program</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Featured Banner</h3>
                  <div className={`p-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white`}>
                    <div className="flex items-center justify-between mb-3">
                      <Sparkles className="w-8 h-8" />
                      <span className="text-sm bg-white/20 px-2 py-1 rounded-full">Limited</span>
                    </div>
                    <h4 className="font-bold text-lg mb-2">Summer Sale</h4>
                    <p className="text-sm opacity-90 mb-4">Up to 70% off on selected items</p>
                    <button className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-80 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="relative p-6 pt-20">
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 pl-10 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            
            <nav className="space-y-6 mb-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center justify-between text-xl ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>
            
            <div className={`pt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="space-y-4">
                {quickLinks.slice(0, 4).map((link) => (
                  <a key={link.name} href="#" className={`flex items-center justify-between ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                    <div className="flex items-center space-x-3">
                      <link.icon className={`w-5 h-5 ${link.color}`} />
                      <span>{link.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{link.count}</span>
                  </a>
                ))}
              </div>
              
              {/* Mobile Live Stats */}
              <div className={`mt-6 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="text-sm font-semibold mb-3">Live Stats</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-400">{liveStats.onlineUsers.toLocaleString()}</div>
                    <div className="text-xs text-gray-500">Online</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-400">{liveStats.activeDeals}</div>
                    <div className="text-xs text-gray-500">Hot Deals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA - Added padding-top to account for fixed header */}
      <div className="pt-32">
        {/* Enhanced Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bg} opacity-90 transition-all duration-1000`} />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Enhanced Floating Elements */}
            <div className="relative">
              <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-500/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            
            {/* Video Background Simulation */}
            {heroSlides[currentSlide].video && (
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse" />
              </div>
            )}
          </div>

          {/* Video Controls */}
          {heroSlides[currentSlide].video && (
            <div className="absolute top-6 right-6 flex space-x-2 z-20">
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
              >
                {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          )}

          {/* Enhanced Content */}
          <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              {/* Enhanced Badge */}
              <div className="relative inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6 animate-fade-in-up border border-white/30">
                <div className="absolute -left-2 -top-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                {heroSlides[currentSlide].badge}
                <Sparkles className="w-4 h-4 ml-2" />
              </div>
              
              <h1 className="relative text-5xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                {heroSlides[currentSlide].title}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full opacity-20 animate-ping"></div>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {heroSlides[currentSlide].subtitle}
              </p>
              
              {/* Countdown Timer */}
              {heroSlides[currentSlide].countdown && (
                <div className="relative flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="flex space-x-4 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">24</div>
                      <div className="text-xs text-gray-300">HOURS</div>
                    </div>
                    <div className="text-white text-2xl">:</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">15</div>
                      <div className="text-xs text-gray-300">MINS</div>
                    </div>
                    <div className="text-white text-2xl">:</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">30</div>
                      <div className="text-xs text-gray-300">SECS</div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2 overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative">{heroSlides[currentSlide].cta}</span>
                  <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button className="relative px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="relative">{heroSlides[currentSlide].secondaryCta}</span>
                </button>
              </div>

              {/* Enhanced Quick Features */}
              <div className="relative grid grid-cols-2 lg:grid-cols-6 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                {quickLinks.map((feature, index) => (
                  <div key={feature.name} className="relative flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group border border-white/20">
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <feature.icon className={`w-8 h-8 mb-2 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-center">{feature.name}</span>
                    <span className="text-xs text-gray-400 mt-1">{feature.count}</span>
                  </div>
                ))}
              </div>

              {/* Enhanced Stats */}
              <div className="relative grid grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <div className="relative text-center group">
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="relative text-3xl font-bold text-white mb-2 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-green-400 mr-2 animate-pulse" />
                    10K+
                  </div>
                  <div className="relative text-gray-400">Products</div>
                </div>
                <div className="relative text-center group">
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="relative text-3xl font-bold text-white mb-2 flex items-center justify-center">
                    <Star className="w-8 h-8 text-yellow-400 mr-2 animate-pulse" />
                    4.9
                  </div>
                  <div className="relative text-gray-400">Rating</div>
                </div>
                <div className="relative text-center group">
                  <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="relative text-3xl font-bold text-white mb-2 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-400 mr-2 animate-pulse" />
                    50K+
                  </div>
                  <div className="relative text-gray-400">Happy Customers</div>
                </div>
              </div>

              {/* Social Proof Bar */}
              <div className="relative mt-12 flex justify-center items-center space-x-8 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Users className="w-4 h-4" />
                  <span>{liveStats.onlineUsers.toLocaleString()} people shopping now</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Trusted by millions</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-300">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>100% Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`relative h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 w-3'
                } hover:bg-white/80`}
                onClick={() => setCurrentSlide(index)}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="absolute bottom-8 right-8 animate-bounce group cursor-pointer">
            <div className="relative w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse group-hover:bg-white"></div>
            </div>
            <div className="text-xs text-white/70 text-center mt-2 group-hover:text-white transition-colors duration-300">Scroll</div>
          </div>

          {/* Enhanced Side Navigation Arrows */}
          <button 
            className="absolute left-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
            onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}
          >
            <ArrowRight className="w-6 h-6 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            className="absolute right-8 top-1/2 transform -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
            onClick={() => setCurrentSlide((currentSlide + 1) % heroSlides.length)}
          >
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Share & Quick Actions */}
          <div className="absolute top-1/2 left-6 transform -translate-y-1/2 flex flex-col space-y-3">
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
              <Share2 className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
              <Camera className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#1a1a1a' : '#f1f1f1'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #ec4899);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #db2777);
        }
      `}</style>
    </div>
  );
}