# Overview

This is a full-stack financial services application built with React and Express.js, featuring a modern fintech UI for "AirFly" - a digital wallet and payment platform. The application provides a landing page showcasing financial services including currency exchange, digital wallet functionality, and payment card features. The architecture follows a monorepo structure with a React frontend, Express.js backend, and PostgreSQL database integration using Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with React 18 using TypeScript and follows a component-based architecture:

- **UI Framework**: React with TypeScript, using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design system
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Form Handling**: React Hook Form with Zod schema validation

The frontend uses a modular component structure with reusable UI components, page components, and custom hooks. The design system implements a modern fintech aesthetic with gradients, glassmorphism effects, and responsive layouts.

## Backend Architecture

The backend follows a RESTful API architecture using Express.js:

- **Framework**: Express.js with TypeScript support
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds
- **API Structure**: Modular route registration system with centralized error handling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage)
- **Development Features**: Hot reloading, request logging, and Vite integration for development

The storage interface is designed to be easily swappable, currently using in-memory storage but structured to support database implementations.

## Database Schema

The application uses Drizzle ORM with PostgreSQL:

- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with connection via Neon Database serverless
- **Schema**: Defined in shared directory for type sharing between frontend and backend
- **User Model**: Basic user structure with username, password, and UUID primary key
- **Migrations**: Managed through Drizzle Kit with migrations stored in dedicated directory

The database schema uses PostgreSQL-specific features like `gen_random_uuid()` for primary key generation.

## External Dependencies

**Database Services**:
- Neon Database (@neondatabase/serverless) for PostgreSQL hosting
- connect-pg-simple for session storage

**UI and Styling**:
- Radix UI primitives for accessible component foundations
- Tailwind CSS for utility-first styling
- Framer Motion for animations

**Development Tools**:
- Vite for fast development builds and HMR
- Replit-specific plugins for development environment integration
- PostCSS with Autoprefixer for CSS processing

**Utility Libraries**:
- date-fns for date manipulation
- clsx and tailwind-merge for conditional styling
- nanoid for unique ID generation
- Zod for schema validation

The application is configured for deployment on Replit with specific development plugins and optimizations for the Replit environment.