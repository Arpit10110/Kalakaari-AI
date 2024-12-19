"use client"
import lightlogo from "../assets/light-bulb.png";
import ailogo from "../assets/artificial-intelligence.png";
import dollarlogo from "../assets/dollar.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Sec2 = () => {
    const router = useRouter();
    const data = [
    {
        imgsrc:lightlogo,
        head:"Effortless Creativity",
        desc:"Unleash your creativity with just a few words. No artistic skills required!",
        delay:100,
    },
    {
        imgsrc:ailogo,
        head:"AI-Powered Magic",
        desc:"Powered by cutting-edge AI, Kalakaari generates stunning visuals tailored to your vision.",
        delay:600,
    },
    {
        imgsrc:dollarlogo,
        head:"Affordable Pricing",
        desc:"Choose from flexible pricing plans designed for everyone—from hobbyists to professionals.",
        delay:900,
    }
]

useEffect(() => {
    AOS.init();
}, [])

    const dosomething = (value)=>{
        if(value == "Effortless Creativity"){
            window.scrollTo(0,0);
        }
        else if(value == "Affordable Pricing"){
            router.push("/pricing");
        }
    }

  return (
   <>
    <div className="flex justify-around my-[7rem] flex-wrap below-sm:gap-[3rem]">
        {
            data.map((i,index)=>{
                return(
                    <div onClick={() => dosomething(i.head)} data-aos="fade-down" data-aos-duration="2000" data-aos-delay={`${i.delay}`}  key={index} className="w-[28%] cursor-pointer hover:scale-[1.02] transition-all flex flex-col gap-[1.3rem] justify-center items-center p-[1rem] rounded-lg   shadow-custom below-sm:w-[90%] ">
                        <Image className="w-[20%]" src={i.imgsrc} alt="img" />
                        <h1  className="text-[1.5rem] font-semibold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">{i.head}</h1>
                        <p className="text-center text-gray-300">
                            {i.desc}
                        </p>
                    </div>
                )
            })
        }
    </div>
   </>
  )
}

export default Sec2
