import { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const CustomerForm = ({ cardName, cardBank, applyLink, onClose }) => {
  // Pincode data for major cities in each state
  const statePincodes = {
    'Delhi': ['110001', '110002', '110003', '110004', '110005', '110006', '110007', '110008', '110009', '110010', '110011', '110012', '110013', '110014', '110015', '110016', '110017', '110018', '110019', '110020', '110021', '110022', '110023', '110024', '110025', '110026', '110027', '110028', '110029', '110030', '110031', '110032', '110033', '110034', '110035', '110036', '110037', '110038', '110039', '110040', '110041', '110042', '110043', '110044', '110045', '110046', '110047', '110048', '110049', '110050', '110051', '110052', '110053', '110054', '110055', '110056', '110057', '110058', '110059', '110060', '110061', '110062', '110063', '110064', '110065', '110066', '110067', '110068', '110069', '110070', '110071', '110072', '110073', '110074', '110075', '110076', '110077', '110078', '110079', '110080', '110081', '110082', '110083', '110084', '110085', '110086', '110087', '110088', '110089', '110090', '110091', '110092', '110093', '110094', '110095', '110096', '110097', '110098', '110099'],
    'Maharashtra': ['400001', '400002', '400003', '400004', '400005', '400006', '400007', '400008', '400009', '400010', '400011', '400012', '400013', '400014', '400015', '400016', '400017', '400018', '400019', '400020', '400021', '400022', '400023', '400024', '400025', '400026', '400027', '400028', '400029', '400030', '400031', '400032', '400033', '400034', '400035', '400036', '400037', '400038', '400039', '400040', '400041', '400042', '400043', '400044', '400045', '400046', '400047', '400048', '400049', '400050', '400051', '400052', '400053', '400054', '400055', '400056', '400057', '400058', '400059', '400060', '400061', '400062', '400063', '400064', '400065', '400066', '400067', '400068', '400069', '400070', '400071', '400072', '400073', '400074', '400075', '400076', '400077', '400078', '400079', '400080', '400081', '400082', '400083', '400084', '400085', '400086', '400087', '400088', '400089', '400090', '400091', '400092', '400093', '400094', '400095', '400096', '400097', '400098', '400099'],
    'Karnataka': ['560001', '560002', '560003', '560004', '560005', '560006', '560007', '560008', '560009', '560010', '560011', '560012', '560013', '560014', '560015', '560016', '560017', '560018', '560019', '560020', '560021', '560022', '560023', '560024', '560025', '560026', '560027', '560028', '560029', '560030', '560031', '560032', '560033', '560034', '560035', '560036', '560037', '560038', '560039', '560040', '560041', '560042', '560043', '560044', '560045', '560046', '560047', '560048', '560049', '560050', '560051', '560052', '560053', '560054', '560055', '560056', '560057', '560058', '560059', '560060', '560061', '560062', '560063', '560064', '560065', '560066', '560067', '560068', '560069', '560070', '560071', '560072', '560073', '560074', '560075', '560076', '560077', '560078', '560079', '560080', '560081', '560082', '560083', '560084', '560085', '560086', '560087', '560088', '560089', '560090', '560091', '560092', '560093', '560094', '560095', '560096', '560097', '560098', '560099'],
    'Tamil Nadu': ['600001', '600002', '600003', '600004', '600005', '600006', '600007', '600008', '600009', '600010', '600011', '600012', '600013', '600014', '600015', '600016', '600017', '600018', '600019', '600020', '600021', '600022', '600023', '600024', '600025', '600026', '600027', '600028', '600029', '600030', '600031', '600032', '600033', '600034', '600035', '600036', '600037', '600038', '600039', '600040', '600041', '600042', '600043', '600044', '600045', '600046', '600047', '600048', '600049', '600050', '600051', '600052', '600053', '600054', '600055', '600056', '600057', '600058', '600059', '600060', '600061', '600062', '600063', '600064', '600065', '600066', '600067', '600068', '600069', '600070', '600071', '600072', '600073', '600074', '600075', '600076', '600077', '600078', '600079', '600080', '600081', '600082', '600083', '600084', '600085', '600086', '600087', '600088', '600089', '600090', '600091', '600092', '600093', '600094', '600095', '600096', '600097', '600098', '600099'],
    'Telangana': ['500001', '500002', '500003', '500004', '500005', '500006', '500007', '500008', '500009', '500010', '500011', '500012', '500013', '500014', '500015', '500016', '500017', '500018', '500019', '500020', '500021', '500022', '500023', '500024', '500025', '500026', '500027', '500028', '500029', '500030', '500031', '500032', '500033', '500034', '500035', '500036', '500037', '500038', '500039', '500040', '500041', '500042', '500043', '500044', '500045', '500046', '500047', '500048', '500049', '500050', '500051', '500052', '500053', '500054', '500055', '500056', '500057', '500058', '500059', '500060', '500061', '500062', '500063', '500064', '500065', '500066', '500067', '500068', '500069', '500070', '500071', '500072', '500073', '500074', '500075', '500076', '500077', '500078', '500079', '500080', '500081', '500082', '500083', '500084', '500085', '500086', '500087', '500088', '500089', '500090', '500091', '500092', '500093', '500094', '500095', '500096', '500097', '500098', '500099'],
    'Gujarat': ['380001', '380002', '380003', '380004', '380005', '380006', '380007', '380008', '380009', '380010', '380011', '380012', '380013', '380014', '380015', '380016', '380017', '380018', '380019', '380020', '380021', '380022', '380023', '380024', '380025', '380026', '380027', '380028', '380029', '380030', '380031', '380032', '380033', '380034', '380035', '380036', '380037', '380038', '380039', '380040', '380041', '380042', '380043', '380044', '380045', '380046', '380047', '380048', '380049', '380050', '380051', '380052', '380053', '380054', '380055', '380056', '380057', '380058', '380059', '380060', '380061', '380062', '380063', '380064', '380065', '380066', '380067', '380068', '380069', '380070', '380071', '380072', '380073', '380074', '380075', '380076', '380077', '380078', '380079', '380080', '380081', '380082', '380083', '380084', '380085', '380086', '380087', '380088', '380089', '380090', '380091', '380092', '380093', '380094', '380095', '380096', '380097', '380098', '380099'],
    'West Bengal': ['700001', '700002', '700003', '700004', '700005', '700006', '700007', '700008', '700009', '700010', '700011', '700012', '700013', '700014', '700015', '700016', '700017', '700018', '700019', '700020', '700021', '700022', '700023', '700024', '700025', '700026', '700027', '700028', '700029', '700030', '700031', '700032', '700033', '700034', '700035', '700036', '700037', '700038', '700039', '700040', '700041', '700042', '700043', '700044', '700045', '700046', '700047', '700048', '700049', '700050', '700051', '700052', '700053', '700054', '700055', '700056', '700057', '700058', '700059', '700060', '700061', '700062', '700063', '700064', '700065', '700066', '700067', '700068', '700069', '700070', '700071', '700072', '700073', '700074', '700075', '700076', '700077', '700078', '700079', '700080', '700081', '700082', '700083', '700084', '700085', '700086', '700087', '700088', '700089', '700090', '700091', '700092', '700093', '700094', '700095', '700096', '700097', '700098', '700099'],
    'Uttar Pradesh': ['226001', '226002', '226003', '226004', '226005', '226006', '226007', '226008', '226009', '226010', '226011', '226012', '226013', '226014', '226015', '226016', '226017', '226018', '226019', '226020', '226021', '226022', '226023', '226024', '226025', '226026', '226027', '226028', '226029', '226030', '226031', '226032', '226033', '226034', '226035', '226036', '226037', '226038', '226039', '226040', '226041', '226042', '226043', '226044', '226045', '226046', '226047', '226048', '226049', '226050', '226051', '226052', '226053', '226054', '226055', '226056', '226057', '226058', '226059', '226060', '226061', '226062', '226063', '226064', '226065', '226066', '226067', '226068', '226069', '226070', '226071', '226072', '226073', '226074', '226075', '226076', '226077', '226078', '226079', '226080', '226081', '226082', '226083', '226084', '226085', '226086', '226087', '226088', '226089', '226090', '226091', '226092', '226093', '226094', '226095', '226096', '226097', '226098', '226099'],
    'Rajasthan': ['302001', '302002', '302003', '302004', '302005', '302006', '302007', '302008', '302009', '302010', '302011', '302012', '302013', '302014', '302015', '302016', '302017', '302018', '302019', '302020', '302021', '302022', '302023', '302024', '302025', '302026', '302027', '302028', '302029', '302030', '302031', '302032', '302033', '302034', '302035', '302036', '302037', '302038', '302039', '302040', '302041', '302042', '302043', '302044', '302045', '302046', '302047', '302048', '302049', '302050', '302051', '302052', '302053', '302054', '302055', '302056', '302057', '302058', '302059', '302060', '302061', '302062', '302063', '302064', '302065', '302066', '302067', '302068', '302069', '302070', '302071', '302072', '302073', '302074', '302075', '302076', '302077', '302078', '302079', '302080', '302081', '302082', '302083', '302084', '302085', '302086', '302087', '302088', '302089', '302090', '302091', '302092', '302093', '302094', '302095', '302096', '302097', '302098', '302099'],
    'Punjab': ['141001', '141002', '141003', '141004', '141005', '141006', '141007', '141008', '141009', '141010', '141011', '141012', '141013', '141014', '141015', '141016', '141017', '141018', '141019', '141020', '141021', '141022', '141023', '141024', '141025', '141026', '141027', '141028', '141029', '141030', '141031', '141032', '141033', '141034', '141035', '141036', '141037', '141038', '141039', '141040', '141041', '141042', '141043', '141044', '141045', '141046', '141047', '141048', '141049', '141050', '141051', '141052', '141053', '141054', '141055', '141056', '141057', '141058', '141059', '141060', '141061', '141062', '141063', '141064', '141065', '141066', '141067', '141068', '141069', '141070', '141071', '141072', '141073', '141074', '141075', '141076', '141077', '141078', '141079', '141080', '141081', '141082', '141083', '141084', '141085', '141086', '141087', '141088', '141089', '141090', '141091', '141092', '141093', '141094', '141095', '141096', '141097', '141098', '141099'],
    'Haryana': ['122001', '122002', '122003', '122004', '122005', '122006', '122007', '122008', '122009', '122010', '122011', '122012', '122013', '122014', '122015', '122016', '122017', '122018', '122019', '122020', '122021', '122022', '122023', '122024', '122025', '122026', '122027', '122028', '122029', '122030', '122031', '122032', '122033', '122034', '122035', '122036', '122037', '122038', '122039', '122040', '122041', '122042', '122043', '122044', '122045', '122046', '122047', '122048', '122049', '122050', '122051', '122052', '122053', '122054', '122055', '122056', '122057', '122058', '122059', '122060', '122061', '122062', '122063', '122064', '122065', '122066', '122067', '122068', '122069', '122070', '122071', '122072', '122073', '122074', '122075', '122076', '122077', '122078', '122079', '122080', '122081', '122082', '122083', '122084', '122085', '122086', '122087', '122088', '122089', '122090', '122091', '122092', '122093', '122094', '122095', '122096', '122097', '122098', '122099'],
    'Kerala': ['682001', '682002', '682003', '682004', '682005', '682006', '682007', '682008', '682009', '682010', '682011', '682012', '682013', '682014', '682015', '682016', '682017', '682018', '682019', '682020', '682021', '682022', '682023', '682024', '682025', '682026', '682027', '682028', '682029', '682030', '682031', '682032', '682033', '682034', '682035', '682036', '682037', '682038', '682039', '682040', '682041', '682042', '682043', '682044', '682045', '682046', '682047', '682048', '682049', '682050', '682051', '682052', '682053', '682054', '682055', '682056', '682057', '682058', '682059', '682060', '682061', '682062', '682063', '682064', '682065', '682066', '682067', '682068', '682069', '682070', '682071', '682072', '682073', '682074', '682075', '682076', '682077', '682078', '682079', '682080', '682081', '682082', '682083', '682084', '682085', '682086', '682087', '682088', '682089', '682090', '682091', '682092', '682093', '682094', '682095', '682096', '682097', '682098', '682099']
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    panNumber: '',
    dateOfBirth: '',
    monthlyIncome: '',
    occupation: '',
    state: '',
    pincode: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.panNumber.trim()) {
      newErrors.panNumber = 'PAN Number is required';
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber.toUpperCase())) {
      newErrors.panNumber = 'Please enter a valid PAN Number (e.g., ABCDE1234F)';
    }
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = 'Date of birth is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    if (!formData.occupation.trim()) newErrors.occupation = 'Occupation is required';
    if (!formData.monthlyIncome.trim()) newErrors.monthlyIncome = 'Monthly income is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Reset pincode when state changes
    if (name === 'state') {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        pincode: ''
      }));
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Prepare data for Supabase - matching the new database schema
      const applicationData = {
        full_name: formData.name,
        email: formData.email,
        mobile_number: formData.phone,
        pan_number: formData.panNumber.toUpperCase(),
        date_of_birth: formData.dateOfBirth,
        monthly_income: formData.monthlyIncome,
        occupation: formData.occupation,
        state: formData.state,
        pincode: formData.pincode,
        card_name: cardName,
        card_bank: cardBank,
        apply_link: applyLink,
        application_date: new Date().toISOString(),
        created_at: new Date().toISOString()
      };

      // Insert data into Supabase
      const { data, error } = await supabase
        .from('credit_card_applications')
        .insert([applicationData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message);
      }

      console.log('Application saved successfully:', data);
      
      // Show success state
      setIsSubmitted(true);
      
      // Redirect to application link after 2 seconds
      setTimeout(() => {
        window.open(applyLink, '_blank');
        onClose();
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(`Failed to submit form: ${error.message}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-6 sm:p-8 max-w-md w-full mx-auto text-center">
          <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Your application for {cardName} has been submitted successfully. 
            You will be redirected to the bank's application page shortly.
          </p>
          <div className="animate-pulse text-sm text-gray-500">
            Redirecting to application page...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 w-full max-w-2xl mx-auto max-h-[95vh] overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Apply for {cardName}</h2>
            <p className="text-sm sm:text-base text-gray-600">{cardBank}</p>
          </div>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-50 self-start sm:self-auto"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {submitError && (
          <div className="mb-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <span className="text-red-700 text-sm sm:text-base">{submitError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter 10-digit mobile number"
              />
              {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                PAN Number *
              </label>
              <input
                type="text"
                name="panNumber"
                value={formData.panNumber}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.panNumber ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter PAN Number (e.g., ABCDE1234F)"
                maxLength="10"
                style={{ textTransform: 'uppercase' }}
              />
              {errors.panNumber && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.panNumber}</p>}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.dateOfBirth ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Select your date of birth"
              />
              {errors.dateOfBirth && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.dateOfBirth}</p>}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Monthly Income *
              </label>
              <select
                name="monthlyIncome"
                value={formData.monthlyIncome}
                onChange={handleInputChange}
                className={`form-select ${
                  errors.monthlyIncome ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select monthly income</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000-75000">₹50,000 - ₹75,000</option>
                <option value="75000-100000">₹75,000 - ₹1,00,000</option>
                <option value="100000-150000">₹1,00,000 - ₹1,50,000</option>
                <option value="150000-200000">₹1,50,000 - ₹2,00,000</option>
                <option value="200000+">₹2,00,000+</option>
              </select>
              {errors.monthlyIncome && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.monthlyIncome}</p>}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Occupation *
              </label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className={`form-select ${
                  errors.occupation ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select your occupation</option>
                <option value="Salaried Employee">Salaried Employee</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Professional">Professional (Doctor, Lawyer, CA, etc.)</option>
                <option value="Government Employee">Government Employee</option>
                <option value="Freelancer">Freelancer</option>
                <option value="Student">Student</option>
                <option value="Retired">Retired</option>
                <option value="Homemaker">Homemaker</option>
                <option value="Other">Other</option>
              </select>
              {errors.occupation && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.occupation}</p>}
            </div>

            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                State *
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className={`form-select ${
                  errors.state ? 'border-red-300' : 'border-gray-300'
                }`}
              >
                <option value="">Select your state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              </select>
              {errors.state && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.state}</p>}
            </div>
            
            <div>
              <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                Pincode *
              </label>
              <select
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className={`form-select ${
                  errors.pincode ? 'border-red-300' : 'border-gray-300'
                }`}
                disabled={!formData.state}
              >
                <option value="">
                  {formData.state ? 'Select your pincode' : 'Please select state first'}
                </option>
                {formData.state && statePincodes[formData.state] && 
                  statePincodes[formData.state].map(pincode => (
                    <option key={pincode} value={pincode}>{pincode}</option>
                  ))
                }
              </select>
              {errors.pincode && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.pincode}</p>}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end space-y-3 sm:space-y-0 sm:space-x-3 pt-6">
            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              className="btn-secondary disabled:opacity-50 w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit Application</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm; 