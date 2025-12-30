"use client";

import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/icons";

export function Hero() {
  return (
    <motion.section
      id="home"
      className="py-20 md:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
        <div className="flex-shrink-0 order-1 md:order-2 mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/avatar.png"
              alt="Sreeram"
              width={256}
              height={256}
              className="w-full h-full object-cover object-center"
              priority
            />
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left order-2 md:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl leading-snug">
            Hi, I&apos;m <span className="text-primary">Sreeram</span>
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg text-muted-foreground/70 font-normal tracking-wide">
            I turn ideas into software.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed pt-2">
            I design and build scalable backends and clean full-stack
            applications with a strong focus on architecture, performance, and
            long-term maintainability. From concept to production, I make sure
            the product is reliable, simple to deploy, and easy to scale.
          </p>

          <div className="text-center md:text-left mb-4">
            <a
              href="https://drive.google.com/file/d/1nppjdB8ssd57PuK_kpZ2eoYoo6PPlgEg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline decoration-2 underline-offset-4 hover:decoration-4 transition-all text-lg"
            >
              View my resume
            </a>
          </div>

          <div className="flex gap-4 pt-2 justify-center md:justify-start">
            <Button asChild variant="outline" size="icon">
              <a
                href="https://github.com/sriramarumugham"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a
                href="https://www.linkedin.com/in/sreeram-a-78494b1aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon">
              <a
                href="https://wa.me/918300410446"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="h-5 w-5" />
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
          </div>
        </div>
      </div>
    </motion.section>
  );
}
