"use client";

import { Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        {/* Photo first on mobile, right side on desktop */}
        <motion.div
          className="flex-shrink-0 order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <div className="relative w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/portfolio/avatar.png"
              alt="Sreeram"
              width={256}
              height={256}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </motion.div>

        {/* Text second on mobile, left side on desktop */}
        <motion.div
          className="flex-1 space-y-4 text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I&apos;m <span className="text-primary">Sreeram</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </motion.p>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Passionate about building scalable web applications and solving
            complex problems. Experienced in TypeScript, Node.js, React, and
            cloud technologies.
          </motion.p>

          <motion.div
            className="text-center md:text-left mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-2 underline-offset-4 hover:decoration-4 transition-all text-lg"
            >
              View my resume
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 pt-2 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Button asChild variant="outline" size="icon">
              <a
                href="https://github.com/sriramarumugham"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a
                href="https://leetcode.com/u/sriram_arumugam/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code2 className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
