import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '86400',
}

serve(async (req) => {
  console.log('Edge Function called with method:', req.method)
  console.log('Request headers:', Object.fromEntries(req.headers.entries()))

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight request')
    return new Response('ok', { 
      headers: corsHeaders,
      status: 200
    })
  }

  try {
    console.log('Processing request body...')
    const { full_name, email, phone_number, subject, message } = await req.json()
    console.log('Request data received:', { full_name, email, subject })

    // SendGrid API configuration
    const sendgridApiKey = Deno.env.get("SENDGRID_API_KEY")
    if (!sendgridApiKey) {
      console.error('SENDGRID_API_KEY environment variable is not set')
      throw new Error("SENDGRID_API_KEY environment variable is not set")
    }

    console.log('SendGrid API key found, preparing email...')

    // Prepare email data for SendGrid
    const emailData = {
      personalizations: [
        {
          to: [{ email: "manish@shahworks.com", name: "Manish Shah" }],
          subject: `New Contact Form Submission: ${subject}`
        }
      ],
      from: { 
        email: "noreply@financeangels.com", 
        name: "Finance Angels Contact Form" 
      },
      content: [
        {
          type: "text/html",
          value: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <title>New Contact Form Submission</title>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #555; }
                .value { margin-top: 5px; }
                .message-box { background: white; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>📧 New Contact Form Submission</h1>
                  <p>You have received a new contact form submission from your website.</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">👤 Name:</div>
                    <div class="value">${full_name}</div>
                  </div>
                  <div class="field">
                    <div class="label">📧 Email:</div>
                    <div class="value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="label">📞 Phone:</div>
                    <div class="value">${phone_number || 'Not provided'}</div>
                  </div>
                  <div class="field">
                    <div class="label">📋 Subject:</div>
                    <div class="value">${subject}</div>
                  </div>
                  <div class="field">
                    <div class="label">💬 Message:</div>
                    <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  <div class="footer">
                    <p>This email was sent automatically from the Finance Angels contact form.</p>
                    <p>Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                  </div>
                </div>
              </div>
            </body>
            </html>
          `
        }
      ]
    }

    console.log('Sending email via SendGrid API...')

    // Send email via SendGrid API
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${sendgridApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(emailData)
    })

    console.log('SendGrid response status:', response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('SendGrid API error:', response.status, errorText)
      throw new Error(`SendGrid API error: ${response.status} - ${errorText}`)
    }

    console.log('Email sent successfully via SendGrid')

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email notification sent successfully via SendGrid' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error sending email notification:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
}) 