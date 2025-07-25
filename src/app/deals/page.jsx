'use client';
import React, { useState, useEffect } from 'react';
import { Clock, Zap, Flame, Percent, Star, ShoppingCart, Heart, Tag, TrendingUp } from 'lucide-react';

const DealsPage = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [flashSaleTime, setFlashSaleTime] = useState({});
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Sample deals data
  const flashDeals = [
    {
      id: 1,
      name: 'Premium Wireless Earbuds',
      originalPrice: 199.99,
      salePrice: 79.99,
      discount: 60,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 2847,
      soldCount: 1234,
      totalStock: 2000,
      endsIn: new Date(Date.now() + 4 * 60 * 60 * 1000) // 4 hours
    },
    {
      id: 2,
      name: 'Smart Fitness Watch',
      originalPrice: 299.99,
      salePrice: 149.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 1523,
      soldCount: 856,
      totalStock: 1500,
      endsIn: new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours
    },
    {
      id: 3,
      name: 'Professional Camera Lens',
      originalPrice: 899.99,
      salePrice: 449.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 892,
      soldCount: 234,
      totalStock: 500,
      endsIn: new Date(Date.now() + 6 * 60 * 60 * 1000) // 6 hours
    }
  ];

  const dailyDeals = [
    {
      id: 4,
      name: 'Gaming Mechanical Keyboard',
      originalPrice: 159.99,
      salePrice: 89.99,
      discount: 44,
      image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 3421,
      badge: 'Limited Time'
    },
    {
      id: 5,
      name: 'Wireless Charging Pad',
      originalPrice: 79.99,
      salePrice: 34.99,
      discount: 56,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 1876,
      badge: 'Hot Deal'
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      originalPrice: 129.99,
      salePrice: 64.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 2134,
      badge: 'Best Seller'
    },
    {
      id: 7,
      name: 'Smart Home Hub',
      originalPrice: 199.99,
      salePrice: 119.99,
      discount: 40,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 987,
      badge: '40% Off'
    }
  ];

  const weeklyDeals = [
    {
      id: 8,
      name: 'Laptop Stand',
      originalPrice: 89.99,
      salePrice: 49.99,
      discount: 44,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 1245
    },
    {
      id: 9,
      name: 'USB-C Hub',
      originalPrice: 69.99,
      salePrice: 39.99,
      discount: 43,
      image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 892
    },
    {
      id: 10,
      name: 'Desk Organizer',
      originalPrice: 49.99,
      salePrice: 24.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop',
      rating: 4.2,
      reviews: 567
    }
  ];

  const heroSlides = [
    {
      id: 1,
      title: 'Flash Sale 70% Off',
      subtitle: 'Limited Time Electronics Deal',
      bg: 'from-red-600 to-pink-600',
      icon: <Zap className="w-12 h-12" />
    },
    {
      id: 2,
      title: 'Daily Deals Up to 60% Off',
      subtitle: 'New Deals Every Day',
      bg: 'from-purple-600 to-blue-600',
      icon: <Flame className="w-12 h-12" />
    },
    {
      id: 3,
      title: 'Weekend Special',
      subtitle: 'Extra 20% Off Everything',
      bg: 'from-green-600 to-teal-600',
      icon: <Percent className="w-12 h-12" />
    }
  ];

  useEffect(() => {
    setIsLoading(false);
    
    // Auto-rotate hero slides
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5000);

    // Update countdown timers
    const timer = setInterval(() => {
      const now = new Date().getTime();
      
      // Flash sale countdown (ends at midnight)
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const flashDistance = tomorrow.getTime() - now;
      
      setFlashSaleTime({
        hours: Math.floor((flashDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((flashDistance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((flashDistance % (1000 * 60)) / 1000)
      });

      // Individual product countdowns
      const newTimeLeft = {};
      flashDeals.forEach(deal => {
        const distance = deal.endsIn.getTime() - now;
        if (distance > 0) {
          newTimeLeft[deal.id] = {
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
          };
        }
      });
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(slideInterval);
    };
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const addToCart = (id) => {
    const newCart = new Set(cart);
    newCart.add(id);
    setCart(newCart);
    
    setTimeout(() => {
      const updatedCart = new Set(cart);
      updatedCart.delete(id);
      setCart(updatedCart);
    }, 3000);
  };

  const getProgressPercentage = (sold, total) => {
    return (sold / total) * 100;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-purple-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            <Flame className="absolute inset-0 m-auto w-6 h-6 text-red-600 animate-pulse" />
          </div>
          <p className="text-gray-600 animate-pulse">Loading hot deals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
                DealsZone
              </h1>
              <div className="hidden md:flex items-center space-x-2 bg-red-100 px-3 py-1 rounded-full">
                <Flame className="w-4 h-4 text-red-600 animate-pulse" />
                <span className="text-sm font-medium text-red-600">Live Deals</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors cursor-pointer" />
                {cart.size > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
                    {cart.size}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Rotating Slides */}
      <section className="relative h-80 overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-gradient-to-r ${slide.bg} transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="animate-bounce">{slide.icon}</div>
                  <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-2 animate-fade-in-up">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up animation-delay-200">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Flash Sale Countdown */}
                <div className="flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-lg p-4 animate-fade-in-up animation-delay-400">
                  <Clock className="w-6 h-6" />
                  <span className="text-lg font-medium">Ends in:</span>
                  <div className="flex space-x-2">
                    <div className="bg-white/30 rounded px-2 py-1 min-w-[3rem] text-center">
                      <div className="font-bold">{String(flashSaleTime.hours || 0).padStart(2, '0')}</div>
                      <div className="text-xs">HRS</div>
                    </div>
                    <div className="bg-white/30 rounded px-2 py-1 min-w-[3rem] text-center">
                      <div className="font-bold">{String(flashSaleTime.minutes || 0).padStart(2, '0')}</div>
                      <div className="text-xs">MIN</div>
                    </div>
                    <div className="bg-white/30 rounded px-2 py-1 min-w-[3rem] text-center">
                      <div className="font-bold">{String(flashSaleTime.seconds || 0).padStart(2, '0')}</div>
                      <div className="text-xs">SEC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Flash Deals Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Flash Deals</h2>
                <p className="text-gray-600">Limited time offers</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Time Left</div>
              <div className="flex space-x-1 text-red-600 font-bold">
                <span>{String(flashSaleTime.hours || 0).padStart(2, '0')}:</span>
                <span>{String(flashSaleTime.minutes || 0).padStart(2, '0')}:</span>
                <span>{String(flashSaleTime.seconds || 0).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashDeals.map((deal, index) => (
              <div
                key={deal.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-red-100 hover:border-red-300 relative"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
              >
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    -{deal.discount}%
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {timeLeft[deal.id] && (
                    <span>
                      {String(timeLeft[deal.id].hours).padStart(2, '0')}:
                      {String(timeLeft[deal.id].minutes).padStart(2, '0')}:
                      {String(timeLeft[deal.id].seconds).padStart(2, '0')}
                    </span>
                  )}
                </div>

                <div className="relative overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Sold: {deal.soldCount}</span>
                      <span>Available: {deal.totalStock - deal.soldCount}</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div
                        className="bg-red-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${getProgressPercentage(deal.soldCount, deal.totalStock)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-12 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => toggleFavorite(deal.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                        favorites.has(deal.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className="w-4 h-4" fill={favorites.has(deal.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{deal.name}</h3>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(deal.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({deal.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-2xl font-bold text-red-600">${deal.salePrice}</span>
                      <span className="text-lg text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(deal.id)}
                    className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                      cart.has(deal.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-red-600 text-white hover:bg-red-700'
                    }`}
                  >
                    {cart.has(deal.id) ? 'Added to Cart!' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Daily Deals Section */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Flame className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Daily Deals</h2>
              <p className="text-gray-600">Fresh deals every day</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyDeals.map((deal, index) => (
              <div
                key={deal.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInScale 0.6s ease-out forwards'
                }}
              >
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {deal.badge}
                    </span>
                  </div>

                  {/* Discount */}
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full font-bold">
                    -{deal.discount}%
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {deal.name}
                  </h3>
                  
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(deal.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-600">({deal.reviews})</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-purple-600">${deal.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">${deal.originalPrice}</span>
                  </div>

                  <button
                    onClick={() => addToCart(deal.id)}
                    className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Deals Section */}
        <section>
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Weekly Specials</h2>
              <p className="text-gray-600">Best value deals this week</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyDeals.map((deal, index) => (
              <div
                key={deal.id}
                className="group bg-gradient-to-br from-white to-green-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden border border-green-100"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInLeft 0.8s ease-out forwards'
                }}
              >
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded-full font-bold">
                    -{deal.discount}%
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{deal.name}</h3>
                  
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(deal.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-600">({deal.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-green-600">${deal.salePrice}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                    </div>
                    <button
                      onClick={() => addToCart(deal.id)}
                      className="px-4 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
};

export default DealsPage;