'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Users, Award, Globe, Heart, Truck, Shield, Star, ArrowRight, Sparkles } from 'lucide-react';
const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  const observerRef = useRef(null);

  // Mouse tracking for parallax effects
  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX - innerWidth / 2) / innerWidth,
      y: (clientY - innerHeight / 2) / innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, number: "50K+", label: "Happy Customers" },
    { icon: Globe, number: "25+", label: "Countries Served" },
    { icon: Award, number: "99.5%", label: "Satisfaction Rate" },
    { icon: Truck, number: "1M+", label: "Orders Delivered" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers in mind. Your satisfaction drives our innovation and commitment to excellence."
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We source only the finest products and stand behind every item with comprehensive quality assurance and support."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building sustainable partnerships worldwide while minimizing our environmental footprint through responsible practices."
    }
  ];

  const testimonials = [
    {
      text: "The quality exceeded my expectations. Fast shipping and amazing customer service!",
      author: "Sarah Chen",
      role: "Verified Customer"
    },
    {
      text: "I've been shopping here for years. They never disappoint with their product selection.",
      author: "Michael Rodriguez",
      role: "Loyal Customer"
    },
    {
      text: "Best customer support I've ever experienced. They truly care about their customers.",
      author: "Emma Thompson",
      role: "Premium Member"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white min-h-screen flex items-center"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Parallax background elements */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 z-10">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <Sparkles className="w-12 h-12 text-yellow-300 animate-spin-slow" />
            </div>
            <h1 className="text-6xl lg:text-8xl font-black mb-8 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
              Our Story
            </h1>
            <p className="text-xl lg:text-3xl mb-12 max-w-4xl mx-auto opacity-90 animate-fade-in-up-delay-1 leading-relaxed font-light">
              Building extraordinary shopping experiences that connect people with products they love, 
              delivered with care and powered by innovation.
            </p>
            <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up-delay-2">
              <button className="group bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-500 flex items-center space-x-2 shadow-2xl">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-white/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-500 shadow-2xl">
                Watch Our Journey
              </button>
            </div>
            <div className="animate-bounce-slow mt-16">
              <ChevronDown className="w-10 h-10 mx-auto opacity-70 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Enhanced wave */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
            <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z">
              <animate attributeName="d" 
                values="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z;M0,80 C300,40 900,100 1200,60 L1200,120 L0,120 Z;M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
                dur="8s" 
                repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.mission ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Redefining Ecommerce
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded in 2020, we started with a simple belief: shopping should be effortless, enjoyable, 
              and accessible to everyone. Today, we're a global marketplace connecting millions of customers 
              with carefully curated products from trusted sellers worldwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${
              isVisible.mission ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize commerce by creating a platform where anyone can discover, 
                  purchase, and enjoy high-quality products while supporting businesses that 
                  share our values of integrity and innovation.
                </p>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible.mission ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the world's most trusted and innovative ecommerce platform, 
                  where technology meets humanity to create shopping experiences that 
                  inspire and delight customers every single day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(48)].map((_, i) => (
              <div 
                key={i} 
                className="border border-white/20 animate-grid-fade"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className={`text-5xl font-black text-center mb-20 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent transform transition-all duration-1000 ${
            isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group cursor-pointer transform transition-all duration-1000 delay-${index * 100} ${
                  isVisible.stats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                onMouseEnter={() => setHoveredCard(`stat-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`relative bg-white/10 backdrop-blur-sm rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                  hoveredCard === `stat-${index}` 
                    ? 'scale-125 bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl shadow-blue-500/50' 
                    : 'group-hover:scale-110'
                }`}>
                  <stat.icon className="w-12 h-12 transition-all duration-300" />
                  {hoveredCard === `stat-${index}` && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 animate-pulse" />
                  )}
                </div>
                <div className={`text-5xl font-black mb-3 transition-all duration-500 ${
                  hoveredCard === `stat-${index}`
                    ? 'bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent scale-110'
                    : 'bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent'
                }`}>
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision and interaction, ensuring we deliver 
              exceptional experiences while building a sustainable future.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-700 delay-${index * 200} hover:-translate-y-4 cursor-pointer overflow-hidden ${
                  isVisible.values ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                onMouseEnter={() => setHoveredCard(`value-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 transition-opacity duration-500 ${
                  hoveredCard === `value-${index}` ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-all duration-500 ${
                    hoveredCard === `value-${index}` 
                      ? 'scale-125 rotate-12 shadow-2xl shadow-blue-500/50' 
                      : 'group-hover:scale-110'
                  }`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                    hoveredCard === `value-${index}`
                      ? 'text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text'
                      : 'text-gray-800'
                  }`}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>

                {/* Decorative elements */}
                {hoveredCard === `value-${index}` && (
                  <>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold mb-16 text-gray-800 transform transition-all duration-1000 ${
            isVisible.testimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            What Our Customers Say
          </h2>
          
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ${
                    index === currentTestimonial 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 absolute inset-0 translate-x-4'
                  }`}
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.author}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions of satisfied customers and discover why we're the preferred choice 
            for online shopping worldwide.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Start Shopping
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes grid-fade {
          0% { opacity: 0; }
          50% { opacity: 0.3; }
          100% { opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-fade-in-up-delay-1 {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-grid-fade {
          animation: grid-fade 4s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;