import React from 'react';
import { Users, Target, Award, TrendingUp, Shield, Heart } from 'lucide-react';

const CompanyPage = () => {
  const stats = [
    { number: '50,000+', label: 'Happy Customers', icon: <Users className="w-6 h-6" /> },
    { number: '₹500Cr+', label: 'Loans Disbursed', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '25+', label: 'Partner Banks', icon: <Shield className="w-6 h-6" /> },
    { number: '98%', label: 'Customer Satisfaction', icon: <Heart className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and provide personalized financial solutions.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Transparency',
      description: 'We maintain complete transparency in all our dealings and build lasting trust.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We continuously innovate to provide better financial solutions to our customers.'
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Best Financial Platform',
      description: 'Awarded by Financial Technology Association'
    },
    {
      year: '2022',
      title: 'Customer Choice Award',
      description: 'Recognized for outstanding customer service'
    },
    {
      year: '2021',
      title: 'Innovation Excellence',
      description: 'For digital transformation in financial services'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Company
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering millions of Indians with easy access to financial products and services
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-purple-600 mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              To democratize access to financial services by providing easy, transparent, and 
              affordable credit solutions to every Indian. We believe that financial inclusion 
              is the key to economic growth and prosperity.
            </p>
            <p className="text-gray-600">
              Through our innovative platform, we connect customers with the best financial 
              products from leading banks and financial institutions, making the process 
              simple, secure, and efficient.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-4">
              To become India's most trusted financial services platform, empowering millions 
              of individuals and businesses with the financial tools they need to achieve 
              their dreams and aspirations.
            </p>
            <p className="text-gray-600">
              We envision a future where every Indian has easy access to credit, insurance, 
              and investment products, leading to a more financially secure and prosperous nation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Achievements</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">{achievement.year}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Rahul Sharma</h3>
              <p className="text-purple-600 mb-2">CEO & Founder</p>
              <p className="text-sm text-gray-600">
                Former VP at HDFC Bank with 15+ years of experience in financial services
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Priya Patel</h3>
              <p className="text-purple-600 mb-2">CTO</p>
              <p className="text-sm text-gray-600">
                Technology leader with expertise in fintech and digital transformation
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Amit Kumar</h3>
              <p className="text-purple-600 mb-2">Head of Operations</p>
              <p className="text-sm text-gray-600">
                Operations expert with deep understanding of customer service excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage; 