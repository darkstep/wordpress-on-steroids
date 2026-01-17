# GitHub Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `wordpress-on-steroids` (or any name you prefer)
3. Description: "High-converting landing page for WordPress upgrade services"
4. Choose **Private** (recommended since it contains server code) or **Public**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

## Step 2: Connect and Push

After creating the repo, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/wordpress-on-steroids.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Alternative: Using SSH (if you have SSH keys set up)

```bash
git remote add origin git@github.com:YOUR_USERNAME/wordpress-on-steroids.git
git branch -M main
git push -u origin main
```

## Important Notes

✅ Your `.env` file is already protected by `.gitignore` - it won't be uploaded
✅ All your code is committed and ready to push
✅ The repository will contain all files except sensitive credentials
