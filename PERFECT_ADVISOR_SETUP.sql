-- PERFECT ADVISOR SETUP - COMPLETE RECREATION
-- This will delete the advisors table and recreate it with proper RLS policies
-- Copy and paste this entire script into your Supabase SQL Editor and run it

-- STEP 1: Drop all related tables and policies
DROP TABLE IF EXISTS commission_payouts CASCADE;
DROP TABLE IF EXISTS advisor_applications CASCADE;
DROP TABLE IF EXISTS advisors CASCADE;
DROP TABLE IF EXISTS admin_activity_log CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;

-- STEP 2: Recreate admin_users table
CREATE TABLE admin_users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 3: Recreate advisors table with proper structure
CREATE TABLE advisors (
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
    commission_rate DECIMAL(5,2) DEFAULT 2.00,
    total_earnings DECIMAL(10,2) DEFAULT 0.00,
    total_payouts DECIMAL(10,2) DEFAULT 0.00,
    status VARCHAR(20) DEFAULT 'pending',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 4: Recreate advisor_applications table
CREATE TABLE advisor_applications (
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
    application_status VARCHAR(50) DEFAULT 'submitted',
    commission_earned DECIMAL(10,2) DEFAULT 0.00,
    commission_paid BOOLEAN DEFAULT false,
    payout_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 5: Recreate commission_payouts table
CREATE TABLE commission_payouts (
    id BIGSERIAL PRIMARY KEY,
    advisor_id BIGINT REFERENCES advisors(id),
    amount DECIMAL(10,2) NOT NULL,
    payout_method VARCHAR(50),
    transaction_id VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending',
    payout_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 6: Recreate admin_activity_log table
CREATE TABLE admin_activity_log (
    id BIGSERIAL PRIMARY KEY,
    admin_id BIGINT REFERENCES admin_users(id),
    action VARCHAR(255) NOT NULL,
    details TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 7: Create indexes for performance
CREATE INDEX idx_advisors_email ON advisors(email);
CREATE INDEX idx_advisors_status ON advisors(status);
CREATE INDEX idx_advisor_applications_advisor ON advisor_applications(advisor_id);
CREATE INDEX idx_advisor_applications_status ON advisor_applications(application_status);
CREATE INDEX idx_commission_payouts_advisor ON commission_payouts(advisor_id);

-- STEP 8: Enable Row Level Security on all tables
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE advisors ENABLE ROW LEVEL SECURITY;
ALTER TABLE advisor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE commission_payouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

-- STEP 9: Create PERFECT RLS policies for advisors table
-- Policy 1: Allow public to register as advisors (THIS IS THE KEY POLICY)
CREATE POLICY "public_can_register_as_advisors" ON advisors
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Policy 2: Allow authenticated users to view their own data
CREATE POLICY "advisors_can_view_own_data" ON advisors
    FOR SELECT 
    TO authenticated
    USING (auth.uid()::text = id::text);

-- Policy 3: Allow authenticated users to update their own data
CREATE POLICY "advisors_can_update_own_data" ON advisors
    FOR UPDATE 
    TO authenticated
    USING (auth.uid()::text = id::text);

-- Policy 4: Allow service role (admin) to manage all advisor data
CREATE POLICY "admin_can_manage_all_advisors" ON advisors
    FOR ALL 
    TO service_role
    USING (true);

-- STEP 10: Create RLS policies for advisor_applications
CREATE POLICY "advisors_can_view_own_applications" ON advisor_applications
    FOR SELECT 
    TO authenticated
    USING (auth.uid()::text = advisor_id::text);

CREATE POLICY "advisors_can_insert_own_applications" ON advisor_applications
    FOR INSERT 
    TO authenticated
    WITH CHECK (auth.uid()::text = advisor_id::text);

CREATE POLICY "admin_can_manage_all_applications" ON advisor_applications
    FOR ALL 
    TO service_role
    USING (true);

-- STEP 11: Create RLS policies for other tables
CREATE POLICY "admin_can_manage_all_payouts" ON commission_payouts
    FOR ALL 
    TO service_role
    USING (true);

CREATE POLICY "admin_can_manage_all_activity_logs" ON admin_activity_log
    FOR ALL 
    TO service_role
    USING (true);

CREATE POLICY "admin_can_manage_all_admin_users" ON admin_users
    FOR ALL 
    TO service_role
    USING (true);

-- STEP 12: Insert default admin user
INSERT INTO admin_users (email, full_name, role) 
VALUES ('admin@financeangels.com', 'System Administrator', 'admin')
ON CONFLICT (email) DO NOTHING;

-- STEP 13: Verify the setup
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename IN ('advisors', 'advisor_applications', 'commission_payouts', 'admin_activity_log', 'admin_users')
ORDER BY tablename, policyname;

-- STEP 14: Test the setup by checking if we can insert a test advisor
-- This should work without any RLS errors
INSERT INTO advisors (
    email, 
    full_name, 
    mobile_number, 
    pan_number, 
    aadhar_number,
    bank_account_number,
    ifsc_code,
    bank_name,
    address,
    state,
    city,
    pincode
) VALUES (
    'test@example.com',
    'Test Advisor',
    '1234567890',
    'ABCDE1234F',
    '123456789012',
    '1234567890',
    'SBIN0001234',
    'State Bank of India',
    'Test Address',
    'Delhi',
    'New Delhi',
    '110001'
);

-- STEP 15: Clean up test data
DELETE FROM advisors WHERE email = 'test@example.com';

-- STEP 16: Final verification
SELECT 'Setup completed successfully!' as status; 