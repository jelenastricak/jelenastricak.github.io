# Jelena Stricak - Portfolio

A modern, responsive portfolio website built with **React.js**, **TypeScript**, **Tailwind CSS**, and **Node.js/Express**.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Node.js Backend**: Express server ready for API endpoints
- **Responsive Design**: Mobile-first approach with beautiful UI
- **SEO Optimized**: Meta tags and Open Graph support
- **Accessible**: WCAG compliant with skip links and semantic HTML
- **Smooth Navigation**: Client-side smooth scrolling
- **Component Architecture**: Clean, maintainable React components
- **Type Safety**: Full TypeScript support

## 📦 Project Structure

```
jelena-portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Now.tsx        # Current focus section
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Footer.tsx     # Footer with social links
│   │   └── Icons.tsx      # SVG icon components
│   ├── data/
│   │   └── content.ts     # Content data structure
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles with Tailwind
├── server.js              # Express server
├── index.html             # HTML template
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation

1. **Clone or navigate to the project**:
   ```bash
   cd jelena-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🔧 Development

Run the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build

Build the production-ready application:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 🚀 Production Server

Run the Node.js/Express server to serve the built application:

```bash
npm run server
```

Or build and start in one command:

```bash
npm start
```

The server will run on `http://localhost:3000` (or the PORT environment variable).

## 📝 Content Updates

To update the portfolio content, edit the file:

```
src/data/content.ts
```

This centralized data structure contains:
- Personal information
- About section paragraphs
- Current focus items
- Contact information
- Social media links

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Custom CSS variables** for theme colors (bronze accent, dark theme)
- **Google Fonts** (Playfair Display) for typography

Theme colors can be modified in:
- `tailwind.config.js` - Tailwind theme extension
- `src/index.css` - CSS custom properties

## 🌐 API Endpoints

The Express server includes sample API endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/content` - Content endpoint (ready for future dynamic content)

These can be expanded for features like:
- Contact form submissions
- Blog posts
- Dynamic content management

## 📦 Deployment on Render.com

**This portfolio is optimized for deployment on Render.com!**

### Quick Deploy (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Deploy to Render"
   git remote add origin https://github.com/YOUR_USERNAME/jelena-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [render.com](https://render.com) and sign in
   - Click **"New +"** → **"Blueprint"**
   - Connect your GitHub repository
   - Click **"Apply"** to deploy

3. **Done!** Your site will be live at: `https://your-app.onrender.com`

### Configuration Files Included

✅ **`render.yaml`** - Automatic deployment configuration  
✅ **`server.js`** - Optimized for Render (binds to `0.0.0.0`)  
✅ **Build command** - Includes `--legacy-peer-deps`  
✅ **Environment variables** - Pre-configured  

### Manual Configuration

If you prefer manual setup:

| Setting | Value |
|---------|-------|
| **Build Command** | `npm install --legacy-peer-deps && npm run build` |
| **Start Command** | `npm run server` |
| **Environment** | `Node` |

### Free Tier Notes

- ⚠️ **Free tier spins down after 15 min of inactivity**
- 🕐 **First request takes 30-60 seconds (cold start)**
- 💰 **Upgrade to $7/month for instant response + custom domain**

### Complete Guide

See **`RENDER-DEPLOYMENT.md`** for:
- Step-by-step deployment instructions
- Troubleshooting guide
- Performance optimization tips
- Custom domain setup
- Monitoring and logs

### Test Deployment Readiness

```bash
./prepare-deploy.sh
```

This script will:
- Test your build locally
- Check Git status
- Verify configuration
- Show next steps

## 🔄 Migration from Original HTML

This project maintains the exact same:
- ✅ Visual design and layout
- ✅ Color scheme (bronze accent on dark background)
- ✅ Typography (Playfair Display font)
- ✅ Content and copy
- ✅ Social media links
- ✅ Accessibility features

With added benefits:
- ✨ Component-based architecture
- ✨ TypeScript type safety
- ✨ Modern build tooling
- ✨ Node.js backend for future features
- ✨ Easier content management

## 🛡️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2025 Jelena Stricak. All rights reserved.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please contact the owner.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Node.js**
