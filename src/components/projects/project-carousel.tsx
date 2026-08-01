"use client";

import { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useEffect } from "react";

interface ProjectCarouselProps {
  children: ReactNode;
  setApi?: (api: EmblaCarouselType) => void;
}

export function ProjectCarousel({ children, setApi }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
  });

  useEffect(() => {
    if (!emblaApi || !setApi) return;

    setApi(emblaApi);
  }, [emblaApi, setApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">{children}</div>
    </div>
  );
}
