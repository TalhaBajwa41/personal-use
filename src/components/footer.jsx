'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  Heart, 
  Zap, 
  Twitter, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube,
  Github,
  Send,
  Star,
  Award,
  Users,
  Globe,
  ChevronRight,
  ExternalLink,
  Shield,
  Sparkles
} from 'lucide-react';

export default function UniqueFooter() {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [currentYear] = useState(new Date().getFullYear());

  // Mock data for dynamic content
  const [stats] = useState({
    customers: '50K+',
    countries: '120+',
    rating: '4.9',
    awards: '25+'
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    // You could add a toast notification here
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Investor Relations', href: '/investors', description: 'Financial information' },
        { name: 'Sustainability', href: '/sustainability', description: 'Our green initiatives' }
      ]
    },
    {
      title: 'Products & Services',
      links: [
        { name: 'Shop All', href: '/shop', description: 'Browse our catalog' },
        { name: 'New Arrivals', href: '/new', description: 'Latest products' },
        { name: 'Best Sellers', href: '/bestsellers', description: 'Popular items' },
        { name: 'Sale', href: '/sale', description: 'Discounted products' },
        { name: 'Gift Cards', href: '/gift-cards', description: 'Perfect gifts' }
      ]
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Help Center', href: '/help', description: 'Get support' },
        { name: 'Contact Us', href: '/contact', description: 'Reach our team' },
        { name: 'Shipping Info', href: '/shipping', description: 'Delivery details' },
        { name: 'Returns', href: '/returns', description: 'Return policy' },
        { name: 'Size Guide', href: '/size-guide', description: 'Find your fit' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },
        { name: 'Terms of Service', href: '/terms', description: 'Usage terms' },
        { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },
        { name: 'GDPR', href: '/gdpr', description: 'Data rights' },
        { name: 'Accessibility', href: '/accessibility', description: 'Inclusive design' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', color: 'hover:text-blue-400', name: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-600', name: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-500', name: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', color: 'hover:text-blue-700', name: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-500', name: 'YouTube' },
    { icon: Github, href: 'https://github.com', color: 'hover:text-gray-400', name: 'GitHub' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@luxestore.com', href: 'mailto:hello@luxestore.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Business Ave, NY 10001', href: 'https://maps.google.com' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-green-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main footer content */}
      <div className="relative z-10">
        {/* Newsletter section */}
        <div className="border-b border-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-400 font-semibold">Stay Updated</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get Exclusive Offers
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Subscribe to our newsletter and be the first to know about new arrivals, special discounts, and insider-only deals.
                </p>
                
                {/* Newsletter stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white mb-1">50K+</div>
                    <div className="text-gray-400 text-sm">Subscribers</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800/30 rounded-2xl backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white mb-1">Weekly</div>
                    <div className="text-gray-400 text-sm">Updates</div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-12">
                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Subscribe</span>
                    </button>
                  </div>
                  <p className="text-sm text-gray-400 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer links */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  LUXE
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your premium destination for luxury products and exceptional shopping experiences. We're committed to quality, innovation, and customer satisfaction.
              </p>

              {/* Contact information */}
              <div className="space-y-3 mb-8">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color} group`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer sections */}
            {footerSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-lg font-semibold mb-6 text-white">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="group flex items-start space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                        onMouseEnter={() => setActiveSection(`${sectionIndex}-${linkIndex}`)}
                        onMouseLeave={() => setActiveSection(null)}
                      >
                        <ChevronRight className={`w-4 h-4 mt-0.5 transition-transform duration-300 ${
                          activeSection === `${sectionIndex}-${linkIndex}` ? 'translate-x-1 text-purple-400' : ''
                        }`} />
                        <div>
                          <div className="font-medium">{link.name}</div>
                          <div className={`text-xs text-gray-500 transition-all duration-300 ${
                            activeSection === `${sectionIndex}-${linkIndex}` ? 'text-gray-400' : ''
                          }`}>
                            {link.description}
                          </div>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="border-t border-b border-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-purple-400 mr-2" />
                  <div className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                    {stats.customers}
                  </div>
                </div>
                <div className="text-gray-400">Happy Customers</div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="w-6 h-6 text-blue-400 mr-2" />
                  <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {stats.countries}
                  </div>
                </div>
                <div className="text-gray-400">Countries Served</div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  <div className="text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {stats.rating}
                  </div>
                </div>
                <div className="text-gray-400">Average Rating</div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-green-400 mr-2" />
                  <div className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {stats.awards}
                  </div>
                </div>
                <div className="text-gray-400">Awards Won</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400">
              <p>&copy; {currentYear} LUXE. All rights reserved.</p>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in New York</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">SSL Secured</span>
              </div>
              
              <a 
                href="#"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Status Page</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        } hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25`}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}