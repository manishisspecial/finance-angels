import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Calendar, DollarSign } from 'lucide-react';

const EmiCalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(12);
  const [tenureType, setTenureType] = useState('months');
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure, tenureType]);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const time = tenureType === 'years' ? tenure * 12 : tenure; // Convert to months

    if (rate === 0) {
      setEmi(principal / time);
    } else {
      const emiAmount = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
      setEmi(emiAmount);
    }

    const total = emi * time;
    setTotalAmount(total);
    setTotalInterest(total - principal);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const loanTypes = [
    { name: 'Personal Loan', minAmount: 10000, maxAmount: 5000000, rate: 10.5 },
    { name: 'Home Loan', minAmount: 500000, maxAmount: 10000000, rate: 8.5 },
    { name: 'Car Loan', minAmount: 100000, maxAmount: 2000000, rate: 9.5 },
    { name: 'Business Loan', minAmount: 50000, maxAmount: 10000000, rate: 12.5 },
    { name: 'Education Loan', minAmount: 100000, maxAmount: 5000000, rate: 8.0 },
  ];

  const [selectedLoanType, setSelectedLoanType] = useState(loanTypes[0]);

  const handleLoanTypeChange = (loanType) => {
    setSelectedLoanType(loanType);
    setInterestRate(loanType.rate);
    if (loanAmount < loanType.minAmount) {
      setLoanAmount(loanType.minAmount);
    } else if (loanAmount > loanType.maxAmount) {
      setLoanAmount(loanType.maxAmount);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="gradient-bg text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            EMI Calculator
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Calculate your monthly EMI, total interest, and get a complete loan breakdown
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-purple-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">EMI Calculator</h2>
            </div>

            {/* Loan Type Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Type
              </label>
              <select
                value={selectedLoanType.name}
                onChange={(e) => {
                  const selected = loanTypes.find(lt => lt.name === e.target.value);
                  handleLoanTypeChange(selected);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {loanTypes.map((loanType) => (
                  <option key={loanType.name} value={loanType.name}>
                    {loanType.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Loan Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Amount (₹)
              </label>
              <input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseFloat(e.target.value) || 0)}
                min={selectedLoanType.minAmount}
                max={selectedLoanType.maxAmount}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter loan amount"
              />
              <p className="text-xs text-gray-500 mt-1">
                Range: ₹{formatCurrency(selectedLoanType.minAmount)} - ₹{formatCurrency(selectedLoanType.maxAmount)}
              </p>
            </div>

            {/* Interest Rate */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate (% per annum)
              </label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                step="0.1"
                min="0"
                max="30"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter interest rate"
              />
            </div>

            {/* Tenure */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Tenure
              </label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value) || 0)}
                  min="1"
                  max={tenureType === 'years' ? 30 : 360}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter tenure"
                />
                <select
                  value={tenureType}
                  onChange={(e) => setTenureType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="months">Months</option>
                  <option value="years">Years</option>
                </select>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              onClick={calculateEMI}
              className="w-full bg-purple-600 text-white py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-medium"
            >
              Calculate EMI
            </button>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* EMI Result */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly EMI</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {formatCurrency(emi)}
                </div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
            </div>

            {/* Loan Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Loan Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Interest Amount</span>
                  <span className="font-semibold text-red-600">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-semibold text-green-600">{formatCurrency(totalAmount)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Tenure</span>
                  <span className="font-semibold">
                    {tenureType === 'years' ? tenure : Math.floor(tenure / 12)} {tenureType === 'years' ? 'Years' : 'Months'}
                  </span>
                </div>
              </div>
            </div>

            {/* Amortization Schedule Preview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Schedule</h3>
              <div className="space-y-2">
                {[1, 2, 3, tenure - 2, tenure - 1, tenure].map((month) => {
                  const monthNumber = month;
                  const monthlyInterest = (loanAmount * (interestRate / 100) / 12);
                  const monthlyPrincipal = emi - monthlyInterest;
                  const remainingBalance = loanAmount - (monthlyPrincipal * monthNumber);
                  
                  return (
                    <div key={month} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">
                        {month === 1 ? '1st' : month === 2 ? '2nd' : month === 3 ? '3rd' : 
                         month === tenure - 2 ? `${tenure - 2}nd last` : 
                         month === tenure - 1 ? `${tenure - 1}st last` : 'Last'} Payment
                      </span>
                      <span className="font-medium">{formatCurrency(emi)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">EMI Calculation Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Lower Interest Rate</h3>
              <p className="text-sm text-gray-600">Choose loans with lower interest rates to reduce your EMI burden</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Optimal Tenure</h3>
              <p className="text-sm text-gray-600">Balance between lower EMI and total interest paid by choosing the right tenure</p>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Prepayment Benefits</h3>
              <p className="text-sm text-gray-600">Consider prepayment options to reduce total interest and loan tenure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculatorPage; 