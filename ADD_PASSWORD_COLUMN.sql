-- ADD PASSWORD COLUMN TO ADVISORS TABLE
-- This script adds a password column to the advisors table for proper authentication

-- Step 1: Add password column to advisors table
ALTER TABLE advisors ADD COLUMN IF NOT EXISTS password VARCHAR(255);

-- Step 2: Set default password for existing advisors (if any)
UPDATE advisors 
SET password = 'advisor123' 
WHERE password IS NULL;

-- Step 3: Make password column NOT NULL for new registrations
ALTER TABLE advisors ALTER COLUMN password SET NOT NULL;

-- Step 4: Verify the column was added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'advisors' AND column_name = 'password';

-- Step 5: Test with a sample advisor (optional)
-- INSERT INTO advisors (email, full_name, mobile_number, pan_number, password, status)
-- VALUES ('test@example.com', 'Test Advisor', '1234567890', 'ABCDE1234F', 'testpass123', 'pending')
-- ON CONFLICT (email) DO NOTHING; 