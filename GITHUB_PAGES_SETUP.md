# GitHub Pages Setup Guide

## Quick Setup Steps

1. **Go to your GitHub repository**: https://github.com/darkstep/wordpress-on-steroids

2. **Navigate to Settings**:
   - Click on the "Settings" tab in your repository

3. **Go to Pages section**:
   - Scroll down to "Pages" in the left sidebar (under "Code and automation")

4. **Configure Source**:
   - Under "Source", select "Deploy from a branch"
   - Choose "main" as the branch
   - Select "/ (root)" as the folder
   - Click "Save"

5. **Wait for deployment**:
   - GitHub will build and deploy your site
   - This usually takes 1-2 minutes
   - You'll see a green checkmark when it's ready

6. **Access your site**:
   - Your site will be available at: `https://darkstep.github.io/wordpress-on-steroids/`
   - Or: `https://YOUR_USERNAME.github.io/wordpress-on-steroids/`

## Important Notes

### Contact Form Backend
GitHub Pages only serves static files (HTML, CSS, JavaScript). Your Node.js backend (`server.js`) won't work on GitHub Pages.

**Options for the contact form:**

1. **Use a form service** (Recommended for static sites):
   - Formspree (https://formspree.io) - Free tier available
   - Netlify Forms (if you deploy to Netlify)
   - EmailJS (https://www.emailjs.com) - Free tier available

2. **Deploy backend separately**:
   - Deploy `server.js` to services like:
     - Heroku
     - Railway
     - Render
     - Vercel (with serverless functions)
   - Update the form submission URL in `index.html` and `index-bg.html`

3. **Use GitHub Actions** (Advanced):
   - Set up a serverless function that handles form submissions

### Custom Domain (Optional)
If you want to use a custom domain:
1. In GitHub Pages settings, add your custom domain
2. Update your DNS records as instructed
3. GitHub will provide SSL certificate automatically

## Testing Your Site
After deployment, test:
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ Language switcher works
- ✅ Mobile menu works
- ⚠️ Contact form (needs backend solution)

## Troubleshooting
- If the site doesn't load, check the Actions tab for build errors
- Make sure `index.html` is in the root directory
- Check that all file paths are relative (not absolute)