import { Skeleton } from './ui/skeleton';

export function InformationCardSkeleton() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:py-12 flex-wrap">
      {[...Array(4)].map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-12 w-24" />
        </div>
      ))}
    </section>
  );
}