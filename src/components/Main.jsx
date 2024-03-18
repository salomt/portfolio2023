import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaSpotify, FaInstagram, FaYoutube} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='home' className='pt-60 w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto flex justify-center items-center'>
                <div>
                    <p className='text-xl sm:text-2xl md:text-4xl font-bold tracking-wide'>Welcome to my portfolio!</p>
                    <p className='py-4 w-full m-auto text-md sm:text-lg font-bold'> I am Tommi, musician, producer, audio engineer and event technician.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='main-icon'>
                            <a href='https://open.spotify.com/artist/4Zu0QLKCCz02GjpdBvSSi9?si=xJ7Uxx7FTGGNMfwKrYTrIg' target='_blank'>
                                <FaSpotify color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href='https://www.youtube.com/channel/UCWC3h6X0fklYLBxCQTvGfnQs' target='_blank'>
                                <FaYoutube color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href='https://www.instagram.com/t.salomaa/' target='_blank'>
                                <FaInstagram color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href='https://www.linkedin.com/in/tommi-salomaa/' target='_blank'>
                                <FaLinkedinIn color='black' size={20}/>
                            </a>
                        </div>
                        <div className='main-icon'>
                            <a href='mailto:tommi.salomaa@gmail.com' target='_blank'>
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