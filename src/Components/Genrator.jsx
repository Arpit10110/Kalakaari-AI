"use client"
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from 'next/image';
import Loader from "../assets/loading.gif"
import { findcookies } from '@/utils/findcookie';
import React,{useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GoogleGenAI, Modality } from "@google/genai";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Genrator = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [prompt,SetPrompt] =useState("");
    const [open, setOpen] = useState(false);
    const [IsLoading,SetIsLoading] = useState(true);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const query = async () => {
        try {
        handleClickOpen();
        SetIsLoading(true)
        const ai = new GoogleGenAI({
             apiKey: process.env.NEXT_PUBLIC_API_Gemni_Api_key,
        });
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash-preview-image-generation",
            contents: prompt,
            config: {
              responseModalities: [Modality.TEXT, Modality.IMAGE],
            },
          });
        // console.log(response)
        for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const buffer = Buffer.from(part.inlineData.data, 'base64');
              const blob = new Blob([buffer], { type: part.inlineData.mimeType });
              const image_url= URL.createObjectURL(blob);
             setImageSrc(image_url);
            }
          }
        SetIsLoading(false)
        SetPrompt("");

        } catch (error) {
        console.error("Error fetching the image:", error);
        }
    };

    const reducetoken = async()=>{
        try {
            const {data} = await axios.get("/api/reducetoken");
            console.log(data.success);
            if(data.success){
                query();
            }else{
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        } catch (error) {
            console.log(error);
        }
    }

    const generateimage= async(e)=>{
        e.preventDefault();
        const ans= await findcookies();
        if(ans){
           reducetoken();
        }else{
            toast.error('Please Login First', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }

    }

    useEffect(() => {
        AOS.init();
    }, [])
    
    
  return (
    <>
    <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        className='bg-[#0B0322]'
      >
        <div className='w-full bg-[#0B0322] text-white h-full' >
            <div className='pt-[2rem] pr-[2rem] flex justify-end'>
                <button onClick={handleClose} className='bg-red-600 px-[0.5rem] py-[0.2rem] rounded-[5px]  text-[1.2rem] ' >Close</button>
            </div>
           <div className='pt-[3rem] flex justify-around below-sm:flex-col below-sm:items-center below-sm:gap-[3rem] bg-[#0B0322] '>
            {
                IsLoading ? 
                <div className='w-[40%] h-[70vh] flex flex-col gap-[2rem] below-sm:w-[95%]' >
                  <div className='w-full h-[70vh] flex flex-col justify-center items-center bg-gray-800 rounded-[10px] '>
                  <Image src={Loader} alt='Loading...'  className='w-[40%]'  />
                  <h2 className='text-[1.5rem]' >Your image is being Generated...</h2>
                  </div>
                </div>:
                <div className='w-[40%] h-[65vh] flex flex-col gap-[2rem] below-sm:w-[95%] below-sm:h-auto' >
                        <img className='w-full h-[65vh] object-cover rounded-[10px]' src={imageSrc} alt="Generated Image" />
                     <a href={imageSrc} download="generated-image" className='flex items-center'>
                    <button className='bg-purple-900 w-[90%] m-auto py-[0.3rem] rounded-[10px] text-[1.2rem]' >Download Now</button>
                    </a>

                </div>
            }
                <div className='w-[50%] flex flex-col gap-[3rem] items-center justify-center
                below-sm:w-[95%] below-sm:mb-[3rem] '>
                    <h1 className='text-[2rem] text-center'>Follow Our Social Media</h1>
                    <div className='flex w-[80%]  justify-around items-start'>
                        <a href="https://www.facebook.com/arpit.agrahari.5">
                            <FacebookIcon className='!text-[3rem]'/>
                        </a>
                        <a href="https://www.instagram.com/___arpit_._/">
                            <InstagramIcon className='!text-[3rem]'/>
                        </a>
                        <a href="https://github.com/Arpit10110">
                            <GitHubIcon className='!text-[3rem]'/>
                        </a>
                        <a href="https://www.linkedin.com/in/arpit-agrahari-54aa192a1/">
                            <LinkedInIcon className='!text-[3rem]'/>
                        </a>
                    </div>
                </div>
           </div>
        </div>
      </Dialog>
      <div className='flex justify-around below-sm:flex-col below-sm:items-center  ' >
        <div data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="600" className='w-[45%] pt-[8rem] flex flex-col gap-[1rem] below-sm:w-[100%] below-sm:items-center below-sm:pt-[4rem]  '>
            <h1 className='text-[4rem] below-sm:text-[3.5rem]  '>Create beautiful <span className='bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>AI Art</span></h1>
            <h5 className='text-[1rem]' >Discover the Boundless Potential and impact of AI in Every Sphere of Life.</h5>
            <form onSubmit={generateimage} className='bg-white w-[70%] mt-[1rem] flex justify-between rounded-[10px] below-sm:w-[95%] ' >
                <input value={prompt} onChange={(e)=>{
                    SetPrompt(e.target.value)
                }} type="text" className='outline-none w-[95%] border-none p-[0.4rem] rounded-[10px] text-black text-[1.2rem] ' placeholder='Describe what you want'required />
                <button type='submit' className='bg-purple-800 px-[1rem] rounded-r-md text-[1.2rem] '>Generate</button>
            </form>
        </div>
        <div className='w-[45%] pt-[7rem] below-sm:w-[95%] below-sm:pt-[5rem]  ' data-aos="flip-right" data-aos-duration="2000">
            <video src="/sec1img1.mp4" className='rounded-[1rem] shadow-customa ' loop={true}  muted={true} autoPlay={true} ></video>
        </div>
      </div>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  )
}

export default Genrator
