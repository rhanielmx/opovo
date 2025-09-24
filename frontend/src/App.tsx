import { Banner } from './components/banner'
import { Courses } from './components/ui/courses/courses'
import { InformationAccordion } from './components/information-accordion'
import { InformationCard } from './components/information-card'
import { Navbar } from './components/navbar'
import { Button } from './components/ui/button'
import logoOPOVO from './assets/logo-opovo.svg'
import logoUANE from './assets/logo-UANE.png'
import wppLogo from './assets/wpp-logo.svg'

function App() {

  return (
    <main className='w-full h-screen'>
      <Navbar/>
      <Banner />
      <InformationCard />
      <InformationAccordion />
      <Courses />
      <section className='max-w-[1440px] mx-auto px-3 py-6 md:px-18 md:pb-12'>
        <h2 className='font-lg font-bold border-l-4 border-l-[#138E98] mb-6 pl-2'>Investimentos</h2>
        <div className='flex flex-col md:flex-row gap-6 text-center'>
          <div className='flex flex-col gap-6 bg-[#04254E] p-12 rounded-md items-center md:w-1/2'>
            <p className='text-white text-2xl font-medium'>3º lote: Total de R$ 2.835,35 <br/>+ Matrícula de R$ 70</p>
            <h2 className='text-5xl text-white font-bold'>Até 15X de R$ 189,02</h2>
            <Button className='text-white rounded-full w-fit bg-[#138E98] hover:bg-[#138E98]/60'>Faça sua matrícula</Button>
          </div>
          <div className='flex flex-col gap-6 bg-[#DFDFDF] p-12 rounded-md items-center md:w-1/2 text-[#1E1E1E]'>
            <img src={logoOPOVO} alt="Logo O Povo+" />
            <span className='text-black font-bold'>Ganhe acesso grátis por 90 dias.</span>
            <p className='text-xs'>Reportagens & Colunistas;<br/>Filmes & Séries;<br/>Podcasts & Web Stories.</p>
            <span className='text-[#1F6482] font-bold'>Conheça o OPOVO+</span>
          </div>
        </div>
      </section>
      <footer className='flex flex-col w-full bg-[#DFDFDF]'>
        <div className='flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto lg:px-18 lg:py-8 justify-around'>
          <div className='flex flex-shrink-0 items-center justify-center lg:justify-start py-8 lg:py-0'>
            <img src={logoUANE} alt="Logo UANE" />
          </div>
          <div className='flex flex-col md:flex-row w-full gap-6 px-3 text-center lg:text-left justify-around'>
            <div className='flex flex-col  '>
              <span className='font-semibold text-2xl text-[#555]'>Informações</span>
              <div className='flex flex-col gap-3 text-[#138E98]'>
                <span>Perguntas Frequentes</span>
                <span>Política de Privacidade</span>
              </div>              
            </div>
            <div className='flex flex-col '>
              <span className='font-semibold text-2xl text-[#555]'>Fale Conosco</span>              
              <div>
                <img className='inline mr-2 size-5' src={wppLogo} alt="Logo WhatsApp" />
                <span className='text-[#138E98]'>(85) 99332-8888</span>
              </div>
            </div>
            <div className='flex flex-col text-center lg:text-left '>
              <span className='font-semibold text-2xl text-[#555]'>Nos acompanhe nas redes sociais</span>
            </div>
          </div>
          
        </div>
        
        <div className='bg-[#1F6482] text-white '>
          <div className='max-w-[1440px] mx-auto flex flex-col md:flex-row text-center items-center justify-center md:justify-between gap-6 p-6 lg:px-18'>
            <span>Av. Aguanambi, 282 A - Joaquim Távora, Fortaleza - CE, 60055-402</span>
            <span className='font-semibold'>EXPEDIENTE</span>
          </div>
          
        </div>
      </footer>      
    </main>
  )
}

export default App
