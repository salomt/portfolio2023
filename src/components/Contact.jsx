import React, { useState } from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaSpotify, FaInstagram, FaYoutube} from 'react-icons/fa'

import ContactForm from './ContactForm'

const Contact = () => {

    return (
        <div id='contact' className='w-full lg:h-screen p-8 py-20  bg-[#000620] bg-opacity-75'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 h-screen py-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>Contact</p>
                    <h2 className='py-4 text-rose-300'>Get in touch!</h2>
                    <div className='grid lg:grid-cols-8 gap-8'>
                        {/* LEFT */}
                        <div className='col-span-8 lg:col-span-4 w-full shadow-sm shadow-gray-400 rounded-xl p-4'>
                                <p>I am available for projects and gigs, connect with me with the services listed here:
                                </p>
         

                        </div>
                        {/* RIGHT */}
                        <div className='col-span-8 lg:col-span-4 w-full h-auto shadow-sm shadow-gray-500 rounded-xl lg:p-4 pt-2'>
                            <div className='p-2'>

                            <div className=' p-4'>
                                    <p className=' text-white uppercase tracking-wider'>Let&#39;s connect!</p>
                                    <div className='flex items-center justify-between my-4 w-full'>
                                        <div className='contact-icon'>
                                            <a href='https://open.spotify.com/artist/4Zu0QLKCCz02GjpdBvSSi9?si=xJ7Uxx7FTGGNMfwKrYTrIg' target='_blank'>
                                                <FaSpotify color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='https://www.youtube.com/channel/UCWC3h6X0fklYLBxCQTvGfnQs' target='_blank'>
                                                <FaYoutube color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='https://www.instagram.com/t.salomaa/' target='_blank'>
                                                <FaInstagram color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='https://www.linkedin.com/in/tommi-salomaa/' target='_blank'>
                                                <FaLinkedinIn color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='mailto:tommi.salomaa@gmail.com' target='_blank'>
                                            <AiOutlineMail color='black' size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                               {/* <ContactForm /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact