'use client';
import React, { useState, useEffect } from 'react';
import { Search, Filter, Heart, ShoppingCart, Star, ChevronDown } from 'lucide-react';

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [favorites, setFavorites] = useState(new Set());
  const [cart, setCart] = useState(new Set());
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sample product data
  const sampleProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      originalPrice: 129.99,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 128,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: 'Minimalist Watch',
      price: 199.99,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 89,
      isNew: false,
      isSale: false
    },
    {
      id: 3,
      name: 'Organic Cotton T-Shirt',
      price: 29.99,
      category: 'clothing',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.2,
      reviews: 256,
      isNew: true,
      isSale: false
    },
    {
      id: 4,
      name: 'Leather Backpack',
      price: 149.99,
      originalPrice: 199.99,
      category: 'accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 94,
      isNew: false,
      isSale: true
    },
    {
      id: 5,
      name: 'Smart Phone',
      price: 699.99,
      category: 'electronics',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 312,
      isNew: true,
      isSale: false
    },
    {
      id: 6,
      name: 'Running Shoes',
      price: 119.99,
      originalPrice: 149.99,
      category: 'clothing',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 187,
      isNew: false,
      isSale: true
    },
    {
      id: 7,
      name: 'Coffee Maker',
      price: 79.99,
      category: 'home',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
      rating: 4.3,
      reviews: 156,
      isNew: false,
      isSale: false
    },
    {
      id: 8,
      name: 'Yoga Mat',
      price: 39.99,
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
      rating: 4.1,
      reviews: 203,
      isNew: true,
      isSale: false
    }
  ];

  const categories = ['all', 'electronics', 'clothing', 'accessories', 'home', 'sports'];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setProducts(sampleProducts);
      setFilteredProducts(sampleProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy]);

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
    
    // Remove from cart after 3 seconds (for demo)
    // setTimeout(() => {
    //   const updatedCart = new Set(cart);
    //   updatedCart.delete(id);
    //   setCart(updatedCart);
    // }, 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 animate-pulse">Loading amazing products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ShopZone
              </h1>
              <nav className="hidden md:flex space-x-6">
                {categories.slice(1).map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`capitalize transition-all duration-300 hover:text-purple-600 ${
                      selectedCategory === category 
                        ? 'text-purple-600 font-semibold' 
                        : 'text-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-purple-600 transition-colors cursor-pointer" />
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors md:hidden"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/70 backdrop-blur-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filter for Mobile */}
          {(showFilters || window.innerWidth >= 768) && (
            <div className="flex flex-wrap gap-2 md:hidden">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-white/70 text-gray-600 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                  {product.isSale && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Sale
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      favorites.has(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={favorites.has(product.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Quick Add to Cart */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <button
                    onClick={() => addToCart(product.id)}
                    className={`w-full py-2 rounded-lg font-medium transition-all duration-300 ${
                      cart.has(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-purple-600 text-white hover:bg-purple-700'
                    }`}
                  >
                    {cart.has(product.id) ? 'Added!' : 'Quick Add'}
                  </button>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

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
      `}</style>
    </div>
  );
};

export default ShopPage;

