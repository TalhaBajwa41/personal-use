'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, MessageCircle, 
  Headphones, Shield, Zap, Globe, Star, CheckCircle,
  ArrowRight, Sparkles, Heart, Users
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });
  const [activeField, setActiveField] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedMethod, setSelectedMethod] = useState('email');
  const formRef = useRef(null);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'medium'
      });
    }, 3000);
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      title: 'Email Support',
      description: 'Get help within 24 hours',
      value: 'hello@yourstore.com',
      color: 'from-blue-500 to-cyan-500',
      response: '< 24 hours'
    },
    {
      id: 'phone',
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our team directly',
      value: '+1 (555) 123-4567',
      color: 'from-green-500 to-emerald-500',
      response: 'Immediate'
    },
    {
      id: 'chat',
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      value: 'Available 9 AM - 6 PM EST',
      color: 'from-purple-500 to-pink-500',
      response: '< 5 minutes'
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Premium Support',
      description: 'Priority assistance for VIP customers',
      value: 'vip@yourstore.com',
      color: 'from-orange-500 to-red-500',
      response: '< 1 hour'
    }
  ];

  const officeLocations = [
    {
      city: 'New York',
      address: '123 Commerce Street, NY 10001',
      phone: '+1 (555) 123-4567',
      hours: '9 AM - 6 PM EST'
    },
    {
      city: 'San Francisco',
      address: '456 Tech Boulevard, CA 94105',
      phone: '+1 (555) 987-6543',
      hours: '9 AM - 6 PM PST'
    },
    {
      city: 'London',
      address: '789 Business Lane, London EC1A 1BB',
      phone: '+44 20 7123 4567',
      hours: '9 AM - 5 PM GMT'
    }
  ];

  const features = [
    { icon: Shield, text: 'Secure Communication' },
    { icon: Zap, text: 'Fast Response Times' },
    { icon: Globe, text: '24/7 Global Support' },
    { icon: Heart, text: 'Customer Success Team' }
  ];

  const faqData = [
    {
      question: "How fast do you respond?",
      answer: "We typically respond within 2 hours during business hours, 24 hours maximum."
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes! Our phone support is available Monday-Friday, 9 AM - 6 PM EST."
    },
    {
      question: "Can I track my support ticket?",
      answer: "Absolutely! You'll receive a tracking number via email after submitting your request."
    },
    {
      question: "Is there premium support available?",
      answer: "Yes, our VIP customers get priority support with < 1 hour response times."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float-random"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 4 + 6}s`,
              }}
            />
          ))}
        </div>

        {/* Parallax elements */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-bounce-slow">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100">
            Get in Touch
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            We're here to help you succeed. Reach out and let's create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <feature.icon className="w-4 h-4" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Choose Your Preferred Way
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with us. Pick what works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                className={`group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transform transition-all duration-500 cursor-pointer overflow-hidden ${
                  selectedMethod === method.id ? 'scale-105 ring-4 ring-blue-500/20' : 'hover:scale-105'
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${method.color} rounded-2xl w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{method.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm">{method.description}</p>
                  <p className="font-semibold text-gray-800 mb-2">{method.value}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Response time</span>
                    <span className={`text-xs font-bold bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}>
                      {method.response}
                    </span>
                  </div>
                </div>

                {selectedMethod === method.id && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-blue-500 animate-scale-in" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <Send className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-3xl font-bold text-gray-800">Send us a Message</h3>
                </div>

                {!isSubmitted ? (
                  <div className="space-y-6">
                    {/* Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl transition-all duration-300 outline-none ${
                          activeField === 'name' 
                            ? 'border-blue-500 shadow-lg shadow-blue-500/20 scale-105' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Your Name"
                      />
                      {activeField === 'name' && (
                        <div className="absolute -top-2 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs animate-fade-in">
                          Tell us your name
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl transition-all duration-300 outline-none ${
                          activeField === 'email' 
                            ? 'border-purple-500 shadow-lg shadow-purple-500/20 scale-105' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {activeField === 'email' && (
                        <div className="absolute -top-2 left-4 bg-purple-500 text-white px-2 py-1 rounded text-xs animate-fade-in">
                          We'll reply to this email
                        </div>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('subject')}
                        onBlur={() => setActiveField('')}
                        className={`w-full px-4 py-4 bg-white border-2 rounded-2xl transition-all duration-300 outline-none ${
                          activeField === 'subject' 
                            ? 'border-green-500 shadow-lg shadow-green-500/20 scale-105' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="What's this about?"
                      />
                      {activeField === 'subject' && (
                        <div className="absolute -top-2 left-4 bg-green-500 text-white px-2 py-1 rounded text-xs animate-fade-in">
                          Help us understand your inquiry
                        </div>
                      )}
                    </div>

                    {/* Priority Selector */}
                    <div className="flex space-x-4">
                      {['low', 'medium', 'high'].map((priority) => (
                        <button
                          key={priority}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, priority }))}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            formData.priority === priority
                              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
                        </button>
                      ))}
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField('')}
                        rows={5}
                        className={`w-full px-4 py-4 bg-blue-400 border-2 rounded-2xl transition-all duration-300 outline-none resize-none ${
                          activeField === 'message' 
                            ? 'border-pink-500 shadow-lg shadow-pink-500/20 scale-105' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="Tell us more about how we can help you..."
                      />
                      {activeField === 'message' && (
                        <div className="absolute -top-2 left-4 bg-pink-500 text-black px-2 py-1 rounded text-xs animate-fade-in">
                          The more details, the better we can help!
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center space-x-2"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 animate-scale-in">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <div className="flex justify-center">
                      <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Offices</h3>
                <p className="text-gray-600 mb-8">
                  Visit us at any of our global locations or reach out digitally.
                </p>
              </div>

              <div className="space-y-6">
                {officeLocations.map((office, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{office.city}</h4>
                        <p className="text-gray-600 mb-2">{office.address}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Phone className="w-4 h-4" />
                            <span>{office.phone}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Why Choose Our Support?</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{'< 2h'}</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">50K+</div>
                    <div className="text-sm text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Quick Answers</h2>
          <p className="text-lg text-gray-600 mb-12">
            Can't wait for a response? Check out these common questions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-left hover:shadow-xl transition-shadow duration-300">
                <h4 className="font-bold text-gray-800 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float-random {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        
        .animate-float-random {
          animation: float-random 8s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
        
        /* Smooth focus transitions */
        input:focus, textarea:focus {
          transform: scale(1.02);
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

export default ContactPage;