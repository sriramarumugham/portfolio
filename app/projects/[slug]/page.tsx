import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Calendar, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectContent } from "@/components/project-content"
import { Navbar } from "@/components/navbar"
import { YouTubeEmbed } from "@/components/youtube-embed"
import { GithubIcon } from "@/components/icons"
import { projects, getProjectBySlug, fetchGitHubReadme } from "@/lib/projects"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  // Fetch README from GitHub at build time
  const content = project.githubRepo
    ? await fetchGitHubReadme(project.githubRepo) || ""
    : ""

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Hero Section with Thumbnail */}
        <div className="mb-8">
          <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 bg-muted">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            {project.status && (
              <Badge
                variant={project.status === "completed" ? "default" : "secondary"}
                className="absolute top-4 right-4"
              >
                {project.status === "completed" ? "Live" : "In Progress"}
              </Badge>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl">{project.title}</h1>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{project.date}</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-6">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Live Demo Card */}
        {project.demo && (
          <Card className="mb-8 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Live Website</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[250px]">
                      {project.demo.replace(/^https?:\/\//, '')}
                    </p>
                  </div>
                </div>
                <Button asChild size="lg">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Site
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* GitHub Card */}
        {project.github && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <GithubIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">Source Code</p>
                    <p className="text-sm text-muted-foreground">
                      View the repository on GitHub
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" size="lg">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {project.youtube && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Project Demo</h3>
            <YouTubeEmbed videoId={project.youtube} title={`${project.title} Demo`} />
          </div>
        )}

        {content && (
          <div className="prose prose-neutral max-w-none">
            <ProjectContent content={content} />
          </div>
        )}
      </article>
    </main>
  )
}
