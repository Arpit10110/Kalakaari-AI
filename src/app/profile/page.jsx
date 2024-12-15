'use client'
import Navbar from '@/Components/Navbar'
import React,{useState,useEffect} from 'react'
import loader from "../../assets/loading.gif"
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
    const [userdata,SetUserdata]=useState();
    const [isloading,SetIsloading] = useState(true)

    const getuserdata = async()=>{
        try {
            const {data} = await axios.get("/api/getuserdata");
            SetIsloading(false);
            SetUserdata(data.userdata);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      getuserdata();
    }, [])

    const logout = async()=>{
        try {
            const {data} = await axios.get("/api/logout");
            if(data.success==true){
                router.push("/");
            }
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
   <>
    <Navbar/>
    <div className='w-full h-[80vh] flex justify-center items-center below-sm:h-[50vh]'>
        {
            isloading?<Image src={loader} alt="Loading..." className='w-[20%] below-sm:w-[40%]' />:
            <div className='w-[40%] below-sm:w-[95%] flex gap-[1.5rem] text-[1.2rem] flex-col border-[2px] border-gray-500 p-[1rem] rounded-[1rem]'>
                <h1>UserName : {userdata.username}</h1>
                <h1>Email : {userdata.email}</h1>
                <h1>Total Token : 🌟{userdata.tocken}</h1>
                <button onClick={logout} className=' text-[1.2rem] bg-purple-900 p-[0.4rem] rounded-[8px] hover:scale-[1.01] transition-all '>Log Out</button>
            </div>
        }
    </div>
   </>
  )
}

export default page
