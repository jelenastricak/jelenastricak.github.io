# 🚀 Render.com Deployment Guide

## Complete Step-by-Step Guide for Deploying Your Portfolio on Render.com

Your portfolio is fully configured and ready to deploy on Render.com! This guide will walk you through every step.

---

## 📋 Prerequisites

1. **GitHub Account** (or GitLab/Bitbucket)
2. **Render.com Account** (free tier available)
3. **Your code pushed to a Git repository**

---

## 🎯 Quick Deployment (Method 1: Using render.yaml)

### Step 1: Push to GitHub

```bash
# Navigate to your project
cd /home/jelena/Desktop/jelenastricak.github.io-main./jelena-portfolio

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Portfolio ready for Render.com"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/jelena-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Render.com

1. **Go to [Render.com](https://render.com)** and sign in
2. Click **"New +"** button → Select **"Blueprint"**
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click **"Apply"** to deploy

**That's it!** 🎉 Render will:
- Install dependencies
- Build your React app
- Start the Express server
- Give you a live URL

---

## 🔧 Manual Deployment (Method 2: Dashboard Configuration)

### Step 1: Create New Web Service

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click **"New +"** → **"Web Service"**
3. Connect your Git repository

### Step 2: Configure Service

Fill in the following settings:

| Setting | Value |
|---------|-------|
| **Name** | `jelena-portfolio` (or your choice) |
| **Region** | Choose closest to your audience |
| **Branch** | `main` (or your default branch) |
| **Root Directory** | Leave blank |
| **Environment** | `Node` |
| **Build Command** | `npm install --legacy-peer-deps && npm run build` |
| **Start Command** | `npm run server` |
| **Plan** | Free (or paid for custom domain) |

### Step 3: Environment Variables

Add this environment variable:

- **Key**: `NODE_ENV`
- **Value**: `production`

### Step 4: Deploy

Click **"Create Web Service"** and Render will start building!

---

## 🌐 What Happens During Deployment

1. **Install Phase**
   ```
   npm install --legacy-peer-deps
   ```
   Installs all dependencies (takes 1-2 minutes)

2. **Build Phase**
   ```
   npm run build
   ```
   Compiles React app to static files in `dist/` folder

3. **Start Phase**
   ```
   npm run server
   ```
   Starts Express server on port 10000

4. **Live!**
   Your site is now accessible at:
   ```
   https://jelena-portfolio-XXXX.onrender.com
   ```

---

## 🎨 Custom Domain (Optional)

### With Render Free Plan
Your site gets: `https://your-app-name.onrender.com`

### With Render Paid Plan ($7/month)
1. Go to your service settings
2. Click **"Custom Domains"**
3. Add your domain (e.g., `jelenastricak.com`)
4. Follow Render's DNS instructions
5. SSL certificate automatically provisioned!

---

## 🔍 Monitoring Your Deployment

### View Logs
1. Go to your service in Render Dashboard
2. Click **"Logs"** tab
3. See real-time deployment and server logs

### Check Status
- **Events** tab: Deployment history
- **Metrics** tab: CPU, memory usage
- **Settings** tab: Configuration

### Health Check
Your API includes a health endpoint:
```
https://your-app.onrender.com/api/health
```

Should return:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

---

## 🔄 Updating Your Site

### Automatic Deployments
Render auto-deploys when you push to GitHub:

```bash
# Make your changes
# Edit src/data/content.ts or any component

# Commit and push
git add .
git commit -m "Update content"
git push

# Render automatically rebuilds and redeploys!
```

### Manual Deploy
From Render Dashboard:
1. Go to your service
2. Click **"Manual Deploy"** → **"Deploy latest commit"**

---

## ⚡ Performance Optimization

### Free Tier Considerations
- **Spins down after 15 min of inactivity**
- **First request takes 30-60 seconds** (cold start)
- **Subsequent requests are fast**

