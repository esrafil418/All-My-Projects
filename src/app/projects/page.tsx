"use client";

import { ProjectFilter } from "@/components/projects/project-filter";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href="/"
          className="mb-8 inline-flex w-fit items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>

      <motion.header
        className="mb-10 space-y-4"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        <h1 className="text-5xl font-bold font-roboto-slab">All Projects</h1>

        <p className="text-muted-foreground">
          Explore all my projects and experiments.
        </p>
      </motion.header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      >
        <ProjectFilter />
      </motion.div>
    </main>
  );
}
