"use client"

import { Calendar, MapPin, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const experiences = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description: "Leading development of enterprise-scale web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.",
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led team of 5 developers on critical projects",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Architected microservices handling 1M+ requests daily"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "PostgreSQL"]
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    location: "New York, NY",
    period: "Jun 2020 - Dec 2021",
    description: "Developed and maintained client-facing applications with focus on performance and user experience. Collaborated with design team to implement pixel-perfect interfaces.",
    achievements: [
      "Built RESTful APIs serving 500K+ users",
      "Improved test coverage from 45% to 85%",
      "Reduced bug reports by 30% through better testing",
      "Implemented real-time features using WebSockets"
    ],
    technologies: ["Vue.js", "Express", "MongoDB", "Redis", "Socket.io"]
  },
  {
    company: "StartUp Ventures",
    position: "Junior Developer",
    location: "Austin, TX",
    period: "Aug 2018 - May 2020",
    description: "Started career building MVPs for various startups. Gained experience in rapid prototyping and working directly with clients to deliver solutions.",
    achievements: [
      "Delivered 10+ MVPs for startup clients",
      "Learned full-stack development from senior mentors",
      "Participated in 24-hour hackathons winning 2 prizes",
      "Contributed to open-source projects"
    ],
    technologies: ["JavaScript", "React", "Python", "Django", "MySQL"]
  }
]

export function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="experience" className="py-12 md:py-16">
      <motion.h2 
        className="text-2xl md:text-3xl mb-6 md:mb-8 text-center md:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>
      
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      <span>{exp.company}</span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{exp.description}</p>
                
                <div>
                  <h4 className="mb-2 flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}