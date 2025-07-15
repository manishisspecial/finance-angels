// Test script to verify Edge Function and SendGrid setup
// Run this in your browser console or as a Node.js script

const SUPABASE_URL = 'https://your-project-ref.supabase.co'; // Replace with your project URL
const SUPABASE_ANON_KEY = 'your-anon-key'; // Replace with your anon key

// Test 1: Check if Edge Function exists
async function testEdgeFunction() {
  try {
    console.log('Testing Edge Function...');
    
    const response = await fetch(`${SUPABASE_URL}/functions/v1/contact-form-notification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify({
        full_name: 'Test User',
        email: 'test@example.com',
        phone_number: '1234567890',
        subject: 'Test Subject',
        message: 'This is a test message from the troubleshooting script.'
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ Edge Function is working:', data);
    } else {
      console.error('❌ Edge Function error:', data);
    }
  } catch (error) {
    console.error('❌ Network error:', error);
  }
}

// Test 2: Check SendGrid API directly
async function testSendGridAPI() {
  const SENDGRID_API_KEY = 'your-sendgrid-api-key'; // Replace with your API key
  
  try {
    console.log('Testing SendGrid API...');
    
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'manish@shahworks.com', name: 'Manish Shah' }],
            subject: 'Test Email from Troubleshooting Script'
          }
        ],
        from: { 
          email: 'noreply@financeangels.com', 
          name: 'Finance Angels Test' 
        },
        content: [
          {
            type: 'text/plain',
            value: 'This is a test email to verify SendGrid API is working.'
          }
        ]
      })
    });

    if (response.ok) {
      console.log('✅ SendGrid API is working');
    } else {
      const errorText = await response.text();
      console.error('❌ SendGrid API error:', response.status, errorText);
    }
  } catch (error) {
    console.error('❌ SendGrid API network error:', error);
  }
}

// Test 3: Check Supabase connection
async function testSupabaseConnection() {
  try {
    console.log('Testing Supabase connection...');
    
    const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_form_submissions?select=count`, {
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'apikey': SUPABASE_ANON_KEY
      }
    });

    if (response.ok) {
      console.log('✅ Supabase connection is working');
    } else {
      console.error('❌ Supabase connection error:', response.status);
    }
  } catch (error) {
    console.error('❌ Supabase network error:', error);
  }
}

// Run all tests
async function runAllTests() {
  console.log('🔍 Starting email notification troubleshooting tests...\n');
  
  await testSupabaseConnection();
  console.log('');
  
  await testEdgeFunction();
  console.log('');
  
  // Uncomment the line below to test SendGrid API directly
  // await testSendGridAPI();
  
  console.log('✅ All tests completed. Check the results above.');
}

// Instructions for use:
console.log(`
📋 Email Notification Troubleshooting Script

To use this script:

1. Replace the placeholder values:
   - SUPABASE_URL: Your Supabase project URL
   - SUPABASE_ANON_KEY: Your Supabase anon key
   - SENDGRID_API_KEY: Your SendGrid API key (in testSendGridAPI function)

2. Run the tests:
   - In browser console: Copy and paste this script
   - In Node.js: node test_email_function.js

3. Check the console output for any errors

4. If you see errors, follow the troubleshooting guide in EMAIL_TROUBLESHOOTING.md
`);

// Uncomment the line below to run tests automatically
// runAllTests(); 