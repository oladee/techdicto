import Image from "next/image"
import PrimaryButton from "../Button"
import instaframe from '../../assets/landing/instaframe.png'
import instafooter from '../../assets/landing/instafooter.svg'
import { MouseEvent } from "react"

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-24 mt-14 lg:mt-[9.65vw] z-20">
      <section className="lg:w-[52.7vw] px-[9.09vw] md:px-16 lg:px-0" data-aos="fade-right">
        <h1 className="text-white-100 text-[11.8vw] md:text-[9vw] lg:text-[3.43vw] leading-[61px] md:leading-[81px] lg:leading-[61px] font-semibold z-20">
        Learn tech the smart way with bite-sized lessons
        </h1>
        <p className="text-[rgba(255,255,255,0.70)] text-xl font-semibold mt-10 lg:mt-7 z-20">
            Master the world of tech with bite-sized lessons, immersive content, and access to top mentors
        </p>
        <div className="flex items-center gap-5 md:gap-[29px] mt-14 lg:mt-10">
            <PrimaryButton text="Join the waitlist"/>
            <p className="cursor-pointer">
                Explore Features &gt;
            </p>
        </div>
        <div className="hidden lg:block mt-[10.58vw]">
            <h2 className="text-grey-200 font-medium mb-4">
                We’re going live in
            </h2>
            <div className="p-6 rounded-xl flex items-start gap-6 text-[#fff] bg-[#161616] w-fit">
                <div className="flex flex-col items-center justify-center">
                    <p className=" text-[32px]">
                        3
                    </p>
                    <p className="text-[11px]">
                        Days
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className=" text-[32px]">
                        16
                    </p>
                    <p className="text-[11px]">
                        Hours
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className=" text-[32px]">
                        24
                    </p>
                    <p className="text-[11px]">
                        Minutes
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className=" text-[32px]">
                        59
                    </p>
                    <p className="text-[11px]">
                        Seconds
                    </p>
                </div>
            </div>
        </div>
      </section>
      <section className="relative lg:w-[47vw] " data-aos="fade-left">
        <video autoPlay muted disablePictureInPicture loop playsInline className="w-[157px] h-[279px] md:w-[30vw] lg:w-[15.87vw] lg:h-[28.3vw] object-cover absolute z-10 top-24 lg:top-16 left-4 md:left-16 lg:left-[-30px] lg:right-0 rounded-[10px]" data-aos="fade-up" onContextMenu={(e : MouseEvent)=> {
            e.preventDefault()
        }}>
            <source src="/assets/landing/clip1.mp4"  type="video/mp4" />
        </video>
        <div className="w-[50vw] h-[391px] md:w-[38vw] lg:w-[22.2vw] lg:h-[39.5vw] absolute z-20 right-28 md:right-60 lg:left-20 rounded-[10px]" data-aos="fade-down">
        <video autoPlay muted disablePictureInPicture loop playsInline className="w-full h-full object-cover" onContextMenu={(e : MouseEvent)=> {
            e.preventDefault()
        }} >
            
            <source src="/assets/landing/clip2.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-6 lg:bottom-8 right-0">
            <Image src={instaframe} alt="insta like"  className="h-[39.1vw] lg:h-[17vw] object-contain"/>
        </div>
        <div className="absolute bottom-6 lg:bottom-8 left-2 w-[30.6vw]">
            <Image src={instafooter} alt="insta footer" />
        </div>
        </div>
        <video autoPlay muted disablePictureInPicture loop playsInline className="w-[157px] h-[279px] md:w-[30vw] lg:w-[15.87vw] lg:h-[28.3vw] object-cover absolute z-10 right-4 md:right-16 top-24 lg:right-0 rounded-[10px]" data-aos="fade-down" onContextMenu={(e : MouseEvent)=> {
            e.preventDefault()
        }}>
            <source src="/assets/landing/clip3.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  )
}

export default Hero
