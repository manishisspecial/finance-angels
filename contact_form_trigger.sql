-- Option 1: Fixed trigger with correct schema (if you want to use database triggers)
-- Create a function to handle contact form notifications
CREATE OR REPLACE FUNCTION handle_contact_form_notification()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the Edge Function to send email notification
  PERFORM
    extensions.http_post(
      url := 'https://your-project-ref.supabase.co/functions/v1/contact-form-notification',
      headers := '{"Content-Type": "application/json", "Authorization": "Bearer your-anon-key"}'::jsonb,
      body := jsonb_build_object(
        'full_name', NEW.full_name,
        'email', NEW.email,
        'phone_number', NEW.phone_number,
        'subject', NEW.subject,
        'message', NEW.message
      )
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
CREATE TRIGGER contact_form_notification_trigger
  AFTER INSERT ON contact_form_submissions
  FOR EACH ROW
  EXECUTE FUNCTION handle_contact_form_notification();

-- Enable the http extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "http" WITH SCHEMA "extensions";

-- Option 2: Alternative approach - Remove the trigger entirely since we're calling the Edge Function directly from frontend
-- This is the recommended approach as it's simpler and more reliable

-- To disable the trigger (uncomment the line below):
-- DROP TRIGGER IF EXISTS contact_form_notification_trigger ON contact_form_submissions; 