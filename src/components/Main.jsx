import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaSpotify, FaInstagram} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='pt-60 w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
                <div>
                    <p className='text-xl sm:text-2xl md:text-4xl font-bold tracking-wide'>Welcome to my portfolio!</p>
                    <p className='py-4 w-3/5 m-auto text-md sm:text-lg font-bold'> I am Tommi, composer, musician, DJ, producer and audio engineer working in the world of music, videogames and e-learning.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='main-icon'>
                            <FaSpotify color='black' size={20}/>
                        </div>
                        <div className='main-icon'>
                            <FaInstagram color='black' size={20}/>
                        </div>
                        <div className='main-icon'>
                            <FaLinkedinIn color='black' size={20}/>
                        </div>
                        <div className='main-icon'>
                            <AiOutlineMail color='black' size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main 