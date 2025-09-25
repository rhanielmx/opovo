import { env } from "@/env";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import { type Professor } from "./Professores";
import { ChevronRightIcon } from "lucide-react";
import { ProfessorDetailSkeleton } from "@/components/professor-detail-skeleton";

async function fetchProfessor(id: string) {
  const response = await fetch(`${env.VITE_API_URL}/professors/${id}/courses`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function ProfessorDetail() {
  const { id } = useParams<{id: string}>()
  
  const {data, error, isLoading} = useQuery<Professor>({
    
    queryKey: ['professor', 'id'],
    queryFn: () => fetchProfessor(id!),
    enabled: !!id,
  });

  if(isLoading) return <ProfessorDetailSkeleton />
  if(error) return <div>Error: {error.message}</div>

  if(!data) return <div>Professor not found</div>

  console.log(data)
  return (
    <div className="flex flex-col max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold border-l-4 border-l-[#138E98] text-[#138E98] pl-2 mb-6">{data.name}</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <img
          className="border border-3 border-[#138E98] rounded-md md:size-60"
          src={data.profile_image}
          alt={data.name}
        />
        <p className="text-lg">{data.description}</p>
      </div>
      <div>
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold">Cursos</span>
          <ChevronRightIcon className="mx-2 size-5 text-[#138E98]" />
        </div>
        <ul>
          {data.courses.map(course => (
            <li key={course.id} className="mb-4">
              <h3 className="text-xl font-semibold text-[#1F6482]">{course.name}</h3>
            </li>
          ))} 
        </ul>
      </div>
      
    </div>
  )
}