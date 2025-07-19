import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Search, Filter, CheckCircle, Star, ArrowRight, Shield, Zap, Users, TrendingUp, CreditCard, Calculator, FileText, Phone, Mail, MapPin, Menu, X, UserPlus, Settings, User } from 'lucide-react';
import CustomerForm from './components/CustomerForm';
import CibilPage from './components/CibilPage';
import EmiCalculatorPage from './components/EmiCalculatorPage';
import CompanyPage from './components/CompanyPage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import AdvisorRegistration from './components/AdvisorRegistration';
import AdvisorDashboard from './components/AdvisorDashboard';
import AdvisorLogin from './components/AdvisorLogin';

import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppChat from './components/WhatsAppChat';

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
              <NavLink 
                to="/loans"
                className="btn-secondary text-lg inline-flex items-center justify-center"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Get Loans
                <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
            </div>

            {/* Advisor CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <NavLink 
                to="/become-advisor"
                className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Become an Advisor
                <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
              <NavLink 
                to="/advisor-login"
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                <User className="w-5 h-5 mr-2" />
                Advisor Login
                <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
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
              <div className="stat-number mb-2 group-hover:scale-110 transition-transform duration-300">18+</div>
              <div className="text-purple-200 font-medium">Loan Options</div>
            </div>
            <div className="group">
              <div className="stat-number mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-purple-200 font-medium">Approval Rate</div>
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
                <li><NavLink to="/about-us" className="hover:text-white transition-colors duration-300">About Us</NavLink></li>

                <li><NavLink to="/privacy-policy" className="hover:text-white transition-colors duration-300">Privacy Policy</NavLink></li>
                <li><NavLink to="/terms-of-service" className="hover:text-white transition-colors duration-300">Terms of Service</NavLink></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+91 9717414195</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>info@financeangels.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Delhi, India</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 The Finance Angels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const personalLoans = [
  {
    name: 'Poonawalla Fincorp Instant Personal Loan',
    provider: 'Poonawalla Fincorp',
    category: 'Instant',
    rating: 4.6,
    loanAmount: '₹5 Lakh',
    interestRate: 'Starting from 10.49%',
    features: 'Collateral-free, Minimal documentation, No hidden charges',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/NWQ3MWNhZ'
  },
  {
    name: 'Ring Power Loan',
    provider: 'Ring Power',
    category: 'Quick',
    rating: 4.5,
    loanAmount: '₹5 lakhs',
    interestRate: 'Competitive rates',
    features: 'Hassle-free application process, Instant disbursal',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/OGRhOWVkY'
  },
  {
    name: 'MoneyView Personal Loan',
    provider: 'MoneyView',
    category: 'Paperless',
    rating: 4.7,
    loanAmount: '₹10 Lakhs',
    interestRate: 'Affordable rates',
    features: 'Collateral Free Loans, 24 Hour Disbursal, Affordable EMI plans',
    benefits: 'Simple application process, Hassle-Free Documentation',
    applyLink: 'https://wee.bnking.in/c/NzY4YmEyY'
  },
  {
    name: 'KreditBee Instant Personal Loan',
    provider: 'KreditBee',
    category: 'Instant',
    rating: 4.4,
    loanAmount: '₹5 lakhs',
    interestRate: 'Flexible rates',
    features: 'Easy online application process, Flexible repayment options, Direct bank transfer',
    benefits: '100% Fast and Secure, Paperless Documentation',
    applyLink: 'https://wee.bnking.in/c/NjJlODJmM'
  },
  {
    name: 'Unity SFB Personal Loan',
    provider: 'Unity SFB',
    category: 'Secure',
    rating: 4.3,
    loanAmount: '₹5 lakhs',
    interestRate: 'Competitive rates',
    features: 'Hassle-free online process, Secure & RBI regulated',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/ZGMyOTkyY'
  },
  {
    name: 'Indus Easy Credit Personal Loan',
    provider: 'Indus Easy Credit',
    category: 'Quick',
    rating: 4.2,
    loanAmount: '₹5 lakh',
    interestRate: 'Affordable rates',
    features: 'Hassle-free application process, Quick approval',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/MWIzZTI2Y'
  },
  {
    name: 'Olyv Personal Loan',
    provider: 'Olyv',
    category: 'Instant',
    rating: 4.1,
    loanAmount: '₹1 lakh',
    interestRate: 'Competitive rates',
    features: 'Easy application process, Collateral free loan, Quick loan disbursal',
    benefits: '100% Fast and Secure, Minimum documentation',
    applyLink: 'https://wee.bnking.in/c/MTE0YmZmN'
  },
  {
    name: 'PayMe Personal Loan',
    provider: 'PayMe',
    category: 'Quick',
    rating: 4.0,
    loanAmount: '₹3 lakh',
    interestRate: 'Affordable rates',
    features: 'Hassle-free application process, Quick approval',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/ZDE4ZDhlZ'
  },
  {
    name: 'Lendingplate Loan',
    provider: 'Lendingplate',
    category: 'Fast',
    rating: 4.3,
    loanAmount: '₹2 lakhs',
    interestRate: 'Competitive rates',
    features: 'Hassle-free online process, Fast disbursement',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/NWNiYTRhM'
  },
  {
    name: 'Zype Personal Loan',
    provider: 'Zype',
    category: 'Flexible',
    rating: 4.4,
    loanAmount: '₹5 lakhs',
    interestRate: 'Low interest rates',
    features: 'Tenure: 3 months to 12 months, Flexible EMIs',
    benefits: '100% Simple & Secure Process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/ZDQ0Y2M3Z'
  },
  {
    name: 'Aditya Birla Capital Digital Personal Loan',
    provider: 'Aditya Birla Capital',
    category: 'Digital',
    rating: 4.5,
    loanAmount: '₹5 lakhs',
    interestRate: 'Competitive rates',
    features: 'Hassle-free application process, Instant approval',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/NjBjZTRiN'
  },
  {
    name: 'True Balance Personal Loan',
    provider: 'True Balance',
    category: 'Secure',
    rating: 4.2,
    loanAmount: '₹2 lakh',
    interestRate: 'Affordable rates',
    features: '100% online & secure process, Regulated by RBI',
    benefits: 'Hassle-free application process, 100% safe & secure',
    applyLink: 'https://wee.bnking.in/c/YmI5Njc3N'
  },
  {
    name: 'HSBC Personal Loan',
    provider: 'HSBC',
    category: 'Premium',
    rating: 4.6,
    loanAmount: '₹10 lakh',
    interestRate: 'Competitive rates',
    features: 'Hassle-free application process, Quick approval',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/YzVlNGI4M'
  },
  {
    name: 'i2iFunding Personal Loan',
    provider: 'i2iFunding',
    category: 'P2P',
    rating: 4.1,
    loanAmount: '₹50,000',
    interestRate: 'Low interest rates',
    features: 'Quick disbursal, Low interest rates',
    benefits: '100% Simple & Secure Process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/MzFhNjdiM'
  },
  {
    name: 'Prefr Personal Loan',
    provider: 'Prefr',
    category: 'Instant',
    rating: 4.3,
    loanAmount: '₹3,00,000',
    interestRate: 'Affordable Interest Rates',
    features: 'Instant process, Quick Approvals & Disbursals',
    benefits: '100% Fast and Secure, Minimum Documentation',
    applyLink: 'https://wee.bnking.in/c/M2UwY2ZiY'
  },
  {
    name: 'Ram Fincorp Digital Personal Loan',
    provider: 'Ram Fincorp',
    category: 'Digital',
    rating: 4.0,
    loanAmount: '₹1 lakh',
    interestRate: 'Competitive rates',
    features: 'Hassle-free application process, Instant approval',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/NzUzMzU1Y'
  }
];

function LoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Loan Type
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Select the perfect loan option for your needs. We offer both personal and business financing solutions.
          </p>
        </div>
      </div>

      {/* Loan Types Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Loans */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Personal Loans</h2>
              <p className="text-gray-600 mb-6">
                Get instant personal loans up to ₹10 lakhs with minimal documentation. 
                Perfect for emergency expenses, home renovation, or any personal needs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Up to ₹10 lakhs loan amount</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Quick approval within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">16+ trusted lenders</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">100% online process</span>
                </div>
              </div>
              <NavLink 
                to="/personal-loans"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Personal Loans
                <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
            </div>
          </div>

          {/* Business Loans */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Loans</h2>
              <p className="text-gray-600 mb-6">
                Fuel your business growth with flexible financing solutions. 
                Get quick approval and competitive rates for your business needs.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Up to ₹35 lakhs loan amount</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">72-hour disbursal</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Minimal documentation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">100% secure process</span>
                </div>
              </div>
              <NavLink 
                to="/business-loans"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore Business Loans
                <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Choose Our Loan Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quick Approval</h4>
              <p className="text-gray-600">Get approved within 24 hours with minimal documentation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure Process</h4>
              <p className="text-gray-600">Bank-level security with encrypted data transmission</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-gray-600">24/7 customer support to guide you through the process</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavLink to="/" className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </NavLink>
      </div>
    </div>
  );
}

