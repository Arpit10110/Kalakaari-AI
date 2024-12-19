'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { findcookies } from '@/utils/findcookie';

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
  }, []);

  return (
    <nav className="flex justify-between px-[1.5rem] pt-[1.5rem] items-center">
      <Link href={"/"} className="text-[2rem] font-normal bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent font-[Kablammo]">
        Kalakaari
      </Link>
      <div className="flex gap-[2rem] text-[1.2rem] items-center">
        <Link className="hover:text-purple-400 hover:scale-[1.02] transition-all " href={"/"}>Home</Link>
        <Link className="hover:text-purple-400 hover:scale-[1.02] transition-all " href={"/about"}>About</Link>
        <Link className="hover:text-purple-400 hover:scale-[1.02] transition-all " href={"/pricing"}>Pricing</Link>
        {!loading && (
          userlogin ? (
            <Link href={"/profile"} className="hover:text-purple-400 hover:scale-[1.02] transition-all">Profile</Link>
          ) : (
            <Link href={"/signup"} className="border-purple-300 border-[2px] px-[0.5rem] py-[0.2rem] rounded-[10px] hover:scale-[1.02] transition-all">
              SignUp
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar;
