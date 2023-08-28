"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Nav = () => {

    const [text,setText]=useState();

    const handleChange = (e) => {
        setText(e.target.value);

    };

    const router=useRouter();

    const buttonClick = (e) => {
        e.preventDefault();
        setText(" ");
        router.push(`/search/${text}`);
    }





    return (
        <section className='w-full z-10 sticky top-0 bg-white border-b-2 px-5 py-10 sm:px-0'>
            <Link href="/"><h1 className='text-5xl md:text-7xl font-bold text-center  mb-10'>Sky Gadgets</h1></Link>          
            <div className='flex w-full justify-center items-center sm:w-[50%] mx-auto'>
            <input type="text" value={text} onChange={handleChange} required className='px-5 py-4 w-full  border-2'/>
            <Link href={`/search/${text}`}><button onClick={buttonClick} className='bg-blue-500 border-2 border-blue-500 px-5 py-4 text-white'>Search</button></Link>
            </div>            
        </section>
    );
};

export default Nav;
// placeholder='Search Your Phone'