import React from 'react'
import {testimonialsData} from "../assets/assets.js";

const Testimonials = () => {
    return (
        <div>
            {/* Называние */}
            <h1 className=' mb-12 text-center text-4xl text-zinc-900 font-semibold py-5'>Отзывы потребителей</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8'>
                {testimonialsData.map((item, index) => (
                    <div className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition duration-500' key={index}>
                        <p className='text-4xl text-gray-500'>``</p>
                        <p className=' text-sm text-gray-500'>{item.text}</p>
                        <div className='flex items-center gap-3 mt-5'>
                            <img className='w-10' src={item.image} alt=""/>
                            <div>
                                <p className='text-sm font-semibold'>{item.author}</p>
                                <p className='text-[11px]'>{item.jobTitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}
export default Testimonials
