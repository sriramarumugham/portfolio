"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Fastify", "Express", "Prisma", "PostgreSQL", "MongoDB", "Redis", "REST APIs"]
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Vercel", "Stripe", "Socket.io", "Jest", "Cypress"]
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "Bash", "Go"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <motion.h2 
        className="text-2xl md:text-3xl  mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}