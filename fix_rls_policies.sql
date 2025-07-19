-- Fix RLS Policies for Advisor Registration
-- Run this in your Supabase SQL Editor to fix the advisor registration issue

-- Drop existing policies that are causing issues
DROP POLICY IF EXISTS "Advisors can view their own data" ON advisors;
DROP POLICY IF EXISTS "Advisors can update their own data" ON advisors;

-- Create new policies that allow public registration
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

-- Also fix application policies
DROP POLICY IF EXISTS "Advisors can view their applications" ON advisor_applications;
DROP POLICY IF EXISTS "Advisors can insert their applications" ON advisor_applications;

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