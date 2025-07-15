import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Search, Filter, CheckCircle, Star, ArrowRight, Shield, Zap, Users, TrendingUp, CreditCard, Calculator, FileText, Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import CustomerForm from './components/CustomerForm';
import ScrollToTop from './components/ScrollToTop';

// Creative Fintech HomePage with modern design
function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Animated Background */}
      <div className="animated-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Smart Financial</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              Experience the future of finance with AI-powered recommendations, instant approvals, 
              and personalized credit solutions that grow with you.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <NavLink 
                to="/credit-cards"
                className="btn-primary inline-flex items-center justify-center text-lg"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Explore Cards
                <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
              <button className="btn-secondary text-lg inline-flex items-center justify-center">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate EMI
              </button>
            </div>

            {/* Floating Elements */}
            <div className="flex justify-center space-x-8 mt-16">
              <div className="float">
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">₹50K+</div>
                  <div className="text-sm">Avg. Credit Limit</div>
                </div>
              </div>
              <div className="float" style={{animationDelay: '2s'}}>
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">5 min</div>
                  <div className="text-sm">Quick Approval</div>
                </div>
              </div>
              <div className="float" style={{animationDelay: '4s'}}>
                <div className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">0%</div>
                  <div className="text-sm">Joining Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with Modern Cards */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Choose</span> Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with human expertise to deliver financial solutions 
              that are not just smart, but also secure and personalized.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI-Powered Matching</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Our intelligent algorithm matches you with the perfect credit card based on your spending patterns and lifestyle.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Instant Approvals</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get pre-approved offers in seconds with our advanced credit assessment technology.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Bank-Level Security</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Your data is protected with enterprise-grade encryption and multi-factor authentication.
              </p>
            </div>
            
            <div className="feature-card group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">24/7 Expert Support</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Get personalized assistance from financial experts anytime, anywhere through our smart chat system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section with Gradient Numbers */}
      <div className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Millions</h2>
            <p className="text-xl text-purple-200">Join the growing community of satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="stat-number mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-purple-200 font-medium">Happy Customers</div>
            </div>
            <div className="group">
              <div className="stat-number mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-purple-200 font-medium">Premium Cards</div>
            </div>
            <div className="group">
              <div className="stat-number mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-purple-200 font-medium">Approval Rate</div>
            </div>
            <div className="group">
              <div className="stat-number mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-purple-200 font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real stories from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">R</div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Rahul Sharma</div>
                  <div className="text-sm text-gray-500">Software Engineer</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Got my first credit card in just 5 minutes! The AI recommendation was spot on. 
                Best financial decision I've made this year."
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">P</div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Priya Patel</div>
                  <div className="text-sm text-gray-500">Business Owner</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "The customer support is incredible. They helped me understand my credit score 
                and recommended the perfect card for my business needs."
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">A</div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Amit Kumar</div>
                  <div className="text-sm text-gray-500">Marketing Manager</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Zero joining fees and instant approval! The rewards program is amazing. 
                I've already earned ₹5,000 in cashback this quarter."
              </p>
              <div className="flex text-yellow-400 mt-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Pulse Effect */}
      <div className="py-24 gradient-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Transform Your <span className="text-yellow-300">Financial Life</span>?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of smart individuals who have already discovered the power of 
            personalized financial solutions. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <NavLink 
              to="/credit-cards"
              className="btn-primary text-lg inline-flex items-center justify-center pulse-glow"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </NavLink>
            <NavLink 
              to="/contact"
              className="btn-secondary text-lg inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to Expert
            </NavLink>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FA</span>
                </div>
                <span className="text-2xl font-bold">The Finance Angels</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner for all financial needs. We combine technology with expertise 
                to deliver smart, secure, and personalized financial solutions.
              </p>
              <div className="flex space-x-4">
                <div className="trust-badge">
                  <Shield className="w-4 h-4" />
                  <span>RBI Registered</span>
                </div>
                <div className="security-badge">
                  <CheckCircle className="w-4 h-4" />
                  <span>SSL Secured</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><NavLink to="/credit-cards" className="hover:text-white transition-colors duration-300 flex items-center"><CreditCard className="w-4 h-4 mr-2" />Credit Cards</NavLink></li>
                <li><NavLink to="/loans" className="hover:text-white transition-colors duration-300 flex items-center"><TrendingUp className="w-4 h-4 mr-2" />Personal Loans</NavLink></li>
                <li><NavLink to="/cibil-check" className="hover:text-white transition-colors duration-300 flex items-center"><FileText className="w-4 h-4 mr-2" />CIBIL Score</NavLink></li>
                <li><NavLink to="/emi-calculator" className="hover:text-white transition-colors duration-300 flex items-center"><Calculator className="w-4 h-4 mr-2" />EMI Calculator</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>info@financeangels.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Mumbai, India</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Finance Angels. All rights reserved. | Made with ❤️ for India</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LoansPage() { return <div className="p-8 text-center text-2xl">Loans Page (Coming Soon)</div>; }
