import { ChevronRightIcon } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { CourseCard } from "./course-card";
import { useSelectedCourse } from "@/contexts/SelectedCourseContext";

export interface Professor{

}

export interface Module{
  id: string;
  title: string;
  description: string;
  order_number: number;
}

export interface Course {
  access_period: number;
  banner_image: string;
  created_at: string;       // ISO date-time string
  id: string;               // UUID string
  modality: string;
  name: string;
  description: string;
  price: string;            // Consider using number if possible
  tags: string;             // Could be parsed as string[] if desired
  updated_at: string;       // ISO date-time string
  workload: number;
  professors: Professor[]; 
  modules: Module[];  
}

interface CoursesProps {
  courses: Course[];
}

export function Courses({ courses }: CoursesProps) {
  const { setSelectedCourse } = useSelectedCourse();

  return (
    <section id="cursos" className="max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:pb-12 hover:cursor-pointer hover:transparent">
      <div className="flex items-center mb-6">
        <span className="font-bold">Cursos</span>
        <ChevronRightIcon className="mx-2 size-4 text-[#138E98]" />
      </div>
      <Carousel className="relative">
        <CarouselContent>
          {
            courses.map(course => (
              <CarouselItem
                key={course.id} className="md:basis-1/2 lg:basis-1/4"
                onClick={() => setSelectedCourse(course)}
                >
                <CourseCard course={course} />
              </CarouselItem>
            ))
          }
        </CarouselContent>
    
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  )
}