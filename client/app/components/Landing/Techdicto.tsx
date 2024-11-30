import Image from "next/image"
import square from '../../assets/landing/square.svg'
import techContent from '../../assets/landing/techContent.gif'
import forget from '../../assets/landing/forget.gif'
import mentor from '../../assets/landing/mentor.svg'

const Techdicto = () => {
  return (
    <div className="px-5 mt-24 lg:py-[22.28vw] lg:px-0" >
      <div className='px-5 lg:px-0' id="works">
        <Image src={square} alt="techdicto square" />
        <h5 className="font-medium text-[clamp(24px,7.27vw,32px)] lg:text-[clamp(32px,2.92vw,45px)] text-grey-300 lg:w-[35.15vw] lg:max-w-[592px] lg:leading-[48px]">
          <span className="font-bold text-[rgba(255,255,255,0.98)]">Techdicto:</span> Where Learning Fits Your Life, Knowledge Sticks, and Mentors Guide You
        </h5>
      </div>
      <section className="flex flex-col lg:flex-row lg:items-center gap-8 mt-16  lg:mt-0">
        <div className="p-[7.85vw] lg:p-[3.50vw] flex flex-col bg-[#000] items-center rounded-[20px]" data-aos='fade-left'>
            <div>
                <h3 className="text-[20.8px] lg:text-[2.11vw] text-white-100 font-semibold mb-3">
                Enjoy Tech Content Your Way
                </h3>
                <p className="text-base lg:text-[1.58vw] text-grey-300 font-medium md:w-[313px] lg:w-[31.81vw] mb-[55px] lg:mb-[79px]">
                Whether it’s through articles, audio, or video, enjoy the flexibility to consume tech content in whatever format suits you best.
                </p>
            </div>
            <Image src={techContent} unoptimized alt="techdicto techcontent" className="w-[247px] h-[251px] lg:w-[25.06vw] lg:h-[386px] object-cover"/> 
        </div>
        <div className="flex flex-col gap-8 lg:gap-10">
            <div className="p-[7.85vw] lg:p-[3.50vw] flex flex-col bg-[#000] items-center rounded-[20px]" data-aos='fade-right'>
                <div>
                    <h3 className="text-[20.8px] lg:text-[2.11vw] text-white-100 font-semibold mb-3">
                    Never Forget What You Learn
                    </h3>
                    <p className="text-base lg:text-[1.58vw] text-grey-300 font-medium md:w-[313px] lg:w-[31.81vw] mb-[55px] lg:mb-[79px]">
                    Reinforce key concepts with flashcards that help you retain knowledge better, ensuring you stay sharp and remember crucial lessons.
                    </p>
                </div>
                <Image src={forget} unoptimized alt="techdicto" className="w-[247px] h-[251px] lg:w-[25.06vw] lg:h-[386px] object-cover"/>
            </div>
            <div className="p-[7.85vw] lg:p-[3.10vw] flex flex-col bg-[#000] items-center rounded-[20px]" data-aos='fade-left'>
                <div>
                    <h3 className="text-[20.8px] lg:text-[2.11vw] text-white-100 font-semibold mb-3">
                        Access Top Tech Mentors
                    </h3>
                    <p className="text-base lg:text-[1.58vw] text-grey-300 font-medium md:w-[313px] lg:w-[31.81vw] mb-[55px] lg:mb-[79px]">
                    Connect with industry experts and elevate your learning experience through one-on-one mentorship sessions.
                    </p>
                </div>
                <Image src={mentor}  alt="techdicto mentor" className="w-[247px] h-[251px] lg:w-[25.06vw] lg:h-[386px] object-cover"/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Techdicto
