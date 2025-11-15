# 🚀 Render.com Deployment Cheatsheet

## Quick Reference for Your Portfolio Deployment

---

## ⚡ Super Quick Deploy (3 Steps)

```bash
# 1. Prepare (run this first)
./prepare-deploy.sh

# 2. Push to GitHub
git init
git add .
git commit -m "Deploy to Render"
git remote add origin https://github.com/YOUR_USERNAME/jelena-portfolio.git
git push -u origin main

# 3. Deploy on Render.com
# → Go to render.com
# → Click "New +" → "Blueprint"
# → Connect your repo
# → Click "Apply"
```

**Done! Your site will be live in 3-5 minutes! 🎉**

---

## 📋 Render.com Settings (If Manual Setup)

| Setting | Value |
|---------|-------|
| **Name** | `jelena-portfolio` |
| **Environment** | `Node` |
| **Branch** | `main` |
| **Build Command** | `npm install --legacy-peer-deps && npm run build` |
| **Start Command** | `npm run server` |
| **Plan** | `Free` (or `Starter` for $7/mo) |

**Environment Variable:**
- `NODE_ENV` = `production`

---

## 🔧 Important Commands

```bash
# Test build locally
npm run build

# Test server locally
npm run server

# Development mode
npm run dev

# Check deployment readiness
./prepare-deploy.sh
```

---

## 📊 What's Configured

✅ **render.yaml** - Blueprint config (auto-deployment)  
✅ **server.js** - Binds to `0.0.0.0` (Render requirement)  
✅ **PORT** - Uses `process.env.PORT` (Render assigns)  
✅ **Build** - Includes `--legacy-peer-deps` flag  
✅ **Static files** - Served from `dist/` folder  

---

## 🌐 Your URLs After Deployment

```
Main Site:    https://jelena-portfolio-xxxx.onrender.com
Health Check: https://jelena-portfolio-xxxx.onrender.com/api/health
API Content:  https://jelena-portfolio-xxxx.onrender.com/api/content
```

Replace `xxxx` with your Render-assigned identifier.

---

## 🔄 Update Your Site

After initial deployment, just:

```bash
# Make changes to your code
# Edit src/data/content.ts or components

# Push to GitHub
git add .
git commit -m "Update content"
git push

# Render auto-deploys! ✨
```

No need to rebuild manually—Render does it automatically!

---

## ⚠️ Free Tier Behavior

| Behavior | Details |
|----------|---------|
| **Sleep after** | 15 minutes of inactivity |
| **Wake up time** | 30-60 seconds on first request |
| **After wake** | Fast response |
| **Upgrade** | $7/mo for always-on + custom domain |

**Keep Awake Trick:**
Use [UptimeRobot](https://uptimerobot.com) (free) to ping every 5 min.

---

## 🐛 Quick Troubleshooting

### Build fails?
```bash
# Test locally first
npm run build

# Check logs in Render Dashboard → Logs tab
```

### Server won't start?
```bash
# Verify locally
npm run server

# Check it opens on http://localhost:3000
```

### Site shows 404?
- Ensure `dist/` folder was created during build
- Check Render logs for errors
- Verify `server.js` serves static files

### Changes not showing?
- Did you push to GitHub?
- Check Render Dashboard → Events for latest deploy
- Try manual deploy: Dashboard → "Manual Deploy"

---

## 📱 Monitoring

### Render Dashboard Tabs

| Tab | Purpose |
|-----|---------|
| **Logs** | Real-time deployment & runtime logs |
| **Events** | Deployment history |
| **Metrics** | CPU, memory usage |
| **Settings** | Configuration, env vars |

### Health Check
Visit: `https://your-app.onrender.com/api/health`

Should return:
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

---

## 💡 Pro Tips

1. **First deploy takes longest** (3-5 min) - subsequent deploys faster
2. **Free tier = cold starts** - upgrade for instant response
3. **Auto-deploy is enabled** - every push to `main` triggers deploy
4. **Environment variables** - add in Dashboard → Settings
5. **Custom domain** - available on paid plan ($7/mo)

---

## 📚 Documentation Links

- **Full Guide**: `RENDER-DEPLOYMENT.md` (in this repo)
- **Render Docs**: https://render.com/docs
- **Node.js on Render**: https://render.com/docs/deploy-node-express-app
- **Blueprints**: https://render.com/docs/blueprint-spec

---

## 🆘 Need Help?

1. Check `RENDER-DEPLOYMENT.md` for detailed guide
2. Review Render logs in Dashboard
3. Test build locally: `npm run build`
4. Test server locally: `npm run server`
5. Check Render community: https://community.render.com

---

## ✅ Pre-Deployment Checklist

- [ ] Code tested locally (`npm run build` works)
- [ ] Changes committed to Git
- [ ] Repository pushed to GitHub
- [ ] GitHub account connected to Render
- [ ] `render.yaml` exists in repo root
- [ ] Ready to click "Apply" on Render!

---

## 🎊 After Deployment

Your portfolio will be:
- ✅ **Live** at your Render URL
- ✅ **Secure** with auto-SSL (HTTPS)
- ✅ **Auto-deploying** on every Git push
- ✅ **Monitored** in Render Dashboard
- ✅ **Professional** and production-ready!

---

**Quick Deploy:** Push to GitHub → Render → Blueprint → Apply → Live! 🚀

**Questions?** See `RENDER-DEPLOYMENT.md` for comprehensive guide.
