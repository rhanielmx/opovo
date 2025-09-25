import { Tag } from "@/components/tag";
import type { Course } from "./courses";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps){
  return (
    <div className="flex flex-col bg-[#17254D] rounded-lg relative group overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <img className="rounded-t-lg w-full h-40 object-cover" src={course?.banner_image}/>
      <div className="flex flex-col px-3 py-4 h-50 md:h-60 ">
        <div className="flex flex-wrap gap-2">
          {
            course?.tags.split(',').map(tag => <Tag key={tag} content={tag.replace(/["{}]/g,"")}/>)
          }
        </div>
        <div className="flex flex-col justify-between h-full text-white">
          <h3 className="text-2xl font-bold">{course?.name}</h3>
          <span className="font-xs">Por Fundação Demócrito Rocha</span>
        </div>
      </div>
    </div>
  )
}