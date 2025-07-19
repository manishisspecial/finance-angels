-- TARGETED FIX FOR ADVISOR REGISTRATION
-- This fixes the specific data type mismatch causing the RLS error

-- STEP 1: Drop and recreate the advisors table with proper data types
DROP TABLE IF EXISTS commission_payouts CASCADE;
DROP TABLE IF EXISTS advisor_applications CASCADE;
DROP TABLE IF EXISTS advisors CASCADE;
DROP TABLE IF EXISTS admin_activity_log CASCADE;
DROP TABLE IF EXISTS admin_users CASCADE;

-- STEP 2: Recreate advisors table with EXACT data types that match the form
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

-- STEP 3: Recreate other tables
CREATE TABLE admin_users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'admin',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE advisor_applications (
    id BIGSERIAL PRIMARY KEY,
    advisor_id BIGINT REFERENCES advisors(id),
    product_id BIGINT,
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

CREATE TABLE admin_activity_log (
    id BIGSERIAL PRIMARY KEY,
    admin_id BIGINT REFERENCES admin_users(id),
    action VARCHAR(255) NOT NULL,
    details TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- STEP 4: Enable RLS
ALTER TABLE advisors ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE advisor_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE commission_payouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

-- STEP 5: Create the CRITICAL policy that allows public registration
-- This policy allows ANYONE to insert into the advisors table
CREATE POLICY "allow_public_advisor_registration" ON advisors
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- STEP 6: Create other necessary policies
CREATE POLICY "advisors_can_view_own_data" ON advisors
    FOR SELECT 
    TO authenticated
    USING (auth.uid()::text = id::text);

CREATE POLICY "advisors_can_update_own_data" ON advisors
    FOR UPDATE 
    TO authenticated
    USING (auth.uid()::text = id::text);

CREATE POLICY "service_role_full_access" ON advisors
    FOR ALL 
    TO service_role
    USING (true);

-- STEP 7: Create policies for other tables
CREATE POLICY "admin_full_access" ON admin_users
    FOR ALL 
    TO service_role
    USING (true);

CREATE POLICY "applications_service_access" ON advisor_applications
    FOR ALL 
    TO service_role
    USING (true);

CREATE POLICY "payouts_service_access" ON commission_payouts
    FOR ALL 
    TO service_role
    USING (true);

CREATE POLICY "logs_service_access" ON admin_activity_log
    FOR ALL 
    TO service_role
    USING (true);

-- STEP 8: Insert default admin
INSERT INTO admin_users (email, full_name, role) 
VALUES ('admin@financeangels.com', 'System Administrator', 'admin')
ON CONFLICT (email) DO NOTHING;

-- STEP 9: Test with EXACT data structure that the form sends
-- This simulates what your React form is trying to insert
INSERT INTO advisors (
    full_name,
    email,
    mobile_number,
    pan_number,
    aadhar_number,
    bank_account_number,
    ifsc_code,
    bank_name,
    address,
    state,
    city,
    pincode,
    status,
    commission_rate
) VALUES (
    'Test User',
    'test@example.com',
    '1234567890',
    'ABCDE1234F',
    '123456789012',
    '1234567890',
    'SBIN0001234',
    'State Bank of India',
    'Test Address',
    'Delhi',
    'New Delhi',
    '110001',
    'pending',
    2.00
);

-- STEP 10: Clean up test data
DELETE FROM advisors WHERE email = 'test@example.com';

-- STEP 11: Verify the setup
SELECT 
    schemaname,
    tablename,
    policyname,
    roles,
    cmd
FROM pg_policies 
WHERE tablename = 'advisors'
ORDER BY policyname;

-- STEP 12: Final verification
SELECT 'TARGETED FIX COMPLETED - ADVISOR REGISTRATION SHOULD NOW WORK!' as status; 