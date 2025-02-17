import React, {useContext, useEffect} from 'react'
import {assets} from "../assets/assets.js";
import {Link} from "react-router-dom";
import {useClerk, UserButton, useUser} from "@clerk/clerk-react";
import {AppContext} from "../context/AppContext.jsx";

const Navbar = () => {

    const {openSignIn} = useClerk()
    const { isSignedIn, user } = useUser()
    const {credits, loadCreditData} = useContext(AppContext)

    useEffect(() => {
        if (isSignedIn) {
            loadCreditData()

        }
    }, [isSignedIn])

    return (
        <div className='flex items-center justify-between mx-4 py-3 lg:mx-44  '>
            <Link to='/'>  <img className='w-32 sm:w-44' src={assets.logo} alt=""/> </Link>

                {(isSignedIn) ? (
                    <div>
                            <UserButton/>
                        <button>
                            <img src={assets.credit_icon} alt=""/>
                            <p>Credits : {credits}</p>
                        </button>
                    </div>
                ) : (
                    <button onClick={() => {
                        openSignIn({})
                    }}
                            className='bg-zinc-800 px-4 sm:px-4 md:px-4 text-white flex items-center gap-4  py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
                        Начать <img className='w-3 sm:w-4' src={assets.arrow_icon} alt=""/>
                    </button>
                )}


        </div>
    )
}
export default Navbar
