'use client'
import { useEffect } from "react";
import Hero from "./components/Landing/Hero";
import Kpi from "./components/Landing/Kpi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./components/Button";
import logoWhite from "./assets/landing/logoWhite.svg"
import Learning from "./components/Landing/Learning";
import First from "./components/Landing/First";
import Techdicto from "./components/Landing/Techdicto";
import Footer from "./components/Footer";
import Ready from "./components/Landing/Ready";

export default function Home() {
  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: false, // Only once animation
    });
  }, []);
  return (
    <div className="">
      <div className="lg:px-[7.7vw]">
        <NavBar/>
        <Hero/>
        <Kpi/>
        <Learning />
        <First/>
        <Techdicto />
        <Ready/>
      </div>
      <Footer />
      
    </div>
  );
}

const NavBar = ()=>{
  return(<div className="my-5 mx-5 lg:mx-0 bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-grey-800 p-3 flex justify-between items-center " data-aos="fade-down">
    <div>
      <Image src={logoWhite} alt="techdicto logo" className="w-[121px] lg:w-[151px]" />
    </div>
    <div className="md:flex items-center gap-6 hidden">
      <Link href='/features'>
        Features
      </Link>
      <Link  href=''>
        How It Works
      </Link>
      <Link  href=''>
        FAQs
      </Link>
    </div>
    <div className=" hidden md:flex">
      <PrimaryButton text="Join the Waitlist"/>
    </div>
  </div>)
}
