# RLS Policy Fix for Advisor Registration

## Problem
The advisor registration is failing with the error:
```
Registration failed: new row violates row-level security policy for table "advisors". Please try again.
```

## Solution
The issue is that the Row Level Security (RLS) policies are too restrictive and don't allow public users to register as advisors.

## How to Fix

### Option 1: Quick Fix (Recommended)
1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `fix_rls_policies.sql`
4. Click **Run** to execute the queries

### Option 2: Manual Fix
1. Go to your Supabase Dashboard
2. Navigate to **Authentication** → **Policies**
3. Find the `advisors` table
4. Delete the existing policies for INSERT operations
5. Create a new policy:
   - **Policy Name**: `Public can register as advisors`
   - **Target Roles**: `public`
   - **Policy Definition**: `FOR INSERT WITH CHECK (true)`

## What the Fix Does
- ✅ Allows public users to register as advisors
- ✅ Maintains security for other operations
- ✅ Allows admins to manage all advisor data
- ✅ Allows authenticated advisors to view their own data

## After Applying the Fix
1. Try registering as an advisor again
2. The registration should now work successfully
3. You'll see the success message and be redirected to the home page

## Security Notes
- The fix allows public registration but maintains security for other operations
- Only admins can view all advisor data
- Advisors can only view their own data when authenticated
- All other operations remain properly secured 