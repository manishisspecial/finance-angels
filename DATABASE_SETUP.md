# Database Setup Guide for Finance Angels Loan System

## Overview
This guide will help you set up the database tables for the Finance Angels loan system. The system uses three separate tables to organize applications by type:

1. **credit_card_applications** - For credit card applications
2. **personal_loan_applications** - For personal loan applications  
3. **business_loan_applications** - For business loan applications

## Prerequisites
- Supabase project set up
- Access to Supabase SQL Editor

## Step 1: Create Database Tables

### Option A: Using the SQL File
1. Open your Supabase dashboard
2. Go to **SQL Editor**
3. Copy and paste the contents of `database_setup.sql` file
4. Click **Run** to execute all queries

### Option B: Manual Setup
Run these SQL commands one by one in your Supabase SQL Editor:

#### 1. Personal Loans Table
```sql
CREATE TABLE IF NOT EXISTS personal_loan_applications (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    pan_number VARCHAR(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    monthly_income VARCHAR(100) NOT NULL,
    occupation VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(6) NOT NULL,
    loan_name VARCHAR(255) NOT NULL,
    loan_provider VARCHAR(255) NOT NULL,
    loan_amount VARCHAR(100),
    interest_rate VARCHAR(100),
    apply_link TEXT NOT NULL,
    application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 2. Business Loans Table
```sql
CREATE TABLE IF NOT EXISTS business_loan_applications (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    pan_number VARCHAR(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    monthly_income VARCHAR(100) NOT NULL,
    occupation VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(6) NOT NULL,
    loan_name VARCHAR(255) NOT NULL,
    loan_provider VARCHAR(255) NOT NULL,
    loan_amount VARCHAR(100),
    interest_rate VARCHAR(100),
    apply_link TEXT NOT NULL,
    application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### 3. Credit Cards Table (if not exists)
```sql
CREATE TABLE IF NOT EXISTS credit_card_applications (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    pan_number VARCHAR(10) NOT NULL,
    date_of_birth DATE NOT NULL,
    monthly_income VARCHAR(100) NOT NULL,
    occupation VARCHAR(255) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(6) NOT NULL,
    card_name VARCHAR(255) NOT NULL,
    card_bank VARCHAR(255) NOT NULL,
    apply_link TEXT NOT NULL,
    application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Step 2: Create Indexes for Performance

```sql
-- Personal Loans Indexes
CREATE INDEX IF NOT EXISTS idx_personal_loan_applications_email ON personal_loan_applications(email);
CREATE INDEX IF NOT EXISTS idx_personal_loan_applications_mobile ON personal_loan_applications(mobile_number);
CREATE INDEX IF NOT EXISTS idx_personal_loan_applications_created_at ON personal_loan_applications(created_at);

-- Business Loans Indexes
CREATE INDEX IF NOT EXISTS idx_business_loan_applications_email ON business_loan_applications(email);
CREATE INDEX IF NOT EXISTS idx_business_loan_applications_mobile ON business_loan_applications(mobile_number);
CREATE INDEX IF NOT EXISTS idx_business_loan_applications_created_at ON business_loan_applications(created_at);

-- Credit Cards Indexes
CREATE INDEX IF NOT EXISTS idx_credit_card_applications_email ON credit_card_applications(email);
CREATE INDEX IF NOT EXISTS idx_credit_card_applications_mobile ON credit_card_applications(mobile_number);
CREATE INDEX IF NOT EXISTS idx_credit_card_applications_created_at ON credit_card_applications(created_at);
```

## Step 3: Enable Row Level Security (RLS)

```sql
-- Enable RLS for all tables
ALTER TABLE personal_loan_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_loan_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_card_applications ENABLE ROW LEVEL SECURITY;
```

## Step 4: Create Security Policies

```sql
-- Policies for Personal Loans
CREATE POLICY "Enable insert for authenticated users only" ON personal_loan_applications
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for service role" ON personal_loan_applications
    FOR SELECT USING (auth.role() = 'service_role');

-- Policies for Business Loans
CREATE POLICY "Enable insert for authenticated users only" ON business_loan_applications
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for service role" ON business_loan_applications
    FOR SELECT USING (auth.role() = 'service_role');

-- Policies for Credit Cards
CREATE POLICY "Enable insert for authenticated users only" ON credit_card_applications
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Enable read access for service role" ON credit_card_applications
    FOR SELECT USING (auth.role() = 'service_role');
```

## Step 5: Grant Permissions

```sql
-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
```

## Verification

After running all the SQL commands, you should see:

1. **Three tables created:**
   - `personal_loan_applications`
   - `business_loan_applications` 
   - `credit_card_applications`

2. **Indexes created** for better query performance

3. **RLS enabled** and policies set up for security

## Table Structure

### Personal Loans Table
| Column | Type | Description |
|--------|------|-------------|
| id | BIGSERIAL | Primary key |
| full_name | VARCHAR(255) | Applicant's full name |
| email | VARCHAR(255) | Email address |
| mobile_number | VARCHAR(15) | Phone number |
| pan_number | VARCHAR(10) | PAN card number |
| date_of_birth | DATE | Date of birth |
| monthly_income | VARCHAR(100) | Monthly income |
| occupation | VARCHAR(255) | Occupation |
| state | VARCHAR(100) | State |
| pincode | VARCHAR(6) | Pincode |
| loan_name | VARCHAR(255) | Name of the loan |
| loan_provider | VARCHAR(255) | Loan provider/bank |
| loan_amount | VARCHAR(100) | Loan amount |
| interest_rate | VARCHAR(100) | Interest rate |
| apply_link | TEXT | Application link |
| application_date | TIMESTAMP | Application date |
| created_at | TIMESTAMP | Record creation date |

### Business Loans Table
Same structure as Personal Loans table.

### Credit Cards Table
| Column | Type | Description |
|--------|------|-------------|
| id | BIGSERIAL | Primary key |
| full_name | VARCHAR(255) | Applicant's full name |
| email | VARCHAR(255) | Email address |
| mobile_number | VARCHAR(15) | Phone number |
| pan_number | VARCHAR(10) | PAN card number |
| date_of_birth | DATE | Date of birth |
| monthly_income | VARCHAR(100) | Monthly income |
| occupation | VARCHAR(255) | Occupation |
| state | VARCHAR(100) | State |
| pincode | VARCHAR(6) | Pincode |
| card_name | VARCHAR(255) | Name of the credit card |
| card_bank | VARCHAR(255) | Bank name |
| apply_link | TEXT | Application link |
| application_date | TIMESTAMP | Application date |
| created_at | TIMESTAMP | Record creation date |

## Troubleshooting

### Common Issues:

1. **"Table already exists" error**
   - Use `CREATE TABLE IF NOT EXISTS` instead of `CREATE TABLE`

2. **Permission denied errors**
   - Make sure you're using the correct Supabase role
   - Check that RLS policies are properly configured

3. **Index creation fails**
   - Indexes might already exist, use `CREATE INDEX IF NOT EXISTS`

## Next Steps

After setting up the database:

1. **Test the application** by submitting a loan application
2. **Check the database** to ensure data is being saved correctly
3. **Monitor the tables** in Supabase dashboard for new applications

The system is now ready to handle applications for:
- ✅ 16 Personal Loans
- ✅ 2 Business Loans  
- ✅ All Credit Cards

All applications will be properly organized in their respective tables with complete data tracking. 