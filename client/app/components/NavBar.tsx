"use client"
import Link from "next/link"
import PrimaryButton from "./Button"
import Image from "next/image"
import logoWhite from "../assets/landing/logoWhite.svg"
import hamIcon from '../assets/landing/ham.svg'
import { useEffect, useState } from "react"
import '../globals.css'
import clsx from "clsx"
import useWaitlistModal from "../context/ModalContext"

interface prop {
    setMob : React.Dispatch<React.SetStateAction<boolean>>
}

const NavBar = ({setMob}:prop)=>{
    const [sticky, setSticky] = useState(false)
    const waitlistModal = useWaitlistModal()
   
  useEffect(()=>{
    const nav = document.getElementById('nav')!
    const navOff = nav.offsetTop
    const getScroll = ()=> {
      if(window.scrollY > navOff){
        setSticky(true)
      }else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll',getScroll)
    return ()=> window.removeEventListener('scroll', getScroll)
  })


    return(<div className={clsx("my-5 mx-5 lg:mx-0 bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-grey-800 p-3 flex justify-between items-center", sticky && 'fixed top-0 bg-[rgba(255,255,255,0.05)] z-50 transition-all ease-in-out duration-500 w-[90%] md:w-[95%] lg:w-[85vw]')} data-aos="fade-down" id="nav">
      <div>
        <Image src={logoWhite} alt="techdicto logo" className="w-[121px] lg:w-[151px]" />
      </div>
      <div className="md:flex items-center gap-6 hidden lg:text-[1.058vw]" >
            <Link href='#features'>
            Features
            </Link>
            <Link  href='#works'>
            How It Works
            </Link>
            <Link href={'#faq'} scroll={true}>
            FAQs
            </Link>
      </div>
      <div className="hidden md:flex">
        <PrimaryButton text="Join the Waitlist" onClick={waitlistModal.openModal}/>
      </div>
      <Image src={hamIcon} alt="techdicto ham menu" className="md:hidden cursor-pointer" id="ham" onClick={()=> {setMob(true)}}/>
    </div>)
  }

export default NavBar
