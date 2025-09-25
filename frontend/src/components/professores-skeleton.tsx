import { Skeleton } from './ui/skeleton';

export function ProfessoresSkeleton() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <div className="w-1 h-8 bg-[#138E98] mr-2" />
        <Skeleton className="h-8 w-32" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-[#17254D] border border-gray-300 rounded-lg overflow-hidden">           
            <Skeleton className="w-full h-48 bg-[#2a3a5f] rounded-t-lg" />
            
            <div className="p-4 space-y-4">
              <Skeleton className={`h-6 bg-[#2a3a5f] ${
                index % 3 === 0 ? 'w-3/4' : index % 3 === 1 ? 'w-2/3' : 'w-5/6'
              }`} />
              
              <Skeleton className={`h-4 bg-[#2a3a5f] ${
                index % 2 === 0 ? 'w-full' : 'w-4/5'
              }`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}