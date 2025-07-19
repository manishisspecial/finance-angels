-- IMMEDIATE FIX FOR ADVISOR REGISTRATION RLS ERROR
-- Copy and paste this entire script into your Supabase SQL Editor and run it

-- Step 1: Drop all existing policies on the advisors table
DROP POLICY IF EXISTS "Advisors can view their own data" ON advisors;
DROP POLICY IF EXISTS "Advisors can update their own data" ON advisors;
DROP POLICY IF EXISTS "Public can register as advisors" ON advisors;
DROP POLICY IF EXISTS "Admin can manage all advisors" ON advisors;

-- Step 2: Create a simple policy that allows public INSERT
CREATE POLICY "Enable public advisor registration" ON advisors
    FOR INSERT 
    TO public
    WITH CHECK (true);

-- Step 3: Create policy for admin to manage all advisor data
CREATE POLICY "Admin can manage all advisors" ON advisors
    FOR ALL 
    TO service_role
    USING (true);

-- Step 4: Create policy for authenticated users to view their own data
CREATE POLICY "Advisors can view own data" ON advisors
    FOR SELECT 
    TO authenticated
    USING (auth.uid()::text = id::text);

-- Step 5: Create policy for authenticated users to update their own data
CREATE POLICY "Advisors can update own data" ON advisors
    FOR UPDATE 
    TO authenticated
    USING (auth.uid()::text = id::text);

-- Step 6: Also fix the advisor_applications table policies
DROP POLICY IF EXISTS "Advisors can view their applications" ON advisor_applications;
DROP POLICY IF EXISTS "Advisors can insert their applications" ON advisor_applications;
DROP POLICY IF EXISTS "Admin can manage all applications" ON advisor_applications;

-- Create new policies for advisor_applications
CREATE POLICY "Enable advisor applications" ON advisor_applications
    FOR ALL 
    TO service_role
    USING (true);

CREATE POLICY "Advisors can view own applications" ON advisor_applications
    FOR SELECT 
    TO authenticated
    USING (auth.uid()::text = advisor_id::text);

CREATE POLICY "Advisors can insert own applications" ON advisor_applications
    FOR INSERT 
    TO authenticated
    WITH CHECK (auth.uid()::text = advisor_id::text);

-- Step 7: Fix commission_payouts table
DROP POLICY IF EXISTS "Admin can manage all payouts" ON commission_payouts;
CREATE POLICY "Enable commission payouts" ON commission_payouts
    FOR ALL 
    TO service_role
    USING (true);

-- Step 8: Fix admin_activity_log table
DROP POLICY IF EXISTS "Admin can manage all activity logs" ON admin_activity_log;
CREATE POLICY "Enable admin activity logs" ON admin_activity_log
    FOR ALL 
    TO service_role
    USING (true);

-- Step 9: Fix admin_users table
DROP POLICY IF EXISTS "Admin users can manage all data" ON admin_users;
CREATE POLICY "Enable admin users" ON admin_users
    FOR ALL 
    TO service_role
    USING (true);

-- Step 10: Fix products table
DROP POLICY IF EXISTS "Public can view active products" ON products;
DROP POLICY IF EXISTS "Admin can manage all products" ON products;

CREATE POLICY "Public can view active products" ON products
    FOR SELECT 
    TO public
    USING (is_active = true);

CREATE POLICY "Admin can manage all products" ON products
    FOR ALL 
    TO service_role
    USING (true);

-- Verification: Check if policies are created correctly
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename IN ('advisors', 'advisor_applications', 'products', 'commission_payouts', 'admin_activity_log', 'admin_users')
ORDER BY tablename, policyname; 