-- Create the contact_form_submissions table
CREATE TABLE contact_form_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15),
    subject VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    submission_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed'))
);

-- Create indexes for better query performance
CREATE INDEX idx_contact_form_submissions_email ON contact_form_submissions(email);
CREATE INDEX idx_contact_form_submissions_subject ON contact_form_submissions(subject);
CREATE INDEX idx_contact_form_submissions_status ON contact_form_submissions(status);
CREATE INDEX idx_contact_form_submissions_created_at ON contact_form_submissions(created_at);

-- Enable Row Level Security (RLS) for better security
ALTER TABLE contact_form_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from all users (including anonymous)
CREATE POLICY "Allow inserts for all users" ON contact_form_submissions
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows reads for all users (for now - you can restrict this later)
CREATE POLICY "Allow reads for all users" ON contact_form_submissions
    FOR SELECT USING (true);

-- Create a policy that allows updates for admin users (you can modify this based on your needs)
CREATE POLICY "Allow updates for admins" ON contact_form_submissions
    FOR UPDATE USING (true);

-- Optional: Create a view for easier querying of contact form submissions
CREATE VIEW contact_form_summary AS
SELECT 
    id,
    full_name,
    email,
    subject,
    status,
    submission_date,
    CASE 
        WHEN LENGTH(message) > 100 THEN LEFT(message, 100) || '...'
        ELSE message
    END as message_preview
FROM contact_form_submissions
ORDER BY submission_date DESC; 