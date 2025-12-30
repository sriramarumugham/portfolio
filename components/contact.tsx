"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sreeram.amg@gmail.com",
      href: "mailto:sreeram.amg@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8300410446",
      href: "tel:+918300410446",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+91 8300410446",
      href: "https://wa.me/918300410446",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: null,
    },
  ];

  return (
    <motion.section
      id="contact"
      className="py-12 md:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl mb-2 text-center md:text-left">
        Let&apos;s Talk
      </h2>
      <p className="text-sm text-muted-foreground/70 mb-6 md:mb-8 text-center md:text-left">
        Have a project in mind? Let&apos;s make it happen
      </p>

      <Card className="max-w-lg">
        <CardHeader>
          {/* <CardTitle>Contact</CardTitle>
          <CardDescription>
            Feel free to reach out
          </CardDescription> */}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-3">Connect</p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/sriramarumugham"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/sreeram-a-78494b1aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
