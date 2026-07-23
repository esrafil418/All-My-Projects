import { Project } from "@/data/projects";
import { ExternalLink, GitPullRequestArrow } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="relative w-full h-48 rounded-lg mb-4 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="grow">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" size="sm">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <GitPullRequestArrow className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button size="sm">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
