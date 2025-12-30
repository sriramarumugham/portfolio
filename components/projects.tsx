"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { getImagePath } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl mb-2 text-center md:text-left">
        What I&apos;ve Built
      </h2>
      {/* <p className="text-sm text-muted-foreground/70 mb-6 md:mb-8 text-center md:text-left">
        End-to-end products, from concept to production
      </p> */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 h-full"
          >
            <div className="relative w-full h-40 overflow-hidden bg-muted">
              <Image
                src={getImagePath(project.thumbnail)}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {project.status && (
                <Badge
                  variant={
                    project.status === "completed" ? "default" : "secondary"
                  }
                  className="absolute top-2 right-2 text-xs"
                >
                  {project.status === "completed" ? "Live" : "In Progress"}
                </Badge>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription className="text-sm line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pt-0">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.stack.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.stack.length - 4}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 pt-2">
              <Link href={`/projects/${project.slug}`} className="w-full">
                <Button variant="default" size="sm" className="w-full">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <div className="flex gap-2 w-full">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className={project.demo ? "flex-1" : "w-full"}
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <GithubIcon className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                )}
                {project.demo && (
                  <Button
                    variant="outline"
                    size="sm"
                    className={project.github ? "flex-1" : "w-full"}
                    onClick={() => window.open(project.demo!, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
