"use client";

import { EmblaCarouselType } from "embla-carousel";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { ProjectCategory } from "@/constants/project-categories";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";
import { ProjectCarousel } from "./project-carousel";

interface Props {
  title: string;
  category: ProjectCategory;
}

export function ProjectSection({ title, category }: Props) {
  const [emblaApi, setEmblaApi] = useState<EmblaCarouselType>();

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    updateButtons();

    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  const sectionProjects = projects
    .filter((project) => project.category === category)
    .slice(0, 10);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>

        <div className="flex gap-2">
          <Button
            size="icon"
            variant="outline"
            disabled={!canScrollPrev}
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft />
          </Button>

          <Button
            size="icon"
            variant="outline"
            disabled={!canScrollNext}
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>

      <ProjectCarousel setApi={setEmblaApi}>
        {sectionProjects.map((project) => (
          <div key={project.id} className="flex-[0_0_320px]">
            <ProjectCard project={project} />
          </div>
        ))}
      </ProjectCarousel>

      <div className="flex justify-end">
        <Link
          href={`/projects/${category}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "inline-flex items-center",
          )}
        >
          View all
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
