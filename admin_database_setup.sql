-- Admin and Advisor System Database Setup
-- Run these queries in your Supabase SQL Editor

-- 1. Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Advisors Table
CREATE TABLE IF NOT EXISTS advisors (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    pan_number VARCHAR(10) NOT NULL,
    aadhar_number VARCHAR(12),
    bank_account_number VARCHAR(50),
    ifsc_code VARCHAR(20),
    bank_name VARCHAR(100),
    address TEXT,
    state VARCHAR(100),
    city VARCHAR(100),
    pincode VARCHAR(6),
    commission_rate DECIMAL(5,2) DEFAULT 2.00, -- Default 2% commission
    total_earnings DECIMAL(10,2) DEFAULT 0.00,
    total_payouts DECIMAL(10,2) DEFAULT 0.00,
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected, suspended
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Products Management Table
CREATE TABLE IF NOT EXISTS products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL, -- credit_card, personal_loan, business_loan
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
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Advisor Applications Table (Applications submitted by advisors)
CREATE TABLE IF NOT EXISTS advisor_applications (
    id BIGSERIAL PRIMARY KEY,
    advisor_id BIGINT REFERENCES advisors(id),
    product_id BIGINT REFERENCES products(id),
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    customer_mobile VARCHAR(15) NOT NULL,
    customer_pan VARCHAR(10) NOT NULL,
    customer_dob DATE NOT NULL,
    customer_income VARCHAR(100) NOT NULL,
    customer_occupation VARCHAR(255) NOT NULL,
    customer_state VARCHAR(100) NOT NULL,
    customer_pincode VARCHAR(6) NOT NULL,
    application_status VARCHAR(50) DEFAULT 'submitted', -- submitted, approved, rejected, disbursed
    commission_earned DECIMAL(10,2) DEFAULT 0.00,
    commission_paid BOOLEAN DEFAULT false,
    payout_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Commission Payouts Table
CREATE TABLE IF NOT EXISTS commission_payouts (
    id BIGSERIAL PRIMARY KEY,
    advisor_id BIGINT REFERENCES advisors(id),
    amount DECIMAL(10,2) NOT NULL,
    payout_method VARCHAR(50), -- bank_transfer, upi, etc.
    transaction_id VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending', -- pending, processed, failed
    payout_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Admin Activity Log
CREATE TABLE IF NOT EXISTS admin_activity_log (
    id BIGSERIAL PRIMARY KEY,
    admin_id BIGINT REFERENCES admin_users(id),
    action VARCHAR(255) NOT NULL,
    details TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_advisors_email ON advisors(email);
CREATE INDEX IF NOT EXISTS idx_advisors_status ON advisors(status);
CREATE INDEX IF NOT EXISTS idx_products_type ON products(type);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(is_active);
CREATE INDEX IF NOT EXISTS idx_advisor_applications_advisor ON advisor_applications(advisor_id);
CREATE INDEX IF NOT EXISTS idx_advisor_applications_status ON advisor_applications(application_status);
CREATE INDEX IF NOT EXISTS idx_commission_payouts_advisor ON commission_payouts(advisor_id);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE advisors ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE advisor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE commission_payouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access
CREATE POLICY "Admin users can manage all data" ON admin_users
    FOR ALL USING (auth.role() = 'service_role');

-- Allow public to insert new advisor registrations
CREATE POLICY "Public can register as advisors" ON advisors
    FOR INSERT WITH CHECK (true);

-- Allow advisors to view their own data (when authenticated)
CREATE POLICY "Advisors can view their own data" ON advisors
    FOR SELECT USING (auth.uid()::text = id::text OR auth.role() = 'service_role');

-- Allow advisors to update their own data (when authenticated)
CREATE POLICY "Advisors can update their own data" ON advisors
    FOR UPDATE USING (auth.uid()::text = id::text OR auth.role() = 'service_role');

-- Allow admin to manage all advisor data
CREATE POLICY "Admin can manage all advisors" ON advisors
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Public can view active products" ON products
    FOR SELECT USING (is_active = true);

CREATE POLICY "Admin can manage all products" ON products
    FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Advisors can view their applications" ON advisor_applications
    FOR SELECT USING (auth.uid()::text = advisor_id::text OR auth.role() = 'service_role');

CREATE POLICY "Advisors can insert their applications" ON advisor_applications
    FOR INSERT WITH CHECK (auth.uid()::text = advisor_id::text OR auth.role() = 'service_role');

-- Allow admin to manage all applications
CREATE POLICY "Admin can manage all applications" ON advisor_applications
    FOR ALL USING (auth.role() = 'service_role');

-- Allow admin to manage all payouts
CREATE POLICY "Admin can manage all payouts" ON commission_payouts
    FOR ALL USING (auth.role() = 'service_role');

-- Allow admin to manage all activity logs
CREATE POLICY "Admin can manage all activity logs" ON admin_activity_log
    FOR ALL USING (auth.role() = 'service_role');

-- Insert default admin user (change email and password as needed)
INSERT INTO admin_users (email, full_name, role) 
VALUES ('admin@financeangels.com', 'System Administrator', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Insert sample products (you can modify these)
INSERT INTO products (name, type, provider, category, rating, loan_amount, interest_rate, features, benefits, apply_link, commission_rate) VALUES
-- Personal Loans
('Poonawalla Fincorp Instant Personal Loan', 'personal_loan', 'Poonawalla Fincorp', 'Instant', 4.6, '₹5 Lakh', 'Starting from 10.49%', 'Collateral-free, Minimal documentation, No hidden charges', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/NWQ3MWNhZ', 2.5),
('Ring Power Loan', 'personal_loan', 'Ring Power', 'Quick', 4.5, '₹5 lakhs', 'Competitive rates', 'Hassle-free application process, Instant disbursal', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/OGRhOWVkY', 2.0),
('MoneyView Personal Loan', 'personal_loan', 'MoneyView', 'Paperless', 4.7, '₹10 Lakhs', 'Affordable rates', 'Collateral Free Loans, 24 Hour Disbursal, Affordable EMI plans', 'Simple application process, Hassle-Free Documentation', 'https://wee.bnking.in/c/NzY4YmEyY', 2.5),

-- Business Loans
('Flexiloans Business Loan', 'business_loan', 'Flexiloans', 'Business', 4.5, '₹20 lakhs', 'Competitive rates', 'Hassle-free application process, Instant approval', '100% online & secure process, Hassle-free application process', 'https://wee.bnking.in/c/YmI0NDhhZ', 3.0),
('Lendingkart Business Loan', 'business_loan', 'Lendingkart', 'Business', 4.6, '₹35 lakhs', 'Competitive rates', 'Minimal documentation, 72-hour disbursal', '100% Simple & Secure Process, Easy online application process', 'https://wee.bnking.in/c/MDEzZDliZ', 3.5),

-- Credit Cards
('IndusInd Platinum CC', 'credit_card', 'IndusInd Bank', 'Premium', 4.6, NULL, '3.49%', 'Welcome benefits, 1+1 movie tickets, Reward points/cashback', 'Travel benefits, Fast processing, 100% online process', 'https://wee.bnking.in/c/YzZlYjlkY', 1.5),
('HDFC Swiggy Credit Card', 'credit_card', 'HDFC Bank', 'Lifestyle', 4.6, NULL, '3.49%', '10% cashback on Swiggy, 5% on other online spends', 'Complimentary Swiggy One Membership, 100% online process', 'https://wee.bnking.in/c/MmE0YTVmY', 1.8)
ON CONFLICT DO NOTHING; 