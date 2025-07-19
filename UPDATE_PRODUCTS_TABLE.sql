-- UPDATE PRODUCTS TABLE WITH STATUS FIELD AND SAMPLE DATA
-- This will add status field and populate with sample products organized by categories

-- STEP 1: Add status field to products table
ALTER TABLE products ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT 'active';

-- STEP 2: Clear existing products and add organized sample data
DELETE FROM products;

-- STEP 3: Insert Credit Card Products
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, is_active, is_featured, sort_order, status) VALUES
('HDFC Regalia Credit Card', 'credit_card', 'HDFC Bank', 'Premium', 4.5, 'Up to ₹10L', '16.99%', '₹2,500', 'Lounge access, Travel insurance, Reward points', 'Premium travel benefits, High reward rate', 'https://apply.hdfcbank.com/regalia', 2.5, true, true, 1, 'active'),
('SBI SimplyCLICK Credit Card', 'credit_card', 'State Bank of India', 'Shopping', 4.2, 'Up to ₹5L', '18.99%', '₹999', 'Online shopping rewards, Fuel surcharge waiver', 'Best for online shopping, Fuel benefits', 'https://apply.sbi.co.in/simplyclick', 2.0, true, false, 2, 'active'),
('ICICI Amazon Pay Credit Card', 'credit_card', 'ICICI Bank', 'Shopping', 4.3, 'Up to ₹8L', '17.99%', '₹500', 'Amazon rewards, No joining fee, Cashback', 'Amazon shopping benefits, No annual fee', 'https://apply.icici.com/amazonpay', 2.5, true, true, 3, 'active'),
('Axis Flipkart Credit Card', 'credit_card', 'Axis Bank', 'Shopping', 4.1, 'Up to ₹6L', '19.99%', '₹500', 'Flipkart rewards, Welcome benefits', 'Flipkart shopping rewards, Welcome offers', 'https://apply.axisbank.com/flipkart', 2.0, true, false, 4, 'active'),
('Kotak Urbane Credit Card', 'credit_card', 'Kotak Mahindra Bank', 'Lifestyle', 4.0, 'Up to ₹4L', '18.99%', '₹1,500', 'Lifestyle rewards, Dining benefits', 'Lifestyle and dining rewards', 'https://apply.kotak.com/urbane', 2.0, true, false, 5, 'active');

-- STEP 4: Insert Personal Loan Products
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, is_active, is_featured, sort_order, status) VALUES
('Poonawalla Fincorp Instant Personal Loan', 'personal_loan', 'Poonawalla Fincorp', 'Instant', 4.4, '₹50K - ₹25L', '10.99%', '₹0', 'Instant approval, Minimal documentation', 'Quick disbursal, Low interest rates', 'https://apply.poonawalla.com/instant', 2.5, true, true, 6, 'active'),
('Ring Power Loan', 'personal_loan', 'Ring Power', 'Quick', 4.2, '₹25K - ₹15L', '12.99%', '₹0', 'Quick processing, Flexible repayment', 'Fast approval, Flexible terms', 'https://apply.ringpower.com/quick', 2.0, true, false, 7, 'active'),
('MoneyView Personal Loan', 'personal_loan', 'MoneyView', 'Paperless', 4.3, '₹10K - ₹10L', '11.99%', '₹0', 'Paperless application, Instant approval', 'Digital process, Quick approval', 'https://apply.moneyview.com/paperless', 2.5, true, true, 8, 'active'),
('Bajaj Finserv Personal Loan', 'personal_loan', 'Bajaj Finserv', 'Premium', 4.1, '₹25K - ₹25L', '13.99%', '₹0', 'High loan amounts, Flexible tenure', 'High loan limits, Flexible repayment', 'https://apply.bajajfinserv.com/personal', 2.0, true, false, 9, 'active'),
('HDFC Personal Loan', 'personal_loan', 'HDFC Bank', 'Bank', 4.5, '₹50K - ₹40L', '10.49%', '₹0', 'Low interest rates, Quick processing', 'Competitive rates, Fast approval', 'https://apply.hdfcbank.com/personal', 2.5, true, true, 10, 'active');

