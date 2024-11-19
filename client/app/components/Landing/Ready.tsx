import PrimaryButton from "../Button"

const Ready = () => {
  return (
    <div className="mx-[4.5vw] lg:mx-0 px-[6vw] py-10 bg-[#15171C] rounded-2xl lg:rounded-[20px] lg:py-[69px] lg:px-[4.5vw] my-[36.8vw] lg:my-[15.60vw] flex flex-col lg:flex-row lg:gap-[5.21vw]" data-aos='fade-up'>
      <h3 className="text-[clamp(28px,9.09vw,40px)] lg:text-[clamp(64px,4.56vw,72px)] font-semibold text-[#F4F5F8] lg:leading-[80px]">
      Ready to Be Part of the Next Big Thing in Tech Education?
      </h3>
      <div className="flex flex-col items-start gap-10 pt-[22.5px]">
            <p className="text-[4.5vw] lg:text-[1.38vw] lg:leading-10 font-normal md:font-semibold text-[rgba(255,255,255,0.70)]">
            Join our waitlist now and get exclusive early access to Techdicto. Spaces are filling fast—don’t miss out!
            </p>
            <PrimaryButton text="Join the Waitlist" />
        </div>
    </div>
  )
}

export default Ready
