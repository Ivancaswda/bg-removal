import React from 'react'
import {assets} from "../assets/assets.js";

const Footer = () => {
    return (
        <div>
            <div className='py-6 flex lg:px-44 px-4 flex justify-between'>
                <div className='flex items-center gap-2'>
                    <img width='150' src={assets.logo} alt=""/>
                    <div style={{width: '2px', height: '40%', background: 'gray'}}></div>
                    <p className='text-sm text-gray-600 max-sm:hidden'>Все права защищены, Copyright &copy;aIvanius</p>
                </div>
                <div className='flex items-center gap-2 '>
                      <img width='50' src={assets.facebook_icon} alt=""/>
                      <img width='50' src={assets.twitter_icon} alt=""/>
                      <img width='50' src={assets.google_plus_icon} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Footer
