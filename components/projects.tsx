"use client"

import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://demo.example.com"
  },
  {
    title: "Task Management App", 
    description: "Collaborative task management application with real-time updates, team workspaces, and productivity analytics.",
    stack: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com/yourusername/taskmanager",
    demo: "https://taskapp.example.com"
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by OpenAI API with context awareness and multi-language support.",
    stack: ["TypeScript", "Fastify", "OpenAI", "Redis", "Docker"],
    github: "https://github.com/yourusername/ai-assistant",
    demo: null
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather monitoring dashboard with location-based forecasts and historical data visualization.",
    stack: ["Vue.js", "Express", "Chart.js", "Weather API"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather.example.com"
  },
  {
    title: "Blog Platform",
    description: "Modern blogging platform with markdown support, SEO optimization, and content management system.",
    stack: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/blog",
    demo: "https://blog.example.com"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website showcasing projects, skills, and achievements with a clean, responsive design.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio.example.com"
  }
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-12 md:py-16">
      <motion.h2 
        className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="gap-2 pt-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              {project.demo && (
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}