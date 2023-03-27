import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaSpotify, FaInstagram} from 'react-icons/fa'


const Navbar = () => {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed-w-full h-20 z-[100] pt-4'>
            <div className='flex justify-between items-center w-full px2 2xl:px-16 fixed'>
                <div className='pl-2'>
                    <h2 className=''>Tommi Salomaa</h2>
                    <p>COMPOSER | PERFORMER | AUDIO ENGINEER</p>
                </div>
                <div>
                    <ul className='hidden md:flex pr-2'>
                        <Link href='/'>
                            <li className='ml-10 uppercase hover:border-b'>home</li>
                        </Link>
                        <Link href='#about'>
                            <li className='ml-10 uppercase hover:border-b'>about</li>
                        </Link>
                        <Link href='#skills'>
                            <li className='ml-10 uppercase hover:border-b'>skills</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 uppercase hover:border-b'>projects</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 uppercase hover:border-b'>contact</li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className='md:hidden pr-2 cursor-pointer'>
                        <AiOutlineMenu size={35} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={ nav 
                                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
                                : 'fixed left-[-100%] top-0 h-screen p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'> 
                            <div className='text-black'>
                                <h2 className='tracking-normal text-md'>Tommi Salomaa</h2>
                            </div>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray p-3 cursor-pointer'>
                                <AiOutlineClose color='black' size={35} />
                            </div>
                        </div>
                        <div className='text-black border-b border-gray-300 my-4'>
                            <p>COMPOSER | PERFORMER | AUDIO ENGINEER</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='text-black uppercase'>
                            <Link href='/' onClick={handleNav}>
                                <li className='py-4 text-sm'>home</li>
                            </Link>
                            <Link href='#about' onClick={handleNav}>
                                <li className='py-4 text-sm'>about</li>
                            </Link>
                            <Link href='#skills' onClick={handleNav}>
                            <li className='py-4 text-sm'>skills</li>
                            </Link>
                            <Link href='/' onClick={handleNav}>
                                <li className='py-4 text-sm'>projects</li>
                            </Link>
                            <Link href='/' onClick={handleNav}>
                                <li className='py-4 text-sm'>contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className=' text-black uppercase tracking-wider'>Let&#39;s connect!</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div className='nav-icon'>
                                    <FaSpotify color='black' size={25}/>
                                </div>
                                <div className='nav-icon'>
                                    <FaInstagram color='black' size={25}/>
                                </div>
                                <div className='nav-icon'>
                                    <FaLinkedinIn color='black' size={25}/>
                                </div>
                                <div className='nav-icon'>
                                    <AiOutlineMail color='black' size={25}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Navbar