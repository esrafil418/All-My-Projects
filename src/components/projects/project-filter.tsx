"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { projects, tags } from "@/data/projects";
import { ProjectCard } from "./project-card";

const PROJECTS_PER_PAGE = 8;

export function ProjectFilter() {
  const [activeTag, setActiveTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;

    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE),
  );

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTag]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 pt-6">
        <Button
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((page) => page - 1)}
        >
          Previous
        </Button>

        <span className="text-sm text-muted-foreground">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((page) => page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
