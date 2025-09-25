import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './components/navbar'
import { Home } from "./pages/Home.tsx";
import { Professores } from "./pages/Professores.tsx";
import { ProfessorDetail } from "./pages/ProfessorDetail.tsx";
import { Sobre } from "./pages/Sobre.tsx";
import { SiFacebook, SiInstagram, SiYoutube } from "react-icons/si";

import logoUANE from './assets/logo-UANE.png'
import wppLogo from './assets/wpp-logo.svg'

function App() {
  return (
    <BrowserRouter>
      <main className='flex flex-col w-full min-h-screen'>
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/professores" element={<Professores />} />
            <Route path="/professores/:id" element={<ProfessorDetail />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </div>
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
                <a
                  href="https://wa.me/5585993328888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:underline"
                >
                  <img className='inline mr-2 size-5' src={wppLogo} alt="Logo WhatsApp" />
                  <span className='text-[#138E98]'>(85) 99332-8888</span>
                </a>
              </div>
            </div>
            <div className='flex flex-col text-center lg:text-left '>
              <span className='font-semibold text-2xl text-[#555] mb-2'>Nos acompanhe nas redes sociais</span>
              <div className="flex justify-center lg:justify-start gap-4 mt-2 mb-4">
                <a href="https://www.facebook.com/OPOVO/" target="_blank" rel="noopener noreferrer">
                  <SiFacebook className="w-7 h-7 text-[#1F6482] hover:text-[#1877f2] transition-colors" />
                </a>
                <a href="https://www.instagram.com/opovoonline/" target="_blank" rel="noopener noreferrer">
                  <SiInstagram className="w-7 h-7 text-[#1F6482] hover:text-[#E1306C] transition-colors" />
                </a>
                <a href="https://www.youtube.com/c/opovo/videos" target="_blank" rel="noopener noreferrer">
                  <SiYoutube className="w-7 h-7 text-[#1F6482] hover:text-[#FF0000] transition-colors" />
                </a>
              </div>
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
    </BrowserRouter>
  )
}

export default App