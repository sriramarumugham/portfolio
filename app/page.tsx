import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Contributions } from "@/components/contributions"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 space-y-12 md:space-y-16">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contributions />
        <Contact />
      </div>
    </main>
  )
}
