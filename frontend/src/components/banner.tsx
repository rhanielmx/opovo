import marcas from '../assets/marcas.svg'
import { Tag } from './tag';

export function Banner() {
  return (
    <div className="w-full md:pb-12 bg-[#17254D] items-center justify-center flex">
      <div className='gap-6 flex flex-col-reverse lg:flex-row max-w-[1440px] px-3 py-6 md:px-18'>
        <div className="flex flex-col justify-start items-start flex-1" id="info">
          <div className="flex gap-3 mb-2 text-[#D0FBEB] font-xs text-center text-align-center">
            <Tag content='Técnico'/>
            <Tag content='Tecnologia e Profissão'/>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h1 className="flex text-white text-bold text-2xl">Secretaria Escolar</h1>
            <p className="text-white font-xs">
              O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente da escola, garantindo o funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes, ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos. Seja essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado. Invista na sua capacitação e faça a diferença na gestão escolar!
            </p>
            <img className='w-auto h-14' src={marcas}  alt="" />
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-start items-start lg:justify-end">
          <img
            width={636}
            className="w-full max-w-[400px] md:max-w-[636px] h-auto object-contain"
            src="/secretaria-escolar.png"
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}