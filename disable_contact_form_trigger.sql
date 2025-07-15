-- Disable the contact form notification trigger to fix the "schema net does not exist" error
-- This trigger is not needed since we're calling the Edge Function directly from the frontend

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS contact_form_notification_trigger ON contact_form_submissions;

-- Drop the function if it exists
DROP FUNCTION IF EXISTS handle_contact_form_notification();

-- Note: The contact form will still work because we're calling the Edge Function directly 
-- from the frontend in ContactUsPage.jsx, which is more reliable than database triggers. 