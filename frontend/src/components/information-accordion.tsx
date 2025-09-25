import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

interface AccordionData {
  id: string;
  title: string;
  content: string
}

interface InformationAccordionProps {
  title: string
  items: AccordionData[] | undefined
}

export function InformationAccordion({ title, items }: InformationAccordionProps){
  console.log('items', items)
  return (
    <div className='max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:pb-12'>
      <h2 className='font-lg font-bold border-l-4 border-l-[#138E98] mb-6 pl-2'>{title}</h2>
      <Accordion type="single" collapsible className="flex flex-col gap-4">
      {
        items?.map(item => {
        return (
          <AccordionItem value={item.id} key={item.id}>
            <AccordionTrigger
            className="text-[#1F6482] data-[state=open]:text-[#121E3E] bg-[#DFDFDF] pl-6 pr-2 py-2 rounded-none transition-colors transition-duration-200">
              {item.title}
          </AccordionTrigger>
          <AccordionContent className="[data-state=open]:text-red-500 pl-6 pr-2 py-2">
            {item.content}
            </AccordionContent>
          </AccordionItem>
        )
      })
      }    
    </Accordion>
  </div>    
  )
}