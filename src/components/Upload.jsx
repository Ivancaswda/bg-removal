import React from 'react'
import {assets} from "../assets/assets.js";

const Upload = () => {
    return (
        <div className='text-center
       '>
            <h1 className=' mb-12 text-center text-4xl text-zinc-900 font-semibold py-6 md:py-16 mt-8'>Увидьте магию. Попробуйте сейчас</h1>
            <label
                className='inline-flex gap-3 mb-10 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-gray-600 mt-4 to-blue-600 m-auto hover:scale-105 transition-all duration-700'
                htmlFor="upload1">
                <img className='w-5' src={assets.upload_btn_icon} alt=""/>
                <p className='text-white text-sm'>Загрузите своё изображение</p>
            </label>
        </div>
    )
}
export default Upload
