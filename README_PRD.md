📄 PRD – Personal Portfolio Website

1. 🎯 Objective

Build a personal portfolio website hosted on GitHub Pages using Next.js + Tailwind + shadcn/ui.
Showcase:

Profile (intro, resume, social links)

Projects (with GitHub/demo links)

Skills (tech stack)

GitHub streaks & LeetCode streaks embedded (via API/widget)

Must be mobile responsive and clean.

2. 🔑 Core Features
   🏠 Homepage

Name, role, tagline

Avatar/profile picture

Social links (GitHub, LinkedIn, LeetCode)

Responsive hero (stack on mobile, side-by-side on desktop)

📂 Projects Section

Project cards (name, description, stack, GitHub/demo links)

Grid: 1 column on mobile, 2–3 on desktop

💡 Skills Section

Tech stack badges (TypeScript, Next.js, Node.js, Fastify, Tailwind, etc.)

Responsive wrapping layout

📊 Contributions Section

GitHub streaks embed (github-readme-streak-stats API)

LeetCode streaks embed (leetcard or API-based stats)

Ensure embeds resize properly on mobile

📄 Resume Section

Resume download button (PDF link from GitHub repo)

Always visible & responsive

3. 📐 Design & UI (shadcn + Tailwind)

Navbar: sticky, collapses into hamburger menu on mobile

Cards: rounded, shadowed, clean layout

Dark/Light mode toggle

Charts/Embeds: responsive container wrapping

Animations: smooth but minimal

4. 🛠️ Tech Stack

Framework: Next.js (TypeScript)

Styling: TailwindCSS + shadcn/ui

Hosting: GitHub Pages (via GitHub Actions)

Data Sources:

GitHub API / GitHub streaks API (embed image)

LeetCode API / leetcard (embed image or fetch stats)

5. 🚀 Future Enhancements

Blog (MDX posts)

Contact form (Formspree/Email API)

Analytics (Google/Vercel)

6. ✅ Acceptance Criteria

Works on GitHub Pages

Fully mobile responsive

Resume downloadable

GitHub & LeetCode streaks embedded and readable

Projects clickable (GitHub/demo)

Clean UI, dark/light toggle

links
https://ui.shadcn.com/docs/installation/next
