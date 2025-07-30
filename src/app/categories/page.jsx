'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  ChevronRight, 
  Star, 
  TrendingUp,
  Package,
  Smartphone,
  Home,
  Car,
  Shirt,
  Book,
  Gamepad2,
  Utensils,
  Dumbbell,
  Palette,
  Music,
  Camera,
  Heart,
  Gift,
  Monitor,
  Watch,
  Headphones
} from 'lucide-react';

export default function CategoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample categories data
  const categories = [
    {
      id: 1,
      name: 'Electronics',
      description: 'Latest gadgets and electronic devices',
      icon: Smartphone,
      itemCount: 1247,
      trending: true,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      subcategories: ['Smartphones', 'Laptops', 'Tablets', 'Accessories'],
      featured: true
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Clothing, shoes, and accessories',
      icon: Shirt,
      itemCount: 892,
      trending: true,
      color: 'bg-gradient-to-br from-pink-500 to-pink-600',
      subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories'],
      featured: true
    },
    {
      id: 3,
      name: 'Home & Garden',
      description: 'Everything for your home and garden',
      icon: Home,
      itemCount: 634,
      trending: false,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      subcategories: ['Furniture', 'Decor', 'Kitchen', 'Garden'],
      featured: false
    },
    {
      id: 4,
      name: 'Automotive',
      description: 'Cars, motorcycles, and auto parts',
      icon: Car,
      itemCount: 423,
      trending: false,
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      subcategories: ['Cars', 'Motorcycles', 'Parts', 'Accessories'],
      featured: false
    },
    {
      id: 5,
      name: 'Books & Media',
      description: 'Books, movies, music, and games',
      icon: Book,
      itemCount: 756,
      trending: true,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      subcategories: ['Books', 'Movies', 'Music', 'Games'],
      featured: true
    },
    {
      id: 6,
      name: 'Gaming',
      description: 'Video games and gaming accessories',
      icon: Gamepad2,
      itemCount: 589,
      trending: true,
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      subcategories: ['Console Games', 'PC Games', 'Controllers', 'Headsets'],
      featured: false
    },
    {
      id: 7,
      name: 'Food & Beverages',
      description: 'Groceries, snacks, and beverages',
      icon: Utensils,
      itemCount: 1156,
      trending: false,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      subcategories: ['Groceries', 'Snacks', 'Beverages', 'Organic'],
      featured: false
    },
    {
      id: 8,
      name: 'Sports & Fitness',
      description: 'Sporting goods and fitness equipment',
      icon: Dumbbell,
      itemCount: 445,
      trending: false,
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      subcategories: ['Equipment', 'Apparel', 'Supplements', 'Outdoor'],
      featured: false
    },
    {
      id: 9,
      name: 'Art & Crafts',
      description: 'Art supplies and craft materials',
      icon: Palette,
      itemCount: 267,
      trending: false,
      color: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      subcategories: ['Art Supplies', 'Crafts', 'Sewing', 'Jewelry Making'],
      featured: false
    },
    {
      id: 10,
      name: 'Music Instruments',
      description: 'Musical instruments and equipment',
      icon: Music,
      itemCount: 189,
      trending: false,
      color: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      subcategories: ['Guitars', 'Keyboards', 'Drums', 'Audio Equipment'],
      featured: false
    },
    {
      id: 11,
      name: 'Photography',
      description: 'Cameras and photography equipment',
      icon: Camera,
      itemCount: 312,
      trending: false,
      color: 'bg-gradient-to-br from-gray-500 to-gray-600',
      subcategories: ['Cameras', 'Lenses', 'Accessories', 'Lighting'],
      featured: false
    },
    {
      id: 12,
      name: 'Health & Beauty',
      description: 'Health, beauty, and personal care',
      icon: Heart,
      itemCount: 698,
      trending: true,
      color: 'bg-gradient-to-br from-rose-500 to-rose-600',
      subcategories: ['Skincare', 'Makeup', 'Health', 'Personal Care'],
      featured: true
    }
  ];

  const filters = [
    { id: 'all', label: 'All Categories', count: categories.length },
    { id: 'featured', label: 'Featured', count: categories.filter(c => c.featured).length },
    { id: 'trending', label: 'Trending', count: categories.filter(c => c.trending).length },
    { id: 'popular', label: 'Most Popular', count: categories.filter(c => c.itemCount > 500).length }
  ];

  const sortOptions = [
    { id: 'name', label: 'Name A-Z' },
    { id: 'items', label: 'Most Items' },
    { id: 'trending', label: 'Trending First' }
  ];

  const filteredAndSortedCategories = useMemo(() => {
    let filtered = categories.filter(category => {
      const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           category.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesFilter = selectedFilter === 'all' ||
                           (selectedFilter === 'featured' && category.featured) ||
                           (selectedFilter === 'trending' && category.trending) ||
                           (selectedFilter === 'popular' && category.itemCount > 500);
      
      return matchesSearch && matchesFilter;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'items':
          return b.itemCount - a.itemCount;
        case 'trending':
          if (a.trending && !b.trending) return -1;
          if (!a.trending && b.trending) return 1;
          return b.itemCount - a.itemCount;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedFilter, sortBy]);

  const CategoryCard = ({ category, isGridView, index }) => {
    const IconComponent = category.icon;
    const isHovered = hoveredCard === category.id;
    
    if (isGridView) {
      return (
        <div 
          className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 group cursor-pointer transform hover:-translate-y-2 ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
          style={{ 
            animationDelay: `${index * 100}ms`,
            animationFillMode: 'forwards'
          }}
          onMouseEnter={() => setHoveredCard(category.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="p-6 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${category.color}`} />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <IconComponent className="text-white" size={26} />
                </div>
                <div className="flex items-center space-x-1">
                  {category.trending && (
                    <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                      <TrendingUp size={12} />
                      <span>Trending</span>
                    </div>
                  )}
                  {category.featured && (
                    <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                      <Star size={12} className="animate-spin" style={{ animationDuration: '3s' }} />
                      <span>Featured</span>
                    </div>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-gray-500 flex items-center space-x-2 font-medium">
                  <Package size={16} className="text-blue-500" />
                  <span>{category.itemCount.toLocaleString()} items</span>
                </span>
                <ChevronRight 
                  className={`text-gray-400 group-hover:text-blue-600 transition-all duration-300 ${
                    isHovered ? 'translate-x-2' : ''
                  }`} 
                  size={18} 
                />
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {category.subcategories.slice(0, 3).map((sub, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors duration-200 cursor-pointer"
                    >
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="text-xs text-gray-500 font-medium">+{category.subcategories.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // List view
    return (
      <div 
        className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group cursor-pointer transform hover:scale-105 ${
          isLoaded ? 'animate-fade-in-left' : 'opacity-0'
        }`}
        style={{ 
          animationDelay: `${index * 50}ms`,
          animationFillMode: 'forwards'
        }}
        onMouseEnter={() => setHoveredCard(category.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <div className="p-5 flex items-center space-x-6">
          <div className={`w-20 h-20 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 shadow-lg`}>
            <IconComponent className="text-white" size={32} />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
              {category.trending && (
                <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                  <TrendingUp size={12} />
                  <span>Trending</span>
                </div>
              )}
              {category.featured && (
                <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">
                  <Star size={12} className="animate-spin" style={{ animationDuration: '3s' }} />
                  <span>Featured</span>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{category.description}</p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center space-x-2 font-medium">
                <Package size={16} className="text-blue-500" />
                <span>{category.itemCount.toLocaleString()} items</span>
              </span>
              <span className="font-medium">{category.subcategories.length} subcategories</span>
            </div>
          </div>
          
          <ChevronRight 
            className={`text-gray-400 group-hover:text-blue-600 transition-all duration-300 ${
              isHovered ? 'translate-x-2' : ''
            }`} 
            size={24} 
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-xl border-b border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className={`text-center mb-10 ${isLoaded ? 'animate-fade-in-down' : 'opacity-0'}`}>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
              Browse Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover thousands of products across all categories. Find exactly what you're looking for with our intuitive browsing experience.
            </p>
          </div>

          {/* Search and Filters */}
          <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={22} />
              <input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg shadow-lg hover:shadow-xl bg-white"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.label}</option>
                ))}
              </select>

              {/* View Toggle */}
              <div className="flex items-center border border-gray-300 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-l-xl transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Grid size={22} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-r-xl transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <List size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <div className={`lg:w-72 space-y-8 ${isLoaded ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h3 className="font-bold text-gray-900 mb-6 flex items-center space-x-3 text-lg">
                <Filter size={20} className="text-blue-600" />
                <span>Filter Categories</span>
              </h3>
              
              <div className="space-y-3">
                {filters.map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${
                      selectedFilter === filter.id
                        ? 'bg-blue-100 text-blue-700 border-2 border-blue-200 shadow-md'
                        : 'text-gray-600 hover:bg-gray-100 border-2 border-transparent hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{filter.label}</span>
                      <span className={`text-xs px-3 py-1 rounded-full font-bold ${
                        selectedFilter === filter.id 
                          ? 'bg-blue-200 text-blue-800' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {filter.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <h3 className="font-bold text-gray-900 mb-6 text-lg">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Total Categories</span>
                  <span className="font-bold text-gray-900 text-lg">{categories.length}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Total Products</span>
                  <span className="font-bold text-gray-900 text-lg">{categories.reduce((sum, cat) => sum + cat.itemCount, 0).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 font-medium">Featured</span>
                  <span className="font-bold text-gray-900 text-lg">{categories.filter(c => c.featured).length}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Trending</span>
                  <span className="font-bold text-gray-900 text-lg">{categories.filter(c => c.trending).length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className={`flex items-center justify-between mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredAndSortedCategories.length} Categories
                {searchTerm && (
                  <span className="text-gray-500 font-normal"> for "{searchTerm}"</span>
                )}
              </h2>
            </div>

            {/* Categories Grid/List */}
            {filteredAndSortedCategories.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
                  : 'space-y-6'
              }>
                {filteredAndSortedCategories.map((category, index) => (
                  <CategoryCard 
                    key={category.id} 
                    category={category} 
                    isGridView={viewMode === 'grid'} 
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className={`text-center py-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Search className="text-gray-400" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No categories found</h3>
                <p className="text-gray-500 text-lg mb-6">
                  {searchTerm ? `No categories match "${searchTerm}"` : 'No categories match your current filters'}
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedFilter('all');
                  }}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
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

        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.6s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}