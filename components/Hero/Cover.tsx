import React from 'react'
import '../../styles/cover.css'
import Image from 'next/image';
import Vercel from "../../public/vercel.svg"


const Cover: React.FC = () => {
  return (
<div className="border-black border-[0px] h-screen w-screen" id='cover'>
      {/* <Image src={Vercel} alt="hero-image"/>       */}
    </div>
  )
}

export default Cover;