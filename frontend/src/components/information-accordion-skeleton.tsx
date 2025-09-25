import { Skeleton } from './ui/skeleton';

export function InformationAccordionSkeleton() {
  return (
    <section className="max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:py-12">
      <Skeleton className="h-8 w-64 mb-6" />
      
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="border rounded-lg">
            <div className="flex justify-between items-center p-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}