### Keep Your Site Awake (Optional)
Use a free service like [UptimeRobot](https://uptimerobot.com):
1. Sign up for free
2. Add your Render URL
3. Ping every 5 minutes
4. Site stays warm!

### Upgrade to Paid Plan ($7/month)
- No spin down
- Instant response times
- Custom domain included
- Priority support

---

## 🐛 Troubleshooting

### Build Fails?

**Error**: `npm install fails`
- **Solution**: Check that `package.json` is in the repository root
- **Solution**: Try build command: `npm ci --legacy-peer-deps && npm run build`

**Error**: `Module not found`
- **Solution**: Ensure all dependencies are in `package.json`
- **Solution**: Delete `node_modules` locally and test `npm install`

### Server Won't Start?

**Error**: `Cannot find module 'express'`
- **Solution**: Express should be in `dependencies`, not `devDependencies`
- **Fix**: Already configured correctly in your `package.json`

**Error**: `EADDRINUSE port in use`
- **Solution**: Don't worry about this locally
- **Note**: Render assigns PORT automatically via environment variable

### Site Shows 404?

**Error**: Page not found
- **Solution**: Make sure `npm run build` created the `dist/` folder
- **Solution**: Check that `server.js` serves static files from `dist/`

---

## 📊 Your Configuration Files

### ✅ render.yaml
```yaml
services:
  - type: web
    name: jelena-portfolio
    env: node
    region: oregon
    plan: free
    buildCommand: npm install --legacy-peer-deps && npm run build
    startCommand: npm run server
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

### ✅ package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "server": "node server.js",
    "start": "npm run build && npm run server"
  }
}
```

### ✅ server.js
- ✅ Binds to `0.0.0.0` (required for Render)
- ✅ Uses `process.env.PORT` (Render assigns this)
- ✅ Serves static files from `dist/`
- ✅ Handles SPA routing

---

## 🎉 Success Checklist

Before deploying, verify:

- [x] Code pushed to GitHub/GitLab
- [x] `render.yaml` exists in root
- [x] `package.json` has correct scripts
- [x] `server.js` binds to `0.0.0.0`
- [x] Build command includes `--legacy-peer-deps`
- [x] `dist/` folder in `.gitignore` (gets built on Render)
- [x] All dependencies in `package.json`

---

## 🚀 Deploy Now!

### Using Blueprint (Recommended)
1. Push to GitHub
2. Go to Render.com
3. New + → Blueprint
4. Connect repo → Apply

### Manual Setup
1. Push to GitHub
2. Go to Render.com
3. New + → Web Service
4. Configure settings above
5. Create Web Service

---

## 📱 Post-Deployment

After deployment, you'll get:
- ✅ **Live URL**: `https://your-app.onrender.com`
- ✅ **Auto SSL**: HTTPS enabled automatically
- ✅ **Auto Deploys**: Push to GitHub = auto deploy
- ✅ **Logs**: Real-time logging in dashboard
- ✅ **Metrics**: Monitor performance

### Share Your Portfolio!
```
Portfolio: https://jelena-portfolio.onrender.com
Health: https://jelena-portfolio.onrender.com/api/health
```

---

## 💡 Pro Tips

1. **First Deploy Takes Longest**: 3-5 minutes (subsequent builds faster)
2. **Free Tier Sleeps**: After 15 min inactivity (wakes in 30-60 sec)
3. **Custom Domain**: Requires paid plan ($7/mo)
4. **Environment Variables**: Add in Render Dashboard → Settings
5. **Logs Are Your Friend**: Check logs tab if anything fails

---

## 🆘 Need Help?

### Render Documentation
- [Render Docs](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/deploy-node-express-app)
- [Blueprint Specs](https://render.com/docs/blueprint-spec)

### Your Project
- **Logs**: Check Render Dashboard
- **Health**: Visit `/api/health` endpoint
- **Build**: Ensure `npm run build` works locally

---

## 🎊 Congratulations!

Your portfolio is now:
- ✅ **Live** on Render.com
- ✅ **Secure** with HTTPS
- ✅ **Scalable** with Render's infrastructure
- ✅ **Auto-deploying** from Git
- ✅ **Professional** and modern

**Your portfolio URL**:
```
https://jelena-portfolio-XXXX.onrender.com
```

Replace `XXXX` with your actual Render-assigned identifier!

---

**Built with ❤️ • Deployed on Render.com • Ready to impress!** 🚀
