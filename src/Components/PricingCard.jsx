"use client"
import React from 'react'

const PricingCard = ({plan,fun}) => {
  return (
   <>
    <div className='bg-[#3B0467] w-fit rounded-[5px] flex flex-col gap-[1rem]  py-[2rem] hover:scale-[1.02] transition-all cursor-pointer below-sm:w-[85%] '>
        <h1 className='text-[2rem] border-b-[2px] border-gray-500 px-[1rem]'>{plan.plan}</h1>
        <h1  className='text-[2rem] px-[0.5rem]'>₹{plan.cost}</h1>
        <div className='px-[0.5rem] justify-start flex flex-col gap-[1rem] text-[1.3rem] '>
            <h2>✨{plan.benefit1}</h2>
            <h2>✨{plan.benefit2}</h2>
            <h2>✨{plan.benefit3}</h2>
            <h2>✨{plan.benefit4}</h2>
        </div>
        <button onClick={()=>{
            fun({
                plan:plan.plan,
                amount:plan.cost,
                totaltoken:plan.totaltoken
            })
        }} className='w-[80%]  hover:scale-[1.02] transition-all p-[0.2rem] m-auto rounded-[5px] mt-[1rem] bg-gray-900 text-[1.3rem] below-sm:w-[90%]'>Buy Now</button>
    </div>
   </>
  )
}

export default PricingCard
