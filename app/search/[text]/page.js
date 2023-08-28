"use client"
import Phone from '@/app/components/Phone';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const {text} = params ;
    // console.log(params);

    const[sdata,setSdata] =useState();
    const[value,setValue] = useState(6);
    const[show,setShow] = useState(false);


    const searchData=async ()=>{
        try{
            const url = await fetch(`https://openapi.programming-hero.com/api/phones?search=${text}`);
            const result=await url.json();
            setSdata(result.data);     
            setShow(true);

        }

        catch(err){
            console.log(err);

        }


    }
    useEffect(()=>{
        searchData();

    },[text])
    
    const handleClick=()=>{
        setValue(sdata.length);
         setShow(false);
    }


    return (
        <> 
        <div className='sm:w-[80%] w-full mx-auto my-20 px-5 sm:px-0'>
            {/* <p className=' text-left mb-10'>You Are Searched for {text}</p> */}
            
            <Link href="/"><button className='bg-blue-500 px-10 rounded-md py-5 mb-10 text-white'>Back</button></Link> 
            <p className=' text-left mb-10'>You Are Searched for {text}</p>
            {/* {sdata<1?<h1>Not found</h1>:null} */}
            {/* status":false */}
            {console.log(sdata)}
            { !sdata && sdata=== 0 ? <h1 className='flex justify-center text-5xl font-bold'>Not Found</h1>

             :<><section className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-20 gap-10'>
             { sdata && sdata.slice(0,value).map((item)=>{
             return  <Phone key={item.phone_name} data={item}/>
             })}
             
             
         </section>
         {  !show? null
             :<div className='flex justify-center'>
             <button onClick={handleClick} className='bg-blue-500 font-bold rounded-md text-center text-white px-10 py-5'>Show All</button>
             </div>} 
             </>}


            </div>
        </>
    );
};

export default page;