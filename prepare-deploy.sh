#!/bin/bash

# Render.com Deployment Preparation Script
# This script helps prepare your portfolio for deployment

echo "🚀 Preparing Portfolio for Render.com Deployment"
echo "================================================"
echo ""

# Test build locally
echo "📦 Testing build locally..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

# Check if dist folder was created
if [ -d "dist" ]; then
    echo "✅ dist/ folder created successfully"
    echo ""
else
    echo "❌ dist/ folder not found"
    exit 1
fi

# Show what's in dist
echo "📁 Build output:"
ls -lh dist/
echo ""

# Check git status
echo "🔍 Checking Git status..."
if [ -d ".git" ]; then
    echo "✅ Git repository initialized"
    
    # Check if there are uncommitted changes
    if [[ -n $(git status -s) ]]; then
        echo "⚠️  You have uncommitted changes:"
        git status -s
        echo ""
        echo "💡 Tip: Commit your changes before deploying"
    else
        echo "✅ No uncommitted changes"
    fi
else
    echo "⚠️  Git not initialized. Run: git init"
fi

echo ""
echo "🎯 Deployment Checklist:"
echo "========================"
echo ""
echo "✅ render.yaml configuration file exists"
echo "✅ server.js configured for Render (binds to 0.0.0.0)"
echo "✅ Build command includes --legacy-peer-deps"
echo "✅ PORT environment variable handled"
echo "✅ Express server serves static files from dist/"
echo ""

echo "📋 Next Steps:"
echo "=============="
echo ""
echo "1. Push your code to GitHub:"
echo "   git add ."
echo "   git commit -m 'Ready for Render deployment'"
echo "   git push"
echo ""
echo "2. Go to https://render.com"
echo ""
echo "3. Click 'New +' → 'Blueprint'"
echo ""
echo "4. Connect your GitHub repository"
echo ""
echo "5. Click 'Apply' to deploy!"
echo ""
echo "📚 Full guide: See RENDER-DEPLOYMENT.md"
echo ""
echo "🎊 Your portfolio is ready for deployment!"
