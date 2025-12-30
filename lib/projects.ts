import projectsData from "@/data/projects.json"

export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  stack: string[]
  github?: string
  githubRepo?: string
  demo?: string | null
  date: string
  status?: "completed" | "in-progress"
  thumbnail: string
  youtube?: string
}

export const projects: Project[] = projectsData as Project[]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export async function fetchGitHubReadme(githubRepo: string): Promise<string | null> {
  if (!githubRepo) return null

  const branches = ['main', 'master']

  for (const branch of branches) {
    try {
      const url = `https://raw.githubusercontent.com/${githubRepo}/${branch}/README.md`
      const response = await fetch(url, {
        next: { revalidate: 3600 }
      })

      if (response.ok) {
        return await response.text()
      }
    } catch (error) {
      console.error(`Failed to fetch README from ${branch} branch:`, error)
    }
  }

  return null
}
