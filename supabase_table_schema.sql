-- Create the credit_card_applications table with the simplified schema
CREATE TABLE credit_card_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mobile_number VARCHAR(15) NOT NULL,
    date_of_birth DATE NOT NULL,
    monthly_income VARCHAR(50) NOT NULL,
    occupation VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    pincode VARCHAR(6) NOT NULL,
    card_name VARCHAR(255) NOT NULL,
    card_bank VARCHAR(255) NOT NULL,
    apply_link TEXT NOT NULL,
    application_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_credit_card_applications_email ON credit_card_applications(email);
CREATE INDEX idx_credit_card_applications_mobile ON credit_card_applications(mobile_number);
CREATE INDEX idx_credit_card_applications_card_bank ON credit_card_applications(card_bank);
CREATE INDEX idx_credit_card_applications_created_at ON credit_card_applications(created_at);

-- Enable Row Level Security (RLS) for better security
ALTER TABLE credit_card_applications ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from all users (including anonymous)
CREATE POLICY "Allow inserts for all users" ON credit_card_applications
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows reads for all users (for now - you can restrict this later)
CREATE POLICY "Allow reads for all users" ON credit_card_applications
    FOR SELECT USING (true); 