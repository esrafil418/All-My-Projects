import { ProjectFilter } from "@/components/projects/project-filter";

export default function ProjectsPage() {
  return (
    <main
      className="
container
mx-auto
px-4
py-12
"
    >
      <header className="mb-10 space-y-4">
        <h1
          className="
text-5xl
font-bold
"
        >
          All Projects
        </h1>

        <p className="text-muted-foreground">
          Explore all my projects and experiments.
        </p>
      </header>

      <ProjectFilter />
    </main>
  );
}
