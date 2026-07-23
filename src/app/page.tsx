import { ProjectFilter } from "@/components/project-filter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my work across different technologies and frameworks
          </p>
        </div>
        <ProjectFilter />
      </div>
    </main>
  );
}