function CibilPage() { return <div className="p-8 text-center text-2xl">CIBIL Score Page (Coming Soon)</div>; }
function ContactPage() { return <div className="p-8 text-center text-2xl">Contact Page (Coming Soon)</div>; }

const creditCards = [
  {
    name: 'IndusInd Platinum CC',
    bank: 'IndusInd Bank',
    category: 'Premium',
    rating: 4.6,
    annualFee: '₹2,500',
    interestRate: '3.49%',
    rewards: 'Welcome benefits, 1+1 movie tickets, Reward points/cashback',
    benefits: 'Travel benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/YzZlYjlkY'
  },
  {
    name: 'IndusInd Legend CC',
    bank: 'IndusInd Bank',
    category: 'Premium',
    rating: 4.5,
    annualFee: '₹2,000',
    interestRate: '3.49%',
    rewards: 'Welcome benefits, 1+1 movie tickets, Reward points/cashback',
    benefits: 'Travel benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MjE1Y2U3N'
  },
  {
    name: 'IndusInd Platinum Aura Edge',
    bank: 'IndusInd Bank',
    category: 'Premium',
    rating: 4.7,
    annualFee: '₹3,000',
    interestRate: '3.49%',
    rewards: 'Welcome benefits, 1+1 movie tickets, Reward points/cashback',
    benefits: 'Travel benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MDAyZGZlN'
  },
  {
    name: 'IndusInd Easy Dinner CC',
    bank: 'IndusInd Bank',
    category: 'Lifestyle',
    rating: 4.4,
    annualFee: '₹1,500',
    interestRate: '3.99%',
    rewards: 'Welcome benefits, 1+1 movie tickets, Reward points/cashback',
    benefits: 'Travel benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/ZDhjYThjY'
  },
  {
    name: 'IndusInd Nexxt CC',
    bank: 'IndusInd Bank',
    category: 'Shopping',
    rating: 4.3,
    annualFee: '₹1,000',
    interestRate: '3.99%',
    rewards: 'Welcome benefits, 1+1 movie tickets, Reward points/cashback',
    benefits: 'Travel benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/Zjc2MzJmZ'
  },
  {
    name: 'Easy Dinner IndusInd CC',
    bank: 'IndusInd Bank',
    category: 'Lifestyle',
    rating: 4.2,
    annualFee: '₹1,200',
    interestRate: '3.99%',
    rewards: 'Welcome benefits, 1+1 movie tickets, Reward points/cashback',
    benefits: 'Travel benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MTFlYjQzM'
  },
  {
    name: 'HDFC Regalia',
    bank: 'HDFC Bank',
    category: 'Premium',
    rating: 4.5,
    annualFee: '₹2,500',
    interestRate: '3.49%',
    rewards: '5X rewards on dining, 3X on travel',
    benefits: 'Airport lounge access, travel insurance',
    applyLink: '#'
  },
  {
    name: 'ICICI Amazon Pay',
    bank: 'ICICI Bank',
    category: 'Shopping',
    rating: 4.3,
    annualFee: '₹500',
    interestRate: '3.99%',
    rewards: '5% cashback on Amazon, 2% on other spends',
    benefits: 'No joining fee, Amazon Prime membership',
    applyLink: '#'
  },
  {
    name: 'SBI SimplyCLICK',
    bank: 'SBI',
    category: 'Shopping',
    rating: 4.1,
    annualFee: '₹999',
    interestRate: '3.99%',
    rewards: '10X rewards on online shopping',
    benefits: 'Fuel surcharge waiver, movie ticket discounts',
    applyLink: '#'
  }
];

