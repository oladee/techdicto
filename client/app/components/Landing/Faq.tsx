import { faqComponentProps } from '@/app/declaration'
import {AccordionProvider} from '../../context/AccordionContext'
import Image from 'next/image'
import clsx from 'clsx'
import { useContext } from 'react'
import AccordionContext from '../../context/AccordionContext'
import arrowDown from '../../assets/landing/arrowDown.svg'
import arrowUp from '../../assets/landing/arrowUp.svg'
import { faqData } from '@/app/constant'

const Faq = () => {
  return (
    <div className="px-[6.81vw] lg:px-[15vw] lg:py-[11.90vw]" id='faq'>
      <p className="text-[#fff] font-semibold text-center mb-2">
        Q/A
      </p>
      <h3 className="text-[#D7DFEF] lg:text-[#fff] font-semibold md:text-center text-[clamp(24px,7.27vw,32px)] text-4xl lg:text-[clamp(32px,3.17vw,48px)] mb-6">
      Frequently asked questions
      </h3>
      <p className="text-[rgba(255,255,255,0.70)] md:text-center md:text-xl">
        These are the most commonly asked questions about Techdicto
      </p>
      <main className='mt-[61px] lg:mt-[81px]'>
        <AccordionProvider>
          {
            faqData.map((item, idx)=> <AccordionComponent key={idx} answer={item.answer} heading={item.heading} idx={idx}/>)
          }
        </AccordionProvider>
        
      </main>
    </div>
  )
}

export default Faq

const AccordionComponent = ({heading, answer, idx}: faqComponentProps)=> {
  const {currentAccord, setCurrentAccord} = useContext(AccordionContext)
  const handleToggle = ()=>{
    if( currentAccord == idx){
      setCurrentAccord(null)
      return
    }
    setCurrentAccord(idx)
  }
  return(<div className='border-b border-[#fff] py-5' data-aos='fade-left'>
    <div className='flex justify-between items-center cursor-pointer' onClick={handleToggle}>
      <h1 className='text-lg font-medium text-[#fff]'>
        {heading}
      </h1>
      <Image src={currentAccord == idx ? arrowUp : arrowDown} alt='faq icon' className='cursor-pointer' />
    </div>
    <div className={clsx('max-h-0 overflow-hidden transition-all duration-700', currentAccord == idx && 'max-h-[450px] mt-6')}>
      <p className='text-[rgba(255,255,255,0.70)]'>
        {answer}
      </p>
    </div>
  </div>)
}
