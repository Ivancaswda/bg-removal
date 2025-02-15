import React, {useState} from 'react'
import {assets} from "../assets/assets.js";

const BgSlider = () => {

    const [sliderPosition, setSliderPosition] = useState(50) // proportion of 1 image to another
    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }



    return (
        <div className='pb-10 md:py-20 mx-2'>
            {/*Название */}
            <h1 className=' mb-12 text-center text-4xl text-zinc-900 font-semibold'>Удалите задний фон с высоким <br/> качеством и точностью</h1>

            <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
                {/* Image with Bg */}
                <img src={assets.image_w_bg} style={{clipPath: `inset(0 ${100.2 - sliderPosition}%  0 0)`}} alt=""/>

                {/* Image without Bg */}
                <img className='absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath: `inset(0 0 0 ${sliderPosition}%)`}} alt=""/>

                {/* Slider */}
                <input className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange}/>
            </div>
        </div>
    )
}
export default BgSlider
