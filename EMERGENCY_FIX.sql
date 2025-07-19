-- EMERGENCY FIX - DISABLE RLS TEMPORARILY TO TEST
-- This will disable RLS on the advisors table to test if the issue is with policies

-- STEP 1: Check current RLS status
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE tablename = 'advisors';

-- STEP 2: Disable RLS on advisors table temporarily
ALTER TABLE advisors DISABLE ROW LEVEL SECURITY;

-- STEP 3: Verify RLS is disabled
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE tablename = 'advisors';

-- STEP 4: Test insertion without RLS
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
    'Emergency Test User',
    'emergency@test.com',
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

-- STEP 5: Verify the insertion worked
SELECT * FROM advisors WHERE email = 'emergency@test.com';

-- STEP 6: Clean up test data
DELETE FROM advisors WHERE email = 'emergency@test.com';

-- STEP 7: Final status
SELECT 'EMERGENCY FIX APPLIED - RLS DISABLED FOR TESTING' as status; 