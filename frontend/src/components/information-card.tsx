import { useSelectedCourse } from "@/contexts/SelectedCourseContext";

export function InformationCard() {
  const { selectedCourse } = useSelectedCourse()

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:py-12 flex-wrap">
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-2xl lg:text-3xl">Carga Horária</span>
        <span className="font-light text-3xl lg:text-5xl">{selectedCourse?.workload} horas</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-2xl lg:text-3xl">Conteúdo</span>
        <span className="font-light  text-3xl lg:text-5xl">{selectedCourse?.modules.length} Módulos</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-2xl lg:text-3xl">Período de Acesso</span>
        <span className="font-light  text-3xl lg:text-5xl">{selectedCourse?.access_period} Meses</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-2xl lg:text-3xl">Modalidade</span>
        <span className="font-light  text-3xl lg:text-5xl">{selectedCourse?.modality}</span>
      </div>
    </section>
  )
}