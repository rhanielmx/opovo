import { useSelectedCourse } from '@/contexts/SelectedCourseContext';
import marcas from '../assets/marcas.svg'
import { Tag } from './tag';

export function Banner() {
  const { selectedCourse } = useSelectedCourse();
  return (
    <div className="w-full py-6 md:py-12 bg-[#17254D] items-center justify-center flex h-full">
      <div className='gap-6 flex flex-col-reverse lg:flex-row max-w-[1440px] px-3 md:px-18'>
        <div className="flex flex-col items-start flex-1" >
          <div className="flex gap-3 mb-2 text-[#D0FBEB] font-xs text-center text-align-center">
            {selectedCourse?.tags.split(',').map(tag => <Tag key={tag} content={tag.replace(/["{}]/g,"")}/>)}
          </div>
          <div className="flex flex-col gap-4 items-start h-full justify-between">
            <div className='flex flex-col gap-4'>
              <h1 className="flex text-white text-bold text-2xl">{selectedCourse?.name}</h1>
              <p className="text-white font-xs">
                {selectedCourse?.description || 'Selecione um curso para ver a descrição aqui.'}
              </p>
            </div>
            <img className='w-auto h-14' src={marcas}  alt="" />
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-start items-start lg:justify-end h-full object-contain">
          <img
            className="w-full max-w-[400px] md:max-w-[636px] rounded-lg"
            src={selectedCourse?.banner_image || 'https://via.placeholder.com/636x400?text=Selecione+um+curso'}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
}