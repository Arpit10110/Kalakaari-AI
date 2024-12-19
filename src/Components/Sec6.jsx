import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ex1 from "../assets/ex1.jpg"
import ex2 from "../assets/ex2.jpg"
import ex3 from "../assets/ex3.jpg"
import ex4 from "../assets/ex4.jpg"
import Image from 'next/image';
const Sec6 = () => {

  const prompts = [
    {
      id: 1,
      img:ex1,
      description: "A bustling market on a distant planet filled with colorful aliens, floating stalls, and exotic items glowing with strange energies."
    },
    {
      id: 2,
      img:ex2,
      description: "A mechanical butterfly with intricate designs, surrounded by more glowing mechanical butterflies in a vibrant futuristic garden."
    },
    {
      id: 3,
      img:ex3,
      description: "A sweet anime girl with big sparkling eyes, long flowing hair, sitting peacefully in a serene garden surrounded by cherry blossoms."
    },
    {
      id: 4,
      img:ex4,
      description: "A sleek sports car with a glossy red finish, parked on a hilltop under a breathtaking sunset sky, overlooking a glowing cityscape."
    }
  ];

  return (
    <div className='mt-[8rem]'>
        <Carousel  autoPlay infiniteLoop showStatus={false} showArrows={false} showIndicators ={false} showThumbs={false} interval={2500}>
            {
              prompts.map((i)=>{
                return(
                  <div key={i.id} className='flex gap-[3rem]  items-center justify-center bg-[#231C38] p-[2rem] flex-wrap below-sm:px-[1rem]  '>
                    <h1 className='w-[50%] text-[1.5rem] below-sm:w-[95%] ' > <span className='bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-semibold'>Prompt:- </span> {i.description}</h1>
                    <div className='w-[25%] below-sm:w-[90%]'>
                     <Image className='w-full rounded-lg ' src={i.img} alt='img' />
                    </div>
                  </div>
                )
              })
            }
        </Carousel>
    </div>
  )
}

export default Sec6
