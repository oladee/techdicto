import contentsvg from '../../assets/landing/content.svg'
import bolt from '../../assets/landing/Bolt.svg'
import soundwave from '../../assets/landing/Soundwave.png'
import Image from 'next/image'

const Kpi = () => {
  return (
    <div className='mt-[30rem] mb-[228px] lg:my-[18.05vw] px-[17.27vw] md:px-16 lg:px-0 flex flex-col md:flex-row md:items-center gap-16 md:gap-0'>
      <div className='md:pr-[2.76vw] lg:pr-[4.76vw]'>
        <div>
            <Image src={contentsvg} alt="techdicto content" />
        </div>
        <p className='text-[#fff] text-[18.75vw] md:text-[9vw] lg:text-[6.23vw] font-semibold'>
            75
            <span className='ml-3 font-bold text-[12.06vw] md:text-[5vw] lg:text-[3.96vw]'>
                %
            </span>
        </p>
        <p className='lg:w-[20.3vw] text-grey-200 text-base md:text-[1vw] lg:text-[1.22vw]'>
        of learners improve their skills with bite-sized educational content.
        </p>
      </div>
      <div className='md:px-[2.76vw] lg:px-[4.76vw] lg:border-x-2 border-[rgba(255,255,255,0.10)]'>
        <div>
            <Image src={soundwave} alt="techdicto content" />
        </div>
        <p className='text-[#fff] text-[18.75vw] md:text-[9vw] lg:text-[6.23vw] font-semibold'>
            4
            <span className='ml-3 font-bold text-[12.06vw] md:text-[5vw] lg:text-[3.96vw]'>
                in 5
            </span>
        </p>
        <p className='lg:w-[20.3vw] text-grey-200 text-base md:text-[1vw] lg:text-[1.22vw]'>
        of learners improve their skills with bite-sized educational content.
        </p>
      </div>
      <div className='md:pl-[2.76vw] lg:pl-[4.76vw]'>
        <div>
            <Image src={bolt} alt="techdicto content" />
        </div>
        <p className='text-[#fff] text-[18.75vw] md:text-[9vw] lg:text-[6.23vw] font-semibold'>
            90
            <span className='ml-3 font-bold text-[12.06vw] md:text-[5vw] lg:text-[3.96vw]'>
                %
            </span>
        </p>
        <p className='lg:w-[20.3vw] text-grey-200 text-base md:text-[1vw] lg:text-[1.22vw]'>
        of learners improve their skills with bite-sized educational content.
        </p>
      </div>
    </div>
  )
}

export default Kpi
