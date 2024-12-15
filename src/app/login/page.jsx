"use client"
import Navbar from '@/Components/Navbar'
import React,{useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const submit = async(e)=>{
        try {
            handleOpen();
            e.preventDefault();
            const {data} = await axios.post("/api/login",{
                email: email,
                password: password
            })
            console.log(data);
            handleClose();
            if(data.success==true){
                router.push("/");
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
            handleClose();
            toast.error("Please try again later", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            console.log(error)
        }
    }
  return (
   <>
   <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
   <Navbar/>
    <div className='flex pt-[8rem] justify-center item-center below-sm:pt-[12rem]' >
        <form onSubmit={submit} className='w-[40%] below-sm:w-[95%] flex flex-col justify-center  border-[2px] border-gray-500 p-[1rem] rounded-[1rem] gap-[1rem]' >
            <div className='flex flex-col gap-[0.5rem]'>
                <h3 className='text-[1.2rem] font-semibold'>Email</h3>
                <input type="text" value={email} onChange={(e)=>{
                    SetEmail(e.target.value)
                }} className='text-black w-full p-[0.2rem] rounded-[5px] text-[1.2rem] '  required/>
            </div>
            <div className='flex flex-col gap-[0.5rem]'>
                <h3 className='text-[1.2rem] font-semibold'>Password</h3>
                <input type='password' value={password} onChange={(e)=>{
                    SetPassword(e.target.value)
                }} className='text-black w-full p-[0.2rem] rounded-[5px] text-[1.2rem] '  required/>
            </div>
            <button className='mt-[0.5rem] text-[1.2rem] bg-purple-900 p-[0.4rem] rounded-[8px] hover:scale-[1.01] transition-all ' type='submit'>Login</button>
            <h3 className='text-[1.2rem]'>Don't have account ? <Link href={"/signup"} className='text-blue-700' >SignUp</Link></h3>
        </form>
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

export default page
