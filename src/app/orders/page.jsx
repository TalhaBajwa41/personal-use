'use client';
import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, TrendingUp, Users, DollarSign, Package, Star, 
  Award, BarChart3, Zap, Globe, Heart, ArrowRight, ExternalLink,
  ShoppingBag, CreditCard, Truck, Shield, Target, Sparkles
} from 'lucide-react';

export default function ECommerceProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    revenue: 0,
    customers: 0,
    products: 0,
    satisfaction: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats
    const targetStats = { revenue: 2.5, customers: 10000, products: 500, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      setStats({
        revenue: Math.round(targetStats.revenue * easeOut * 10) / 10,
        customers: Math.round(targetStats.customers * easeOut),
        products: Math.round(targetStats.products * easeOut),
        satisfaction: Math.round(targetStats.satisfaction * easeOut)
      });
      
      if (step >= steps) clearInterval(timer);
    }, stepTime);
    
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      desc: 'Custom online stores with seamless shopping experiences',
      color: 'from-blue-500 to-cyan-500',
      features: ['Custom Shopping Cart', 'Payment Integration', 'Inventory Management']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Optimization',
      desc: 'Data-driven insights to boost your sales and conversions',
      color: 'from-green-500 to-emerald-500',
      features: ['Sales Analytics', 'A/B Testing', 'Conversion Optimization']
    },
    {
      icon: Globe,
      title: 'Multi-Platform Solutions',
      desc: 'Shopify, WooCommerce, custom platforms & mobile apps',
      color: 'from-purple-500 to-pink-500',
      features: ['Cross-Platform', 'Mobile Responsive', 'PWA Development']
    }
  ];

  const portfolio = [
    {
      name: 'TechGadgets Pro',
      category: 'Electronics Store',
      revenue: '$500K+ Annual',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      metrics: { conversion: '4.2%', aov: '$145', growth: '+180%' },
      tech: ['Next.js', 'Stripe', 'MongoDB']
    },
    {
      name: 'Fashion Forward',
      category: 'Clothing Brand',
      revenue: '$300K+ Annual',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
      metrics: { conversion: '3.8%', aov: '$85', growth: '+145%' },
      tech: ['Shopify', 'React', 'Klaviyo']
    },
    {
      name: 'Organic Wellness',
      category: 'Health & Beauty',
      revenue: '$250K+ Annual',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      metrics: { conversion: '5.1%', aov: '$65', growth: '+220%' },
      tech: ['WooCommerce', 'Vue.js', 'PayPal']
    }
  ];

  const achievements = [
    { icon: TrendingUp, title: 'Average ROI Increase', value: '250%', desc: 'For client projects' },
    { icon: Users, title: 'Happy Clients', value: '50+', desc: 'Across 15 countries' },
    { icon: Award, title: 'Years Experience', value: '7+', desc: 'In e-commerce' },
    { icon: Zap, title: 'Average Load Time', value: '<2s', desc: 'Page optimization' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechGadgets Pro',
      text: 'Transformed our online presence completely. Sales increased by 180% in just 6 months!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Fashion Forward',
      text: 'Professional, creative, and results-driven. The best investment we made for our business.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
          <div className="container mx-auto px-6 py-8">
            <nav className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <ShoppingCart size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  E-Commerce Pro
                </div>
              </div>
              <div className="flex space-x-8">
                {['overview', 'services', 'portfolio', 'contact'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                      activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : ''
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className={`container mx-auto px-6 py-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="text-center mb-20">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Profile"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white/20"
              />
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              Alex Rodriguez
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-yellow-400" size={24} />
              <p className="text-2xl text-blue-300 font-medium">
                E-Commerce Specialist & Growth Hacker
              </p>
              <Sparkles className="text-yellow-400" size={24} />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transforming businesses through cutting-edge e-commerce solutions. 
              I help brands achieve explosive growth with data-driven strategies and seamless user experiences.
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
                <DollarSign size={48} className="text-green-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-green-400 mb-2">${stats.revenue}M+</div>
                <div className="text-gray-300">Revenue Generated</div>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
                <Users size={48} className="text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-400 mb-2">{stats.customers.toLocaleString()}+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
                <Package size={48} className="text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-purple-400 mb-2">{stats.products}+</div>
                <div className="text-gray-300">Products Launched</div>
              </div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/20">
                <Star size={48} className="text-yellow-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-400 mb-2">{stats.satisfaction}%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content */}
        <section className="container mx-auto px-6 py-20">
          {activeTab === 'overview' && (
            <div className="animate-fadeIn">
              <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Why Choose Me?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="text-center group hover:scale-105 transition-all duration-300">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50">
                      <achievement.icon size={48} className="text-blue-400 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                      <div className="text-blue-300 font-medium mb-1">{achievement.title}</div>
                      <div className="text-gray-400 text-sm">{achievement.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="mb-20">
                <h3 className="text-3xl font-bold mb-12 text-center text-white">Client Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={testimonial.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                      <div>
                        <div className="font-bold text-white">{testimonial.name}</div>
                        <div className="text-blue-400">{testimonial.company}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'services' && (
            <div className="animate-fadeIn">
              <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                My Services
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                  <div key={service.title} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-400">
                          <div className="w-2 h-2 bg-blue-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
                <h3 className="text-3xl font-bold mb-12 text-center text-white">My Process</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    { icon: Target, title: 'Strategy', desc: 'Market research & planning' },
                    { icon: ShoppingBag, title: 'Design', desc: 'UI/UX & brand experience' },
                    { icon: CreditCard, title: 'Develop', desc: 'Code & integrate systems' },
                    { icon: TrendingUp, title: 'Optimize', desc: 'Test & improve performance' }
                  ].map((step, index) => (
                    <div key={step.title} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon size={24} className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div className="animate-fadeIn">
              <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </h2>
              
              <div className="grid lg:grid-cols-3 gap-8">
                {portfolio.map((project, index) => (
                  <div key={project.name} className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-green-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {project.revenue}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-blue-300 mb-6">{project.category}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-400">{project.metrics.conversion}</div>
                          <div className="text-xs text-gray-400">Conversion</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-400">{project.metrics.aov}</div>
                          <div className="text-xs text-gray-400">AOV</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-purple-400">{project.metrics.growth}</div>
                          <div className="text-xs text-gray-400">Growth</div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-4">
                        <span>View Case Study</span>
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="animate-fadeIn">
              <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Grow Your Business
              </h2>
              
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10 text-center">
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                        <Truck size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
                      <p className="text-gray-300">Projects delivered on time, every time</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                        <Shield size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Quality Guaranteed</h3>
                      <p className="text-gray-300">100% satisfaction or money back</p>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                        <Heart size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Ongoing Support</h3>
                      <p className="text-gray-300">24/7 support even after launch</p>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-6 text-white">Ready to 10x Your Revenue?</h3>
                  <p className="text-xl text-gray-300 mb-8">
                    Let's discuss your project and create something amazing together
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                      <span>Start Your Project</span>
                      <ArrowRight size={20} />
                    </button>
                    <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105">
                      Schedule Free Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}