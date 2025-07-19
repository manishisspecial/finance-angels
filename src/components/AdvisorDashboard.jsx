import { useState, useEffect } from 'react';
import { 
  User, 
  CreditCard, 
  TrendingUp, 
  DollarSign, 
  FileText, 
  Plus, 
  Eye, 
  CheckCircle, 
  XCircle, 
  AlertCircle,
  LogOut,
  BarChart3,
  Settings,
  Calendar,
  Target,
  Shield,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import { supabase } from '../lib/supabase';

const AdvisorDashboard = ({ advisorId, onLogout }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [advisor, setAdvisor] = useState(null);
  const [applications, setApplications] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (advisorId) {
      fetchAdvisorData();
    }
  }, [advisorId]);

  const fetchAdvisorData = async () => {
    try {
      setLoading(true);
      
      // Fetch advisor details
      const { data: advisorData } = await supabase
        .from('advisors')
        .select('*')
        .eq('id', advisorId)
        .single();
      
      // Fetch advisor's applications
      const { data: applicationsData } = await supabase
        .from('advisor_applications')
        .select(`
          *,
          products(name, type, provider, commission_rate)
        `)
        .eq('advisor_id', advisorId)
        .order('created_at', { ascending: false });
      
      // Fetch active products
      const { data: productsData } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('name');

      setAdvisor(advisorData);
      setApplications(applicationsData || []);
      setProducts(productsData || []);
    } catch (error) {
      console.error('Error fetching advisor data:', error);
    } finally {
      setLoading(false);
    }
  };

  const stats = {
    totalApplications: applications.length,
    approvedApplications: applications.filter(app => app.application_status === 'approved').length,
    pendingApplications: applications.filter(app => app.application_status === 'submitted').length,
    totalEarnings: applications.reduce((sum, app) => sum + parseFloat(app.commission_earned || 0), 0),
    monthlyEarnings: applications
      .filter(app => {
        const appDate = new Date(app.created_at);
        const currentDate = new Date();
        return appDate.getMonth() === currentDate.getMonth() && 
               appDate.getFullYear() === currentDate.getFullYear();
      })
      .reduce((sum, app) => sum + parseFloat(app.commission_earned || 0), 0)
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading advisor dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Advisor Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Advisor Portal</h1>
                <p className="text-green-100">The Finance Angels - Advisor Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                <span className="text-sm">Commission Rate: {advisor?.commission_rate || 2}%</span>
              </div>
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

      {/* Welcome Banner */}
      {advisor && (
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Welcome back, {advisor.full_name}</h2>
                <p className="text-gray-600">Track your applications and earnings</p>
              </div>
              <div className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500">Notifications</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Status Alert */}
      {advisor?.status === 'pending' && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
              <p className="text-yellow-800">
                Your application is pending. You'll be able to submit applications once approved.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart3 },
              { id: 'applications', name: 'Applications', icon: FileText },
              { id: 'products', name: 'Products', icon: CreditCard },
              { id: 'earnings', name: '$ Earnings', icon: DollarSign },
              { id: 'profile', name: 'Profile', icon: User }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
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
          <OverviewTab stats={stats} advisor={advisor} />
        )}
        
        {activeTab === 'applications' && (
          <ApplicationsTab 
            applications={applications} 
            advisor={advisor}
            onRefresh={fetchAdvisorData}
          />
        )}
        
        {activeTab === 'products' && (
          <ProductsTab 
            products={products}
            advisor={advisor}
            onApplicationSubmit={fetchAdvisorData}
          />
        )}
        
        {activeTab === 'earnings' && (
          <EarningsTab applications={applications} advisor={advisor} />
        )}

        {activeTab === 'profile' && (
          <ProfileTab advisor={advisor} onUpdate={fetchAdvisorData} />
        )}
      </div>
    </div>
  );
};

const OverviewTab = ({ stats, advisor }) => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Applications</p>
            <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
            <p className="text-sm text-green-600">{stats.approvedApplications} approved</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Pending Applications</p>
            <p className="text-2xl font-bold text-gray-900">{stats.pendingApplications}</p>
            <p className="text-sm text-orange-600">Under review</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <DollarSign className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Earnings</p>
            <p className="text-2xl font-bold text-gray-900">₹{stats.totalEarnings.toLocaleString()}</p>
            <p className="text-sm text-green-600">₹{stats.monthlyEarnings.toLocaleString()} this month</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Commission Rate</p>
            <p className="text-2xl font-bold text-gray-900">{advisor?.commission_rate || 2}%</p>
            <p className="text-sm text-purple-600">Per successful application</p>
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
              Submit New Application
            </span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              View Available Products
            </span>
            <span className="text-gray-400">→</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <span className="flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              Check Earnings
            </span>
            <span className="text-gray-400">→</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {stats.totalApplications === 0 ? (
            <p className="text-gray-500 text-center py-4">No recent activity</p>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <span className="text-sm">Last application submitted</span>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ApplicationsTab = ({ applications, advisor, onRefresh }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">My Applications</h2>
        <p className="text-gray-600">Track all your submitted applications</p>
      </div>
      <button
        onClick={onRefresh}
        className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        <Plus className="w-4 h-4" />
        <span>New Application</span>
      </button>
    </div>

    {applications.length === 0 ? (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Applications Yet</h3>
        <p className="text-gray-600 mb-4">Start by submitting your first application</p>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Submit Application
        </button>
      </div>
    ) : (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Commission
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{application.customer_name}</div>
                    <div className="text-sm text-gray-500">{application.customer_email}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{application.products?.name}</div>
                    <div className="text-sm text-gray-500">{application.products?.provider}</div>
                  </div>
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
    )}
  </div>
);

const ProductsTab = ({ products, advisor }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Available Products</h2>
      <p className="text-gray-600">Browse and apply for financial products</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              product.type === 'credit_card' ? 'bg-blue-100 text-blue-800' :
              product.type === 'personal_loan' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {product.type.replace('_', ' ').toUpperCase()}
            </span>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Provider:</span>
              <span className="text-sm font-medium">{product.provider}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Commission:</span>
              <span className="text-sm font-medium text-green-600">{product.commission_rate}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Rating:</span>
              <span className="text-sm font-medium">{product.rating}/5</span>
            </div>
          </div>
          
          <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  </div>
);

const EarningsTab = ({ applications, advisor }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Earnings Overview</h2>
      <p className="text-gray-600">Track your commission earnings</p>
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
          <div className="flex justify-between">
            <span className="text-gray-600">Commission Rate:</span>
            <span className="font-semibold">{advisor?.commission_rate || 2}%</span>
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

const ProfileTab = ({ advisor, onUpdate }) => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
      <p className="text-gray-600">Manage your advisor profile</p>
    </div>

    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            value={advisor?.full_name || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={advisor?.email || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number</label>
          <input
            type="tel"
            value={advisor?.mobile_number || ''}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Commission Rate</label>
          <input
            type="text"
            value={`${advisor?.commission_rate || 2}%`}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            readOnly
          />
        </div>
      </div>
    </div>
  </div>
);

export default AdvisorDashboard; 