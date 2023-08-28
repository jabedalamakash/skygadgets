
import Image from 'next/image';
import Link from 'next/link';

const Phone = (props) => {

    const {data}=props;
    
    // console.log(data);

    
    return (
        <>
            <section className=' border-2 rounded-2xl p-10 '>
            <Image
                src={data.image}
                width={157}
                height={210}
                alt={data.phone_name}
                className='w-full mb-10'/>
                <h1 className='text-xl font-bold mb-5'>{data.phone_name}</h1>
                <p className=' mb-5'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                <Link href={`/phone/${data.slug}`}><button className='bg-blue-800  text-white px-5 py-3 rounded-md'>Show Details</button></Link>
           </section>           
        </>
    );
};

export default Phone;