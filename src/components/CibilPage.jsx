import React, { useState } from 'react';
import { CheckCircle, AlertCircle, TrendingUp, Shield, Clock, Calculator } from 'lucide-react';

const CibilPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Better Loan Approval",
      description: "Higher CIBIL scores increase your chances of loan approval"
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Lower Interest Rates",
      description: "Good credit scores help you get better interest rates"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Higher Credit Limits",
      description: "Banks offer higher credit limits to customers with good scores"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Faster Processing",
      description: "Applications with good CIBIL scores are processed faster"
    }
  ];

  const scoreRanges = [
    { range: "750-900", status: "Excellent", color: "text-green-600", bgColor: "bg-green-50" },
    { range: "650-749", status: "Good", color: "text-blue-600", bgColor: "bg-blue-50" },
    { range: "550-649", status: "Fair", color: "text-yellow-600", bgColor: "bg-yellow-50" },
    { range: "300-549", status: "Poor", color: "text-red-600", bgColor: "bg-red-50" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            CIBIL Score Check
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Check your CIBIL score instantly and understand what it means for your financial future
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'check', label: 'Check Score' },
                { id: 'improve', label: 'Improve Score' },
                { id: 'faq', label: 'FAQ' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* What is CIBIL */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is CIBIL Score?</h2>
              <p className="text-gray-600 mb-4">
                CIBIL Score is a 3-digit numeric summary of your credit history, ranging from 300 to 900. 
                It represents your creditworthiness and is used by banks and financial institutions to evaluate 
                loan applications.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How is it calculated?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Payment history (35%)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Credit utilization (30%)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Credit history length (15%)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      Credit mix (10%)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      New credit inquiries (10%)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Score Ranges</h3>
                  <div className="space-y-3">
                    {scoreRanges.map((score) => (
                      <div key={score.range} className={`p-3 rounded-lg ${score.bgColor}`}>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{score.range}</span>
                          <span className={`font-semibold ${score.color}`}>{score.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Good CIBIL Score</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-purple-600 mb-3 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'check' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Check Your CIBIL Score</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Free CIBIL Score Check</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Step 1: Enter Your Details</h4>
                    <p className="text-sm text-gray-600">Provide your basic information like name, PAN, and mobile number</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Step 2: Verify Identity</h4>
                    <p className="text-sm text-gray-600">Complete the OTP verification process</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Step 3: Get Your Score</h4>
                    <p className="text-sm text-gray-600">Receive your CIBIL score instantly</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Check Form</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">PAN Number</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="ABCDE1234F"
                        maxLength="10"
                        style={{ textTransform: 'uppercase' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="Enter 10-digit mobile number"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
                    >
                      Check CIBIL Score
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'improve' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Improve Your CIBIL Score</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Do's</h3>
                <div className="space-y-3">
                  {[
                    "Pay all your bills on time",
                    "Keep credit utilization below 30%",
                    "Maintain a mix of credit types",
                    "Don't close old credit accounts",
                    "Monitor your credit report regularly",
                    "Limit new credit applications"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Don'ts</h3>
                <div className="space-y-3">
                  {[
                    "Don't miss payment deadlines",
                    "Avoid maxing out credit cards",
                    "Don't apply for multiple loans at once",
                    "Avoid closing credit accounts abruptly",
                    "Don't ignore credit report errors",
                    "Avoid co-signing loans unnecessarily"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faq' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "How often should I check my CIBIL score?",
                  answer: "It's recommended to check your CIBIL score at least once every 6 months to monitor your credit health and catch any errors early."
                },
                {
                  question: "Does checking my CIBIL score affect it?",
                  answer: "No, checking your own CIBIL score is considered a 'soft inquiry' and does not affect your credit score."
                },
                {
                  question: "How long does it take to improve a CIBIL score?",
                  answer: "Improving your CIBIL score takes time and consistent good credit behavior. It can take 6-12 months to see significant improvements."
                },
                {
                  question: "What is a good CIBIL score?",
                  answer: "A CIBIL score of 750 and above is considered excellent and will help you get the best loan terms and interest rates."
                },
                {
                  question: "Can I get a loan with a low CIBIL score?",
                  answer: "While it's possible to get loans with a low CIBIL score, you may face higher interest rates and stricter terms. It's better to improve your score first."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CibilPage; 