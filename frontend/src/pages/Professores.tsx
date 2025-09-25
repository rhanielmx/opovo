import type { Course } from "@/components/courses/courses";
import { env } from "@/env";
import { useQuery } from "@tanstack/react-query";


export interface Professor {
  id: string;
  name: string;
  formations: string;
  description: string;
  profile_image: string;
  created_at: string; // ISO 8601 date string
  updated_at: string; // ISO 8601 date string
  courses: Course[];
}

async function fetchProfessors() {
  const response = await fetch(`${env.VITE_API_URL}/professors`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function Professores(){
  const {data, error, isLoading} = useQuery<Professor[]>({
    queryKey: ['professors'],
    queryFn: fetchProfessors,
  });

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error.message}</div>

  return(
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold border-l-4 border-l-[#138E98] mb-6 pl-2">Professores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        { data && data.length > 0 && (data.map((professor)=> {
          return (
          <div
            key={professor.id}
            className="bg-[#17254D] border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-200 cursor-pointer relative group overflow-hidden"
            onClick={() => window.location.href = `/professores/${professor.id}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <img 
              className="w-full object-cover rounded-t-lg"
              src={professor.profile_image}
              alt={professor.name}
            />
            <div className="flex flex-col justify-between p-4 gap-4">
              <h3 className="text-xl font-semibold text-white">{professor.name}</h3>
              {/* <p className="text-gray-700 mb-4">{professor.description}</p> */}
              <span className="text-sm text-gray-300">{professor.formations}</span>
            </div>
          </div>
          )
        }) )  }
      </div>
    </div>
  )
}