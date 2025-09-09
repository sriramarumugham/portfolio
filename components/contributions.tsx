import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Contributions() {
  const githubUsername = "yourusername"
  const leetcodeUsername = "yourusername"
  
  return (
    <section id="contributions" className="py-16">
      <h2 className="text-3xl font-bold mb-8">Contributions</h2>
      <div className="grid gap-6 md:grid-cols-2">
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>GitHub Streak</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-streak-stats.vercel.app/?user=${githubUsername}&theme=dark&hide_border=true`}
                alt="GitHub Streak Stats"
                className="rounded-lg w-full max-w-md dark:block hidden"
              />
              <img
                src={`https://github-readme-streak-stats.vercel.app/?user=${githubUsername}&theme=light&hide_border=true`}
                alt="GitHub Streak Stats"
                className="rounded-lg w-full max-w-md dark:hidden block"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>LeetCode Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Nunito&ext=contest`}
                alt="LeetCode Stats"
                className="rounded-lg w-full max-w-md dark:block hidden"
              />
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=light&font=Nunito&ext=contest`}
                alt="LeetCode Stats"
                className="rounded-lg w-full max-w-md dark:hidden block"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>GitHub Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_border=true&count_private=true`}
                alt="GitHub Stats"
                className="rounded-lg max-w-md dark:block hidden"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=light&hide_border=true&count_private=true`}
                alt="GitHub Stats"
                className="rounded-lg max-w-md dark:hidden block"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}