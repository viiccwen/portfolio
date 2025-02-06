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
import { project_list } from "@/lib/lists";
import Link from "next/link";
import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";

export const ProjectCarousel = () => {
  const { t } = useTranslation("translation", { i18n });

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {project_list.map((project, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2"
          >
            <Card className="border-0 bg-transparent">
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="relative w-full h-[200px] overflow-hidden rounded-xl">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="space-y-2 p-2">
                    <h3 className="text-xl font-medium">{t(project.title)}</h3>
                    <p className="text-muted-foreground">
                      {t(project.description)}
                    </p>
                    <Button
                      variant="ghost"
                      className="group px-0 text-primary hover:bg-transparent"
                    >
                      <Link
                        className="flex"
                        href={project.link}
                        target="_blank"
                      >
                        {t("Click to view")}
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
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
  );
};
