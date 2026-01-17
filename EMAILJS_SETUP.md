# EmailJS Setup Guide (200 Free Submissions/Month!)

## Why EmailJS?
✅ **200 free submissions/month** (vs 50 for Formspree)  
✅ No backend needed - works client-side  
✅ Works on any static hosting  
✅ Easy setup (5 minutes)  
✅ Direct email delivery to your inbox  

## Quick Setup Steps

### 1. Sign Up for EmailJS (Free)
1. Go to: https://www.emailjs.com
2. Click "Sign Up" (free account)
3. Verify your email

### 2. Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Click **Connect Account**
5. Authorize EmailJS to send emails from your Gmail account
6. Give it a name (e.g., "WordPress Contact Form")
7. Click **Create Service**
8. **Copy the Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Choose a template or start from scratch
4. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{website}}` - Sender's website (optional)
   - `{{services}}` - Selected services
   - `{{message}}` - Message content
   - `{{subject}}` - Email subject

5. **Template Example:**
   ```
   Subject: {{subject}}
   
   New Contact Form Submission
   
   Name: {{from_name}}
   Email: {{from_email}}
   Website: {{website}}
   
   Interested In:
   {{services}}
   
   Message:
   {{message}}
   ```

6. Set **To Email** to your email address (e.g., `atanasov.g.n@gmail.com`)
7. Set **From Name** to something like "WordPress on Steroids"
8. Click **Save**
9. **Copy the Template ID** (you'll need this)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find **Public Key** (or go to **Integration**)
3. **Copy the Public Key** (you'll need this)

### 5. Update Your HTML Files
1. Open `index.html`
2. Find these lines (around line 1797):
   ```javascript
   const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
   const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
   ```
3. Replace with your actual values:
   ```javascript
   const EMAILJS_SERVICE_ID = 'service_xxxxx';
   const EMAILJS_TEMPLATE_ID = 'template_xxxxx';
   const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
   ```
4. Do the same in `index-bg.html`

### 6. Deploy
That's it! Just upload your HTML files to any hosting:
- Superhosting (just upload HTML files!)
- GitHub Pages
- Any static hosting

## What You Get
- ✅ Form submissions sent directly to your email
- ✅ 200 free submissions per month
- ✅ No server setup required
- ✅ Works immediately
- ✅ Professional email formatting

## Testing
1. Upload your files
2. Visit your site
3. Fill out the contact form
4. Check your email - you should receive the submission!

## Template Variables Reference
Your template should use these variable names (they match the code):
- `{{from_name}}` - Name from form
- `{{from_email}}` - Email from form
- `{{website}}` - Website from form (or "Not provided")
- `{{services}}` - Selected services (comma-separated)
- `{{message}}` - Message content
- `{{subject}}` - Email subject line

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all three IDs are correct (Service ID, Template ID, Public Key)
- Make sure your email service is connected
- Check EmailJS dashboard for error logs

### Template not working?
- Make sure variable names match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Check that "To Email" is set correctly in your template

### Need more submissions?
- Free tier: 200/month
- Paid plans available if you need more

## That's It!
No Node.js, no server.js, no .env file, no complicated setup. Just:
1. Sign up for EmailJS (2 minutes)
2. Connect your email (1 minute)
3. Create template (2 minutes)
4. Replace 3 values in each HTML file
5. Upload and done!

## Need Help?
- EmailJS Docs: https://www.emailjs.com/docs/
- Free tier: 200 submissions/month
- Upgrade if you need more submissions