# GitHub Pages Deployment Guide

This portfolio is configured for easy deployment to GitHub Pages.

## Automatic Deployment

The repository includes a GitHub Actions workflow that automatically builds and deploys the site whenever you push to the `main` branch.

### Setup Steps

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically run and deploy your site

3. **Access your site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - Or if using a custom domain, configure it in the Pages settings

## Manual Build

To build the site locally:

```bash
npm install
npx vite build
```

The built files will be in the `dist/public` directory.

**Note**: The `package.json` scripts still reference the old backend setup. To run the development server locally, use:
```bash
npx vite
```

And to build:
```bash
npx vite build
```

## Customization

Before deploying, update the following:

1. **Contact Information** (`client/src/components/ContactSection.tsx`):
   - Replace `alex.chen@example.com` with your email
   - Update phone number and location

2. **Personal Information**:
   - Update project details in `client/src/pages/Projects.tsx`
   - Update about section in `client/src/pages/About.tsx`
   - Update hero section in `client/src/components/HeroSection.tsx`

3. **Base Path** (if deploying to a subdirectory):
   - If your site is at `username.github.io/repo-name/`, you may need to configure the base path
   - This is handled automatically by the current configuration

## Troubleshooting

- If images don't load, ensure they're in the `attached_assets` directory
- If the site doesn't deploy, check the Actions tab in GitHub for build errors
- Make sure GitHub Pages is enabled in repository settings
