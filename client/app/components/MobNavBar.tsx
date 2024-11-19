import Link from 'next/link'
import closeIcon from '../assets/landing/close.svg'
import Image from 'next/image'
import { useEffect } from 'react'

interface props {
    mob : boolean
    setMob : React.Dispatch<React.SetStateAction<boolean>>
}
const MobNavBar = ({mob, setMob}:props) => {
    const idea = mob
    useEffect(()=>{
        if(idea){
            document.body.classList.add('bodyStiff')
        }else{
            
        }
    },[idea])
    const handleCloseMenu = ()=>{
        setMob(false)
        document.body.classList.remove('bodyStiff')
    }
  return (
    <div className='text-black bg-[rgba(255,255,255,0.2)] w-full fixed h-screen z-50 top-0 right-0 md:hidden  ' data-aos='fade-right'>
        <div className='bg-white-100 h-screen w-[75%] ml-auto p-5 rounded-l-2xl'>
            <Image src={closeIcon} alt='Techdicto close menu' className='ml-auto w-14 cursor-pointer' onClick={handleCloseMenu}/>
            <div className=" items-center gap-6 flex flex-col z-50 text-black">
                <Link href='#features' data-aos='fade-right'>
                Features
                </Link>
                <Link  href='#works' data-aos='fade-left'>
                How It Works
                </Link>
                <Link href={'#faq'} scroll={true} data-aos='fade-right'>
                FAQs
                </Link>
            </div>
        </div>
    </div>
  )
}

export default MobNavBar
