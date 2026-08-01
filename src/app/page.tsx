import { HeroSection } from "@/components/hero-section";
import { ProjectSection } from "@/components/projects/project-section";
import { projectSections } from "@/data/project-sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 space-y-16">
        <header className="space-y-4">
          <HeroSection />
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
