'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { findcookies } from '@/utils/findcookie';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Navbar = () => {
  const [userlogin, setUserlogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const ffcookie = async () => {
    const ans = await findcookies();
    setUserlogin(ans);
    setLoading(false);
  };

  useEffect(() => {
    ffcookie();
    gsap.from(`.animated0`, {
      y: -30, 
      opacity: 0, 
      duration: 1, 
      delay:0.2
    },
    );
    AOS.init();
   
  }, []);
  

  return (
    <nav className="flex justify-between px-[1.5rem] pt-[1.5rem] items-center">
      <Link href={"/"} data-aos="fade-down" data-aos-duration="2000"  className="animated text-[2rem] font-normal bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-[Kablammo]">
        Kalakaari
      </Link>
      <div className="flex gap-[2rem] text-[1.2rem] items-center">
        <Link className="hover:text-purple-400 hover:scale-[1.02] transition-all " href={"/"}>Home</Link>
        <Link className="hover:text-purple-400 hover:scale-[1.02] transition-all " href={"/about"}>About</Link>
        <Link className="hover:text-purple-400 hover:scale-[1.02] transition-all " href={"/pricing"}>Pricing</Link>
        {!loading && (
          userlogin ? (
            <Link href={"/profile"} className="hover:text-purple-400 hover:scale-[1.02] transition-all ">Profile</Link>
          ) : (
            <Link href={"/signup"} className="border-purple-300 border-[2px] px-[0.5rem] py-[0.2rem] rounded-[10px] hover:scale-[1.02] transition-all ">
              SignUp
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
