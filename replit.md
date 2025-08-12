# Overview

Red Sail Self Storage is a professional container storage business website built as a full-stack web application. The site provides information about secure container storage solutions in Essex, UK, featuring pricing details, location information, services offered, and contact capabilities. The application serves as both an informational website and a foundation for potential customer management functionality with user authentication capabilities built into the backend architecture.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing without the complexity of React Router
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design system including brand colors (Red Sail theme) and responsive design patterns
- **State Management**: TanStack Query for server state management with custom query client configuration
- **Forms**: React Hook Form with Zod validation for type-safe form handling

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Development**: TypeScript with tsx for development server and hot reloading
- **API Structure**: Modular route registration system with centralized error handling and request logging middleware
- **Storage Interface**: Abstracted storage pattern with in-memory implementation (MemStorage) and interface for future database integration
- **Authentication Ready**: User schema and storage methods prepared for authentication implementation

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Database**: PostgreSQL via Neon Database service (configured but not actively used in current implementation)
- **Schema Management**: Centralized schema definitions in shared directory for type consistency across frontend and backend
- **Migration System**: Drizzle Kit for database schema migrations and management

## Development & Build System
- **Monorepo Structure**: Client, server, and shared code organized in separate directories with TypeScript path mapping
- **Hot Reloading**: Vite development server with Express middleware integration for seamless full-stack development
- **Build Process**: Vite for frontend bundling and esbuild for backend compilation
- **Type Safety**: Shared TypeScript configuration ensuring consistency across all layers

## Content Architecture
- **Page Structure**: Multi-page application with distinct routes for services, pricing, location, about, contact, and terms
- **Component Organization**: Hierarchical component structure with reusable UI components, layout components, and page-specific components
- **Navigation**: Responsive navigation with mobile sheet overlay and desktop inline navigation
- **Content Management**: Static content with structured data for business information, pricing tiers, and legal terms

# External Dependencies

## Database & Storage
- **Neon Database**: PostgreSQL database service with connection pooling and serverless architecture
- **Drizzle ORM**: Type-safe database operations with schema-first approach

## UI & Design System
- **Radix UI**: Accessible component primitives for complex UI interactions
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Custom font loading for brand typography (Inter, Roboto Slab, architects fonts)

## Development Tools
- **Vite**: Build tool and development server with plugin ecosystem
- **TypeScript**: Type safety across full-stack application
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form state management with validation
- **Zod**: Schema validation library for type-safe data validation

## Third-Party Services
- **Google Maps**: Location services integration for business address display
- **Email Integration**: Prepared for email service integration for contact form submissions
- **Analytics Ready**: Structure prepared for analytics integration

## Build & Deployment
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **ESBuild**: Fast JavaScript bundling for production builds
- **Replit Integration**: Development environment integration with runtime error handling and development banners