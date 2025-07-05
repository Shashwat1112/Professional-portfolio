# Portfolio Website

## Overview

This is a full-stack portfolio website built with React, TypeScript, and Express.js. The application features a modern developer portfolio with a VS Code theme, showcasing professional experience, skills, and projects. It includes a contact form and resume download functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom VS Code theme variables
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **ORM**: Drizzle ORM for database operations
- **Database**: PostgreSQL (via Neon serverless driver)
- **Validation**: Zod for schema validation
- **Development**: TSX for TypeScript execution

## Key Components

### Client-Side Components
- **Navigation**: Fixed navigation with smooth scrolling
- **Hero Section**: Terminal-style introduction with typing animation
- **About Section**: Professional background with terminal windows
- **Skills Section**: Technical skills with progress bars
- **Projects Section**: Portfolio projects with technology tags
- **Experience Section**: Professional timeline
- **Contact Section**: Contact form with validation
- **Footer**: Simple footer with status indicator

### Server-Side Components
- **API Routes**: RESTful endpoints for contact form and resume download
- **Storage Layer**: Abstracted storage interface (currently in-memory)
- **Middleware**: Request logging and error handling
- **Static Serving**: Vite integration for development, static files for production

## Data Flow

1. **Contact Form Submission**:
   - Client validates form data using Zod schema
   - TanStack Query sends POST request to `/api/contact`
   - Server validates data and stores contact information
   - Success/error response returned to client

2. **Resume Download**:
   - Client requests resume via `/api/resume/download`
   - Server serves PDF file from attached assets
   - File downloaded with proper filename

3. **Development Mode**:
   - Vite dev server handles HMR and asset serving
   - Express server handles API routes
   - Middleware logs API requests for debugging

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query
- **Validation**: Zod with hookform resolvers
- **Animation**: Embla Carousel, Lucide icons
- **Utilities**: date-fns, cmdk

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM, Neon serverless driver
- **Session**: connect-pg-simple for session storage
- **Validation**: Zod with drizzle-zod integration
- **Development**: TSX, esbuild for production builds

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Replit Integration**: Vite plugins for Replit environment
- **Database Tools**: Drizzle Kit for migrations

## Deployment Strategy

### Development Environment
- **Server**: Express with Vite middleware for HMR
- **Database**: PostgreSQL via DATABASE_URL environment variable
- **Assets**: Served through Vite dev server
- **Hot Reload**: Full stack hot reloading enabled

### Production Environment
- **Build Process**: 
  - Frontend: Vite builds React app to `dist/public`
  - Backend: esbuild bundles server to `dist/index.js`
- **Static Files**: Express serves built frontend files
- **Database**: Production PostgreSQL connection
- **Assets**: Static file serving for resume downloads

### Configuration
- **Environment Variables**: DATABASE_URL required for database connection
- **Port**: Configurable via environment or defaults to Express standard
- **CORS**: Configured for production domain
- **Security**: Basic Express security middleware

## Changelog

```
Changelog:
- July 05, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```