# TROUBLESHOOTING GUIDE - ADVISOR REGISTRATION FIX

## 🚨 IMMEDIATE ACTION REQUIRED

### Step 1: Run the Final Fix
1. **Open Supabase SQL Editor**
2. **Copy the entire `FINAL_RLS_FIX.sql` script**
3. **Paste and run it**
4. **Wait for completion**

### Step 2: Verify the Fix Worked
After running the script, you should see:
- ✅ **No error messages**
- ✅ **Results table** showing 4 policies for advisors table
- ✅ **"FINAL RLS FIX COMPLETED SUCCESSFULLY!"** message

### Step 3: Test the Registration
1. **Go to your application** (`localhost:5173`)
2. **Navigate to `/become-advisor`**
3. **Fill out the form** with test data:
   - Full Name: Test User
   - Email: test@example.com
   - Mobile: 1234567890
   - PAN: ABCDE1234F
   - Aadhar: 123456789012
   - Bank Account: 1234567890
   - IFSC: SBIN0001234
   - Bank Name: State Bank of India
   - Address: Test Address
   - State: Delhi
   - City: New Delhi
   - Pincode: 110001
4. **Click "Submit Application"**
5. **Should show success message** ✅

## 🔍 If Still Getting Error

### Check 1: Verify Policies Exist
Run this query in SQL Editor:
```sql
SELECT policyname, roles, cmd FROM pg_policies WHERE tablename = 'advisors';
```
You should see 4 policies:
- `allow_public_advisor_registration`
- `advisors_can_view_own_data`
- `advisors_can_update_own_data`
- `service_role_full_access`

### Check 2: Test Direct Insert
Run this query to test if insertion works:
```sql
INSERT INTO advisors (
    email, full_name, mobile_number, pan_number, 
    aadhar_number, bank_account_number, ifsc_code, bank_name,
    address, state, city, pincode
) VALUES (
    'test2@example.com', 'Test User', '1234567890', 'ABCDE1234F',
    '123456789012', '1234567890', 'SBIN0001234', 'State Bank of India',
    'Test Address', 'Delhi', 'New Delhi', '110001'
);
```

### Check 3: Verify Table Structure
Run this query:
```sql
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'advisors' 
ORDER BY ordinal_position;
```

## 🚨 Common Issues and Solutions

### Issue 1: "Table does not exist"
**Solution:** Run the `FINAL_RLS_FIX.sql` script again

### Issue 2: "Policy already exists"
**Solution:** The script drops tables first, so this shouldn't happen

### Issue 3: "Permission denied"
**Solution:** Make sure you're using the correct Supabase project

### Issue 4: Still getting RLS error
**Solution:** 
1. Check if you're using the correct Supabase URL and key
2. Verify the table structure matches the form data
3. Try disabling RLS temporarily for testing

## 🔧 Emergency Fix (If Nothing Works)

If all else fails, run this emergency script:

```sql
-- EMERGENCY FIX
DROP TABLE IF EXISTS advisors CASCADE;
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

-- DISABLE RLS TEMPORARILY FOR TESTING
ALTER TABLE advisors DISABLE ROW LEVEL SECURITY;
```

## 📞 Next Steps

1. **Run the `FINAL_RLS_FIX.sql` script**
2. **Test the registration form**
3. **If it works, great!**
4. **If not, follow the troubleshooting steps above**
5. **Let me know the results**

**This should definitely fix the RLS issue!** 🎯 