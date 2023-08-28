"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const{slug}=params;
    const [data,setData]=useState([]);
    // console.log(slug);
    
    const details=async()=>{
        try{
            const res= await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
            const result= await res.json();
            setData(result.data);

        }
        catch (err) {
            console.log(err);
        }

    }

//  console.log(data);

    useEffect(()=>{
        details();

    },[slug])


    return (
        <>

        {/* {console.log(data)} */}

            <section className='w-full sm:w-[50%] grid place-content-center my-20 mx-auto px-5 sm:px-0 '>

            <Image
            src={data.image}
            width={170}
            height={210}
            alt={data.name}
            className='w-auto mx-auto mb-20 h-full'/>
            {!data.name? null : <h1 className='text-5xl my-10  font-bold'>{data.name}</h1>}
            {!data.releaseDate? null : <p className='mb-2'>First Release: {data.releaseDate}</p>}
            {!data.brand? null : <p className='mb-2'>Brand: {data.brand}</p> }
            


            
            
            
            {/* <h1 className='font-bold text-xl bg-slate-500 py-5'>Features</h1> */}
            {!data.mainFeatures? null : <p className='mb-2'>Display Size: {data.mainFeatures.displaySize}</p>}
            {!data.mainFeatures? null : <p className='mb-2'>Chipset: {data.mainFeatures.chipSet}</p>}
            {!data.mainFeatures? null : <p className='mb-2'>Memory: {data.mainFeatures.memory}</p>}
            {!data.mainFeatures? null : <p className='mb-2' >Sensors: {data.mainFeatures.sensors[0]}{" ,"} {data.mainFeatures.sensors[1]} {" ,"} {data.mainFeatures.sensors[2]} {" ,"} {data.mainFeatures.sensors[3]} {" ,"} {data.mainFeatures.sensors[4]}</p>}
            {!data.mainFeatures? null : <p className='mb-2'>Stroage: {data.mainFeatures.storage}</p>}
            {!data.others? null : <p className='mb-2'>WLAN:{data.others.WLAN}</p>}
            {!data.others? null : <p className='mb-2'>Bluetooth:{data.others.Bluetooth}</p>}
            {!data.others? null : <p className='mb-2'>GPS: {data.others.GPS}</p>}
            {!data.others? null : <p className='mb-2'>NFC: {data.others.NFC}</p>}
            {!data.others? null : <p className='mb-2'>USB: {data.others.USB}</p>}

                     
        </section>
        </>
    );
};

export default page;


