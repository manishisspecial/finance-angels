# SendGrid Email Notification Setup Guide

This guide will help you set up email notifications for contact form submissions to be sent to `manish@shahworks.com` using SendGrid.

## Prerequisites

1. Supabase project with Edge Functions enabled
2. SendGrid account with API key
3. Supabase CLI installed

## Step 1: Configure SendGrid Environment Variable

1. **Go to your Supabase Dashboard**
2. **Navigate to Settings > API**
3. **Add the following environment variable**:

   ```
   SENDGRID_API_KEY=your-sendgrid-api-key
   ```

### SendGrid Setup:
1. **Log in to your SendGrid account**
2. **Go to Settings > API Keys**
3. **Create a new API Key** with "Mail Send" permissions
4. **Copy the API key** and add it to your Supabase environment variables

## Step 2: Deploy the Edge Function

1. **Install Supabase CLI** (if not already installed):
   ```bash
   npm install -g supabase
   ```

2. **Login to Supabase**:
   ```bash
   supabase login
   ```

3. **Link your project**:
   ```bash
   supabase link --project-ref your-project-ref
   ```

4. **Deploy the Edge Function**:
   ```bash
   supabase functions deploy contact-form-notification
   ```

## Step 3: Update Database Trigger

1. **Run the SQL query** in your Supabase SQL editor:
   ```sql
   -- Copy and paste the contents of contact_form_trigger.sql
   ```

2. **Update the URL** in the trigger function:
   - Replace `your-project-ref` with your actual Supabase project reference
   - Replace `your-anon-key` with your actual anon key

## Step 4: Test the Setup

1. **Submit a test contact form** on your website
2. **Check your email** at `manish@shahworks.com`
3. **Verify the email contains**:
   - Customer's name
   - Email address
   - Phone number (if provided)
   - Subject
   - Message content
   - Professional HTML formatting

## Troubleshooting

### Email Not Received:
1. Check Supabase Edge Function logs in the dashboard
2. Verify SendGrid API key is correct
3. Check spam/junk folder
4. Ensure Edge Function is deployed successfully
5. Verify SendGrid account has sufficient credits

### Function Deployment Failed:
1. Check Supabase CLI is logged in
2. Verify project is linked correctly
3. Check function code for syntax errors

### SendGrid API Errors:
1. Verify API key has "Mail Send" permissions
2. Check SendGrid account status
3. Monitor SendGrid dashboard for delivery issues

### Database Trigger Not Working:
1. Verify the `http` extension is enabled
2. Check trigger function syntax
3. Verify table structure matches

## Security Notes

1. **Never commit API keys** to version control
2. **Use environment variables** for all sensitive data
3. **Regularly rotate** API keys
4. **Monitor function logs** for any issues
5. **Set up SendGrid webhooks** for delivery tracking

## Monitoring

1. **Check Supabase Dashboard** > Edge Functions > Logs
2. **Monitor SendGrid Dashboard** for delivery statistics
3. **Set up alerts** for function failures
4. **Track email delivery rates** in SendGrid

## Customization

You can customize the email template by modifying the Edge Function code:

1. **Change email subject** format
2. **Add more fields** to the email
3. **Modify HTML styling** and branding
4. **Add CC/BCC recipients**
5. **Customize email template** with your branding

## SendGrid Benefits

- **High deliverability** rates
- **Detailed analytics** and tracking
- **Professional email templates**
- **Reliable API** with 99.9% uptime
- **Easy integration** with Supabase

## Support

If you encounter issues:
1. Check Supabase documentation
2. Review Edge Function logs
3. Check SendGrid dashboard for delivery issues
4. Contact SendGrid support for API issues
5. Contact Supabase support for function issues 