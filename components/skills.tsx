"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Design to Code",
      "Responsive UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Fastify",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",
      "Multi-tenancy",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Multi-auth Systems",
      "CMS Development",
      "Payment Integration",
      "Scalable Design",
      "Clean Code",
    ],
  },
  {
    title: "DevOps & Deployment",
    skills: [
      "AWS",
      "Docker",
      "Cloudflare",
      "Vercel",
      "GitHub Actions",
      "Self-hosting",
      "Fast Launches",
    ],
  },
];

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl mb-2 text-center md:text-left">
        What I Work With
      </h2>
      {/* <p className="text-sm text-muted-foreground/70 mb-6 md:mb-8 text-center md:text-left">
        Technologies I use to bring ideas to life
      </p> */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">
                {category.title}
              </CardTitle>
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
        ))}
      </div>
    </motion.section>
  );
}
