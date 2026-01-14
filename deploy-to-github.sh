#!/bin/bash

# Script to deploy The Life Co Landing Page to GitHub
# Make sure you have created the repository on GitHub first:
# https://github.com/new
# Repository name: the-life-co-landing-page
# Make it public or private as needed

echo "Deploying to GitHub..."

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "Remote 'origin' already configured"
else
    echo "Adding remote origin..."
    git remote add origin https://github.com/digital-how/the-life-co-landing-page.git
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub!"
    echo "Repository: https://github.com/digital-how/the-life-co-landing-page"
else
    echo "❌ Push failed. Please ensure:"
    echo "1. The repository exists at: https://github.com/digital-how/the-life-co-landing-page"
    echo "2. You have push access to the repository"
    echo "3. Your GitHub credentials are configured"
fi


