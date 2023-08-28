"use client"
import React, { useState, useEffect } from 'react';
import Phone from './Phone';



const Phones = () => {
    const[data,setData]=useState([]);
    const[loading,setLoading] = useState(true);
    const[value,setValue] = useState(8);
    const[show,setShow] = useState(false);





    const api= async ()=>{
        try{
            const url=await fetch('https://openapi.programming-hero.com/api/phones?search=apple');
            const result= await url.json();  
            setData(result.data); 
            setLoading(false);
            setShow(true);

        }
        catch(error){
            console.log(error);
        }



    }


    useEffect(()=>{
        api();

    },[])

    const handleClick=()=>{
        setValue(data.length);
        setShow(false);
    }


    // console.log(data);
    return (
        <>
        <div className='sm:w-[80%] w-full mx-auto my-20 px-5 sm:px-0'>
                {/* <section className=' grid grid-cols-1 sm:grid-cols-3 mb-20 gap-10'> */}
                    {loading? <h1 className='flex text-5xl font-bold justify-center items-center'>Loading...</h1>
                    : <section className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-20 gap-10'> {data.slice(0,value).map((item)=>{
                        return <Phone key={item.phone_name} data={item}/>                    
                      })}   </section> }
           
                {/* </section> */}
                {!show? null
                :<div className='flex justify-center'>
                <button onClick={handleClick} className='bg-blue-500 font-bold rounded-md text-center text-white px-10 py-5'>Show All</button>
                </div>}           
        </div>
        </>
    );
};

export default Phones;