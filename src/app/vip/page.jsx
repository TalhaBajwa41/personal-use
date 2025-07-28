'use client';
import React, { useState, useEffect } from 'react';
import { Crown, Star, Lock, Zap, Clock, ShoppingCart, Heart, Gift, Diamond, Sparkles, Eye, Users } from 'lucide-react';

const VIPDealsPage = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());
  const [membershipTier, setMembershipTier] = useState('gold'); // gold, platinum, diamond
  const [showExclusiveModal, setShowExclusiveModal] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [viewersCount, setViewersCount] = useState(127);

  // VIP Exclusive Deals
  const exclusiveDeals = [
    {
      id: 1,
      name: 'Limited Edition Luxury Watch',
      originalPrice: 2999.99,
      vipPrice: 1499.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1594576662848-c31711f0e4c5?w=500&h=500&fit=crop',
      rating: 4.9,
      reviews: 89,
      tier: 'diamond',
      exclusiveStock: 5,
      totalStock: 5,
      endsIn: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hours
      badge: 'DIAMOND ONLY',
      description: 'Swiss movement, 18K gold case'
    },
    {
      id: 2,
      name: 'Premium Noise Cancelling Headphones',
      originalPrice: 799.99,
      vipPrice: 399.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop',
      rating: 4.8,
      reviews: 234,
      tier: 'platinum',
      exclusiveStock: 12,
      totalStock: 15,
      endsIn: new Date(Date.now() + 5 * 60 * 60 * 1000), // 5 hours
      badge: 'PLATINUM+',
      description: 'Studio-grade audio quality'
    },
    {
      id: 3,
      name: 'Designer Leather Briefcase',
      originalPrice: 1299.99,
      vipPrice: 649.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
      rating: 4.7,
      reviews: 156,
      tier: 'gold',
      exclusiveStock: 8,
      totalStock: 20,
      endsIn: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours
      badge: 'VIP EXCLUSIVE',
      description: 'Handcrafted Italian leather'
    }
  ];

  // Early Access Deals
  const earlyAccessDeals = [
    {
      id: 4,
      name: 'Smart Home Security System',
      originalPrice: 699.99,
      vipPrice: 349.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 445,
      launchDate: 'Next Week',
      preOrders: 1247
    },
    {
      id: 5,
      name: 'Professional Camera Kit',
      originalPrice: 2499.99,
      vipPrice: 1749.99,
      discount: 30,
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      launchDate: '3 Days',
      preOrders: 892
    },
    {
      id: 6,
      name: 'Luxury Skincare Set',
      originalPrice: 399.99,
      vipPrice: 199.99,
      discount: 50,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 678,
      launchDate: 'Tomorrow',
      preOrders: 2341
    }
  ];

  // Member Perks
  const memberPerks = [
    { icon: <Crown className="w-6 h-6" />, title: 'Exclusive Access', desc: 'First access to luxury items' },
    { icon: <Zap className="w-6 h-6" />, title: 'Lightning Deals', desc: 'Special flash sales for VIPs' },
    { icon: <Gift className="w-6 h-6" />, title: 'Free Shipping', desc: 'Always free, always fast' },
    { icon: <Diamond className="w-6 h-6" />, title: 'Premium Support', desc: '24/7 concierge service' }
  ];

  const tierColors = {
    gold: 'from-yellow-400 to-yellow-600',
    platinum: 'from-slate-300 to-slate-500',
    diamond: 'from-blue-300 to-purple-500'
  };

  useEffect(() => {
    setIsLoading(false);
    
    // Simulate live viewers count changes
    const viewersInterval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 3000);

    // Animation trigger for periodic effects
    const animationInterval = setInterval(() => {
      setAnimationTrigger(prev => prev + 1);
    }, 5000);

    // Update countdown timers
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const newTimeLeft = {};
      
      exclusiveDeals.forEach(deal => {
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
      clearInterval(viewersInterval);
      clearInterval(animationInterval);
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

  const canAccessDeal = (dealTier) => {
    const tierLevel = { gold: 1, platinum: 2, diamond: 3 };
    return tierLevel[membershipTier] >= tierLevel[dealTier];
  };

  const getStockPercentage = (remaining, total) => {
    return ((total - remaining) / total) * 100;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-gold-400 border-t-transparent rounded-full animate-spin"></div>
            <Crown className="absolute inset-0 m-auto w-8 h-8 text-yellow-400 animate-pulse" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
              VIP Access Loading...
            </h3>
            <p className="text-gray-400 mt-2">Preparing exclusive deals</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Crown className="w-8 h-8 text-yellow-400" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                  VIP Exclusive
                </h1>
              </div>
              
              {/* Membership Badge */}
              <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${tierColors[membershipTier]} text-black font-bold text-sm uppercase tracking-wide`}>
                {membershipTier} Member
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Live Viewers */}
              <div className="flex items-center space-x-2 bg-red-600/20 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <Eye className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-400">{viewersCount} watching</span>
              </div>
              
              {/* Cart */}
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer" />
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-black/50"></div>
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-purple-400/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                VIP Exclusive
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock premium deals reserved only for our most valued members
            </p>
            
            {/* Member Perks */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {memberPerks.map((perk, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'slideInUp 0.8s ease-out forwards'
                  }}
                >
                  <div className="text-yellow-400 mb-2 flex justify-center">{perk.icon}</div>
                  <h3 className="font-semibold text-sm mb-1">{perk.title}</h3>
                  <p className="text-xs text-gray-400">{perk.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Exclusive Deals Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-xl">
                <Lock className="w-6 h-6 text-black" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Exclusive Access</h2>
                <p className="text-gray-400">Premium deals for VIP members only</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-sm text-yellow-400 font-medium">Members Only</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {exclusiveDeals.map((deal, index) => {
              const canAccess = canAccessDeal(deal.tier);
              const stockPercentage = getStockPercentage(deal.exclusiveStock, deal.totalStock);
              
              return (
                <div
                  key={deal.id}
                  className={`group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                    canAccess 
                      ? 'border-purple-500/50 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25' 
                      : 'border-gray-700/50 opacity-60'
                  }`}
                  style={{
                    animationDelay: `${index * 300}ms`,
                    animation: 'fadeInScale 1s ease-out forwards'
                  }}
                >
                  {/* Tier Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                      deal.tier === 'diamond' ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white' :
                      deal.tier === 'platinum' ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-black' :
                      'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black'
                    }`}>
                      {deal.badge}
                    </div>
                  </div>

                  {/* Countdown Timer */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-2 rounded-full backdrop-blur-sm border border-purple-500/30">
                    {timeLeft[deal.id] && (
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>
                          {String(timeLeft[deal.id].hours).padStart(2, '0')}:
                          {String(timeLeft[deal.id].minutes).padStart(2, '0')}:
                          {String(timeLeft[deal.id].seconds).padStart(2, '0')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        canAccess ? 'group-hover:scale-110' : 'grayscale'
                      }`}
                    />
                    
                    {/* Stock Progress */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3">
                      <div className="flex justify-between text-xs text-white mb-2">
                        <span>Only {deal.exclusiveStock} left</span>
                        <span>{deal.totalStock - deal.exclusiveStock} claimed</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-red-500 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${stockPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Lock Overlay for inaccessible deals */}
                    {!canAccess && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <div className="text-center">
                          <Lock className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white font-semibold">Upgrade Required</p>
                          <p className="text-gray-300 text-sm">
                            {deal.tier.charAt(0).toUpperCase() + deal.tier.slice(1)} membership needed
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    {canAccess && (
                      <div className="absolute top-16 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                          onClick={() => toggleFavorite(deal.id)}
                          className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                            favorites.has(deal.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-white/20 text-white hover:bg-red-500'
                          }`}
                        >
                          <Heart className="w-4 h-4" fill={favorites.has(deal.id) ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {deal.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{deal.description}</p>
                    
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-400 ml-2">({deal.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-2xl font-bold text-yellow-400">${deal.vipPrice}</span>
                        <span className="text-lg text-gray-500 line-through ml-3">${deal.originalPrice}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-sm">-{deal.discount}%</div>
                        <div className="text-xs text-gray-400">VIP Price</div>
                      </div>
                    </div>

                    <button
                      onClick={() => canAccess ? addToCart(deal.id) : setShowExclusiveModal(true)}
                      disabled={!canAccess}
                      className={`w-full py-3 rounded-xl font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                        canAccess
                          ? cart.has(deal.id)
                            ? 'bg-green-600 text-white'
                            : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 hover:shadow-lg'
                          : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {canAccess 
                        ? cart.has(deal.id) 
                          ? 'Added to Cart!' 
                          : 'Add to VIP Cart'
                        : 'Upgrade to Access'
                      }
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Early Access Section */}
        <section className="mb-16">
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Early Access</h2>
              <p className="text-gray-400">Get it before everyone else</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {earlyAccessDeals.map((deal, index) => (
              <div
                key={deal.id}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'slideInUp 0.8s ease-out forwards'
                }}
              >
                <div className="relative">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute top-3 left-3 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold uppercase">
                    Early Access
                  </div>

                  <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    -{deal.discount}%
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {deal.name}
                  </h3>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(deal.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-400">({deal.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-green-400">${deal.vipPrice}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">${deal.originalPrice}</span>
                    </div>
                  </div>

                  <div className="bg-gray-800 rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">Launches in:</span>
                      <span className="text-xs font-bold text-blue-400">{deal.launchDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Pre-orders:</span>
                      <span className="text-xs font-bold text-green-400">{deal.preOrders.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(deal.id)}
                    className="w-full py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-300 font-medium text-sm"
                  >
                    Pre-Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Upgrade Modal (simplified for demo) */}
      {showExclusiveModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md mx-4 border border-purple-500/50">
            <div className="text-center">
              <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Upgrade Required</h3>
              <p className="text-gray-400 mb-6">
                This exclusive deal is only available to higher tier members.
              </p>
              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg">
                  Upgrade to Gold - $9.99/mo
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-gray-300 to-gray-500 text-black font-bold rounded-lg">
                  Upgrade to Platinum - $19.99/mo
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-bold rounded-lg">
                  Upgrade to Diamond - $39.99/mo
                </button>
              </div>
              <button
                onClick={() => setShowExclusiveModal(false)}
                className="mt-4 text-gray-400 hover:text-white"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default VIPDealsPage;