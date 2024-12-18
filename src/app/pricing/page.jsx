"use client"
import Navbar from '@/Components/Navbar';
import PricingCard from '@/Components/PricingCard';
import { findcookies } from '@/utils/findcookie';
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Script from 'next/script';
import axios from 'axios';
const page = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const basicPlan = {
        plan:"Basic Plan",
        cost: 1,
        benefit1: "You will receive 10 tokens.",
        benefit2: "Tokens will expire in 1 month.",
        benefit3: "Access to basic features.",
        benefit4: "Email support included.",
        totaltoken:10
    };
    

    const proPlan = {
        plan:"Pro Plan",
        cost: 10,
        benefit1: "You will receive 150 tokens.",
        benefit2: "Tokens will never expire",
        benefit3: "Priority access to all features.",
        benefit4: "Exclusive offers and updates.",
        benefit5: "24/7 premium customer support.",
        totaltoken:150
    };

    const updatetoken = async(plan)=>{
        try {
            const {data}=await axios.post("/api/updatetoken",{
                addtoken:plan.totaltoken
            });
            console.log(data);
            handleClose();
            if(data.success == true) {
                toast.success(data.message, {
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
            console.log(error)
        }
    }

    const dopayment = async(plan)=>{
        const amount = plan.amount;
        const {data:{order}}= await axios.post("/api/createpayment",{
            amount
          })
          const options = {
            key: process.env.NEXT_PUBLIC_RazarPay_key_id, 
            amount: amount,  
            currency: "INR",
            name: "Kalakaari",
            description: plan.plan,
            image: "https://kalakaari-ai.vercel.app/favicon.ico",
            order_id: order.id, 
            handler: async function (response){
               try {
                    const {data} = await axios.post("/api/paymentverification",{
                        razorpay_payment_id:response.razorpay_payment_id,
                        razorpay_order_id:response.razorpay_order_id,
                        razorpay_signature:response.razorpay_signature
                    }) 
                    console.log(data);
                    if(data.success == true){
                       updatetoken(plan);
                    }else{
                       handleClose();
                        toast.error('Please try again', {
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
                console.log(error)
               }
            },
           notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3B0467"
            }
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    }
    
    const checkislogin = async(plan)=>{
        handleOpen();
        const ans= await findcookies();
        if(ans == false){
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
                handleClose();
        }else{
            dopayment(plan);
        }
    }

  return (
   <>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    <Navbar/>
    <Script src="https://checkout.razorpay.com/v1/checkout.js"  />
    <div className='py-[2.5rem]'>
        <h2 className='text-center cursor-default text-[2.5rem]' ><span className="bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">Choose a Plan</span>  that's right for You..</h2>
        <div className='mt-[3rem] flex justify-center gap-[5rem]'>
            <PricingCard plan={basicPlan} fun={checkislogin} />
            <PricingCard plan={proPlan} fun={checkislogin} />
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

export default page
