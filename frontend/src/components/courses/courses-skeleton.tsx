import { ChevronRightIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

export function CoursesSkeleton() {
  return (
    <section className="max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:pb-12">
      <div className="flex items-center mb-6">
        <span className="font-bold">Cursos</span>
        <ChevronRightIcon className="mx-2 size-4 text-[#138E98]" />
      </div>
      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex-none w-80 md:w-96">
              {/* Course Card Skeleton */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border">
                {/* Image skeleton */}
                <Skeleton className="w-full h-48" />
                <div className="p-4 space-y-4">
                  {/* Title skeleton */}
                  <Skeleton className="h-6 w-3/4" />
                  {/* Description skeleton */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  {/* Tags skeleton */}
                  <div className="flex gap-2">
                    <Skeleton className="h-5 w-16 rounded-full" />
                    <Skeleton className="h-5 w-20 rounded-full" />
                    <Skeleton className="h-5 w-12 rounded-full" />
                  </div>
                  {/* Price and workload skeleton */}
                  <div className="flex justify-between items-center mt-4">
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                    <Skeleton className="h-8 w-24 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}