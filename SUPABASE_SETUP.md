# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Note down your project URL and anon key

## 2. Create the Database Table

Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE credit_card_applications (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  pan_number TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  pincode TEXT NOT NULL,
  occupation TEXT NOT NULL,
  monthly_income TEXT NOT NULL,
  card_name TEXT NOT NULL,
  card_bank TEXT NOT NULL,
  apply_link TEXT NOT NULL,
  application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE credit_card_applications ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts
CREATE POLICY "Allow inserts" ON credit_card_applications
  FOR INSERT WITH CHECK (true);
```

## 3. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace with your actual Supabase project URL and anon key.

## 4. Features

- ✅ Customer form with all required fields
- ✅ Data stored in Supabase database
- ✅ Automatic redirect to credit card application link
- ✅ Form validation and error handling
- ✅ Loading states and success messages
- ✅ Responsive design

## 5. Flow

1. User clicks "Apply Now" on any credit card
2. Customer form opens with card details pre-filled
3. User fills in personal information
4. Form submits data to Supabase
5. Success message shows
6. User is automatically redirected to the official application link
7. Form closes and returns to credit cards page 