import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProjectContent } from "@/components/project-content"
import { Navbar } from "@/components/navbar"
import { YouTubeEmbed } from "@/components/youtube-embed"

interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  stack: string[]
  github: string
  demo?: string | null
  date: string
  readTime: string
  content: string
  youtube?: string | null
}

const projects: Record<string, Project> = {
  "ecommerce-platform": {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    longDescription: "Built a comprehensive e-commerce platform that handles everything from product management to payment processing. Features include real-time inventory tracking, user authentication, shopping cart functionality, and a powerful admin dashboard for managing orders and products.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo.example.com",
    youtube: "dQw4w9WgXcQ",
    date: "January 2024",
    readTime: "5 min read",
    content: `
# E-Commerce Platform

## Overview
This project is a modern, full-stack e-commerce solution designed to provide a seamless shopping experience for customers and powerful management tools for administrators.

## Key Features

### 🛍️ Customer Features
- **Product Browsing**: Advanced filtering and search capabilities
- **Shopping Cart**: Real-time cart updates with persistent storage
- **Secure Checkout**: Integrated Stripe payment processing
- **Order Tracking**: Real-time order status updates
- **User Accounts**: Profile management and order history

### 📊 Admin Dashboard
- **Inventory Management**: Real-time stock tracking and alerts
- **Order Processing**: Streamlined order fulfillment workflow
- **Analytics**: Sales reports and customer insights
- **Product Management**: Easy product addition and editing

## Technical Architecture

### Frontend
The frontend is built with **Next.js 14** and **TypeScript**, providing:
- Server-side rendering for optimal SEO
- Static generation for product pages
- Responsive design with Tailwind CSS
- Real-time updates using WebSockets

### Backend
The backend leverages:
- **Prisma ORM** for type-safe database queries
- **PostgreSQL** for robust data storage
- **Redis** for caching and session management
- **Stripe API** for payment processing

## Implementation Highlights

### Real-time Inventory Management
\`\`\`typescript
// Real-time stock updates using WebSocket
const updateStock = async (productId: string, quantity: number) => {
  const product = await prisma.product.update({
    where: { id: productId },
    data: { stock: { decrement: quantity } }
  });
  
  // Broadcast update to all connected clients
  io.emit('stockUpdate', { productId, newStock: product.stock });
};
\`\`\`

### Payment Integration
Implemented secure payment processing with Stripe:
- PCI-compliant checkout flow
- Support for multiple payment methods
- Automated invoice generation
- Refund handling

## Challenges & Solutions

### Challenge 1: Cart Persistence
**Problem**: Users losing cart items when switching devices or after session expiry.
**Solution**: Implemented a hybrid approach using local storage for guests and database persistence for authenticated users.

### Challenge 2: Real-time Updates
**Problem**: Keeping inventory accurate across multiple concurrent users.
**Solution**: Implemented optimistic locking with Prisma and real-time WebSocket updates.

## Performance Metrics
- **Page Load Time**: < 2 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: 95+
- **Uptime**: 99.9%

## Future Enhancements
- [ ] Mobile app development
- [ ] AI-powered product recommendations
- [ ] Multi-vendor marketplace features
- [ ] International shipping integration

## Conclusion
This e-commerce platform demonstrates my ability to build complex, production-ready applications with modern web technologies. The project showcases skills in full-stack development, database design, payment integration, and real-time functionality.
`
  },
  "task-management": {
    slug: "task-management",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    longDescription: "A comprehensive task management solution designed for teams. Features real-time collaboration, kanban boards, time tracking, and detailed analytics to boost productivity.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://taskapp.example.com",
    youtube: "ScMzIvxBSi4",
    date: "December 2023",
    readTime: "4 min read",
    content: `
# Task Management Application

## Project Overview
Built a collaborative task management platform that enables teams to organize, track, and complete projects efficiently with real-time updates and comprehensive analytics.

## Core Features

### Task Organization
- **Kanban Boards**: Drag-and-drop interface for visual task management
- **Custom Workflows**: Configurable task states and transitions
- **Labels & Tags**: Flexible categorization system
- **Priority Levels**: Urgent, High, Medium, Low priority markers

### Collaboration Tools
- **Real-time Updates**: Instant synchronization across all team members
- **Comments & Mentions**: Built-in communication on tasks
- **File Attachments**: Direct file uploads to tasks
- **Activity Feed**: Complete history of all changes

## Technical Implementation

### Real-time Synchronization
Used Socket.io for WebSocket connections:
\`\`\`javascript
// Real-time task updates
socket.on('taskUpdate', (task) => {
  dispatch(updateTask(task));
  showNotification(\`Task "\${task.title}" updated\`);
});
\`\`\`

### Database Design
Implemented efficient MongoDB schema with indexes for performance:
- Compound indexes for filtering
- Text indexes for search functionality
- TTL indexes for temporary data

## Results
- **30% increase** in team productivity
- **50% reduction** in project completion time
- **4.8/5 star** user satisfaction rating
`
  },
  "ai-assistant": {
    slug: "ai-assistant",
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by OpenAI API with context awareness and multi-language support.",
    longDescription: "An advanced AI-powered chat assistant that provides intelligent responses with context awareness, supports multiple languages, and includes conversation history management.",
    stack: ["TypeScript", "Fastify", "OpenAI", "Redis", "Docker"],
    github: "https://github.com/yourusername/ai-assistant",
    demo: null,
    date: "November 2023",
    readTime: "6 min read",
    content: `
# AI Chat Assistant

## Introduction
Developed an intelligent chat assistant leveraging OpenAI's GPT models to provide context-aware, multi-lingual conversational AI capabilities.

## Key Features

### Intelligent Responses
- Context-aware conversation flow
- Memory of previous interactions
- Personalized responses based on user preferences

### Multi-language Support
- Automatic language detection
- Support for 50+ languages
- Real-time translation capabilities

### Advanced Capabilities
- Code generation and debugging assistance
- Document summarization
- Creative writing support
- Technical problem-solving

## Architecture

### Backend Infrastructure
\`\`\`typescript
// Conversation context management
class ConversationManager {
  async processMessage(userId: string, message: string) {
    const context = await this.getContext(userId);
    const response = await openai.createCompletion({
      model: "gpt-4",
      messages: [...context, { role: "user", content: message }],
      temperature: 0.7,
      max_tokens: 500
    });
    
    await this.saveContext(userId, message, response);
    return response;
  }
}
\`\`\`

### Caching Strategy
Implemented Redis caching for:
- User session management
- Conversation history
- Frequently asked questions
- Rate limiting

## Performance Optimizations
- Response streaming for better UX
- Intelligent prompt engineering
- Token usage optimization
- Parallel processing for multiple requests

## Security Measures
- Input sanitization and validation
- Rate limiting per user
- Encrypted conversation storage
- API key rotation system
`
  },
  "weather-dashboard": {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard with location-based forecasts and historical data visualization.",
    longDescription: "A comprehensive weather monitoring solution that provides real-time weather data, forecasts, and historical trends with beautiful data visualizations.",
    stack: ["Vue.js", "Express", "Chart.js", "Weather API"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather.example.com",
    date: "October 2023",
    readTime: "3 min read",
    content: `
# Weather Dashboard

## Overview
Created a comprehensive weather monitoring dashboard that provides real-time weather information, forecasts, and historical data visualization for multiple locations.

## Features

### Real-time Weather Data
- Current temperature, humidity, and conditions
- Wind speed and direction
- Air quality index
- UV index monitoring

### Forecast Capabilities
- 7-day weather forecast
- Hourly predictions for 48 hours
- Precipitation probability
- Temperature trends

### Data Visualization
- Interactive charts using Chart.js
- Historical weather patterns
- Comparative analysis between locations
- Seasonal trend analysis

## Technical Implementation

### API Integration
\`\`\`javascript
// Weather data fetching service
const fetchWeatherData = async (location) => {
  const [current, forecast, historical] = await Promise.all([
    weatherAPI.getCurrent(location),
    weatherAPI.getForecast(location),
    weatherAPI.getHistorical(location, last30Days)
  ]);
  
  return processWeatherData({ current, forecast, historical });
};
\`\`\`

### Responsive Design
- Mobile-first approach
- Progressive Web App capabilities
- Offline functionality with service workers

## Results
- **10,000+** active users
- **99.9%** uptime
- **< 1s** average load time
`
  },
  "blog-platform": {
    slug: "blog-platform",
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, and content management system.",
    longDescription: "A feature-rich blogging platform with markdown editing, SEO optimization, and a powerful content management system for writers and publishers.",
    stack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/blog",
    demo: "https://blog.example.com",
    date: "September 2023",
    readTime: "4 min read",
    content: `
# Modern Blog Platform

## Project Overview
Developed a modern blogging platform that combines the simplicity of markdown with powerful publishing features and SEO optimization.

## Key Features

### Content Management
- **Markdown/MDX Support**: Write in markdown with component embedding
- **Draft System**: Save and preview before publishing
- **Categories & Tags**: Organize content effectively
- **Search Functionality**: Full-text search across all posts

### SEO Optimization
- Dynamic meta tags generation
- Automatic sitemap creation
- Schema.org structured data
- Open Graph and Twitter cards

### Performance
- Static site generation for optimal performance
- Image optimization with Next.js Image
- Lazy loading for improved initial load
- CDN integration for global distribution

## Technical Highlights

### MDX Integration
\`\`\`jsx
// Custom MDX components
const components = {
  CodeBlock: ({ children, language }) => (
    <SyntaxHighlighter language={language}>
      {children}
    </SyntaxHighlighter>
  ),
  Alert: ({ type, children }) => (
    <div className={\`alert alert-\${type}\`}>
      {children}
    </div>
  )
};
\`\`\`

### Content API
Built a flexible content API:
- RESTful endpoints for CRUD operations
- GraphQL support for complex queries
- Webhook integration for CI/CD

## Achievements
- **100** Lighthouse performance score
- **50ms** average server response time
- **1M+** monthly page views
`
  },
  "portfolio-website": {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and achievements with a clean, responsive design.",
    longDescription: "A modern, responsive portfolio website built with Next.js and shadcn/ui, featuring smooth animations, dark mode support, and optimal performance.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio.example.com",
    date: "August 2023",
    readTime: "3 min read",
    content: `
# Portfolio Website

## Overview
Designed and developed a personal portfolio website to showcase my projects, skills, and professional journey with a focus on performance and user experience.

## Design Philosophy
- **Minimalist Approach**: Clean, distraction-free design
- **User-Centric**: Intuitive navigation and information architecture
- **Performance First**: Optimized for speed and accessibility
- **Responsive**: Seamless experience across all devices

## Key Features

### Interactive Elements
- Smooth scroll animations using Framer Motion
- Dynamic theme switching (light/dark mode)
- Interactive project cards with hover effects
- Animated skill badges

### Performance Optimizations
- Static site generation for instant loads
- Optimized images with Next.js Image component
- Code splitting for faster initial paint
- Prefetching for seamless navigation

## Technical Implementation

### Component Architecture
\`\`\`typescript
// Reusable project card component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {project.description}
        </CardContent>
      </Card>
    </motion.div>
  );
};
\`\`\`

## Results
- **95+** Lighthouse score across all metrics
- **< 1s** Time to Interactive
- **100%** accessibility score
- Featured in design showcases
`
  }
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <div className="mb-8">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-4xl  mb-4">{project.title}</h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            {project.longDescription}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{project.readTime}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-4">
            <Button asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
            {project.demo && (
              <Button asChild variant="outline">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {project.youtube && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Project Demo</h3>
            <YouTubeEmbed videoId={project.youtube} title={`${project.title} Demo`} />
          </div>
        )}
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <ProjectContent content={project.content} />
        </div>
      </article>
    </main>
  )
}