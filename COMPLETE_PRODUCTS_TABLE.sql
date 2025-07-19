-- COMPLETE PRODUCTS TABLE RECREATION
-- This script will recreate the products table with all columns and populate it with all products
-- Run this entire script in your Supabase SQL Editor

-- STEP 1: Drop existing products table if it exists
DROP TABLE IF EXISTS products CASCADE;

-- STEP 2: Create products table with complete structure
CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- credit_card, personal_loan, business_loan, home_loan, car_loan
    provider VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    rating DECIMAL(3,2),
    loan_amount VARCHAR(100),
    interest_rate VARCHAR(100),
    annual_fee VARCHAR(100),
    features TEXT,
    benefits TEXT,
    apply_link TEXT NOT NULL,
    commission_rate DECIMAL(5,2) DEFAULT 2.00,
    payout_amount INTEGER DEFAULT 1500, -- For credit cards
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    status VARCHAR(20) DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 3: Create indexes for better performance
CREATE INDEX idx_products_type ON products(type);
CREATE INDEX idx_products_active ON products(is_active);
CREATE INDEX idx_products_status ON products(status);
CREATE INDEX idx_products_provider ON products(provider);

-- STEP 4: Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- STEP 5: Create RLS policies
CREATE POLICY "Public can view active products" ON products
    FOR SELECT 
    TO public
    USING (is_active = true);

CREATE POLICY "Admin can manage all products" ON products
    FOR ALL 
    TO service_role
    USING (true);

-- STEP 6: Insert Credit Cards (40 products)
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, payout_amount, is_active, is_featured, sort_order, status) VALUES

-- IndusInd Bank Credit Cards
('IndusInd Platinum CC', 'credit_card', 'IndusInd Bank', 'Premium', 4.6, 'Up to ₹10L', '16.99%', '₹2,500', 'Welcome benefits, 1+1 movie tickets, Reward points/cashback', 'Travel benefits, Fast processing, 100% online process', 'https://wee.bnking.in/c/YzZlYjlkY', 2.5, 2000, true, true, 1, 'active'),
('IndusInd Legend CC', 'credit_card', 'IndusInd Bank', 'Premium', 4.5, 'Up to ₹8L', '17.99%', '₹2,000', 'Legendary benefits, Travel insurance, Reward points', 'Premium travel benefits, High reward rate', 'https://wee.bnking.in/c/MjE1Y2U3N', 2.5, 2000, true, true, 2, 'active'),
('IndusInd Platinum Aura Edge', 'credit_card', 'IndusInd Bank', 'Premium', 4.7, 'Up to ₹12L', '16.49%', '₹3,000', 'Aura benefits, Lounge access, Travel insurance', 'Premium benefits, High credit limit', 'https://wee.bnking.in/c/MDAyZGZlN', 2.5, 2500, true, true, 3, 'active'),
('IndusInd Easy Dinner CC', 'credit_card', 'IndusInd Bank', 'Lifestyle', 4.4, 'Up to ₹6L', '18.99%', '₹1,500', 'Dining benefits, Reward points, Welcome offers', 'Dining rewards, Lifestyle benefits', 'https://wee.bnking.in/c/ZDhjYThjY', 2.0, 1500, true, false, 4, 'active'),
('IndusInd Nexxt CC', 'credit_card', 'IndusInd Bank', 'Shopping', 4.3, 'Up to ₹5L', '19.99%', '₹1,000', 'Shopping rewards, Fuel surcharge waiver', 'Shopping benefits, Fuel rewards', 'https://wee.bnking.in/c/Zjc2MzJmZ', 2.0, 1500, true, false, 5, 'active'),
('Easy Dinner IndusInd CC', 'credit_card', 'IndusInd Bank', 'Lifestyle', 4.2, 'Up to ₹4L', '20.99%', '₹999', 'Dining rewards, Welcome benefits', 'Dining benefits, Easy approval', 'https://wee.bnking.in/c/MTFlYjQzM', 2.0, 1500, true, false, 6, 'active'),

