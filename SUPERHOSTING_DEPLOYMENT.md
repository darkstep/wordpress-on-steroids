# Superhosting Deployment Guide

## Overview
You can deploy both your static HTML files and Node.js backend to Superhosting. This allows your contact form to work properly.

## Deployment Steps

### 1. Prepare Your Files

Your project structure is already set up correctly:
- `index.html` - Main English page
- `index-bg.html` - Bulgarian page
- `server.js` - Node.js backend
- `package.json` - Dependencies
- `.env` - Environment variables (email credentials)

### 2. Upload Files to Superhosting

#### Option A: Using FTP/SFTP
1. Connect to your Superhosting account via FTP/SFTP
2. Upload all files to your domain's root directory (usually `public_html` or `www`)
3. Make sure to upload:
   - `index.html`
   - `index-bg.html`
   - `server.js`
   - `package.json`
   - `package-lock.json`
   - `.env` (IMPORTANT: Keep this secure, don't share it)

#### Option B: Using Git (if Superhosting supports it)
1. SSH into your Superhosting account
2. Clone your repository:
   ```bash
   git clone https://github.com/darkstep/wordpress-on-steroids.git
   ```
3. Navigate to the directory and install dependencies:
   ```bash
   cd wordpress-on-steroids
   npm install
   ```

### 3. Configure Node.js on Superhosting

1. **Check Node.js availability**:
   - Log into your Superhosting control panel
   - Check if Node.js is available (most modern hosting supports it)
   - Note the Node.js version available

2. **Set up environment variables**:
   - Create or upload your `.env` file to the root directory
   - Make sure it contains:
     ```
     PORT=3000
     EMAIL_SERVICE=gmail
     EMAIL_USER=atanasov.g.n@gmail.com
     EMAIL_PASSWORD=hcclbqskavghakxr
     RECEIVER_EMAIL=atanasov.g.n@gmail.com
     ```
   - **IMPORTANT**: Make sure `.env` is not publicly accessible

3. **Install dependencies**:
   ```bash
   npm install
   ```

### 4. Configure the Server

#### If Superhosting uses a specific port or requires reverse proxy:
- Check Superhosting documentation for Node.js hosting requirements
- You may need to adjust the `PORT` in `.env` or `server.js`
- Some hosts require port 8080 or a specific port they assign

#### Update server.js if needed:
If Superhosting requires a specific port or configuration, you may need to modify `server.js` to:
- Use the port from environment variable (already done)
- Serve static files correctly
- Handle the domain/subdomain setup

### 5. Start the Server

#### Option A: Using PM2 (Recommended for production)
```bash
npm install -g pm2
pm2 start server.js --name wordpress-steroids
pm2 save
pm2 startup
```

#### Option B: Using nohup
```bash
nohup node server.js > server.log 2>&1 &
```

#### Option C: Using Superhosting's Node.js manager
- Use the control panel's Node.js application manager if available
- Set the entry point to `server.js`
- Set the start command to `node server.js`

### 6. Configure Domain/DNS

1. **Point your domain** to your Superhosting account
2. **Set up subdomain** (optional):
   - You might want to use `www.yourdomain.com` for the site
   - Or use the main domain directly

### 7. Update CORS Settings (if needed)

If you encounter CORS issues, you may need to update `server.js` to allow your domain. Check if there's a CORS configuration in `server.js`.

### 8. Test Your Deployment

1. **Test the homepage**: Visit `https://yourdomain.com/`
2. **Test Bulgarian version**: Visit `https://yourdomain.com/index-bg.html`
3. **Test contact form**: Submit a test message
4. **Check server logs**: Monitor for any errors

### 9. Set Up SSL Certificate

- Most Superhosting accounts include free SSL certificates
- Enable SSL in your control panel
- Your site should be accessible via `https://`

## Troubleshooting

### Server won't start
- Check Node.js version: `node --version`
- Check if port is available: `netstat -tulpn | grep :3000`
- Check server logs for errors

### Contact form not working
- Verify `.env` file is present and correct
- Check server is running: `pm2 list` or `ps aux | grep node`
- Check server logs for errors
- Verify email credentials are correct

### Static files not loading
- Check file permissions: `chmod 644 index.html`
- Verify files are in the correct directory
- Check if server.js is serving static files correctly

### Port issues
- Some hosts require specific ports
- Check Superhosting documentation for Node.js port requirements
- Update PORT in `.env` if needed

## Security Notes

1. **Never commit `.env` to Git** - It's already in `.gitignore`
2. **Keep `.env` file secure** - Only you should have access
3. **Use strong passwords** - For your hosting account and email
4. **Enable SSL** - Always use HTTPS in production
5. **Regular updates** - Keep Node.js and npm packages updated

## Next Steps

1. Contact Superhosting support if you need help with:
   - Node.js setup
   - Port configuration
   - SSL certificate setup
   - Domain configuration

2. Once deployed, test everything thoroughly before sharing with clients

3. Consider setting up:
   - Domain email (optional)
   - Backup system
   - Monitoring (optional)