export function InformationCard() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:py-12">
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-[28px]">Carga Horária</span>
        <span className="font-light text-5xl">1.500 Horas</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-[28px]">Conteúdo</span>
        <span className="font-light text-5xl">7 Módulos</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-[28px]">Período de Acesso</span>
        <span className="font-light text-5xl">7 Módulos</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="uppercase text-[#999] font-md font-bold text-[28px]">Modalidade</span>
        <span className="font-light text-5xl">7 EAD</span>
      </div>
    </section>
  )
}