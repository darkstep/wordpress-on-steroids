# Custom Domain Setup for GitHub Pages

## Step-by-Step Guide

### 1. Add Domain in GitHub Pages Settings

1. Go to your repository: https://github.com/darkstep/wordpress-on-steroids
2. Click **Settings** → **Pages**
3. Scroll down to **Custom domain** section
4. Enter your domain (e.g., `wordpressonsteroids.com` or `www.wordpressonsteroids.com`)
5. Click **Save**
6. GitHub will create a `CNAME` file automatically (or you may need to create it manually)

### 2. Configure DNS Records

You need to add DNS records at your domain registrar (where you bought the domain).

#### Option A: Using Apex Domain (e.g., `wordpressonsteroids.com`)

Add these **A records** in your DNS settings:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Note:** These are GitHub Pages IP addresses (they may change - check GitHub docs for current IPs)

#### Option B: Using www Subdomain (e.g., `www.wordpressonsteroids.com`)

Add this **CNAME record**:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | darkstep.github.io | 3600 |

#### Option C: Using Both (Recommended)

Add both:
- A records for apex domain (as shown in Option A)
- CNAME record for www (as shown in Option B)

Then in GitHub Pages settings, add both domains or just the www version.

### 3. Wait for DNS Propagation

- DNS changes can take **15 minutes to 48 hours** to propagate
- Usually takes 1-2 hours
- You can check propagation status at: https://www.whatsmydns.net

### 4. Enable HTTPS (Automatic)

1. After DNS propagates, go back to GitHub Pages settings
2. Check **"Enforce HTTPS"** checkbox (will appear once DNS is verified)
3. GitHub automatically provides SSL certificate via Let's Encrypt
4. This may take a few minutes to activate

### 5. Verify It's Working

1. Visit your custom domain (e.g., `https://wordpressonsteroids.com`)
2. Check that it loads your site
3. Verify the SSL certificate (padlock icon in browser)
4. Test that all pages work correctly

## Important Notes

### CNAME File
- GitHub may create a `CNAME` file in your repository root
- This file should contain your domain name (one per line)
- **Don't delete this file** - it's needed for custom domain to work

### EmailJS Considerations
- EmailJS will work fine with custom domain
- No changes needed to EmailJS configuration
- The form will work the same way

### Language Switcher
- Your language switcher links (`index.html` and `index-bg.html`) will work correctly
- No changes needed

### DNS Provider Examples

**Common DNS Providers:**
- **Cloudflare**: DNS → Records → Add record
- **GoDaddy**: DNS Management → Add/Edit records
- **Namecheap**: Advanced DNS → Add new record
- **Google Domains**: DNS → Custom records

## Troubleshooting

### Domain Not Working?
1. **Check DNS propagation**: https://www.whatsmydns.net
2. **Verify DNS records**: Make sure A records or CNAME are correct
3. **Wait longer**: DNS can take up to 48 hours
4. **Check CNAME file**: Should exist in repository root with your domain

### HTTPS Not Enabling?
1. Wait for DNS to fully propagate
2. Make sure DNS records are correct
3. Try removing and re-adding the domain in GitHub settings
4. Check GitHub Pages status in repository Settings → Pages

### Mixed Content Warnings?
- GitHub Pages serves everything over HTTPS
- EmailJS already uses HTTPS
- Should not be an issue

## Current GitHub Pages IPs (2024)

If the IPs above don't work, check GitHub's current IPs:
- Visit: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#about-custom-domains-and-github-pages
- GitHub updates these occasionally

## After Setup

Once your custom domain is working:
1. ✅ Test all pages load correctly
2. ✅ Test contact form works
3. ✅ Test language switcher
4. ✅ Test mobile menu
5. ✅ Share your custom domain URL with clients!

Your site will be accessible at both:
- `https://darkstep.github.io/wordpress-on-steroids/` (GitHub Pages URL)
- `https://yourdomain.com` (Your custom domain)