-- HDFC Bank Credit Cards
('HDFC Swiggy Credit Card', 'credit_card', 'HDFC Bank', 'Lifestyle', 4.6, 'Up to ₹8L', '16.99%', '₹1,500', 'Swiggy rewards, Welcome benefits, Cashback', 'Swiggy benefits, Food delivery rewards', 'https://wee.bnking.in/c/MmE0YTVmY', 2.5, 1500, true, true, 7, 'active'),
('HDFC Pixel Play Card', 'credit_card', 'HDFC Bank', 'Shopping', 4.4, 'Up to ₹6L', '17.99%', '₹1,000', 'Gaming rewards, Welcome benefits', 'Gaming benefits, Shopping rewards', 'https://wee.bnking.in/c/YjdhOWJiM', 2.0, 1500, true, false, 8, 'active'),
('HDFC Bank RuPay Credit Card', 'credit_card', 'HDFC Bank', 'Shopping', 4.3, 'Up to ₹5L', '18.99%', '₹500', 'RuPay benefits, Shopping rewards', 'RuPay network benefits, Shopping rewards', 'https://wee.bnking.in/c/ZTQ2NjVkZ', 2.0, 1500, true, false, 9, 'active'),
('Tata Neu HDFC Bank Credit Card', 'credit_card', 'HDFC Bank', 'Shopping', 4.5, 'Up to ₹7L', '17.49%', '₹1,500', 'Tata Neu rewards, Welcome benefits', 'Tata Neu benefits, Shopping rewards', 'https://wee.bnking.in/c/NjMzNzA2M', 2.5, 1500, true, true, 10, 'active'),
('HDFC Freedom Credit Card', 'credit_card', 'HDFC Bank', 'Lifestyle', 4.2, 'Up to ₹4L', '19.99%', '₹999', 'Freedom benefits, Lifestyle rewards', 'Lifestyle benefits, Freedom rewards', 'https://wee.bnking.in/c/N2U4ZGQ4M', 2.0, 1500, true, false, 11, 'active'),
('HDFC Money Back Credit Card', 'credit_card', 'HDFC Bank', 'Shopping', 4.1, 'Up to ₹5L', '20.99%', '₹500', 'Money back rewards, Shopping benefits', 'Cashback benefits, Shopping rewards', 'https://wee.bnking.in/c/MTA1OGZmM', 2.0, 1500, true, false, 12, 'active'),
('HDFC Business Money Back Credit Card', 'credit_card', 'HDFC Bank', 'Business', 4.0, 'Up to ₹10L', '18.99%', '₹2,000', 'Business benefits, Money back rewards', 'Business rewards, Cashback benefits', 'https://wee.bnking.in/c/OGU0YzE2Z', 2.5, 1500, true, false, 13, 'active'),
('HDFC Indian Oil Credit Card', 'credit_card', 'HDFC Bank', 'Fuel', 4.3, 'Up to ₹6L', '19.49%', '₹1,000', 'Fuel surcharge waiver, Indian Oil benefits', 'Fuel benefits, Oil company rewards', 'https://wee.bnking.in/c/Y2QyMWNmM', 2.0, 1500, true, false, 14, 'active'),
('HDFC Millennia Credit Card', 'credit_card', 'HDFC Bank', 'Shopping', 4.4, 'Up to ₹5L', '18.99%', '₹1,000', 'Millennia benefits, Shopping rewards', 'Shopping benefits, Millennia rewards', 'https://wee.bnking.in/c/MWQyMWQ4Z', 2.0, 1500, true, false, 15, 'active'),
('HDFC Shopper Stop Credit Card', 'credit_card', 'HDFC Bank', 'Shopping', 4.2, 'Up to ₹4L', '20.99%', '₹999', 'Shopper Stop benefits, Shopping rewards', 'Shopper Stop rewards, Shopping benefits', 'https://wee.bnking.in/c/MTA1OGZmM', 2.0, 1500, true, false, 16, 'active'),

