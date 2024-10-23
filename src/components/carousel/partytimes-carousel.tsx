"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const PartyTimesCarousel = () => {
  return (
    <Carousel className="w-4/5 md:w-5/6">
      <CarouselContent>
        {Array.from([1, 2, 3, 4]).map((k, index) => (
          <CarouselItem
            className="flex justify-center"
            key={"partytimes-" + index}
          >
            <Image
              className="rounded-2xl shadow-xl"
              src={`/project/partytimes/partytimes${k}.png`}
              alt="carousel photo"
              width={1000}
              height={300}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
