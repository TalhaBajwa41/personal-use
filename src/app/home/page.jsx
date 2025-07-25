'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart, Star, ArrowRight, Zap, TrendingUp, Shield, Truck, Headphones, ChevronLeft, ChevronRight, Play, Quote } from 'lucide-react';

export default function EcommerceHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const observerRef = useRef();

  const heroSlides = [
    {
      title: "Summer Collection 2025",
      subtitle: "Discover the latest trends",
      cta: "Shop Now",
      bg: "from-purple-600 via-pink-600 to-red-500"
    },
    {
      title: "Premium Electronics",
      subtitle: "Innovation meets style",
      cta: "Explore Tech",
      bg: "from-blue-600 via-cyan-600 to-teal-500"
    },
    {
      title: "Flash Sale 70% Off",
      subtitle: "Limited time only",
      cta: "Grab Deals",
      bg: "from-orange-600 via-red-600 to-pink-500"
    }
  ];

  const featuredProducts = [
    { id: 1, name: "Wireless Headphones", price: "$299", originalPrice: "$399", image: "🎧", rating: 4.8, reviews: 124 },
    { id: 2, name: "Smart Watch Pro", price: "$599", originalPrice: "$799", image: "⌚", rating: 4.9, reviews: 89 },
    { id: 3, name: "Designer Sunglasses", price: "$199", originalPrice: "$299", image: "🕶️", rating: 4.7, reviews: 156 },
    { id: 4, name: "Premium Backpack", price: "$149", originalPrice: "$199", image: "🎒", rating: 4.6, reviews: 203 }
  ];

  const categories = [
    { name: "Electronics", icon: "📱", gradient: "from-blue-500 to-cyan-500" },
    { name: "Fashion", icon: "👕", gradient: "from-pink-500 to-rose-500" },
    { name: "Home & Garden", icon: "🏠", gradient: "from-green-500 to-emerald-500" },
    { name: "Sports", icon: "⚽", gradient: "from-orange-500 to-red-500" },
    { name: "Beauty", icon: "💄", gradient: "from-purple-500 to-violet-500" },
    { name: "Books", icon: "📚", gradient: "from-indigo-500 to-purple-500" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Verified Buyer", content: "Amazing quality and fast shipping! The customer service is outstanding.", rating: 5, avatar: "👩‍💼" },
    { name: "Mike Chen", role: "Premium Member", content: "Best online shopping experience I've ever had. Highly recommended!", rating: 5, avatar: "👨‍💻" },
    { name: "Emma Wilson", role: "Frequent Shopper", content: "Great products at competitive prices. The mobile app is fantastic too.", rating: 5, avatar: "👩‍🎨" }
  ];

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const navItems = ['Home', 'Shop', 'Categories', 'Deals', 'About', 'Contact'];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LUXE
              </span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 relative">
                <Heart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center animate-pulse">2</span>
              </button>
              <button className="p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
                <User className="w-5 h-5" />
              </button>
              <button className="relative p-2 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs flex items-center justify-center font-semibold animate-bounce">
                  {cartCount}
                </span>
              </button>
              <button
                className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-80 bg-gray-900 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="block text-xl text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden ">
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${heroSlides[currentSlide].bg} opacity-90 transition-all duration-1000`} />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-pink-500/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {heroSlides[currentSlide].subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <span>{heroSlides[currentSlide].cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:scale-105">
                View Collection
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <div className="text-gray-400">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
                  <Star className="w-8 h-8 text-yellow-400 mr-2" />
                  4.9
                </div>
                <div className="text-gray-400">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-gray-400">Customers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="features" 
        data-animate 
        className={`py-20 bg-gray-900/50 transition-all duration-1000 ${
          visibleSections.has('features') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Free Shipping", desc: "On orders over $100" },
              { icon: Shield, title: "Secure Payment", desc: "100% protected" },
              { icon: Headphones, title: "24/7 Support", desc: "Dedicated help" },
              { icon: TrendingUp, title: "Best Prices", desc: "Guaranteed lowest" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section 
        id="categories" 
        data-animate 
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('categories') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-400">Discover our curated collections</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <div 
                key={index}
                className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-full aspect-square bg-gradient-to-br ${category.gradient} rounded-3xl flex flex-col items-center justify-center p-6 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300`}>
                  <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {category.icon}
                  </span>
                  <span className="text-white font-semibold text-center">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section 
        id="products" 
        data-animate 
        className={`py-20 bg-gray-900/50 transition-all duration-1000 ${
          visibleSections.has('products') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Products
            </h2>
            <p className="text-xl text-gray-400">Handpicked items just for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <span className="text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-105">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section 
        id="video" 
        data-animate 
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('video') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 p-1">
            <div className="bg-black rounded-3xl p-16 text-center">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Experience Luxury
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Watch how our premium products are crafted with attention to every detail
              </p>
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 w-24 h-24 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 mx-auto">
                <Play className="w-8 h-8 text-white ml-1 group-hover:scale-125 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        data-animate 
        className={`py-20 bg-gray-900/50 transition-all duration-1000 ${
          visibleSections.has('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-400">Join thousands of satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Quote className="w-8 h-8 text-purple-400 mb-4" />
                <p className="text-gray-300 mb-6 text-lg">{testimonial.content}</p>
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-16 text-center">
            <h2 className="text-5xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-xl text-purple-100 mb-8">Get the latest deals and exclusive offers</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm text-white placeholder-purple-200 border border-white/30 focus:outline-none focus:border-white/50 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  LUXE
                </span>
              </div>
              <p className="text-gray-400 mb-4">Your premium shopping destination for luxury products and exceptional service.</p>
            </div>
            
            {['Quick Links', 'Customer Service', 'Company'].map((title, index) => (
              <div key={title}>
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">&copy; 2025 LUXE. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
      `}</style>
    </div>
  );
}