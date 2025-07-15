import React from 'react';
import { Target, Users, Shield, Heart, TrendingUp, Award, CheckCircle } from 'lucide-react';

const AboutUsPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Vision',
      description: 'To become the most trusted financial services platform in India, empowering individuals and businesses with accessible, transparent, and innovative financial solutions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Mission',
      description: 'To simplify financial services by providing easy access to credit cards, loans, and financial tools while maintaining the highest standards of customer service and transparency.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Core Values',
      description: 'Trust, Transparency, Innovation, and Customer-Centric approach form the foundation of everything we do.'
    }
  ];

  const services = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Credit Cards',
      description: 'Wide range of credit cards from top banks with best offers and rewards'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Personal Loans',
      description: 'Quick and easy personal loans with competitive interest rates'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'CIBIL Score Check',
      description: 'Free CIBIL score checking and credit report analysis'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'EMI Calculator',
      description: 'Advanced EMI calculator to help you plan your finances better'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in financial services
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Vision, Mission & Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-purple-600 mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive financial services to help you achieve your financial goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Finance Angels?</h2>
            <p className="text-lg text-gray-600">
              We are committed to providing the best financial services experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Wide range of credit cards from top banks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Quick and easy loan application process</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Free CIBIL score checking and analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Advanced financial calculators and tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete transparency in all dealings</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Secure and confidential data handling</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No hidden charges or fees</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Best rates and offers from partner banks</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dedicated relationship managers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage; 