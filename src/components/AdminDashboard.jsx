import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  FileText, 
  Users, 
  DollarSign, 
  Settings, 
  Plus, 
  Eye, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  LogOut,
  Shield,
  Key,
  Bell,
  Search,
  Filter,
  Edit,
  Trash2,
  MoreVertical
} from 'lucide-react';
import { supabase } from '../lib/supabase';

// All products from the application
const allProducts = [
  // Credit Cards
  {
    id: 'cc-1',
    name: 'IndusInd Platinum CC',
    type: 'credit_card',
    provider: 'IndusInd Bank',
    category: 'Premium',
    rating: 4.6,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/YzZlYjlkY'
  },
  {
    id: 'cc-2',
    name: 'IndusInd Legend CC',
    type: 'credit_card',
    provider: 'IndusInd Bank',
    category: 'Premium',
    rating: 4.5,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MjE1Y2U3N'
  },
  {
    id: 'cc-3',
    name: 'IndusInd Platinum Aura Edge',
    type: 'credit_card',
    provider: 'IndusInd Bank',
    category: 'Premium',
    rating: 4.7,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MDAyZGZlN'
  },
  {
    id: 'cc-4',
    name: 'IndusInd Easy Dinner CC',
    type: 'credit_card',
    provider: 'IndusInd Bank',
    category: 'Lifestyle',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZDhjYThjY'
  },
  {
    id: 'cc-5',
    name: 'IndusInd Nexxt CC',
    type: 'credit_card',
    provider: 'IndusInd Bank',
    category: 'Shopping',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/Zjc2MzJmZ'
  },
  {
    id: 'cc-6',
    name: 'Easy Dinner IndusInd CC',
    type: 'credit_card',
    provider: 'IndusInd Bank',
    category: 'Lifestyle',
    rating: 4.2,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MTFlYjQzM'
  },
  {
    id: 'cc-7',
    name: 'HDFC Swiggy Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Lifestyle',
    rating: 4.6,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MmE0YTVmY'
  },
  {
    id: 'cc-8',
    name: 'HDFC Pixel Play Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/YjdhOWJiM'
  },
  {
    id: 'cc-9',
    name: 'HDFC Bank RuPay Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZTQ2NjVkZ'
  },
  {
    id: 'cc-10',
    name: 'Tata Neu HDFC Bank Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.5,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NjMzNzA2M'
  },
  {
    id: 'cc-11',
    name: 'HDFC Freedom Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Lifestyle',
    rating: 4.2,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/N2U4ZGQ4M'
  },
  {
    id: 'cc-12',
    name: 'HDFC Money Back Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.1,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MTA1OGZmM'
  },
  {
    id: 'cc-13',
    name: 'HDFC Business Money Back Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Business',
    rating: 4.0,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/OGU0YzE2Z'
  },
  {
    id: 'cc-14',
    name: 'HDFC Indian Oil Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Fuel',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/Y2QyMWNmM'
  },
  {
    id: 'cc-15',
    name: 'HDFC Millennia Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MWQyMWQ4Z'
  },
  {
    id: 'cc-16',
    name: 'HDFC Shopper Stop Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Shopping',
    rating: 4.2,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NThkMDg0O'
  },
  {
    id: 'cc-17',
    name: 'HDFC Regalia First Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Premium',
    rating: 4.6,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MDM1MzQ5M'
  },
  {
    id: 'cc-18',
    name: 'HDFC CSC Small Business Money Back Credit Card',
    type: 'credit_card',
    provider: 'HDFC Bank',
    category: 'Business',
    rating: 4.0,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MjE4YTI5M'
  },
  {
    id: 'cc-19',
    name: 'HSBC Visa Platinum Credit Card',
    type: 'credit_card',
    provider: 'HSBC Bank',
    category: 'Premium',
    rating: 4.4,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MzkzM2RjY'
  },
  {
    id: 'cc-20',
    name: 'HSBC TravelOne Credit Card',
    type: 'credit_card',
    provider: 'HSBC Bank',
    category: 'Travel',
    rating: 4.7,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/M2IwNzYyZ'
  },
  {
    id: 'cc-21',
    name: 'HSBC Live+ Credit Card',
    type: 'credit_card',
    provider: 'HSBC Bank',
    category: 'Lifestyle',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MDNlNDQyZ'
  },
  {
    id: 'cc-22',
    name: 'RBL Shoprite Credit Card',
    type: 'credit_card',
    provider: 'RBL Bank',
    category: 'Shopping',
    rating: 4.5,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MzJjYTQ4Z'
  },
  {
    id: 'cc-23',
    name: 'IndianOil RBL Bank Credit Card',
    type: 'credit_card',
    provider: 'RBL Bank',
    category: 'Fuel',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/OGEzODg2Y'
  },
  {
    id: 'cc-24',
    name: 'IndianOil RBL Bank XTRA Credit Card',
    type: 'credit_card',
    provider: 'RBL Bank',
    category: 'Fuel',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZGFmNTA1Y'
  },
  {
    id: 'cc-25',
    name: 'YES Bank POP-CLUB Credit Card',
    type: 'credit_card',
    provider: 'YES Bank',
    category: 'Lifestyle',
    rating: 4.6,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ODNhY2MzO'
  },
  {
    id: 'cc-26',
    name: 'YES Bank Rio RuPay Credit Card',
    type: 'credit_card',
    provider: 'YES Bank',
    category: 'Shopping',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/OTZmMzYxM'
  },
  {
    id: 'cc-27',
    name: 'Axis Indian Oil Credit Card',
    type: 'credit_card',
    provider: 'Axis Bank',
    category: 'Fuel',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/YTljZmYxZ'
  },
  {
    id: 'cc-28',
    name: 'Axis Flipkart Credit Card',
    type: 'credit_card',
    provider: 'Axis Bank',
    category: 'Shopping',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/YzgzNDRjM'
  },
  {
    id: 'cc-29',
    name: 'AU LIT Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Lifestyle',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NWQ3NjM5Z'
  },
  {
    id: 'cc-30',
    name: 'AU Altura Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Premium',
    rating: 4.4,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NzNjNWU2Y'
  },
  {
    id: 'cc-31',
    name: 'AU Xcite Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Shopping',
    rating: 4.2,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MmJjMDQwY'
  },
  {
    id: 'cc-32',
    name: 'AU Xcite Ace Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Shopping',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/Yjk0MmE4Y'
  },
  {
    id: 'cc-33',
    name: 'AU Xcite Ultra Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Premium',
    rating: 4.5,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/YTVhMDVkN'
  },
  {
    id: 'cc-34',
    name: 'AU Vetta Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Premium',
    rating: 4.4,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/YzJmNDNjY'
  },
  {
    id: 'cc-35',
    name: 'AU Altura Plus Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Premium',
    rating: 4.6,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZWIwYjc5N'
  },
  {
    id: 'cc-36',
    name: 'AU Zenith Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Premium',
    rating: 4.7,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZmI3ZTc2Y'
  },
  {
    id: 'cc-37',
    name: 'AU Zenith Plus Credit Card',
    type: 'credit_card',
    provider: 'AU Bank',
    category: 'Premium',
    rating: 4.8,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MWY4ZmNhZ'
  },
  {
    id: 'cc-38',
    name: 'Kiwi Credit Card',
    type: 'credit_card',
    provider: 'Kiwi',
    category: 'Shopping',
    rating: 4.5,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MTAwZWY3M'
  },
  {
    id: 'cc-39',
    name: 'Scapia Federal Bank Credit Card',
    type: 'credit_card',
    provider: 'Federal Bank',
    category: 'Travel',
    rating: 4.6,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NDI1ZTE5M'
  },
  {
    id: 'cc-40',
    name: 'BOBCARD',
    type: 'credit_card',
    provider: 'Bank of Baroda',
    category: 'Shopping',
    rating: 4.2,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/OTQwYzBjO'
  },
  // Personal Loans
  {
    id: 'pl-1',
    name: 'Poonawalla Fincorp Instant Personal Loan',
    type: 'personal_loan',
    provider: 'Poonawalla Fincorp',
    category: 'Instant',
    rating: 4.6,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NWQ3MWNhZ'
  },
  {
    id: 'pl-2',
    name: 'Ring Power Loan',
    type: 'personal_loan',
    provider: 'Ring Power',
    category: 'Quick',
    rating: 4.5,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/OGRhOWVkY'
  },
  {
    id: 'pl-3',
    name: 'MoneyView Personal Loan',
    type: 'personal_loan',
    provider: 'MoneyView',
    category: 'Paperless',
    rating: 4.7,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NzY4YmEyY'
  },
  {
    id: 'pl-4',
    name: 'KreditBee Instant Personal Loan',
    type: 'personal_loan',
    provider: 'KreditBee',
    category: 'Instant',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NjJlODJmM'
  },
  {
    id: 'pl-5',
    name: 'Unity SFB Personal Loan',
    type: 'personal_loan',
    provider: 'Unity SFB',
    category: 'Secure',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZGMyOTkyY'
  },
  {
    id: 'pl-6',
    name: 'Indus Easy Credit Personal Loan',
    type: 'personal_loan',
    provider: 'Indus Easy Credit',
    category: 'Quick',
    rating: 4.2,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MWIzZTI2Y'
  },
  {
    id: 'pl-7',
    name: 'Olyv Personal Loan',
    type: 'personal_loan',
    provider: 'Olyv',
    category: 'Instant',
    rating: 4.1,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MTE0YmZmN'
  },
  {
    id: 'pl-8',
    name: 'PayMe Personal Loan',
    type: 'personal_loan',
    provider: 'PayMe',
    category: 'Quick',
    rating: 4.0,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZDE4ZDhlZ'
  },
  {
    id: 'pl-9',
    name: 'Lendingplate Loan',
    type: 'personal_loan',
    provider: 'Lendingplate',
    category: 'Fast',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/NWNiYTRhM'
  },
  {
    id: 'pl-10',
    name: 'Zype Personal Loan',
    type: 'personal_loan',
    provider: 'Zype',
    category: 'Flexible',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/ZDQ0Y2M3Z'
  },
  // Business Loans
  {
    id: 'bl-1',
    name: 'Flexiloans Business Loan',
    type: 'business_loan',
    provider: 'Flexiloans',
    category: 'Business',
    rating: 4.5,
    commission_rate: 3.0,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/YmI0NDhhZ'
  },
  {
    id: 'bl-2',
    name: 'Lendingkart Business Loan',
    type: 'business_loan',
    provider: 'Lendingkart',
    category: 'Business',
    rating: 4.6,
    commission_rate: 3.5,
    status: 'active',
    apply_link: 'https://wee.bnking.in/c/MDEzZDliZ'
  },
  // Home Loans
  {
    id: 'hl-1',
    name: 'HDFC Home Loan',
    type: 'home_loan',
    provider: 'HDFC Bank',
    category: 'Premium',
    rating: 4.5,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://apply.hdfcbank.com/home'
  },
  {
    id: 'hl-2',
    name: 'SBI Home Loan',
    type: 'home_loan',
    provider: 'State Bank of India',
    category: 'Government',
    rating: 4.4,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://apply.sbi.co.in/home'
  },
  {
    id: 'hl-3',
    name: 'ICICI Home Loan',
    type: 'home_loan',
    provider: 'ICICI Bank',
    category: 'Premium',
    rating: 4.3,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://apply.icici.com/home'
  },
  {
    id: 'hl-4',
    name: 'Axis Home Loan',
    type: 'home_loan',
    provider: 'Axis Bank',
    category: 'Residential',
    rating: 4.2,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://apply.axisbank.com/home'
  },
  {
    id: 'hl-5',
    name: 'Kotak Home Loan',
    type: 'home_loan',
    provider: 'Kotak Mahindra Bank',
    category: 'Premium',
    rating: 4.1,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://apply.kotak.com/home'
  },
  // Car Loans
  {
    id: 'cl-1',
    name: 'HDFC Car Loan',
    type: 'car_loan',
    provider: 'HDFC Bank',
    category: 'New Car',
    rating: 4.4,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://apply.hdfcbank.com/car'
  },
  {
    id: 'cl-2',
    name: 'SBI Car Loan',
    type: 'car_loan',
    provider: 'State Bank of India',
    category: 'Government',
    rating: 4.3,
    commission_rate: 2.0,
    status: 'active',
    apply_link: 'https://apply.sbi.co.in/car'
  },
  {
    id: 'cl-3',
    name: 'ICICI Car Loan',
    type: 'car_loan',
    provider: 'ICICI Bank',
    category: 'Premium',
    rating: 4.2,
    commission_rate: 2.5,
    status: 'active',
    apply_link: 'https://apply.icici.com/car'
  }
];

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [products, setProducts] = useState([]);
  const [advisors, setAdvisors] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Use all products from the application instead of just database
      setProducts(allProducts);
      
      // Fetch advisors
      const { data: advisorsData } = await supabase
        .from('advisors')
        .select('*')
        .order('created_at', { ascending: false });
      
      // Fetch applications
      const { data: applicationsData } = await supabase
        .from('advisor_applications')
        .select(`
          *,
          advisors(full_name, email),
          products(name, type)
        `)
        .order('created_at', { ascending: false });

      setAdvisors(advisorsData || []);
      setApplications(applicationsData || []);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = {
    totalProducts: products.length,
    totalAdvisors: advisors.length,
    totalApplications: applications.length,
    totalEarnings: applications.reduce((sum, app) => sum + parseFloat(app.commission_earned || 0), 0)
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Admin Portal</h1>
                <p className="text-purple-100">The Finance Angels - System Administration</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowPasswordModal(true)}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Key className="w-4 h-4" />
                <span>Change Password</span>
              </button>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'products', name: 'Products', icon: FileText },
              { id: 'advisors', name: 'Advisors', icon: Users },
              { id: 'applications', name: 'Applications', icon: FileText },
              { id: 'earnings', name: '$ Earnings', icon: DollarSign },
              { id: 'settings', name: 'Settings', icon: Settings }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-purple-500 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <OverviewTab stats={stats} />
        )}
        
        {activeTab === 'products' && (
          <ProductsTab 
            products={products}
            onRefresh={fetchDashboardData}
          />
        )}
        
        {activeTab === 'advisors' && (
          <AdvisorsTab 
            advisors={advisors}
            onRefresh={fetchDashboardData}
          />
        )}

        {activeTab === 'applications' && (
          <ApplicationsTab 
            applications={applications}
            onRefresh={fetchDashboardData}
          />
        )}

        {activeTab === 'earnings' && (
          <EarningsTab applications={applications} />
        )}

        {activeTab === 'settings' && (
          <SettingsTab />
        )}
      </div>

      {/* Password Change Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Change Admin Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter current password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter new password"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Confirm new password"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowPasswordModal(false)}
                className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Change Password
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const OverviewTab = ({ stats }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Products</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Advisors</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalAdvisors}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <FileText className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Applications</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-purple-100 rounded-lg">
            <DollarSign className="w-6 h-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-gray-900">₹{stats.totalEarnings.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              Add New Product
            </span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              Review Advisor Applications
            </span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              Export Reports
            </span>
            <span className="text-gray-400">→</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">System Status</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Database Connection
            </span>
            <span className="text-green-600 text-sm font-medium">Online</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              API Services
            </span>
            <span className="text-green-600 text-sm font-medium">Active</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
              Email Services
            </span>
            <span className="text-green-600 text-sm font-medium">Running</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProductsTab = ({ products, onRefresh }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = {
    all: 'All Products',
    credit_card: 'Credit Cards',
    personal_loan: 'Personal Loans',
    business_loan: 'Business Loans',
    home_loan: 'Home Loans',
    car_loan: 'Car Loans'
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.type === selectedCategory);

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    const category = categories[product.type] || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Manage Products</h2>
          <p className="text-gray-600">Organize and control product availability</p>
        </div>
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {Object.entries(categories).map(([key, name]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap ${
              selectedCategory === key
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Products by Category */}
      {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
        <div key={category} className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              {category} ({categoryProducts.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PRODUCT
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    PROVIDER
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    COMMISSION
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    STATUS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categoryProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">{product.type.replace('_', ' ').toUpperCase()}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.provider}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {product.commission_rate}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        product.status === 'active' 
                          ? 'bg-green-100 text-green-800' 
                          : product.status === 'hold'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-red-600 hover:text-red-900">
                          {product.status === 'active' ? 'Deactivate' : 'Activate'}
                        </button>
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

const AdvisorsTab = ({ advisors, onRefresh }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Manage Advisors</h2>
        <p className="text-gray-600">Review and manage advisor applications</p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ADVISOR
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CONTACT
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              STATUS
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              COMMISSION
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {advisors.map((advisor) => (
            <tr key={advisor.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm font-medium text-gray-900">{advisor.full_name}</div>
                  <div className="text-sm text-gray-500">PAN: {advisor.pan_number}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div>
                  <div className="text-sm text-gray-900">{advisor.email}</div>
                  <div className="text-sm text-gray-500">{advisor.mobile_number}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  advisor.status === 'approved' 
                    ? 'bg-green-100 text-green-800' 
                    : advisor.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {advisor.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {advisor.commission_rate}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div className="flex items-center space-x-2">
                  {advisor.status === 'pending' && (
                    <>
                      <button className="text-green-600 hover:text-green-900">Approve</button>
                      <button className="text-red-600 hover:text-red-900">Reject</button>
                    </>
                  )}
                  <button className="text-blue-600 hover:text-blue-900">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const ApplicationsTab = ({ applications, onRefresh }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">All Applications</h2>
        <p className="text-gray-600">Track all advisor applications</p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ADVISOR
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CUSTOMER
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              PRODUCT
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              STATUS
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              COMMISSION
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              DATE
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {applications.map((application) => (
            <tr key={application.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {application.advisors?.full_name}
                </div>
                <div className="text-sm text-gray-500">
                  {application.advisors?.email}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  {application.customer_name}
                </div>
                <div className="text-sm text-gray-500">
                  {application.customer_email}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {application.products?.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  application.application_status === 'approved' 
                    ? 'bg-green-100 text-green-800' 
                    : application.application_status === 'rejected'
                    ? 'bg-red-100 text-red-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {application.application_status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ₹{parseFloat(application.commission_earned || 0).toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(application.created_at).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const EarningsTab = ({ applications }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Earnings Overview</h2>
      <p className="text-gray-600">Track commission earnings and payouts</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Earnings Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600">Total Commission Earned:</span>
            <span className="font-semibold">₹{applications.reduce((sum, app) => sum + parseFloat(app.commission_earned || 0), 0).toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">This Month:</span>
            <span className="font-semibold text-green-600">₹{applications
              .filter(app => {
                const appDate = new Date(app.created_at);
                const currentDate = new Date();
                return appDate.getMonth() === currentDate.getMonth() && 
                       appDate.getFullYear() === currentDate.getFullYear();
              })
              .reduce((sum, app) => sum + parseFloat(app.commission_earned || 0), 0).toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Earnings</h3>
        <div className="space-y-3">
          {applications.length === 0 ? (
            <p className="text-gray-500 text-center py-4">No earnings yet</p>
          ) : (
            applications.slice(0, 5).map((application) => (
              <div key={application.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm font-medium">{application.customer_name}</div>
                  <div className="text-xs text-gray-500">{application.products?.name}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">₹{parseFloat(application.commission_earned || 0).toLocaleString()}</div>
                  <div className="text-xs text-gray-500">{new Date(application.created_at).toLocaleDateString()}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  </div>
);

const SettingsTab = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-900">System Settings</h2>
      <p className="text-gray-600">Configure system preferences and security</p>
    </div>

    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">General Settings</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Default Commission Rate (%)</label>
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="2.0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">System Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="admin@financeangels.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Support Phone</label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="+91 98765 43210"
          />
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard; 