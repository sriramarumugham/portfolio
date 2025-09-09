import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Resume() {
  return (
    <section id="resume" className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Resume</h2>
      <Card className="max-w-sm sm:max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-lg md:text-xl">Download Resume</CardTitle>
          <CardDescription>
            Get my latest resume with detailed experience, skills, and achievements.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button asChild size="lg" className="w-full">
            <a 
              href="/resume.pdf" 
              download="Sreeram_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </CardContent>
      </Card>
    </section>
  )
}