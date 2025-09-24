import { Tag } from "@/components/tag";

export function CourseCard(){
  return (
    <div className="flex flex-col bg-[#17254D] rounded-lg">
      <img src="/secretaria-escolar.png"/>
      <div className="flex flex-col px-3 py-4">
        <div className="flex gap-2">
          <Tag content="Extensão"/>
          <Tag content="Bem-viver"/>
        </div>
        <div className="flex flex-col justify-between h-50 md:h-60 text-white">
          <h3 className="text-2xl font-bold">Educação Ambiental para um Presente Sustentável</h3>
          <span className="font-xs">Por Fundação Demócrito Rocha</span>
        </div>
      </div>
    </div>
  )
}