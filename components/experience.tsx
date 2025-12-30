"use client";

import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Neokred",
    position: "SDE 2",
    location: "Bengaluru, Karnataka, India",
    period: "Apr 2024 - Present",
    type: "Full-time · On-site",
    description:
      "Contributed in development of Collectbot, a high-volume payment processing platform handling payin-payout transactions across multiple Indian banks.",
    responsibilities: [
      "Architect microservices for banking API integrations",
      "Design asynchronous payment processing workflows",
      "Implement gRPC, GraphQL, Kafka, Redis for scalable infrastructure",
      "Make critical technical decisions for transaction reliability",
      "Optimize system performance for high-volume financial operations",
    ],
    impact:
      "Built scalable payment infrastructure processing thousands of transactions daily, enabling seamless financial operations across India's banking ecosystem.",
    technologies: ["Apache Kafka", "Redis", "gRPC", "GraphQL", "Microservices"],
  },
  {
    company: "Neokred",
    position: "SDE 1",
    location: "Bengaluru, Karnataka, India",
    period: "Aug 2023 - Apr 2024",
    type: "Full-time · On-site",
    description:
      "Built foundational systems for identity management, policy automation, and India's first digital consent platform.",
    responsibilities: [
      "Internal IAM Tool - Identity and access management system with policy engine",
      "Policy Project - B2B employee insurance portal automating policy workflows",
      "Blutic - India's first consent management platform for DPDP Act 2023",
      "Full-stack development using MERN stack",
      "MongoDB schema optimization for faster queries",
      "Multi-platform support (Flutter, React Native, Web)",
      "OpenTelemetry implementation for system observability",
    ],
    impact:
      "Delivered compliance-ready solutions enabling secure data handling and automated policy management across multiple business verticals.",
    technologies: [
      "MERN Stack",
      "Microservices",
      "MongoDB",
      "Flutter",
      "OpenTelemetry",
    ],
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl mb-2 text-center md:text-left">
        Where I&apos;ve Worked
      </h2>
      {/* <p className="text-sm text-muted-foreground/70 mb-6 md:mb-8 text-center md:text-left">
        Building products at scale in production
      </p> */}

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">{exp.position}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {exp.company} · {exp.type}
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{exp.description}</p>

              <div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>→ {item}</li>
                  ))}
                </ul>
              </div>

              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Impact:</span> {exp.impact}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {exp.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
