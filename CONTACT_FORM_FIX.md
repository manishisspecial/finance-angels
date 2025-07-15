# Contact Form Error Fix Guide

## Issue
The contact form is showing the error: "schema 'net' does not exist" when trying to submit.

## Root Cause
The database trigger is trying to use the `net.http_post` function, but the `net` schema doesn't exist in your Supabase project. The trigger is unnecessary since we're already calling the Edge Function directly from the frontend.

## Solution

### Step 1: Disable the Problematic Database Trigger

Run this SQL in your Supabase SQL Editor:

```sql
-- Disable the contact form notification trigger to fix the "schema net does not exist" error
-- This trigger is not needed since we're calling the Edge Function directly from the frontend

-- Drop the trigger if it exists
DROP TRIGGER IF EXISTS contact_form_notification_trigger ON contact_form_submissions;

-- Drop the function if it exists
DROP FUNCTION IF EXISTS handle_contact_form_notification();
```

### Step 2: Verify Edge Function is Deployed

1. **Check if the Edge Function exists:**
   ```bash
   supabase functions list
   ```

2. **If it doesn't exist, deploy it:**
   ```bash
   supabase functions deploy contact-form-notification
   ```

### Step 3: Verify Environment Variables

1. **Go to Supabase Dashboard > Settings > API**
2. **Check that `SENDGRID_API_KEY` is set** with your SendGrid API key
3. **If not set, add it:**
   ```
   SENDGRID_API_KEY=your-sendgrid-api-key-here
   ```

### Step 4: Test the Contact Form

1. **Fill out the contact form** with test data
2. **Submit the form**
3. **Check that:**
   - Form submits successfully (no error popup)
   - Data is saved to `contact_form_submissions` table
   - Email is sent to `manish@shahworks.com`

## How It Works Now

1. **User submits form** → Frontend saves data to database
2. **Frontend calls Edge Function** → Sends email via SendGrid
3. **No database trigger needed** → Simpler and more reliable

## Troubleshooting

### If you still get errors:

1. **Check Supabase logs:**
   - Go to Dashboard > Logs
   - Look for any errors in the Edge Function

2. **Check SendGrid:**
   - Verify your API key is correct
   - Check SendGrid dashboard for email delivery

3. **Test Edge Function directly:**
   ```bash
   curl -X POST https://your-project-ref.supabase.co/functions/v1/contact-form-notification \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer your-anon-key" \
     -d '{"full_name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
   ```

## Expected Behavior

After applying this fix:
- ✅ Contact form submits without errors
- ✅ Data is saved to database
- ✅ Email notification sent to manish@shahworks.com
- ✅ User sees success message
- ✅ No more "schema net does not exist" error 