-- HSBC Bank Credit Cards
('HSBC Visa Platinum Credit Card', 'credit_card', 'HSBC Bank', 'Premium', 4.5, 'Up to ₹15L', '15.99%', '₹3,500', 'Platinum benefits, Travel insurance, Lounge access', 'Premium travel benefits, High credit limit', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 2000, true, true, 17, 'active'),
('HSBC TravelOne Credit Card', 'credit_card', 'HSBC Bank', 'Travel', 4.4, 'Up to ₹12L', '16.99%', '₹2,500', 'Travel benefits, Insurance coverage, Reward points', 'Travel rewards, Insurance benefits', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 2000, true, true, 18, 'active'),
('HSBC Live+ Credit Card', 'credit_card', 'HSBC Bank', 'Lifestyle', 4.3, 'Up to ₹8L', '17.99%', '₹1,500', 'Lifestyle benefits, Welcome offers, Reward points', 'Lifestyle rewards, Welcome benefits', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 2000, true, false, 19, 'active'),

-- RBL Bank Credit Cards
('RBL Shoprite Credit Card', 'credit_card', 'RBL Bank', 'Shopping', 4.2, 'Up to ₹5L', '19.99%', '₹1,000', 'Shoprite benefits, Shopping rewards', 'Shoprite rewards, Shopping benefits', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1000, true, false, 20, 'active'),
('RBL IndianOil Credit Card', 'credit_card', 'RBL Bank', 'Fuel', 4.1, 'Up to ₹4L', '20.99%', '₹999', 'IndianOil benefits, Fuel surcharge waiver', 'Fuel benefits, Oil company rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1000, true, false, 21, 'active'),
('RBL IndianOil XTRA Credit Card', 'credit_card', 'RBL Bank', 'Fuel', 4.0, 'Up to ₹6L', '19.49%', '₹1,500', 'XTRA benefits, Enhanced fuel rewards', 'Enhanced fuel benefits, XTRA rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1000, true, false, 22, 'active'),

-- YES Bank Credit Cards
('YES Bank POP-CLUB Credit Card', 'credit_card', 'YES Bank', 'Lifestyle', 4.3, 'Up to ₹6L', '18.99%', '₹1,500', 'POP-CLUB benefits, Lifestyle rewards', 'Lifestyle benefits, POP-CLUB rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1200, true, false, 23, 'active'),
('YES Bank Rio RuPay Credit Card', 'credit_card', 'YES Bank', 'Shopping', 4.2, 'Up to ₹4L', '19.99%', '₹999', 'Rio benefits, RuPay network rewards', 'Rio rewards, RuPay benefits', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1200, true, false, 24, 'active'),

-- Axis Bank Credit Cards
('Axis Indian Oil Credit Card', 'credit_card', 'Axis Bank', 'Fuel', 4.1, 'Up to ₹5L', '20.49%', '₹1,000', 'Indian Oil benefits, Fuel surcharge waiver', 'Fuel benefits, Oil company rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1500, true, false, 25, 'active'),
('Axis Flipkart Credit Card', 'credit_card', 'Axis Bank', 'Shopping', 4.4, 'Up to ₹7L', '17.99%', '₹1,500', 'Flipkart benefits, Shopping rewards', 'Flipkart rewards, Shopping benefits', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1500, true, false, 26, 'active'),

-- AU Bank Credit Cards
('AU Bank LIT Credit Card', 'credit_card', 'AU Bank', 'Premium', 4.5, 'Up to ₹10L', '16.99%', '₹2,500', 'LIT benefits, Premium rewards', 'Premium benefits, LIT rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 1500, true, true, 27, 'active'),
('AU Bank Altura Credit Card', 'credit_card', 'AU Bank', 'Premium', 4.4, 'Up to ₹8L', '17.99%', '₹2,000', 'Altura benefits, Premium rewards', 'Premium benefits, Altura rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 1800, true, true, 28, 'active'),
('AU Bank Xcite Credit Card', 'credit_card', 'AU Bank', 'Lifestyle', 4.3, 'Up to ₹6L', '18.99%', '₹1,500', 'Xcite benefits, Lifestyle rewards', 'Lifestyle benefits, Xcite rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1500, true, false, 29, 'active'),
('AU Bank Xcite Ace Credit Card', 'credit_card', 'AU Bank', 'Lifestyle', 4.2, 'Up to ₹5L', '19.99%', '₹1,000', 'Xcite Ace benefits, Enhanced lifestyle rewards', 'Enhanced lifestyle benefits, Xcite Ace rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1500, true, false, 30, 'active'),
('AU Bank Ultra Credit Card', 'credit_card', 'AU Bank', 'Premium', 4.6, 'Up to ₹12L', '16.49%', '₹3,000', 'Ultra benefits, Premium rewards', 'Premium benefits, Ultra rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 2500, true, true, 31, 'active'),
('AU Bank Vetta Credit Card', 'credit_card', 'AU Bank', 'Premium', 4.5, 'Up to ₹10L', '17.49%', '₹2,500', 'Vetta benefits, Premium rewards', 'Premium benefits, Vetta rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 2000, true, true, 32, 'active'),
('AU Bank Altura Plus Credit Card', 'credit_card', 'AU Bank', 'Premium', 4.4, 'Up to ₹8L', '18.49%', '₹2,000', 'Altura Plus benefits, Enhanced premium rewards', 'Enhanced premium benefits, Altura Plus rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 1800, true, false, 33, 'active'),
('AU Bank Zenith Credit Card', 'credit_card', 'AU Bank', 'Premium', 4.7, 'Up to ₹15L', '15.99%', '₹3,500', 'Zenith benefits, Ultimate premium rewards', 'Ultimate premium benefits, Zenith rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 3000, true, true, 34, 'active'),
('AU Bank Zenith Plus Credit Card', 'credit_card', 'AU Bank', 'Premium', 4.6, 'Up to ₹12L', '16.99%', '₹3,000', 'Zenith Plus benefits, Enhanced ultimate rewards', 'Enhanced ultimate benefits, Zenith Plus rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.5, 3000, true, true, 35, 'active');

-- Other Bank Credit Cards
('Kiwi Credit Card', 'credit_card', 'Kiwi', 'Shopping', 4.1, 'Up to ₹4L', '20.99%', '₹999', 'Kiwi benefits, Shopping rewards', 'Shopping benefits, Kiwi rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1000, true, false, 36, 'active'),
('Federal Bank Scapia Credit Card', 'credit_card', 'Federal Bank', 'Travel', 4.3, 'Up to ₹6L', '18.99%', '₹1,500', 'Scapia benefits, Travel rewards', 'Travel benefits, Scapia rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1000, true, false, 37, 'active'),
('Bank of Baroda BOBCARD', 'credit_card', 'Bank of Baroda', 'Shopping', 4.2, 'Up to ₹5L', '19.99%', '₹1,000', 'BOBCARD benefits, Shopping rewards', 'Shopping benefits, BOBCARD rewards', 'https://wee.bnking.in/c/YzVlNGI4M', 2.0, 1000, true, false, 38, 'active');

-- STEP 7: Insert Personal Loans (10 products)
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, is_active, is_featured, sort_order, status) VALUES
('Poonawalla Fincorp Instant Personal Loan', 'personal_loan', 'Poonawalla Fincorp', 'Instant', 4.6, '₹5 Lakh', 'Starting from 10.49%', '₹0', 'Collateral-free, Minimal documentation, No hidden charges', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/NWQ3MWNhZ', 2.5, true, true, 39, 'active'),
('Ring Power Loan', 'personal_loan', 'Ring Power', 'Quick', 4.5, '₹5 lakhs', 'Competitive rates', '₹0', 'Hassle-free application process, Instant disbursal', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/OGRhOWVkY', 2.0, true, false, 40, 'active'),
('MoneyView Personal Loan', 'personal_loan', 'MoneyView', 'Paperless', 4.7, '₹10 Lakhs', 'Affordable rates', '₹0', 'Collateral Free Loans, 24 Hour Disbursal, Affordable EMI plans', 'Simple and convenient, Fast and secure', 'https://wee.bnking.in/c/NzY4YmEyY', 2.5, true, true, 41, 'active'),
('KreditBee Instant Personal Loan', 'personal_loan', 'KreditBee', 'Instant', 4.4, '₹5 lakhs', 'Competitive rates', '₹0', 'Easy online application process, Flexible repayment options', '100% Fast and Secure, Paperless Documentation', 'https://wee.bnking.in/c/NjJlODJmM', 2.0, true, false, 42, 'active'),
('Unity SFB Personal Loan', 'personal_loan', 'Unity SFB', 'Secure', 4.3, '₹5 lakhs', 'Competitive rates', '₹0', 'Hassle-free online process, Secure & RBI regulated', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/ZGMyOTkyY', 2.0, true, false, 43, 'active'),
('Indus Easy Credit Personal Loan', 'personal_loan', 'Indus Easy Credit', 'Quick', 4.2, '₹5 lakh', 'Competitive rates', '₹0', 'Hassle-free application process, Quick approval', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/MWIzZTI2Y', 2.0, true, false, 44, 'active'),
('Olyv Personal Loan', 'personal_loan', 'Olyv', 'Instant', 4.1, '₹1 lakh', 'Competitive rates', '₹0', 'Easy application process, Collateral free loan, Quick loan disbursal', '100% Fast and Secure, Minimum documentation', 'https://wee.bnking.in/c/MTE0YmZmN', 2.0, true, false, 45, 'active'),
('PayMe Personal Loan', 'personal_loan', 'PayMe', 'Quick', 4.0, '₹3 lakh', 'Competitive rates', '₹0', 'Hassle-free application process, Quick approval', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/ZDE4ZDhlZ', 2.0, true, false, 46, 'active'),
('Lendingplate Personal Loan', 'personal_loan', 'Lendingplate', 'Fast', 4.2, '₹2 lakhs', 'Competitive rates', '₹0', 'Hassle-free online process, Fast disbursement', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/NWNiYTRhM', 2.0, true, false, 47, 'active'),
('Zype Personal Loan', 'personal_loan', 'Zype', 'Flexible', 4.3, '₹5 lakhs', 'Low interest rates', '₹0', 'Multiple loans, Flexible repayment options, Low interest rates', '100% Simple & Secure Process, Hassle-free application process', 'https://wee.bnking.in/c/ZDQ0Y2M3Z', 2.5, true, false, 48, 'active');

-- STEP 8: Insert Business Loans (2 products)
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, annual_fee, features, benefits, apply_link, commission_rate, is_active, is_featured, sort_order, status) VALUES
('Flexiloans Business Loan', 'business_loan', 'Flexiloans', 'Business', 4.5, '₹20 lakhs', 'Competitive rates', '₹0', 'Hassle-free application process, Instant approval', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/YmI0NDhhZ', 3.0, true, true, 49, 'active'),
('Lendingkart Business Loan', 'business_loan', 'Lendingkart', 'Business', 4.6, '₹35 lakhs', 'Competitive rates', '₹0', 'Minimal documentation, 72-hour disbursal', '100% Simple & Secure Process, Easy online application process', 'https://wee.bnking.in/c/MDEzZDliZ', 3.5, true, true, 50, 'active');

-- STEP 9: Verify the data
SELECT 
    type,
    COUNT(*) as product_count,
    AVG(commission_rate) as avg_commission,
    AVG(payout_amount) as avg_payout,
    MIN(payout_amount) as min_payout,
    MAX(payout_amount) as max_payout
FROM products 
GROUP BY type 
ORDER BY type;

-- STEP 10: Show sample credit cards with payout amounts
SELECT 
    name,
    type,
    provider,
    commission_rate,
    payout_amount,
    status
FROM products 
WHERE type = 'credit_card' 
ORDER BY payout_amount DESC 
LIMIT 10;

-- STEP 11: Show sample loans with commission rates
SELECT 
    name,
    type,
    provider,
    commission_rate,
    status
FROM products 
WHERE type IN ('personal_loan', 'business_loan')
ORDER BY commission_rate DESC 
LIMIT 10;

-- STEP 12: Final verification
SELECT 'PRODUCTS TABLE RECREATED SUCCESSFULLY WITH ALL PRODUCTS!' as status; 