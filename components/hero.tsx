import { Github, Linkedin, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I&apos;m <span className="text-primary">Sreeram</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Passionate about building scalable web applications and solving complex problems. 
            Experienced in TypeScript, Node.js, React, and cloud technologies.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button asChild variant="outline" size="icon">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Code2 className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <Avatar className="w-48 h-48 md:w-64 md:h-64">
            <AvatarImage src="/avatar.jpg" alt="Sreeram" />
            <AvatarFallback className="text-6xl">S</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  )
}