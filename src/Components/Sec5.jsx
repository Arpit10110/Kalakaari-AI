import React from 'react'
const Sec5 = () => {
  return (
    <div className='flex flex-col gap-[5rem] justify-center items-center mt-[8rem]'>
      <h1 className='text-[2.5rem] font-semibold w-fit bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent text-center below-sm:text-[2rem] ' >Step Into the Creative Universe of Kalakaari</h1>
      <video src="/tour.mp4" className='rounded-[1rem] w-[80%] shadow-customa below-sm:w-[90%] ' loop={true}  muted={true} autoPlay={true} ></video>
    </div>
  )
}

export default Sec5
