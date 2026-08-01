import { ProjectSection } from "@/components/projects/project-section";
import { ModeToggle } from "@/components/theme/theme-button";
import { projectSections } from "@/data/project-sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 space-y-16">
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-bold">My Projects</h1>
            <ModeToggle />
          </div>

          <p className="text-muted-foreground text-lg">
            A collection of my frontend and full-stack projects.
          </p>
        </header>

        {projectSections.map((section) => (
          <ProjectSection
            key={section.category}
            title={section.title}
            category={section.category}
          />
        ))}
      </div>
    </main>
  );
}