function CreditCardsPage({ onApply }) {
  const [selectedBank, setSelectedBank] = useState('All Banks');
  const [selectedCategory, setSelectedCategory] = useState('All Types');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter cards based on selected filters
  const filteredCards = creditCards.filter(card => {
    const matchesBank = selectedBank === 'All Banks' || card.bank === selectedBank;
    const matchesCategory = selectedCategory === 'All Types' || card.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.bank.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesBank && matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Credit Cards
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find the perfect credit card that matches your lifestyle and spending patterns
          </p>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filters:</span>
            </div>
            <select 
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>All Banks</option>
              <option>IndusInd Bank</option>
              <option>HDFC Bank</option>
              <option>ICICI Bank</option>
              <option>SBI</option>
            </select>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>All Types</option>
              <option>Premium</option>
              <option>Shopping</option>
              <option>Lifestyle</option>
              <option>Travel</option>
            </select>
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search cards..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credit Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredCards.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg mb-4">No credit cards found matching your filters</div>
            <button 
              onClick={() => {
                setSelectedBank('All Banks');
                setSelectedCategory('All Types');
                setSearchTerm('');
              }}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{card.name}</h3>
                  <p className="text-gray-600">{card.bank}</p>
                </div>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded-full">
                  {card.category}
                </span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(card.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{card.rating}</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Fee:</span>
                  <span className="font-medium">{card.annualFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate:</span>
                  <span className="font-medium">{card.interestRate}</span>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <div>
                  <span className="text-sm font-medium text-gray-700">Rewards:</span>
                  <p className="text-sm text-gray-600">{card.rewards}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-700">Benefits:</span>
                  <p className="text-sm text-gray-600">{card.benefits}</p>
                </div>
              </div>

              <button 
                onClick={() => onApply(card)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* Back to Home Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavLink to="/" className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </NavLink>
      </div>
    </div>
  );
}

function App() {
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Logo component
  const Logo = () => (
    <NavLink to="/" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">FA</span>
      </div>
      <span className="text-2xl font-bold">The Finance Angels</span>
    </NavLink>
  );

  // Navigation bar
  const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
      setIsMobileMenuOpen(false);
    };

    return (
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
              <NavLink to="/credit-cards" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Credit Cards</NavLink>
              <NavLink to="/loans" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Loans</NavLink>
              <NavLink to="/cibil-check" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CIBIL Score</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 mt-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/credit-cards" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Credit Cards
                </NavLink>
                <NavLink 
                  to="/loans" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Loans
                </NavLink>
                <NavLink 
                  to="/cibil-check" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  CIBIL Score
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  // Handle Apply Now button click
  const handleApplyNow = (card) => {
    setSelectedCard(card);
    setShowCustomerForm(true);
  };
  const handleFormClose = () => {
    setShowCustomerForm(false);
    setSelectedCard(null);
  };

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/credit-cards" element={<CreditCardsPage onApply={handleApplyNow} />} />
        <Route path="/loans" element={<LoansPage />} />
        <Route path="/cibil-check" element={<CibilPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      {showCustomerForm && selectedCard && (
        <CustomerForm 
          cardName={selectedCard.name}
          cardBank={selectedCard.bank}
          applyLink={selectedCard.applyLink}
          onClose={handleFormClose}
        />
      )}
    </Router>
  );
}

export default App;
