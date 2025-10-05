# Modern Space-Themed Portfolio

## Overview
This is a modern, space-themed static portfolio website built with React and TypeScript. The project showcases a professional portfolio with sections for about, projects, and contact information, all designed with a cosmic aesthetic featuring dark themes, gradients, and space-inspired visual elements. The site is optimized for deployment to GitHub Pages.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing with separate pages for About, Projects, Contact, and a main Portfolio page
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility and consistent design
- **Styling**: Tailwind CSS with custom space-themed design system featuring dark backgrounds, cosmic colors (blues, purples, cyans), and modern typography
- **State Management**: React hooks for local component state
- **Build Tool**: Vite for fast development and optimized production builds
- **Deployment**: GitHub Pages via GitHub Actions workflow

### Contact Form
- **Implementation**: Uses mailto: links to open the user's default email client with pre-filled contact information
- **No Backend Required**: All functionality runs entirely in the browser

## UI and Design Libraries
- **Radix UI**: Complete set of accessible, unstyled components for building the user interface
- **Lucide React**: Modern icon library for consistent iconography throughout the application
- **Class Variance Authority**: Utility for managing component variants and styling logic
- **Tailwind Merge**: Intelligent class merging for Tailwind CSS conflicts resolution
- **Framer Motion**: Animation library for smooth, engaging transitions

## Development and Build Tools
- **TypeScript**: Full type safety across the application
- **PostCSS**: CSS processing pipeline with Autoprefixer for cross-browser compatibility
- **Vite**: Ultra-fast development server and optimized production builds

## Recent Changes (October 2025)
- Converted from full-stack application to static site for GitHub Pages deployment
- Removed backend server components (Express, API routes, database)
- Updated contact form to use mailto: links instead of API calls
- Added GitHub Actions workflow for automatic deployment
- Removed unused backend dependencies and files
- Simplified project structure for static hosting

## Project Structure
```
client/
  src/
    components/     - Reusable UI components
    pages/         - Page components (Portfolio, About, Projects, Contact)
    hooks/         - Custom React hooks
    lib/           - Utility functions
  index.html       - HTML entry point
  index.css        - Global styles and theme
attached_assets/   - Images and other static assets
.github/workflows/ - GitHub Actions deployment configuration
```

## Deployment
See DEPLOYMENT.md for detailed instructions on deploying to GitHub Pages.

## Customization Checklist
Before deploying your portfolio, update:
1. Contact email in `client/src/components/ContactSection.tsx`
2. Personal information in hero section
3. Project details and portfolio items
4. About section content
5. Social media links in footer
6. Profile images and project screenshots
