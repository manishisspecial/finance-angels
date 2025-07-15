# Deploy Edge Function to Fix CORS Issue

## Issue
The contact form is getting a CORS error when trying to call the Edge Function. This means the function either isn't deployed or has CORS configuration issues.

## Solution: Deploy the Edge Function

### Step 1: Install Supabase CLI (if not already installed)

```bash
npm install -g supabase
```

### Step 2: Login to Supabase

```bash
supabase login
```

### Step 3: Link Your Project

Replace `your-project-ref` with your actual Supabase project reference:

```bash
supabase link --project-ref your-project-ref
```

To find your project reference:
1. Go to Supabase Dashboard
2. Look at the URL: `https://supabase.com/dashboard/project/your-project-ref`
3. Copy the `your-project-ref` part

### Step 4: Deploy the Edge Function

```bash
supabase functions deploy contact-form-notification
```

### Step 5: Verify Deployment

```bash
supabase functions list
```

You should see `contact-form-notification` in the list.

### Step 6: Check Function Logs

```bash
supabase functions logs contact-form-notification
```

### Step 7: Test the Function

Test the function directly to see if it's working:

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

## Alternative: Deploy via Supabase Dashboard

If CLI deployment doesn't work:

1. **Go to Supabase Dashboard**
2. **Navigate to Edge Functions**
3. **Click "Create a new function"**
4. **Name it `contact-form-notification`**
5. **Copy the code from `supabase/functions/contact-form-notification/index.ts`**
6. **Paste it into the function editor**
7. **Click "Deploy"**

## Environment Variables Setup

1. **Go to Supabase Dashboard > Settings > API**
2. **Add environment variable:**
   ```
   SENDGRID_API_KEY=your-sendgrid-api-key
   ```

## Test After Deployment

1. **Submit a contact form** on your website
2. **Check browser console** for any errors
3. **Check Edge Function logs** in Supabase Dashboard
4. **Check your email** at `manish@shahworks.com`

## Expected Results

After successful deployment:
- ✅ No CORS errors in browser console
- ✅ Contact form submits successfully
- ✅ Email received at `manish@shahworks.com`
- ✅ Function logs show successful execution

## Troubleshooting

### If you get "Function not found":
- Make sure you're in the correct project
- Verify the function name is exactly `contact-form-notification`
- Check that deployment completed successfully

### If you get "Permission denied":
- Make sure you're logged in to Supabase CLI
- Verify you have access to the project

### If you get "Environment variable not set":
- Add `SENDGRID_API_KEY` in Supabase Dashboard > Settings > API

### If you still get CORS errors:
- Check that the function is deployed to the correct project
- Verify the function URL in your frontend code matches your project
- Try accessing the function directly with curl to test

## Quick Commands

```bash
# Check if CLI is installed
supabase --version

# Login
supabase login

# Link project (replace with your project ref)
supabase link --project-ref vmuzkxxxxxxxxxxxxxxxxx

# Deploy function
supabase functions deploy contact-form-notification

# Check status
supabase functions list

# View logs
supabase functions logs contact-form-notification
``` 