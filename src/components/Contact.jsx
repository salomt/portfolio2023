import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaSpotify, FaInstagram, FaYoutube} from 'react-icons/fa'


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
                                <p>I am available for projects.</p>
                                <div className='pt-40 p-4'>
                                    <p className=' text-white uppercase tracking-wider'>Let&#39;s connect!</p>
                                    <div className='flex items-center justify-between my-4 w-full'>
                                        <div className='contact-icon'>
                                            <a href='https://open.spotify.com/artist/4Zu0QLKCCz02GjpdBvSSi9?si=xJ7Uxx7FTGGNMfwKrYTrIg'>
                                                <FaSpotify color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='https://www.youtube.com/channel/UCWC3h6X0fklYLBxCQTvGfnQs'>
                                                <FaYoutube color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='https://www.instagram.com/t.salomaa/'>
                                                <FaInstagram color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='https://www.linkedin.com/in/tommi-salomaa/'>
                                                <FaLinkedinIn color='black' size={20}/>
                                            </a>
                                        </div>
                                        <div className='contact-icon'>
                                            <a href='mailto:tommi.salomaa@gmail.com'>
                                            <AiOutlineMail color='black' size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                        </div>
                        {/* RIGHT */}
                        <div className='col-span-8 lg:col-span-4 w-full h-auto shadow-sm shadow-gray-500 rounded-xl lg:p-4 pt-2'>
                            <div className='p-2'>
                                <form>

                                        <div className='flex flex-col'>
                                            <label className='uppercase text-sm'>Name</label>
                                            <input 
                                                id='msgname'
                                                className='border-2 rounded-lg p-2 flex border-gray-300 text-black text-sm' 
                                                type='text' 
                                            />
                                        </div>

                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm pt-2'>E-mail</label>
                                        <input 
                                            id='msgemail'
                                            className='border-2 rounded-lg p-2 flex border-gray-300 text-black text-sm' 
                                            type='email' 
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm pt-2'>Subject</label>
                                        <input 
                                            id='msgubject'
                                            className='border-2 rounded-lg p-2 flex border-gray-300 text-black text-sm' 
                                            type='text' 
                                        />
                                    </div>
                                    <div className='flex flex-col py2'>
                                        <label className='uppercase text-sm pt-2'>Message</label>
                                        <textarea 
                                            id='msgmessage'
                                            className='border-2 rounded-lg p-2 flex border-gray-300 text-black text-sm'
                                            rows='8' 
                                        />
                                    </div>
                                    <button className='pt-4'>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact