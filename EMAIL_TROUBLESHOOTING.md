# Email Notification Troubleshooting Guide

## Issue: Contact form data saves to database but no emails received

Since the contact form is successfully saving data to the database but you're not receiving emails at `manish@shahworks.com`, the issue is with the Edge Function or SendGrid configuration.

## Step-by-Step Troubleshooting

### 1. Check Edge Function Deployment

First, verify if the Edge Function is deployed:

```bash
# Check if you have Supabase CLI installed
supabase --version

# Login to Supabase
supabase login

# Link your project (replace with your project ref)
supabase link --project-ref your-project-ref

# List deployed functions
supabase functions list
```

**Expected Output:**
```
contact-form-notification
```

If the function is not listed, deploy it:
```bash
supabase functions deploy contact-form-notification
```

### 2. Check Environment Variables

1. **Go to Supabase Dashboard**
2. **Navigate to Settings > API**
3. **Check if `SENDGRID_API_KEY` is set**
4. **If not set, add it:**
   ```
   SENDGRID_API_KEY=your-sendgrid-api-key-here
   ```

### 3. Verify SendGrid API Key

1. **Log in to your SendGrid account**
2. **Go to Settings > API Keys**
3. **Verify your API key has "Mail Send" permissions**
4. **Test the API key:**
   ```bash
   curl -X POST https://api.sendgrid.com/v3/mail/send \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "personalizations": [{"to": [{"email": "manish@shahworks.com"}]}],
       "from": {"email": "noreply@financeangels.com"},
       "subject": "Test Email",
       "content": [{"type": "text/plain", "value": "Test message"}]
     }'
   ```

### 4. Check Edge Function Logs

1. **Go to Supabase Dashboard**
2. **Navigate to Edge Functions**
3. **Click on `contact-form-notification`**
4. **Check the Logs tab for any errors**

### 5. Test Edge Function Directly

Test the Edge Function with curl:

```bash
curl -X POST https://your-project-ref.supabase.co/functions/v1/contact-form-notification \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-anon-key" \
  -d '{
    "full_name": "Test User",
    "email": "test@example.com",
    "phone_number": "1234567890",
    "subject": "Test Subject",
    "message": "This is a test message"
  }'
```

### 6. Check Browser Console

1. **Open browser developer tools (F12)**
2. **Go to Console tab**
3. **Submit a contact form**
4. **Look for any error messages**

### 7. Common Issues and Solutions

#### Issue: "Function not found"
**Solution:** Deploy the Edge Function
```bash
supabase functions deploy contact-form-notification
```

#### Issue: "SENDGRID_API_KEY not set"
**Solution:** Add environment variable in Supabase Dashboard

#### Issue: "SendGrid API error: 401"
**Solution:** Check your SendGrid API key permissions

#### Issue: "SendGrid API error: 403"
**Solution:** Verify your SendGrid account status and sender verification

#### Issue: "Function timeout"
**Solution:** Check function logs for timeout errors

### 8. Alternative: Test with Different Email

Temporarily change the recipient email in the Edge Function to test:

```typescript
// In supabase/functions/contact-form-notification/index.ts
to: [{ email: "your-test-email@gmail.com", name: "Test User" }],
```

### 9. Check SendGrid Dashboard

1. **Log in to SendGrid**
2. **Go to Activity > Email Activity**
3. **Look for any failed deliveries**
4. **Check if emails are being sent but not delivered**

### 10. Verify Sender Domain

Make sure `noreply@financeangels.com` is verified in SendGrid:
1. **Go to Settings > Sender Authentication**
2. **Verify your domain or use a verified sender**

## Quick Fix Checklist

- [ ] Edge Function is deployed
- [ ] SENDGRID_API_KEY is set in Supabase
- [ ] SendGrid API key has "Mail Send" permissions
- [ ] Sender email is verified in SendGrid
- [ ] No errors in Edge Function logs
- [ ] Browser console shows no errors
- [ ] SendGrid dashboard shows emails being sent

## Debug Commands

```bash
# Check function status
supabase functions list

# View function logs
supabase functions logs contact-form-notification

# Test function locally (if needed)
supabase functions serve contact-form-notification --env-file .env.local
```

## Next Steps

1. **Run the troubleshooting steps above**
2. **Check browser console for errors**
3. **Verify Edge Function deployment**
4. **Test with a different email address**
5. **Check SendGrid dashboard for delivery issues**

If you're still having issues, please share:
- Any error messages from browser console
- Edge Function logs from Supabase dashboard
- SendGrid API test results 