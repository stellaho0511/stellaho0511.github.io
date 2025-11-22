# GitHub Pages Deployment Guide

This guide explains how to deploy this project to GitHub Pages.

## Prerequisites

1. Create a GitHub repository
2. Push your code to GitHub

## Deployment Method

### GitHub Actions (Automatic Deployment) - Recommended

The `.github/workflows/deploy.yml` file is already configured.

1. Go to your GitHub repository **Settings** → **Pages**
2. Select **GitHub Actions** as the **Source**
3. Push your code to the `main` branch and it will automatically deploy:
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. Once deployment is complete, your site will be available at:
   - If repository name is `username.github.io`: `https://username.github.io`
   - Otherwise: `https://username.github.io/repository-name`

## Repository Name and URL

- **`username.github.io`**: Uses root domain (`https://username.github.io`)
- **Other names**: Uses subpath (`https://username.github.io/repository-name`)

GitHub Actions automatically detects and configures this.

## Troubleshooting

### Images or resources not loading

- Check the `basePath` setting in `next.config.mjs`
- Verify that the repository name is correctly set

### Build errors

- Ensure Node.js version is 20 or higher
- Install dependencies with `npm ci`

## Notes

- Deployment runs automatically on every push to the `main` branch
- Check deployment status in the **Actions** tab of your GitHub repository
