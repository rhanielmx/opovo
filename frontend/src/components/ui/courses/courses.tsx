import { ChevronRightIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../carousel";
import { CourseCard } from "./course-card";

export function Courses() {
  return (
    <section className="max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:pb-12">
      <div className="flex items-center mb-6">
        <span className="font-bold">Cursos</span>
        <ChevronRightIcon className="mx-2 size-4 text-[#138E98]" />
      </div>
      <Carousel className="relative">
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4"><CourseCard/></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4"><CourseCard/></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4"><CourseCard/></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4"><CourseCard/></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4"><CourseCard/></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/4"><CourseCard/></CarouselItem>
        </CarouselContent>
    
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  )
}