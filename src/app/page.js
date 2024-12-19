"use client"
import Navbar from '@/Components/Navbar'
import Genrator from '@/Components/Genrator'
import Sec2 from '@/Components/Sec2'
import Sec3 from '@/Components/Sec3'
import Sec4 from '@/Components/Sec4'
import Sec5 from '@/Components/Sec5'
import Sec6 from '@/Components/Sec6'
import Footer from '@/Components/Footer'
import React, { useEffect } from 'react'
const page = () => {

  useEffect(() => {
   (async()=>{
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    const locomotive = new LocomotiveScroll();
   }
  )();
  }, [])
  
  return (
    <div>
      <Navbar/>
      <Genrator/>
      <Sec2/>
      <Sec3/>
      <Sec4/>
      <Sec6/>
      <Sec5/>
      <Footer/>
    </div>
  )
}

export default page
