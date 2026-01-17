# Deployment Checklist for Superhosting

## Pre-Deployment

- [x] Code is ready (all features implemented)
- [x] `.env` file is in `.gitignore` (secure)
- [x] Server.js configured for production
- [ ] Test locally: `npm start` and verify everything works

## Files to Upload

- [ ] `index.html`
- [ ] `index-bg.html`
- [ ] `server.js`
- [ ] `package.json`
- [ ] `package-lock.json`
- [ ] `.env` (upload securely, never commit to Git)
- [ ] `README.md` (optional)
- [ ] `SUPERHOSTING_DEPLOYMENT.md` (for reference)

## Files NOT to Upload

- [ ] `node_modules/` (install on server instead)
- [ ] `.git/` (unless using Git deployment)
- [ ] `*.log` files
- [ ] Development files

## Server Setup Steps

1. [ ] Upload all files to Superhosting (via FTP/SFTP or Git)
2. [ ] SSH into your Superhosting account
3. [ ] Navigate to your project directory
4. [ ] Install Node.js dependencies: `npm install`
5. [ ] Verify `.env` file is present and correct
6. [ ] Test server: `node server.js` (check for errors)
7. [ ] Set up process manager (PM2 recommended): `pm2 start server.js`
8. [ ] Configure PM2 to start on reboot: `pm2 startup` and `pm2 save`

## Testing Checklist

- [ ] Homepage loads: `https://yourdomain.com/`
- [ ] Bulgarian page loads: `https://yourdomain.com/index-bg.html`
- [ ] Navigation menu works
- [ ] Language switcher works
- [ ] Mobile hamburger menu works (test on mobile device)
- [ ] Contact form submits successfully
- [ ] Email is received when form is submitted
- [ ] All upgrade/service cards display correctly
- [ ] Smooth scrolling works
- [ ] Request buttons work and pre-select services in form

## Post-Deployment

- [ ] Monitor server logs for first 24 hours
- [ ] Test contact form with real submission
- [ ] Share URL with clients
- [ ] Set up monitoring (optional)
- [ ] Create backup of `.env` file (store securely)

## Quick Commands Reference

```bash
# Install dependencies
npm install

# Start server (development)
npm start

# Start with PM2 (production)
pm2 start server.js --name wordpress-steroids

# View PM2 logs
pm2 logs wordpress-steroids

# Restart server
pm2 restart wordpress-steroids

# Stop server
pm2 stop wordpress-steroids

# Check server status
pm2 status
```

## Support Contacts

- Superhosting Support: Check your hosting control panel
- Node.js Issues: Check server logs with `pm2 logs`
- Email Issues: Verify `.env` credentials are correct