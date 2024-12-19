"use client"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import Image from 'next/image'
const Sec4 = () => {
    const data = [
        {
          img:img1,
          head: "Unleash Your Creativity",
          para: "At Kalakaari, we believe in the power of imagination. Our platform transforms your thoughts into stunning visuals, allowing you to explore the endless possibilities of creative expression. Whether it's futuristic designs or classic themes, we provide a canvas where your ideas come to life."
        },
        {
          img:img2,
          head: "Where Art Meets Innovation",
          para: "From ancient inspirations to modern art, Kalakaari blends tradition with cutting-edge technology. Our platform empowers you to create visual masterpieces that reflect your unique perspective. Dive into a world where innovation and creativity come together to shape extraordinary images."
        }
      ];

      useEffect(() => {
        AOS.init();
    }, [])
      
  return (
    <div className='mt-[8rem] flex flex-col gap-[9rem] first:flex-row-reverse  '>
     {
        data.map((i, index) => {
        return(
            <div key={index} className={`flex-wrap below-sm:gap-[3rem]  flex justify-around ${index === 0 ? 'flex-row-reverse' : ''}`}>
            <div className='w-[40%] below-sm:w-[90%] ' data-aos="flip-right" data-aos-duration="2500" data-aos-delay="200">
                <Image className='w-full cursor-pointer hover:scale-[1.02] transition-all rounded-lg shadow-customa ' src={i.img} alt='img' />
            </div>
            <div data-aos="zoom-out-left" data-aos-duration="2000" className='w-[40%] flex flex-col gap-[3rem] justify-center items-center below-sm:w-[90%] below-sm:gap-[2rem] '>
                <h1 className='text-[2.5rem] bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-semibold'>{i.head}</h1>
                <p className='text-wrap text-[1.2rem] text-gray-200 '>{i.para}</p>
            </div>
            </div>
        );
        })
    }
    </div>
  )
}

export default Sec4
