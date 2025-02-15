import React from 'react'
import Header from "./Header.jsx";
import {assets} from "../assets/assets.js";

const Steps = () => {
    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
            <h1 className='text-center text-4xl text-zinc-900 font-semibold'>Шаги для удаления заднего <br/> фона за секунды</h1>
            <div className='flex items-center items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center '>
                <div
                    className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                    <img className='max-w-9' src={assets.upload_icon} alt=""/>
                    <div>
                        <p className='text-xl font-medium'>Загрузи изображение</p>
                        <p className='text-sm text-neutral-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Esse, repudiandae.</p>
                    </div>
                </div>

                <div
                    className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                    <img className='max-w-9' src={assets.remove_bg_icon} alt=""/>
                    <div>
                        <p className='text-xl font-medium'>Удалите задний фон</p>
                        <p className='text-sm text-neutral-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Esse, repudiandae.</p>
                    </div>
                </div>

                <div
                    className='flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                    <img className='max-w-9' src={assets.download_icon} alt=""/>
                    <div>
                        <p className='text-xl font-medium'>Скачайте новое изображение</p>
                        <p className='text-sm text-neutral-500 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Esse, repudiandae.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Steps
