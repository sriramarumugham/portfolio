import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function Contributions() {
  const githubUsername = "sriramarumugham";
  const leetcodeUsername = "sriram_arumugam";

  return (
    <section id="contributions" className="py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl  mb-6 md:mb-8">
        Contributions
      </h2>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <span>GitHub Streak</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center overflow-hidden">
              <Image
                src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=dark&hide_border=true`}
                alt="GitHub Streak Stats"
                width={400}
                height={200}
                className="rounded-lg max-w-full w-auto h-auto dark:block hidden"
                unoptimized
              />
              <Image
                src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=default&hide_border=true`}
                alt="GitHub Streak Stats"
                width={400}
                height={200}
                className="rounded-lg max-w-full w-auto h-auto dark:hidden block"
                unoptimized
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              <span>LeetCode Stats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center overflow-hidden">
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Nunito&ext=contest`}
                alt="LeetCode Stats"
                className="rounded-lg max-w-full w-auto h-auto dark:block hidden"
              />
              <img
                src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=light&font=Nunito&ext=contest`}
                alt="LeetCode Stats"
                className="rounded-lg max-w-full w-auto h-auto dark:hidden block"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">
              GitHub Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_border=true&count_private=true`}
                alt="GitHub Stats"
                className="rounded-lg max-w-full w-auto h-auto dark:block hidden"
              />
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=light&hide_border=true&count_private=true`}
                alt="GitHub Stats"
                className="rounded-lg max-w-full w-auto h-auto dark:hidden block"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