function PersonalLoansPage({ onApply }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['All', 'Instant', 'Quick', 'Paperless', 'Secure', 'Digital', 'Premium', 'P2P', 'Flexible', 'Fast'];

  const filteredLoans = personalLoans.filter(loan => {
    const matchesSearch = loan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loan.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || loan.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedLoans = [...filteredLoans].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'amount':
        return parseInt(b.loanAmount.replace(/[^\d]/g, '')) - parseInt(a.loanAmount.replace(/[^\d]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Personal Loans
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fast, secure, and hassle-free personal loans tailored to your needs. 
            Get instant approval with minimal documentation.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search loans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="amount">Sort by Amount</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedLoans.length} of {personalLoans.length} personal loans
          </p>
        </div>

        {/* Loans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedLoans.map((loan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{loan.name}</h3>
                    <p className="text-sm text-gray-600">{loan.provider}</p>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {loan.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(loan.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{loan.rating}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span className="font-semibold text-gray-900">{loan.loanAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-semibold text-gray-900">{loan.interestRate}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <p className="text-sm text-gray-600">{loan.features}</p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Why Apply Here:</h4>
                  <p className="text-sm text-gray-600">{loan.benefits}</p>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => onApply(loan, 'personal_loan')}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedLoans.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No loans found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavLink to="/" className="inline-flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </NavLink>
      </div>
    </div>
  );
}

const businessLoans = [
  {
    name: 'Flexiloans Business Loan',
    provider: 'Flexiloans',
    category: 'Business',
    rating: 4.5,
    loanAmount: '₹20 lakhs',
    interestRate: 'Competitive rates',
    features: 'Hassle-free application process, Instant approval',
    benefits: '100% online & secure process, Hassle-free application process',
    applyLink: 'https://wee.bnking.in/c/YmI0NDhhZ'
  },
  {
    name: 'Lendingkart Business Loan',
    provider: 'Lendingkart',
    category: 'Business',
    rating: 4.6,
    loanAmount: '₹35 lakhs',
    interestRate: 'Competitive rates',
    features: 'Minimal documentation, 72-hour disbursal',
    benefits: '100% Simple & Secure Process, Easy online application process',
    applyLink: 'https://wee.bnking.in/c/MDEzZDliZ'
  }
];

function BusinessLoansPage({ onApply }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const categories = ['All', 'Business'];

  const filteredLoans = businessLoans.filter(loan => {
    const matchesSearch = loan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         loan.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || loan.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedLoans = [...filteredLoans].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'amount':
        return parseInt(b.loanAmount.replace(/[^\d]/g, '')) - parseInt(a.loanAmount.replace(/[^\d]/g, ''));
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Business Loans
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fuel your business growth with flexible financing solutions. 
            Get quick approval and competitive rates for your business needs.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search business loans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="rating">Sort by Rating</option>
                <option value="amount">Sort by Amount</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedLoans.length} of {businessLoans.length} business loans
          </p>
        </div>

        {/* Loans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedLoans.map((loan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{loan.name}</h3>
                    <p className="text-sm text-gray-600">{loan.provider}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {loan.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(loan.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{loan.rating}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Loan Amount:</span>
                    <span className="font-semibold text-gray-900">{loan.loanAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate:</span>
                    <span className="font-semibold text-gray-900">{loan.interestRate}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <p className="text-sm text-gray-600">{loan.features}</p>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Why Apply Here:</h4>
                  <p className="text-sm text-gray-600">{loan.benefits}</p>
                </div>

                {/* Apply Button */}
                <button
                  onClick={() => onApply(loan, 'business_loan')}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedLoans.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No business loans found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <NavLink to="/" className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </NavLink>
      </div>
    </div>
  );
}

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
  // HDFC Bank Cards
  {
    name: 'HDFC Swiggy Credit Card',
    bank: 'HDFC Bank',
    category: 'Lifestyle',
    rating: 4.6,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: '10% cashback on Swiggy, 5% on other online spends',
    benefits: 'Complimentary Swiggy One Membership, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MmE0YTVmY'
  },
  {
    name: 'HDFC Pixel Play Card',
    bank: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.4,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/YjdhOWJiM'
  },
  {
    name: 'HDFC Bank RuPay Credit Card',
    bank: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.3,
    annualFee: '₹1,200',
    interestRate: '3.49%',
    rewards: 'Extraordinary rewards, Amazing travel benefits',
    benefits: 'Fuel surcharge waiver, Free Insurance, 100% online process',
    applyLink: 'https://wee.bnking.in/c/ZTQ2NjVkZ'
  },
  {
    name: 'Tata Neu HDFC Bank Credit Card',
    bank: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.5,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Up to 10% cashback as TataNeu coins',
    benefits: 'Complimentary lounge access, Fuel surcharge waiver',
    applyLink: 'https://wee.bnking.in/c/NjMzNzA2M'
  },
  {
    name: 'HDFC Freedom Credit Card',
    bank: 'HDFC Bank',
    category: 'Lifestyle',
    rating: 4.2,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/N2U4ZGQ4M'
  },
  {
    name: 'HDFC Money Back Credit Card',
    bank: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.1,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MTA1OGZmM'
  },
  {
    name: 'HDFC Business Money Back Credit Card',
    bank: 'HDFC Bank',
    category: 'Business',
    rating: 4.0,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/OGU0YzE2Z'
  },
  {
    name: 'HDFC Indian Oil Credit Card',
    bank: 'HDFC Bank',
    category: 'Fuel',
    rating: 4.3,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/Y2QyMWNmM'
  },
  {
    name: 'HDFC Millennia Credit Card',
    bank: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.4,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MWQyMWQ4Z'
  },
  {
    name: 'HDFC Shopper Stop Credit Card',
    bank: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.2,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/NThkMDg0O'
  },
  {
    name: 'HDFC Regalia First Credit Card',
    bank: 'HDFC Bank',
    category: 'Premium',
    rating: 4.6,
    annualFee: '₹2,500',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MDM1MzQ5M'
  },
  {
    name: 'HDFC CSC Small Business Money Back Credit Card',
    bank: 'HDFC Bank',
    category: 'Business',
    rating: 4.0,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Interest-free credit, Amazing travel benefits',
    benefits: 'Free Insurance, Boosts credit score, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MjE4YTI5M'
  },
  // HSBC Bank Cards
  {
    name: 'HSBC Visa Platinum Credit Card',
    bank: 'HSBC Bank',
    category: 'Premium',
    rating: 4.4,
    annualFee: '₹0',
    interestRate: '3.49%',
    rewards: 'Amazon gift voucher worth ₹500, Fuel surcharge waiver',
    benefits: 'No joining and annual fees, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MzkzM2RjY'
  },
  {
    name: 'HSBC TravelOne Credit Card',
    bank: 'HSBC Bank',
    category: 'Travel',
    rating: 4.7,
    annualFee: '₹2,500',
    interestRate: '3.49%',
    rewards: '6 complimentary domestic & 4 international lounge access per year',
    benefits: '₹1,000 cashback, PostCard Voucher & EazyDiner Membership',
    applyLink: 'https://wee.bnking.in/c/M2IwNzYyZ'
  },
  {
    name: 'HSBC Live+ Credit Card',
    bank: 'HSBC Bank',
    category: 'Lifestyle',
    rating: 4.3,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Amazing gift vouchers, Reward points/cashback',
    benefits: 'Fuel surcharge waiver, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MDNlNDQyZ'
  },
  // RBL Bank Cards
  {
    name: 'RBL Shoprite Credit Card',
    bank: 'RBL Bank',
    category: 'Shopping',
    rating: 4.5,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Up to 20,000 bonus reward points and exciting welcome benefits',
    benefits: 'Travel perks, Exclusive movie offers and fuel surcharge waivers',
    applyLink: 'https://wee.bnking.in/c/MzJjYTQ4Z'
  },
  {
    name: 'IndianOil RBL Bank Credit Card',
    bank: 'RBL Bank',
    category: 'Fuel',
    rating: 4.3,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Earn up to 10 reward points per ₹100 spent',
    benefits: '1,000 fuel points worth ₹500 as welcome benefit, 6% valueback at IndianOil',
    applyLink: 'https://wee.bnking.in/c/OGEzODg2Y'
  },
  {
    name: 'IndianOil RBL Bank XTRA Credit Card',
    bank: 'RBL Bank',
    category: 'Fuel',
    rating: 4.4,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Earn up to 15 reward points per ₹100 spent',
    benefits: '3,000 fuel points worth ₹1500 as welcome benefit, 8.5% valueback at IndianOil',
    applyLink: 'https://wee.bnking.in/c/ZGFmNTA1Y'
  },
  // YES Bank Cards
  {
    name: 'YES Bank POP-CLUB Credit Card',
    bank: 'YES Bank',
    category: 'Lifestyle',
    rating: 4.6,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Upto 500 POPcoins as welcome benefit, Earn up to 10 POPcoins for every transaction',
    benefits: 'Free cancellation & rescheduling on Cleartrip, Zomato Gold mini membership',
    applyLink: 'https://wee.bnking.in/c/ODNhY2MzO'
  },
  {
    name: 'YES Bank Rio RuPay Credit Card',
    bank: 'YES Bank',
    category: 'Shopping',
    rating: 4.4,
    annualFee: '₹0',
    interestRate: '3.49%',
    rewards: 'Guaranteed 0.75% cashback on UPI spends & 0.25% cashback on non-UPI spends',
    benefits: 'Lifetime free credit card, 1% fuel surcharge waiver across India',
    applyLink: 'https://wee.bnking.in/c/OTZmMzYxM'
  },
  // Axis Bank Cards
  {
    name: 'Axis Indian Oil Credit Card',
    bank: 'Axis Bank',
    category: 'Fuel',
    rating: 4.3,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Welcoming offers, Amazon vouchers, Huge rewards',
    benefits: 'Fast processing, Minimal documentation',
    applyLink: 'https://wee.bnking.in/c/YTljZmYxZ'
  },
  {
    name: 'Axis Flipkart Credit Card',
    bank: 'Axis Bank',
    category: 'Shopping',
    rating: 4.4,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Welcoming offers, Amazon vouchers, Huge rewards',
    benefits: 'Fast processing, Minimal documentation',
    applyLink: 'https://wee.bnking.in/c/YzgzNDRjM'
  },
  // AU Bank Cards
  {
    name: 'AU LIT Credit Card',
    bank: 'AU Bank',
    category: 'Lifestyle',
    rating: 4.3,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/NWQ3NjM5Z'
  },
  {
    name: 'AU Altura Credit Card',
    bank: 'AU Bank',
    category: 'Premium',
    rating: 4.4,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/NzNjNWU2Y'
  },
  {
    name: 'AU Xcite Credit Card',
    bank: 'AU Bank',
    category: 'Shopping',
    rating: 4.2,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MmJjMDQwY'
  },
  {
    name: 'AU Xcite Ace Credit Card',
    bank: 'AU Bank',
    category: 'Shopping',
    rating: 4.3,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/Yjk0MmE4Y'
  },
  {
    name: 'AU Xcite Ultra Credit Card',
    bank: 'AU Bank',
    category: 'Premium',
    rating: 4.5,
    annualFee: '₹2,000',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/YTVhMDVkN'
  },
  {
    name: 'AU Vetta Credit Card',
    bank: 'AU Bank',
    category: 'Premium',
    rating: 4.4,
    annualFee: '₹1,500',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/YzJmNDNjY'
  },
  {
    name: 'AU Altura Plus Credit Card',
    bank: 'AU Bank',
    category: 'Premium',
    rating: 4.6,
    annualFee: '₹2,500',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/ZWIwYjc5N'
  },
  {
    name: 'AU Zenith Credit Card',
    bank: 'AU Bank',
    category: 'Premium',
    rating: 4.7,
    annualFee: '₹3,000',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/ZmI3ZTc2Y'
  },
  {
    name: 'AU Zenith Plus Credit Card',
    bank: 'AU Bank',
    category: 'Premium',
    rating: 4.8,
    annualFee: '₹3,500',
    interestRate: '3.49%',
    rewards: 'Exciting cashback, Free device insurance',
    benefits: 'Welcome & milestones benefits, Fast processing, 100% online process',
    applyLink: 'https://wee.bnking.in/c/MWY4ZmNhZ'
  },
  // Kiwi Credit Card
  {
    name: 'Kiwi Credit Card',
    bank: 'Kiwi',
    category: 'Shopping',
    rating: 4.5,
    annualFee: '₹0',
    interestRate: '3.49%',
    rewards: 'Lifetime Free Credit Card, 1% Cashback on Scan & Pay',
    benefits: 'UPI-enabled Credit Card, Pay at any QR code, Simple and convenient',
    applyLink: 'https://wee.bnking.in/c/MTAwZWY3M'
  },
  // Scapia Credit Card
  {
    name: 'Scapia Federal Bank Credit Card',
    bank: 'Federal Bank',
    category: 'Travel',
    rating: 4.6,
    annualFee: '₹0',
    interestRate: '3.49%',
    rewards: 'No joining & annual fees, 10% rewards on every spend',
    benefits: 'Unlimited lounge access across India, No forex markup fee',
    applyLink: 'https://wee.bnking.in/c/NDI1ZTE5M'
  },
  // Bank of Baroda Card
  {
    name: 'BOBCARD',
    bank: 'Bank of Baroda',
    category: 'Shopping',
    rating: 4.2,
    annualFee: '₹1,000',
    interestRate: '3.49%',
    rewards: 'Attractive reward points, Amazing deals & discounts',
    benefits: 'Exclusive benefits for subscriptions, travel & food, Fast processing',
    applyLink: 'https://wee.bnking.in/c/OTQwYzBjO'
  },
  // Legacy Cards (keeping existing ones)
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
          <div className="filter-section flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filters:</span>
            </div>
            <select 
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="form-select w-full sm:w-auto"
            >
              <option>All Banks</option>
              <option>IndusInd Bank</option>
              <option>HDFC Bank</option>
              <option>HSBC Bank</option>
              <option>RBL Bank</option>
              <option>YES Bank</option>
              <option>Axis Bank</option>
              <option>AU Bank</option>
              <option>Kiwi</option>
              <option>Federal Bank</option>
              <option>Bank of Baroda</option>
              <option>ICICI Bank</option>
              <option>SBI</option>
            </select>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-select w-full sm:w-auto"
            >
              <option>All Types</option>
              <option>Premium</option>
              <option>Shopping</option>
              <option>Lifestyle</option>
              <option>Travel</option>
              <option>Business</option>
              <option>Fuel</option>
            </select>
            <div className="flex-1 w-full sm:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search cards..."
                  className="form-input w-full pl-10 pr-4"
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
        <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdvisor, setIsAdvisor] = useState(false);
  const [advisorId, setAdvisorId] = useState(null);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [loanType, setLoanType] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation wrapper component
  const NavigationWrapper = ({ children }) => {
    const navigate = useNavigate();
    
    const handleAdminLogin = () => {
      setIsAdmin(true);
      navigate('/admin/dashboard');
    };

    const handleAdvisorLogin = (id, advisor) => {
      setIsAdvisor(true);
      setAdvisorId(id);
      navigate('/advisor-dashboard');
    };

    const handleAdminLogout = () => {
      setIsAdmin(false);
      navigate('/');
    };

    const handleAdvisorLogout = () => {
      setIsAdvisor(false);
      setAdvisorId(null);
      navigate('/');
    };

    return children({ 
      handleAdminLogin, 
      handleAdvisorLogin, 
      handleAdminLogout, 
      handleAdvisorLogout 
    });
  };

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
              <NavLink to="/emi-calculator" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>EMI Calculator</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
              {isAdmin && (
                <NavLink to="/admin" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                  <Settings className="w-4 h-4 inline mr-1" />
                  Admin
                </NavLink>
              )}
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
                  to="/emi-calculator" 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive 
                        ? 'bg-purple-100 text-purple-700' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                  onClick={closeMobileMenu}
                >
                  EMI Calculator
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
  const handleApplyNow = (item, type = null) => {
    setSelectedCard(item);
    setLoanType(type);
    setShowCustomerForm(true);
  };
  const handleFormClose = () => {
    setShowCustomerForm(false);
    setSelectedCard(null);
    setLoanType(null);
  };

  const handleAdvisorSuccess = () => {
    // Redirect to home after successful advisor registration
    window.location.href = '/';
  };

  return (
    <Router>
      <ScrollToTop />
      
      <NavigationWrapper>
        {({ handleAdminLogin, handleAdvisorLogin, handleAdminLogout, handleAdvisorLogout }) => (
          <>
            {/* Public Layout - Only show navbar and WhatsApp for public pages */}
            <Routes>
              {/* Public Routes with Navbar and WhatsApp */}
              <Route path="/" element={
                <>
                  <NavBar />
                  <HomePage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/credit-cards" element={
                <>
                  <NavBar />
                  <CreditCardsPage onApply={handleApplyNow} />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/loans" element={
                <>
                  <NavBar />
                  <LoansPage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/personal-loans" element={
                <>
                  <NavBar />
                  <PersonalLoansPage onApply={handleApplyNow} />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/business-loans" element={
                <>
                  <NavBar />
                  <BusinessLoansPage onApply={handleApplyNow} />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/cibil-check" element={
                <>
                  <NavBar />
                  <CibilPage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/emi-calculator" element={
                <>
                  <NavBar />
                  <EmiCalculatorPage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/company" element={
                <>
                  <NavBar />
                  <CompanyPage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/about-us" element={
                <>
                  <NavBar />
                  <AboutUsPage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/contact" element={
                <>
                  <NavBar />
                  <ContactUsPage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/privacy-policy" element={
                <>
                  <NavBar />
                  <PrivacyPolicyPage />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/terms-of-service" element={
                <>
                  <NavBar />
                  <TermsOfServicePage />
                  <WhatsAppChat />
                </>
              } />
              
              {/* Admin Routes - No Navbar, No WhatsApp */}
              <Route path="/admin" element={
                isAdmin ? (
                  <AdminDashboard onLogout={handleAdminLogout} />
                ) : (
                  <AdminLogin onLogin={handleAdminLogin} onBack={() => window.history.back()} />
                )
              } />
              <Route path="/admin/login" element={
                isAdmin ? (
                  <AdminDashboard onLogout={handleAdminLogout} />
                ) : (
                  <AdminLogin onLogin={handleAdminLogin} onBack={() => window.history.back()} />
                )
              } />
              <Route path="/admin/dashboard" element={
                isAdmin ? (
                  <AdminDashboard onLogout={handleAdminLogout} />
                ) : (
                  <AdminLogin onLogin={handleAdminLogin} onBack={() => window.history.back()} />
                )
              } />
              
              {/* Advisor Routes - No Navbar, No WhatsApp */}
              <Route path="/become-advisor" element={
                <>
                  <NavBar />
                  <AdvisorRegistration onBack={() => window.history.back()} onSuccess={handleAdvisorSuccess} />
                  <WhatsAppChat />
                </>
              } />
              <Route path="/advisor-login" element={
                isAdvisor ? (
                  <AdvisorDashboard advisorId={advisorId} onLogout={handleAdvisorLogout} />
                ) : (
                  <>
                    <NavBar />
                    <AdvisorLogin onLogin={handleAdvisorLogin} onBack={() => window.history.back()} />
                    <WhatsAppChat />
                  </>
                )
              } />
              <Route path="/advisor-dashboard" element={
                isAdvisor ? (
                  <AdvisorDashboard advisorId={advisorId} onLogout={handleAdvisorLogout} />
                ) : (
                  <>
                    <NavBar />
                    <AdvisorLogin onLogin={handleAdvisorLogin} onBack={() => window.history.back()} />
                    <WhatsAppChat />
                  </>
                )
              } />
            </Routes>
            
            {showCustomerForm && selectedCard && (
              <CustomerForm 
                cardName={selectedCard.name}
                cardBank={selectedCard.bank || selectedCard.provider}
                applyLink={selectedCard.applyLink}
                onClose={handleFormClose}
                loanType={loanType}
                selectedCard={selectedCard}
              />
            )}
          </>
        )}
      </NavigationWrapper>
    </Router>
  );
}

export default App;
