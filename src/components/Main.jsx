import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaSpotify, FaInstagram, FaYoutube} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='pt-60 w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
                <div>
                    <p className='text-xl sm:text-2xl md:text-4xl font-bold tracking-wide'>Welcome to my portfolio!</p>
                    <p className='py-4 w-3/5 m-auto text-md sm:text-lg font-bold'> I am Tommi, composer, musician, DJ, producer and audio engineer working in the world of music, videogames and e-learning.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='main-icon'>
                            <a href='https://open.spotify.com/artist/4Zu0QLKCCz02GjpdBvSSi9?si=xJ7Uxx7FTGGNMfwKrYTrIg'>
                                <FaSpotify color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href='https://www.youtube.com/channel/UCWC3h6X0fklYLBxCQTvGfnQs'>
                                <FaYoutube color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href='https://www.instagram.com/t.salomaa/'>
                                <FaInstagram color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href='https://www.linkedin.com/in/tommi-salomaa/'>
                                <FaLinkedinIn color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href=''>
                                <AiOutlineMail color='black' size={20}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main 