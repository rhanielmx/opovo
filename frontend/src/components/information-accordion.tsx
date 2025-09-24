import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const ACCORDION_DATA = {
  title: "Informações para decidir",
  items: [
    {
      id: 'item-1',
      question: "Competências que você vai desenvolver",
      answer: "Yes. It adheres to the WAI-ARIA design pattern."

    },
    {
      id: 'item-2',
      question: "Pra quem se destina",
      answer: "Esse curso é para você, que já concluiu ou está concluindo o ensino médio e quer se capacitar para entrar no mercado de trabalho. É gestor escolar e quer ampliar os seus conhecimentos a respeito dos processos realizados na secretaria escolar. Que deseja ter uma formação técnica para estar preparado(a) para realizar concurso público e atuar em escolas públicas ou privadas."
    },
    {
      id: 'item-3',
      question: "Quando será o pagamento da primeira mensalidade e a data de início do curso?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      id: 'item-4',
      question: "Quais são as condições de pagamento e quais os descontos oferecidos?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern."
    }
  ]
}

export function InformationAccordion(){
  return (
    <div className='max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:pb-12'>
      <h2 className='font-lg font-bold border-l-4 border-l-[#138E98] mb-6 pl-2'>{ACCORDION_DATA.title}</h2>
      <Accordion type="single" collapsible className="flex flex-col gap-4">
      {
        ACCORDION_DATA.items.map(item => {
        return (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger
            className="text-[#1F6482] data-[state=open]:text-[#121E3E] bg-[#DFDFDF] pl-6 pr-2 py-2 rounded-none transition-colors transition-duration-200">
              {item.question}
          </AccordionTrigger>
          <AccordionContent className="[data-state=open]:text-red-500 pl-6 pr-2 py-2">
            {item.answer}
            </AccordionContent>
          </AccordionItem>
        )
      })
      }    
    </Accordion>
  </div>    
  )
}