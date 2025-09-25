import { Skeleton } from './ui/skeleton';

export function BannerSkeleton() {
  return (
    <div className="w-full py-6 md:py-12 bg-[#17254D] items-center justify-center flex h-full">
      <div className='gap-6 flex flex-col-reverse lg:flex-row max-w-[1440px] px-3 md:px-18'>
        <div className="flex flex-col items-start flex-1">
          <div className="flex gap-3 mb-2">
            <Skeleton className="h-6 w-16 bg-[#2a3a5f] bg-opacity-60" />
            <Skeleton className="h-6 w-20 bg-[#2a3a5f] bg-opacity-60" />
            <Skeleton className="h-6 w-14 bg-[#2a3a5f] bg-opacity-60" />
          </div>
          <div className="flex flex-col gap-4 items-start h-full justify-between w-full">
            <div className='flex flex-col gap-4 w-full'>
              <Skeleton className="h-8 w-3/4 bg-[#2a3a5f] bg-opacity-60" />
              <div className="space-y-2 w-full">
                <Skeleton className="h-4 w-full bg-[#2a3a5f] bg-opacity-60" />
                <Skeleton className="h-4 w-5/6 bg-[#2a3a5f] bg-opacity-60" />
                <Skeleton className="h-4 w-4/5 bg-[#2a3a5f] bg-opacity-60" />
              </div>
            </div>
            {/* Marcas skeleton */}
            <Skeleton className="w-32 h-14 bg-[#2a3a5f] bg-opacity-60" />
          </div>
        </div>
        {/* Banner image skeleton */}
        <div className="flex-shrink-0 flex justify-start items-start lg:justify-end h-full object-contain">
          <Skeleton className="w-full max-w-[400px] md:max-w-[636px] h-[250px] md:h-[400px] rounded-lg bg-[#2a3a5f] bg-opacity-60" />
        </div>
      </div>
    </div>
  );
}