-- STEP 5: Insert Business Loan Products
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, is_active, is_featured, sort_order, status) VALUES
('HDFC Business Loan', 'business_loan', 'HDFC Bank', 'SME', 4.4, '₹5L - ₹50L', '12.99%', '₹0', 'SME focused, Quick disbursal', 'SME friendly, Quick processing', 'https://apply.hdfcbank.com/business', 2.5, true, true, 11, 'active'),
('ICICI Business Loan', 'business_loan', 'ICICI Bank', 'Corporate', 4.3, '₹10L - ₹1Cr', '13.99%', '₹0', 'High loan amounts, Flexible terms', 'Large loan amounts, Flexible repayment', 'https://apply.icici.com/business', 2.0, true, false, 12, 'active'),
('Axis Business Loan', 'business_loan', 'Axis Bank', 'SME', 4.2, '₹5L - ₹75L', '13.49%', '₹0', 'SME support, Quick approval', 'SME focused, Fast approval', 'https://apply.axisbank.com/business', 2.5, true, false, 13, 'active'),
('Kotak Business Loan', 'business_loan', 'Kotak Mahindra Bank', 'Startup', 4.1, '₹2L - ₹25L', '14.99%', '₹0', 'Startup friendly, Minimal documentation', 'Startup focused, Easy documentation', 'https://apply.kotak.com/business', 2.0, true, false, 14, 'active'),
('SBI Business Loan', 'business_loan', 'State Bank of India', 'Government', 4.0, '₹5L - ₹50L', '12.49%', '₹0', 'Government bank, Low rates', 'Government bank benefits, Low interest', 'https://apply.sbi.co.in/business', 2.5, true, false, 15, 'active');

-- STEP 6: Insert Home Loan Products
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, is_active, is_featured, sort_order, status) VALUES
('HDFC Home Loan', 'home_loan', 'HDFC Bank', 'Residential', 4.5, '₹5L - ₹10Cr', '8.99%', '₹0', 'Low interest rates, Long tenure', 'Competitive rates, Long repayment period', 'https://apply.hdfcbank.com/home', 2.5, true, true, 16, 'active'),
('SBI Home Loan', 'home_loan', 'State Bank of India', 'Government', 4.4, '₹5L - ₹15Cr', '8.49%', '₹0', 'Government bank, Low processing fee', 'Government bank benefits, Low fees', 'https://apply.sbi.co.in/home', 2.0, true, false, 17, 'active'),
('ICICI Home Loan', 'home_loan', 'ICICI Bank', 'Premium', 4.3, '₹5L - ₹10Cr', '9.49%', '₹0', 'Quick processing, Flexible terms', 'Fast approval, Flexible repayment', 'https://apply.icici.com/home', 2.5, true, false, 18, 'active'),
('Axis Home Loan', 'home_loan', 'Axis Bank', 'Residential', 4.2, '₹5L - ₹8Cr', '9.99%', '₹0', 'Competitive rates, Quick approval', 'Good rates, Fast processing', 'https://apply.axisbank.com/home', 2.0, true, false, 19, 'active'),
('Kotak Home Loan', 'home_loan', 'Kotak Mahindra Bank', 'Premium', 4.1, '₹5L - ₹7Cr', '10.49%', '₹0', 'Premium service, Flexible terms', 'Premium customer service, Flexible terms', 'https://apply.kotak.com/home', 2.5, true, false, 20, 'active');

-- STEP 7: Insert Car Loan Products
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, is_active, is_featured, sort_order, status) VALUES
('HDFC Car Loan', 'car_loan', 'HDFC Bank', 'New Car', 4.4, '₹1L - ₹50L', '9.99%', '₹0', 'Low interest rates, Quick approval', 'Competitive rates, Fast approval', 'https://apply.hdfcbank.com/car', 2.5, true, true, 21, 'active'),
('SBI Car Loan', 'car_loan', 'State Bank of India', 'Government', 4.3, '₹1L - ₹75L', '9.49%', '₹0', 'Government bank, Low processing fee', 'Government bank benefits, Low fees', 'https://apply.sbi.co.in/car', 2.0, true, false, 22, 'active'),
('ICICI Car Loan', 'car_loan', 'ICICI Bank', 'Premium', 4.2, '₹1L - ₹60L', '10.49%', '₹0', 'Quick processing, Flexible terms', 'Fast approval, Flexible repayment', 'https://apply.icici.com/car', 2.5, true, false, 23, 'active'),
('Axis Car Loan', 'car_loan', 'Axis Bank', 'New Car', 4.1, '₹1L - ₹45L', '10.99%', '₹0', 'Competitive rates, Quick approval', 'Good rates, Fast processing', 'https://apply.axisbank.com/car', 2.0, true, false, 24, 'active'),
('Kotak Car Loan', 'car_loan', 'Kotak Mahindra Bank', 'Premium', 4.0, '₹1L - ₹40L', '11.49%', '₹0', 'Premium service, Flexible terms', 'Premium customer service, Flexible terms', 'https://apply.kotak.com/car', 2.5, true, false, 25, 'active');

-- STEP 8: Verify the data
SELECT 
    type,
    COUNT(*) as product_count,
    AVG(commission_rate) as avg_commission,
    SUM(CASE WHEN is_active THEN 1 ELSE 0 END) as active_products
FROM products 
GROUP BY type 
ORDER BY type;

-- STEP 9: Final verification
SELECT 'PRODUCTS TABLE UPDATED SUCCESSFULLY!' as status; 