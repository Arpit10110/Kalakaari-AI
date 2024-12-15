"use client"
import { useEffect, useState } from 'react';
import Navbar from '@/Components/Navbar';
const page = () => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Prevent SSR mismatch
  return (
   <>
    <Navbar />
      <div className='py-[3rem] px-[2rem] flex flex-col gap-[1.5rem] text-[1.1rem]' >
     
          <h1 className='text-[2.5rem] w-fit underline decoration-dashed bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>About Kalakaari</h1>
          <h2 className='text-[1.5rem]'>Welcome to Kalakaari, where your imagination takes shape!</h2>
          <p>
          At Kalakaari, we believe that creativity has no limits. Our platform empowers you to transform your thoughts and ideas into captivating visuals with just a few words. Whether you're an artist, dreamer, or someone looking to explore the boundaries of creativity, Kalakaari makes it easy to turn your imagination into reality.
          </p>
          <h3 className='text-[1.4rem] w-fit  font-semibold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>What We Do</h3>
          <p>
          Kalakaari is a cutting-edge text-to-image generator that brings your ideas to life. All you need to do is type a prompt that describes your vision, and our AI will create stunning, one-of-a-kind images tailored to your description.
          </p>
          <h3 className='text-[1.4rem] w-fit  font-semibold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>Why Choose Kalakaari?</h3>
          <p>
              <li>Express Your Vision: Let your thoughts flow, and see them come alive as beautiful images.</li>
              <li>Effortless Creativity: You don't need artistic skills—just your imagination and a few words.</li>
              <li>AI at Its Best: Powered by advanced technology, Kalakaari ensures every creation is unique and visually stunning.</li>
              <li>Accessible for Everyone: Whether you're an artist, designer, or simply curious, our platform is built to be intuitive and easy to use.</li>
          </p>
          <h3 className='text-[1.4rem] w-fit  font-semibold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>The Meaning Behind Kalakaari</h3>
          <p>
          Inspired by the Hindi word ‘Kalakaari’, which translates to ‘artistry’, our platform celebrates the essence of creativity. We aim to give everyone the tools to be an artist, no matter their skill level or background.
          </p>
          <h3 className='text-[1.4rem] w-fit  font-semibold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>Our Vision</h3>
          <p>
            Our mission is to make art creation accessible to everyone, allowing ideas to transcend the barriers of tools and techniques. At Kalakaari, creativity meets technology, opening a new world of possibilities for everyone.
          </p>
          <h3 className='text-[1.4rem] w-fit  font-semibold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>How It Works</h3>
          <p>
            <li className='list-none'>1. Type Your Thought: Enter a prompt that captures your idea.</li>
            <li className='list-none'>2. Generate Magic: Our AI will turn your words into stunning visuals in seconds.</li>
            <li className='list-none'>3. Use & Share: Download your creation and share it with the world.</li>
          </p>
          <h3 className='text-[1.4rem] w-fit font-semibold bg-gradient-to-r from-fuchsia-500 to-indigo-400 bg-clip-text text-transparent'>Join the Kalakaari Journey</h3>
          <p>
          At Kalakaari, we’re redefining how art is made. Join us to experience the magic of combining human imagination with the power of AI. Your next masterpiece is just a prompt away!
          </p>
      </div>
   </>
  )
}

export default page
