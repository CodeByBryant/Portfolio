# Modern Space-Themed Portfolio

## Overview
This is a modern, space-themed portfolio application built as a full-stack web application. The project showcases a professional portfolio with sections for about, projects, and contact information, all designed with a cosmic aesthetic featuring dark themes, gradients, and space-inspired visual elements. The application includes both client-side rendering and server-side API endpoints for handling contact form submissions.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing with separate pages for About, Projects, Contact, and a main Portfolio page
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility and consistent design
- **Styling**: Tailwind CSS with custom space-themed design system featuring dark backgrounds, cosmic colors (blues, purples, cyans), and modern typography
- **State Management**: TanStack Query for server state management and React hooks for local component state
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **API Structure**: RESTful endpoints with `/api/contact` for handling contact form submissions
- **Validation**: Zod schemas for request validation ensuring data integrity
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Development**: Hot module replacement and development middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM with type-safe database operations
- **Schema**: User management system with username/password authentication structure
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Temporary Storage**: In-memory storage implementation for development and testing

### Authentication and Authorization
- **User Model**: Basic user schema with unique username constraints and secure password storage
- **Session Management**: Configured for cookie-based session handling with PostgreSQL session store
- **Security**: Environment variable configuration for database credentials and API keys

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database with `@neondatabase/serverless` driver for production data storage
- **Connection**: Environment variable `DATABASE_URL` for database connectivity

### Email Services  
- **SendGrid**: Email service integration with `@sendgrid/mail` for contact form submissions
- **Configuration**: Requires `SENDGRID_API_KEY` environment variable for email functionality
- **Fallback**: Console logging implementation when email service is not configured

### UI and Design Libraries
- **Radix UI**: Complete set of accessible, unstyled components for building the user interface
- **Lucide React**: Modern icon library for consistent iconography throughout the application
- **Class Variance Authority**: Utility for managing component variants and styling logic
- **Tailwind Merge**: Intelligent class merging for Tailwind CSS conflicts resolution

### Development and Build Tools
- **TypeScript**: Full type safety across client and server code with shared type definitions
- **ESBuild**: Fast bundling for server-side code in production builds  
- **PostCSS**: CSS processing pipeline with Autoprefixer for cross-browser compatibility
- **Replit Integration**: Development environment optimizations and runtime error handling