import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl">{category.title}</CardTitle>
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
    </section>
  )
}