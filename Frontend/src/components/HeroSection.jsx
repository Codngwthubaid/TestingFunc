import React, { useState } from 'react'
import search from "../Img/search.png"
import '../App.css'

const HeroSection = () => {

    const [isClick, setIsClick] = useState(false)

    const toggleNavbar = () => {
        setIsClick(!isClick)
    }


    return (
        <div>
            <div className="mainImg relative h-[644px bg-center bg-no-repeat bg-[length:max(1200px,100vw)]">
                <div className="absolute inset-0 opacity-69"></div>
                <nav className="relative z-10 flex items-center justify-evenly h-[100px] mx-auto">
                    <div className='text-white text-3xl font-semibold hover:cursor-pointer text-center'>Dehradun<div className='text-blue-800'>Tourism</div></div>
                    <div>
                        <ul className='hidden xl:flex justify-between items-center gap-x-3'>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Home</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>About</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Blog</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Contact</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Destination</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Hospitals</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Hotels</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Resturants</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>Maps</li></a>
                            <a href=""><li className='hover:text-white hover:decoration-blue-600 hover:underline'>AI-Bot</li></a>
                        </ul>
                    </div>
                    <div>
                        <button className="hidden xl:flex justify-center items-center gap-x-1 px-4 py-2 ml-2 text-white bg-blue-400 hover:bg-blue-600 rounded">
                            <div>Book Now</div>
                            <div>
                                <img src={search} width={30} alt="Search Img" />
                            </div>
                        </button>
                    </div>
                    <div className='xl:hidden'>
                        <button type="submit" onClick={() => toggleNavbar()}>
                            {isClick ? (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                                    <g fill="#FFFFFF" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(5.12,5.12)"><path d="M9.15625,6.3125l-2.84375,2.84375l15.84375,15.84375l-15.9375,15.96875l2.8125,2.8125l15.96875,-15.9375l15.9375,15.9375l2.84375,-2.84375l-15.9375,-15.9375l15.84375,-15.84375l-2.84375,-2.84375l-15.84375,15.84375z"></path></g></g>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
                                    <g fill="#FFFFFF" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(10.66667,10.66667)"><path d="M2,5v2h20v-2zM2,11v2h20v-2zM2,17v2h20v-2z"></path></g></g>
                                </svg>
                            )}
                        </button>
                    </div>
                </nav>
                {isClick && (
                    <div className='xl:hidden'>
                        <ul className='flex justify-between flex-col border-2 w-4/5 rounded-tr-2xl object-fill h-[85vh] items-center gap-x-3'>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Home</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>About</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Blog</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Contact</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Destination</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Hospitals</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Hotels</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Resturants</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>Maps</li></a>
                            <a href=""><li onClick={() => toggleNavbar()} className='hover:text-white hover:decoration-blue-600 hover:underline'>AI-Bot</li></a>
                        </ul>
                    </div>
                )}

                <div className='flex flex-col justify-center items-center text-white my-28 gap-y-3 font-medium'>
                    <div className='text-6xl'>
                        Adventure awaits, Let's make
                    </div>
                    <div className='text-5xl'>
                        memories together
                    </div>
                    <div>
                        Find awesome places to visit
                    </div>
                </div>
            </div>

            <div className='w-2/3 bg-blue-400 mx-auto py-8 px-6 relative bottom-16 rounded-xl'>
                <div className='bg-white rounded-lg py-4'>
                    <div className='flex justify-around items-center'>
                        <div className='flex items-center gap-x-2'>
                            <div className='text-blue-800'>Destination : </div>
                            <select name="" id="" className='p-2 w-[300px] border rounded-lg hover:border-blue-400 border-blue-800 text-blue-800'>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                                <option value="Destination">Select Destination</option>
                            </select>
                        </div>
                        <div className='border hover:bg-blue-400 hover:text-white hover:border-blue-400 border-blue-800 text-blue-800 p-2 rounded-xl'>
                            <button type="button">Search Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
