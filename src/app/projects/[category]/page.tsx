import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/projects/project-card";
import {
  PROJECT_CATEGORIES,
  ProjectCategory,
} from "@/constants/project-categories";
import { projectSections } from "@/data/project-sections";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;

  const validCategories = Object.values(PROJECT_CATEGORIES);

  if (!validCategories.includes(category as ProjectCategory)) {
    notFound();
  }

  const section = projectSections.find(
    (section) => section.category === category,
  );

  const categoryProjects = projects.filter(
    (project) => project.category === category,
  );

  return (
    <main className="container mx-auto px-4 py-12">
      <header className="mb-10 space-y-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          {section?.title}
        </h1>

        <p className="text-muted-foreground">
          {categoryProjects.length} projects
        </p>
      </header>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {categoryProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
