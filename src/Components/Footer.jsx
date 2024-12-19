import React from 'react'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
   <>
    <div className='p-[2rem] bg-gradient-to-br from-[#160038] via-[#1a042b] to-[#19001a ] text-gray-300 mt-[12rem] py-[5rem] flex justify-between flex-wrap below-sm:px-[1.5rem] below-sm:gap-[2rem] '>
        <div className='flex gap-[5rem] flex-wrap w-[55%] pl-[1.5rem] below-sm:pl-[0] below-sm:w-[100%] '>
            <div className='flex flex-col gap-[15px] text-[1.2rem]' >
                <h3 className='bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-semibold text-[1.35rem]'>Connect With Us Online</h3>
                <a href="http://"><InstagramIcon/> Instagram</a>
                <a href="http://"><GitHubIcon/> Github</a>
                <a href="http://"><LinkedInIcon/> LinkedIn</a>
                <a href="http://"><XIcon/> Twitter</a>
                <a href="http://"><FacebookIcon/> Facebook</a>
            </div>
            <div className='flex flex-col gap-[15px] text-[1.2rem]'>
                <h3><span className='bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-semibold text-[1.35rem]'> Meet the Creator </span>💜</h3>
                <h4>Arpit Agrahari</h4>
                <a href="tel:+919599056856">Contact Number</a>
                <a href="mailto:omagrahari55@gmail.com">Email</a>
                <a href="https://helloarpit.vercel.app/">Portfolio</a>
            </div>
            <div className='flex flex-col gap-[15px] text-[1.2rem]'>
                <h3 className='bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-semibold text-[1.35rem]'>Quick Links</h3>
                <Link href={"/"} >Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/pricing"}>Plans</Link>
            </div>
        </div>
        <div className='flex items-center w-[35%] cursor-default'>
        <h1 className="text-[4rem] w-fit font-normal bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-[Kablammo]">
        Kalakaari.AI
      </h1>
        </div>
    </div>
   </>
  )
}

export default Footer
