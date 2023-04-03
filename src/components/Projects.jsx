import React from 'react'
import Image from 'next/image'

const Projects = () => {
    return (
        <div id='projects' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 h-screen py-8 p-4'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>Projects</p>
                    <h2 className='py-4 text-rose-300'>What have I been doing?</h2>
                    <h3>Customers</h3>
                    <div className='border-b pb-2'></div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 w-full py-2'>

                        <div className='bg-gray-300 rounded-md py-2 p-4 flex items-center justify-center'>
                            <Image
                                src='/assets/customerlogos/Logo_Sulake.png'
                                alt="Sulake"
                                width={200}
                                height={200}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>

                        <div className='bg-gray-300 rounded-md py-2 flex items-center justify-center'>
                            <Image
                                src='/assets/customerlogos/Logo_Yousician.png'
                                alt="Yousician"
                                width={200}
                                height={200}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>

                        <div className='bg-gray-300 rounded-md py-2 flex items-center justify-center'>
                            <Image
                                src='/assets/customerlogos/Logo_MLS.png'
                                alt="Moomin Language School"
                                width={300}
                                height={300}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>
                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center'>
                            <Image
                                src='/assets/customerlogos/Logo_Engineers.png'
                                alt="Engineering Union"
                                width={300}
                                height={300}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects