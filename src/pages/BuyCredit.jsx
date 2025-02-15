import React from 'react'
import {assets, plans} from "../assets/assets.js";



const BuyCredit = () => {
    return (
        <div className='min-h-[80h] text-center pt-14 mb-10 '>
            <button className='border border-gray-400 px-10 rounded-full mb-6 py-3'>Наши привилегии</button>
            <h1>Выбери план для </h1>
            <div className='flex items-center justify-center flex-col sm:flex-row gap-8 '>
                {plans.map((item, index) => (
                    <div style={{width: '260px'}} className='p-4 flex justify-center flex-col text-start gap-4 bg-white py-14 px-4 rounded-lg drop-shadow-lg mt-8 hover:scale-105 transition duration-500 cursor-pointer' key={index}>
                        <img width={40} src={assets.logo_icon} alt=""/>
                        <p>{item.id}</p>
                        <p>{item.desc}</p>
                        <p className='flex gap-2 items-center'>
                            <span className='font-semibold text-3xl text-zinc-700' >{item.price * 60}р</span> / {item.credits} credits
                        </p>
                        <button className='bg-black text-white py-2 rounded-lg'>Приобрести</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default BuyCredit
