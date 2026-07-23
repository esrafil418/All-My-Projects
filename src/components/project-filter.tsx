"use client";

import { projects, tags } from "@/data/projects";
import { useState } from "react";
import { ProjectCard } from "./project-card";
import { Button } from "./ui/button";

export function ProjectFilter() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(activeTag.toLowerCase()),
        );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag) => (
          <Button
            key={tag}
            variant={activeTag === tag ? "default" : "outline"}
            onClick={() => setActiveTag(tag)}
            className="capitalize transition-all duration-200"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No projects found for this category.
          </p>
        </div>
      )}
    </div>
  );
}
