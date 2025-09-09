import type { Metadata } from "next";
import { Architects_Daughter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const architectsDaughter = Architects_Daughter({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-architects-daughter"
});

export const metadata: Metadata = {
  title: "Sreeram's Portfolio",
  description: "Personal portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={architectsDaughter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
