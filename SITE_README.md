# Jelena Stricak - Personal Website

A professional portfolio website built with Jekyll for GitHub Pages deployment.

## 🎨 Features

- **Vintage Dark Theme**: Midnight to royal blue gradient with old gold/bronze accents
- **Multi-page Layout**: Home, Herodot Services, Adventures, AI & Apps
- **GitHub Integration**: Auto-updated repository cards
- **Responsive Design**: Mobile-friendly layout
- **Professional Look**: Clean, vintage-inspired design

## 📂 Structure

```
jekyll-site/
├── _config.yml           # Jekyll configuration
├── _layouts/
│   └── default.html      # Main layout template
├── assets/
│   ├── css/
│   │   └── main.css      # Main stylesheet
│   └── images/
│       ├── ver4.png      # Logo
│       └── me.jpg        # Profile photo
├── index.html            # Home page
├── herodot.html          # Services page
├── adventures.html       # Travel blog page
├── ai-apps.html          # AI & Apps portfolio
└── .github/
    └── workflows/
        └── jekyll.yml    # GitHub Actions workflow
```

## 🚀 Deployment Instructions

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git and push the code:

```bash
cd /home/jelena/Desktop/jekyll-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically run and deploy your site

### Step 3: Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

## 🖼️ Adding Images

### Profile Photo
Replace `/assets/images/me.jpg` with your actual profile photo

### Travel Photos
Add photos to `/assets/images/adventures/` and update the gallery in `adventures.html`

### Logo
The logo (`ver4.png`) is already included

## 🔧 Local Development

To run the site locally:

```bash
# Install Jekyll (if not installed)
gem install bundler jekyll

# Install dependencies
bundle install

# Run the local server
bundle exec jekyll serve

# Visit http://localhost:4000
```

## 📝 Customization

### Update Personal Information
Edit `_config.yml` to update:
- Site title and description
- Social media links
- GitHub username for repo cards

### Modify Content
- **Home page**: Edit `index.html`
- **Services**: Edit `herodot.html`
- **Adventures**: Edit `adventures.html`
- **AI & Apps**: Edit `ai-apps.html`

### Styling
All styles are in `/assets/css/main.css`. The color scheme uses CSS variables for easy customization.

## 🎨 Color Palette

- Midnight Blue: `#191970`
- Royal Blue: `#002D62`
- Old Gold: `#CFB53B`
- Bronze: `#CD7F32`
- Antique Gold: `#D4AF37`
- Cream: `#FFF8DC`

## 📱 Mobile Responsive

The site is fully responsive with:
- Mobile navigation menu
- Flexible grid layouts
- Optimized font sizes
- Touch-friendly buttons

## 🤝 Support

For any questions or issues, please contact through the social links provided on the website.

---

© 2024 Jelena Stricak. All rights reserved.
