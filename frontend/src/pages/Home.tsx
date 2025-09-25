import { Banner } from '../components/banner'
import { Courses } from '../components/courses/courses'
import { InformationAccordion } from '../components/information-accordion'
import { InformationCard } from '../components/information-card'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useSelectedCourse } from '../contexts/SelectedCourseContext'
import { env } from '../env'
import { ACCORDION_DATA } from '@/data'



async function fetchCourses() {
  const response = await fetch(`${env.VITE_API_URL}/courses?include_details=true`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function Home() {
  const { selectedCourse, setSelectedCourse } = useSelectedCourse();
  const { data, error, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  useEffect(() => {
    if(data && data.length > 0)
      setSelectedCourse(data[0])
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Banner />
      <InformationCard />
      <Courses courses={data} />
      <InformationAccordion title={ACCORDION_DATA.title} items={ACCORDION_DATA.items} />
      <InformationAccordion title='O que você vai aprender' items={selectedCourse?.modules.map(module=>{
        return {
          id: module.id,
          title: module.title,
          content: module.description,
        }
      })} />
      
    </>
  )
}