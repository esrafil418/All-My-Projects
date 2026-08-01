"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="max-w-3xl space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground">
              Frontend Developer
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Building modern web experiences with{" "}
              <span className="text-primary">React & Next.js</span>
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground">
              I create responsive, accessible, and user-friendly applications
              using modern frontend technologies.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/projects")}
            >
              <a target="_blank" rel="noopener noreferrer">
                All Projects
              </a>
            </Button>
            <Button size="lg" variant="outline">
              <a
                href="https://github.com/esrafil418"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Button>

            <Button size="lg" variant="outline">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/esrafil-dev-2249b019a/"
              >
                LinkedIn
              </a>
            </Button>

            <Button size="lg" variant="outline">
              <a
                target="_blank"
                href="https://www.frontendmentor.io/profile/esrafil418"
              >
                Frontend Mentor
              </a>
            </Button>
          </div>

          {/* <div
            className="
            flex
            flex-wrap
            gap-3
            text-sm
            text-muted-foreground
            "
          >
            <span>React</span>

            <span>•</span>

            <span>Next.js</span>

            <span>•</span>

            <span>TypeScript</span>

            <span>•</span>

            <span>Tailwind CSS</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
