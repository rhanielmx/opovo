import { Skeleton } from './ui/skeleton';
import { ChevronRightIcon } from "lucide-react";

export function ProfessorDetailSkeleton() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-[#138E98] mr-2" />
        <Skeleton className="h-8 w-48" />
      </div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <div className="flex-shrink-0">
          <Skeleton className="w-60 h-60 rounded-md" />
        </div>
        
        <div className="flex-1 space-y-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-5/6" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-5/6" />
        </div>
      </div>
      
      <div>
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold">Cursos</span>
          <ChevronRightIcon className="mx-2 size-5 text-[#138E98]" />
        </div>
        
        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="mb-4">
              <Skeleton className={`h-6 ${
                index % 3 === 0 ? 'w-72' : index % 3 === 1 ? 'w-64' : 'w-80'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}