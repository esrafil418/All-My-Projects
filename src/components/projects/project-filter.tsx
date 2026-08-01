"use client";

import { Button } from "@/components/ui/button";
import { projects, tags } from "@/data/projects";
import { useState } from "react";
import { ProjectCard } from "./project-card";

export function ProjectFilter() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <div className="space-y-10">
      <div
        className="
flex
flex-wrap
gap-3
"
      >
        {tags.map((tag) => (
          <Button
            key={tag}
            variant={activeTag === tag ? "default" : "outline"}
            onClick={() => setActiveTag(tag)}
            className="capitalize"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div
        className="
grid
gap-6
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
