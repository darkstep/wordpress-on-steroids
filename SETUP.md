# Quick Setup Guide

## What I Need From You

To make the contact form work, I need:

### 1. Your Email Address
The email address where you want to receive contact form submissions.

### 2. Email Service Choice

**Option A: Gmail (Easiest)**
- Your Gmail address
- I'll help you create an App Password (more secure than using your regular password)

**Option B: Outlook/Hotmail**
- Your Outlook email address
- Your email password

**Option C: Other Email Provider**
- SMTP server address
- SMTP port (usually 587)
- Your email address
- Your email password

## Step-by-Step: Gmail Setup (Recommended)

1. **Enable 2-Step Verification:**
   - Go to https://myaccount.google.com/security
   - Turn on 2-Step Verification

2. **Create App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "WordPress on Steroids"
   - Copy the 16-character password

3. **Create `.env` file:**
   Create a file named `.env` in the project root with:
   ```
   PORT=3000
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-16-char-app-password
   RECEIVER_EMAIL=your-email@gmail.com
   ```

4. **Install and run:**
   ```bash
   npm install
   npm start
   ```

That's it! The form will now send emails to your inbox.

## Need Help?

Just let me know:
- Your email address
- Which email service you prefer
- I'll help you set it up!
