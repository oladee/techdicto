import Image from "next/image"
import PrimaryButton from "../Button"
import exclusive from '../../assets/landing/exclusive.svg'
import priority from '../../assets/landing/priority.svg'
import access from '../../assets/landing/access.svg'
import useWaitlistModal from "@/app/context/ModalContext"

const First = () => {
    const waitlistModal = useWaitlistModal()
  return (
    <div className="px-[12.72vw] lg:px-0 mt-14 lg:mt-[22.28vw]">
      <div className="flex flex-col lg:flex-row gap-2 md:gap-5 lg:gap-[4.36vw]">
        <h2 className="text-[clamp(32px,9.09vw,40px)] text-[#F4F5F8] md:text-5xl lg:text-[clamp(60px,4.76vw,72px)] lg:leading-[80px] font-semibold">
            <span className="text-[#8077E4]">Be the First</span> to Access Techdicto
        </h2>
        <div className="flex flex-col items-start gap-10">
            <p className="text-base md:text-xl lg:text-[1.58vw] lg:leading-10 font-semibold text-[rgba(255,255,255,0.70)]">
                Join our waitlist today and unlock exclusive benefits when we launch, including:
            </p>
            <PrimaryButton text="Join the Waitlist" onClick={waitlistModal.openModal} />
        </div>
      </div>
      <div className="mt-[18.12vw] lg:mt-[10.84vw] flex flex-col md:flex-row flex-wrap gap-[72px] md:gap-14 justify-between">
        <section data-aos='fade-up'>
            <div className="flex items-center text-[#F4F5F8] gap-2">
                <Image src={access} alt="techdicto access"/>
                <h5 className="text-2xl">
                    Early Access
                </h5>
            </div>
            <p className="text-[#8A8F98] text-[17.5px] w-[231px]">
            Get a sneak peek into the platform before anyone else.
            </p>
        </section>
        <section data-aos='fade-down'>
            <div className="flex items-center text-[#F4F5F8] gap-2">
                <Image src={exclusive} alt="techdicto exclusive"/>
                <h5 className="text-2xl">
                    Exclusive Content
                </h5>
            </div>
            <p className="text-[#8A8F98] text-[17.5px] w-[281px]">
                Access bonus lessons and features available only to early users.
            </p>
        </section>
        <section data-aos='fade-up'>
            <div className="flex items-center text-[#F4F5F8] gap-2">
                <Image src={priority} alt="techdicto priority"/>
                <h5 className="text-2xl">
                    Priority Mentorship
                </h5>
            </div>
            <p className="text-[#8A8F98] text-[17.5px] w-[275px]">
                Be among the first to book 1-on-1 sessions with top mentors.
            </p>
        </section>
      </div>
    </div>
  )
}

export default First
