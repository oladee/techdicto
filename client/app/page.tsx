'use client'
import { useEffect, useState } from "react";
import Hero from "./components/Landing/Hero";
import Kpi from "./components/Landing/Kpi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Learning from "./components/Landing/Learning";
import First from "./components/Landing/First";
import Techdicto from "./components/Landing/Techdicto";
import Footer from "./components/Footer";
import Ready from "./components/Landing/Ready";
import Reviews from "./components/Landing/Reviews";
import Faq from "./components/Landing/Faq";
import NavBar from "./components/NavBar";
import MobNavBar from "./components/MobNavBar";
import { ModalProvider } from "./context/ModalContext";
import Modal from "./components/Landing/Modal";
import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASEURL

export default function Home() {
  const [mob, setMob] = useState(false)
  useEffect(() => {
    AOS.init({
    duration: 1000, // Global animation duration
    once: false, // Only once animation
    });
  }, []);
  return (
    <div className="">
      <ModalProvider>
        <div className="lg:px-[7.7vw]">
          <NavBar setMob={setMob}/>
          <Hero/>
          <Kpi/>
          <Learning />
          <First/>
          <Techdicto />
          <Reviews/>
          <Faq />
          <Ready/>
          <Modal/>
          {
            mob && <MobNavBar mob={mob} setMob={setMob}/>
          }
        </div>
        <Footer />
      </ModalProvider>
      
    </div>
  );
}

