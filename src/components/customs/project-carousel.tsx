"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { TempBlock } from "./temp-block";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Slate",
    description:
      "A sleek and responsive landing page designed for modern startups to showcase their products effectively.",
    imageUrl:
      "",
    link: "#",
  },
  {
    title: "Antimetal",
    description:
      "A dynamic, animation-focused landing page highlighting creative transitions and interactive elements.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
  {
    title: "Echo",
    description:
      "A minimalist financial dashboard helping users track their investments with real-time data visualization.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    link: "#",
  },
];

export const ProjectCarousel = () => {
  return (
    <div>
      <h2 className="mb-4 text-lg font-semibold">PROJECT</h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
            >
              <Card className="border-0 bg-transparent">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-xl">
                      <TempBlock width="600" height="400" />
                    </div>
                    <div className="space-y-2 p-2">
                      <h3 className="text-2xl font-medium">{project.title}</h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="group px-0 text-primary hover:bg-transparent"
                      >
                        Click to view{" "}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
};
