# STEP-BY-STEP RLS FIX FOR ADVISOR REGISTRATION

## 🚨 IMMEDIATE ACTION REQUIRED

The advisor registration is failing due to Row Level Security (RLS) policies. Follow these exact steps to fix it:

## Step 1: Access Supabase Dashboard
1. Go to [supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your project
4. Navigate to **SQL Editor** in the left sidebar

## Step 2: Run the Fix Script
1. Click **"New Query"** in the SQL Editor
2. Copy the **entire contents** of `IMMEDIATE_RLS_FIX.sql`
3. Paste it into the query editor
4. Click **"Run"** button (or press Ctrl+Enter)

## Step 3: Verify the Fix
After running the script, you should see:
- ✅ No error messages
- ✅ A results table showing the created policies
- ✅ Multiple rows with policy names like "Enable public advisor registration"

## Step 4: Test the Registration
1. Go back to your application
2. Navigate to `/become-advisor`
3. Fill out the advisor registration form
4. Click **"Submit Application"**
5. You should now see a **success message** instead of the error

## Alternative Method (If SQL Editor doesn't work)

### Method A: Through Supabase Dashboard
1. Go to **Authentication** → **Policies**
2. Find the `advisors` table
3. Click **"New Policy"**
4. Set these values:
   - **Policy Name**: `Enable public advisor registration`
   - **Target Roles**: `public`
   - **Policy Definition**: `FOR INSERT TO public WITH CHECK (true)`
5. Click **"Save"**

### Method B: Disable RLS Temporarily
1. Go to **Table Editor**
2. Find the `advisors` table
3. Click the **settings icon** (gear)
4. Toggle off **"Row Level Security"**
5. Test registration
6. Re-enable RLS after testing

## What This Fix Does
- ✅ **Allows public users** to register as advisors
- ✅ **Maintains security** for other operations
- ✅ **Enables admin access** to all advisor data
- ✅ **Fixes all related tables** (applications, payouts, etc.)

## Expected Result
After applying this fix:
- ✅ Advisor registration will work
- ✅ Success message will appear
- ✅ User will be redirected to home page
- ✅ No more RLS policy errors

## If Still Getting Errors
1. **Clear browser cache** and try again
2. **Check Supabase logs** for any additional errors
3. **Verify the policies** were created correctly
4. **Contact support** if issues persist

## Security Note
This fix allows public registration while maintaining security for:
- ✅ Admin operations (full access)
- ✅ Authenticated user operations (own data only)
- ✅ Product viewing (public read access) 