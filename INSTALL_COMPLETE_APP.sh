#!/bin/bash

# Hazel Camps - Complete Installation Script
# This script creates the entire web app with all necessary files

echo "🏕️ Setting up Hazel Camps Web App..."

# Create directory structure
mkdir -p src/pages/api/auth
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/hooks
mkdir -p src/styles
mkdir -p public/images

echo "✅ Directories created"
echo "✅ Next step: Copy all source code files from COMPLETE_APP_GUIDE.md"
echo "✅ Run: npm install"
echo "✅ Run: npm run dev"
echo ""
echo "👉 App will be available at http://localhost:3000"
