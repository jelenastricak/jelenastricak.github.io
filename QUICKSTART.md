# 🚀 Quick Start Guide

## Your Portfolio Has Been Refactored!

Your beautiful portfolio website has been completely refactored from static HTML to a modern **React + Node.js** application while maintaining the **exact same look and feel**!

## 📁 What's New?

### Technology Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.x (latest version)
- **Backend**: Node.js + Express 5
- **Build Tool**: Vite (ultra-fast HMR)
- **Package Manager**: npm

### Project Location
```
/home/jelena/Desktop/jelenastricak.github.io-main./jelena-portfolio/
```

## 🎯 Quick Commands

### Development (with hot reload)
```bash
cd /home/jelena/Desktop/jelenastricak.github.io-main./jelena-portfolio
npm run dev
```
Opens at: `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder

### Run Production Server
```bash
npm run server
```
Serves at: `http://localhost:3000`

### Build + Start (One Command)
```bash
npm start
```

## 📂 Project Structure

```
jelena-portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Top navigation
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Now.tsx          # Current focus
│   │   ├── Contact.tsx      # Contact info
│   │   ├── Footer.tsx       # Footer with social links
│   │   └── Icons.tsx        # SVG icon library
│   ├── data/
│   │   └── content.ts       # 📝 EDIT HERE for content changes
│   ├── App.tsx              # Main app
│   ├── main.tsx             # Entry point
│   └── index.css            # Styles
├── server.js                # Express server
├── package.json             # Dependencies
└── dist/                    # Built files (after npm run build)
```

## ✏️ How to Update Content

**All content is centralized in one file:**
```
src/data/content.ts
```

This file contains:
- Your name and title
- About section paragraphs
- Current "Now" items
- Contact information
- Social media links

Simply edit this file and rebuild!

## 🎨 Customizing Styles

### Colors
The bronze/dark theme is defined in:
- `src/index.css` - CSS variables
- `tailwind.config.js` - Tailwind theme

### Fonts
Playfair Display is loaded via Google Fonts in `index.html`

## 🌐 Deployment Options

### 1. Vercel (Recommended for React)
```bash
npm install -g vercel
vercel
```

### 2. Netlify
- Connect your Git repository
- Build command: `npm run build`
- Publish directory: `dist`

### 3. Node.js Server (Railway, Render, DigitalOcean)
- Start command: `npm start`
- Port: 3000 (configurable via PORT env variable)

### 4. GitHub Pages (Static)
```bash
npm run build
# Upload dist/ folder contents
```

## 🔧 What's Preserved

✅ Exact same visual design
✅ Same colors (bronze accent #B8924F)
✅ Same typography (Playfair Display)
✅ Same content and layout
✅ Same smooth scrolling behavior
✅ Same accessibility features
✅ All social media links
✅ Responsive design

## 🎁 What's Added

✨ Modern React architecture
✨ Component-based structure
✨ TypeScript type safety
✨ Hot module replacement (instant updates in dev)
✨ Optimized production builds
✨ Express backend (ready for APIs)
✨ Easy content management
✨ Better developer experience

## 🐛 Troubleshooting

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

### Port already in use?
Change the port in `server.js`:
```javascript
const PORT = process.env.PORT || 3001;  // Change to 3001 or any free port
```

### Styling looks different?
Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📚 Learn More

- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Express**: https://expressjs.com

## 🎉 You're All Set!

Your portfolio is now powered by modern web technologies while keeping everything you loved about the original!

**Need to make changes?** Edit `src/data/content.ts` for content or the component files in `src/components/` for layout changes.

**Ready to deploy?** Run `npm run build` and choose your deployment platform!

---

**Questions?** Check the full README.md for more detailed documentation.
