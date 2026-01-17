# Gmail App Password Setup Guide

## Step-by-Step Instructions

### Step 1: Enable 2-Step Verification
1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", find **2-Step Verification**
4. If it's not enabled, click it and follow the prompts to enable it
   - You'll need to verify your phone number
   - This is required before you can create App Passwords

### Step 2: Create App Password
1. Once 2-Step Verification is enabled, go to: https://myaccount.google.com/apppasswords
   - Or navigate: Google Account → Security → 2-Step Verification → App Passwords
2. You may need to sign in again
3. Under "Select app", choose **Mail**
4. Under "Select device", choose **Other (Custom name)**
5. Type: **WordPress on Steroids** (or any name you prefer)
6. Click **Generate**
7. **IMPORTANT:** Google will show you a 16-character password like: `abcd efgh ijkl mnop`
   - Copy this password immediately (you won't see it again!)
   - Remove the spaces when using it: `abcdefghijklmnop`

### Step 3: Create .env File
Create a file named `.env` in your project folder with this content:

```
PORT=3000

# Email Configuration - Gmail
EMAIL_SERVICE=gmail
EMAIL_USER=atanasov.g.n@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop

# Where to receive contact form emails
RECEIVER_EMAIL=atanasov.g.n@gmail.com
```

**Replace `abcdefghijklmnop` with your actual 16-character App Password (no spaces)**

### Step 4: Test It
1. Run: `npm install` (if you haven't already)
2. Run: `npm start`
3. Open: http://localhost:3000
4. Fill out the contact form
5. Check your email inbox!

## Troubleshooting

**"Less secure app" error?**
- App Passwords replaced "less secure apps" - make sure you're using an App Password, not your regular password

**Can't find App Passwords option?**
- Make sure 2-Step Verification is fully enabled first
- Try this direct link: https://myaccount.google.com/apppasswords

**Still having issues?**
- Make sure you removed all spaces from the App Password
- Verify 2-Step Verification is enabled
- Double-check the email address is correct
