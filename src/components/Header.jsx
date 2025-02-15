import React from 'react'
import {assets} from "../assets/assets.js";

const Header = () => {
    return (
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
            {/* Левая сторона */}
            <div>
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>Удалите <span
                    className='bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent'>задний фон</span>
                    <br className='max-md:hidden'/> изображения бесплатно</h1>
                <p className='my-6 text-[15px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur neque rem ut! <br className='max-sm:hidden'/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur neque rem ut

                </p>
               
                <div>
                    {/* UPLOAD A FILE */}
                    <input type="file" id='upload1' hidden={true}/>
                    <label className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-gray-600 mt-4 to-blue-600 m-auto hover:scale-105 transition-all duration-700' htmlFor="upload1">
                        <img className='w-5' src={assets.upload_btn_icon} alt=""/>
                        <p className='text-white text-sm'>Загрузите своё изображение</p>
                    </label>
                </div>
            </div>
            {/* правая сторона */}
            <div className='w-full max-w-md'>
                <img src={assets.header_img} alt=""/>
            </div>
        </div>
    )
}
export default Header
