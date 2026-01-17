# WordPress on Steroids - Landing Page

A high-converting landing page with contact form functionality.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Settings

Create a `.env` file in the root directory with the following:

```env
PORT=3000

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Where to receive contact form emails
RECEIVER_EMAIL=your-email@gmail.com
```

### 3. Email Service Setup

#### Option A: Gmail (Recommended for beginners)

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to "App Passwords" (https://myaccount.google.com/apppasswords)
4. Generate a new app password for "Mail"
5. Use this app password (not your regular Gmail password) in `.env`

**Important:** Use an App Password, not your regular Gmail password!

#### Option B: Outlook/Hotmail

```env
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Option C: Custom SMTP

For other email providers, use SMTP settings:

```env
SMTP_HOST=smtp.your-provider.com
SMTP_PORT=587
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASSWORD=your-password
```

Then uncomment the SMTP configuration in `server.js` (lines 28-35).

### 4. Run the Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

### 5. Test the Contact Form

1. Open `http://localhost:3000` in your browser
2. Fill out the contact form
3. Check your email inbox for the submission

## What I Need From You

To make the contact form work, please provide:

1. **Your email address** - Where you want to receive contact form submissions
2. **Email service preference:**
   - Gmail (easiest - I'll guide you through app password setup)
   - Outlook/Hotmail
   - Other (provide SMTP details)
3. **Email password/app password** - I'll help you set this up securely

## Project Structure

```
wordpress-on-steroids/
├── index.html          # Landing page
├── server.js           # Node.js backend server
├── package.json        # Dependencies
├── .env               # Email configuration (create this)
└── README.md          # This file
```

## Security Notes

- Never commit your `.env` file to version control
- The `.gitignore` file is already configured to exclude it
- Use App Passwords for Gmail (not your main password)

## Troubleshooting

**"Authentication failed" error:**
- Make sure you're using an App Password for Gmail, not your regular password
- Check that 2-Step Verification is enabled on your Google account

**"Connection timeout" error:**
- Check your SMTP settings if using custom SMTP
- Verify your email service credentials

**Form not submitting:**
- Make sure the server is running (`npm start`)
- Check browser console for errors
- Verify the API endpoint is accessible

## Deployment

When deploying to production (Heroku, Railway, etc.):

1. Set environment variables in your hosting platform
2. Make sure `PORT` is set correctly (many platforms set this automatically)
3. Update the frontend fetch URL if needed (currently uses relative path `/api/contact`)
