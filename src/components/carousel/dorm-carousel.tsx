"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const DormCarousel = () => {
  return (
    <Carousel className="w-4/5">
      <CarouselContent>
        {Array.from([1, 2, 3, 4, 5]).map((k, index) => (
          <CarouselItem
            className="flex justify-center"
            key={"dorm-reservation" + k}
          >
            <Image
              className="rounded-2xl shadow-xl w-[250px] md:w-[350px]"
              src={`/project/dorm-reservation/dorm-reservation${k}.png`}
              alt="dorm-reservation photo"
              width={250}
              height={100}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
