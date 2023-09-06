import React from 'react'
import Image from 'next/image'
// import AboutImg from '../public/assets/projects/AirBnbClone.png'

function BannerSection({image, date, title, desc}) {
    return (
        <div className='col-span-2'>
            {/* <Image src={image} width={700} height={500} alt='aa'/> */}
            <img className='w-{700px} h-{500px} object-cover rounded-xl' src={image} alt={"ddd"} />
            <p className='mt-4'>{date}</p>
            <h2 className='mt-2'>{title}</h2>
            <p className='mt-2'>{desc}</p>

        </div>
    )
}

export default BannerSection