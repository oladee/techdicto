import Image from "next/image"
import logo from '../assets/landing/logoWhite.svg'
import Link from "next/link"
import twitterIcon from '../assets/landing/twitterIcon.svg'
import linkedinIcon from '../assets/landing/linkedin.svg'
import fbIcon from '../assets/landing/fb.svg'
import igIcon from '../assets/landing/ig.svg'

const Footer = () => {
  return (
    <div className="bg-[#15113F] py-20 px-10 lg:px-[7.67vw]">
      <section className="flex flex-col items-center md:flex-row md:items-start gap-16 md:gap-[12.7vw] lg:gap-[18.7vw] md:px-20">
        <Image src={logo} alt="techdicto logo" className="lg:w-[16vw] lg:max-w-[242px]"/>
        <div className="flex flex-col md:flex-row gap-14 md:gap-16 lg:gap-10">
            <div className="lg:w-[248px]">
                <header className="font-bold text-base mb-6">
                    Quick Links
                </header>
                <section className="flex flex-col text-sm text-[#CBD5E1] space-y-4">
                    <Link href='/features'>
                        Features
                    </Link>
                    <Link href='/features'>
                        FAQs
                    </Link>
                    <Link href='/features'>
                        How it Works
                    </Link>
                </section>
            </div>
            <div >
                <header className="font-bold text-base mb-6 ">
                    Contact
                </header>
                <section className="flex flex-col text-sm space-y-4 text-[#CBD5E1]">
                    <Link href='/features' target="_blank" className="flex items-center gap-2">
                        <Image src={twitterIcon} alt="techdicto twitter"/> Twitter
                    </Link>
                    <Link href='/features' target="_blank" className="flex items-center gap-2">
                        <Image src={igIcon} alt="techdicto instagram"/> Instagram
                    </Link>
                    <Link href='/features' target="_blank" className="flex items-center gap-2">
                        <Image src={linkedinIcon} alt="techdicto linkedin"/> Linkedin
                    </Link>
                    <Link href='/features' target="_blank" className="flex items-center gap-2">
                        <Image src={fbIcon} alt="techdicto linkedin"/> Linkedin
                    </Link>
                </section>
            </div>
        </div>
      </section>
      <section className="border-t border-grey-700 mt-[60px] text-center py-8">
        <p className="text-[#fff] text-sm font-normal">Copyright {new Date().getUTCFullYear()} Techdicto. All rights reserved.</p>
      </section>
    </div>
  )
}

export default Footer
