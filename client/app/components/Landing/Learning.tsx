import Image from "next/image"
import interestedImg from '../../assets/landing/interested.svg'
import morris from '../../assets/landing/morris.svg'

const Learning = () => {
  return (
    <div>
      <div className="px-9 md:px-14 lg:px-0 mb-24 lg:mb-[103px]">
        <h1 className="text-white-100 text-[12.52vw] lg:text-[4.23vw] font-semibold mb-10 lg:mb-12">
        Tech Learning Made <span className="text-[#F2426E]">Easy</span>
        </h1>
        <p className="text-[4.69vw] lg:text-[1.58vw] lg:w-[50vw] text-[rgba(255,255,255,0.70)]">
          Master the world of tech with bite-sized lessons, immersive content, and access to top mentors
        </p>
      </div>
      <div className="flex flex-col lg:flex-row md:items-center gap-7 lg:gap-10 px-5 md:px-14 lg:px-0">
        <section className="border border-[#16181C] bg-[#08090A] p-[33px] lg:p-[47px] w-fit rounded-[35px] lg:rounded-[51px]">
          <h3 className="text-[22px] lg:text-[2.11vw] text-white-100 font-semibold mb-3">
            Choose Your Path
          </h3>
          <p className="text-base lg:text-[1.58vw] text-grey-300 font-medium md:w-[350px] lg:w-[478px] mb-[55px] lg:mb-[79px]">
            Pick your area of interest and get personalized recommendations.
          </p>
          <Image src={interestedImg} alt="techdicto layout" className="lg:w-[32.07vw] lg:max-w-[485px]" data-aos='fade-left'/>
        </section>
        <section className="border border-[#16181C] bg-[#08090A] p-[33px] lg:p-[47px] w-fit rounded-[35px] lg:rounded-[51px]">
          <h3 className="text-[22px] lg:text-[2.11vw] text-white-100 font-semibold mb-3">
            Mentor Sessions
          </h3>
          <p className="text-base lg:text-[1.58vw] text-grey-300 font-medium md:w-[350px] lg:w-[478px] mb-[55px] lg:mb-[79px]">
            Book 1-on-1 sessions with top mentors to guide you through tough topics.
          </p>
          <Image src={morris} alt="techdicto layout" data-aos='fade-right'/>
        </section>
      </div>
    </div>
  )
}

export default Learning
