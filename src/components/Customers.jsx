import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div id='clients' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 py-8 p-4'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>Clients</p>
                    <h2 className='py-4 text-rose-300'>With whom have I worked?</h2>

                    {/* Companies */}
                    <h3 className='pt-8'>Companies</h3>
                    <div className='border-b pb-2 m-auto'></div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 w-full py-4'>

                        <div className='bg-gray-300 rounded-md py-2 p-4 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://www.sulake.com/' target='_blank'>
                                <Image
                                    src='/assets/customerlogos/Logo_Sulake.png'
                                    alt="Sulake"
                                    width={200}
                                    height={200}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                        <div className='bg-gray-300 rounded-md py-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://yousician.com/' target='_blank'>
                                <Image
                                    src='/assets/customerlogos/Logo_Yousician.png'
                                    alt="Yousician"
                                    width={200}
                                    height={200}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                             </a>
                        </div>

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://www.ilry.fi/' target='_blank'>
                                <Image
                                    src='/assets/customerlogos/Logo_Engineers.png'
                                    alt="Engineering Union"
                                    width={300}
                                    height={300}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://soundengine.fi/' target='_blank'> 
                                <Image
                                    src='/assets/customerlogos/Logo_soundengine.jpeg'
                                    alt="Sound Engine"
                                    width={175}
                                    height={175}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://rajupaja.fi/' target='_blank'> 
                                <Image
                                    src='/assets/customerlogos/logo-rajupaja.png'
                                    alt="Rajupaja"
                                    width={200}
                                    height={200}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                        <div className='bg-gray-300 rounded-md py-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://promentor.fi/' target='_blank'>
                                <Image
                                    src='/assets/customerlogos/Logo_Promentor.png'
                                    alt="Promentor Solutions"
                                    width={300}
                                    height={300}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://www.igda.fi/' target='_blank'> 
                                <Image
                                    src='/assets/customerlogos/Logo_IGDA.png'
                                    alt="IGDA Finland"
                                    width={300}
                                    height={300}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://www.superplusgames.com/' target='_blank'> 
                                <Image
                                    src='/assets/customerlogos/logo-superplus.png'
                                    alt="SuperPlust Games"
                                    width={175}
                                    height={175}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center hover:scale-105 ease-in-out duration-300'>
                            <a href='https://housemarque.com/' target='_blank'> 
                                <Image
                                    src='/assets/customerlogos/Logo_HMQ.png'
                                    alt="Housemarque"
                                    width={300}
                                    height={300}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </a>
                        </div>

                    </div>

                    {/* Bands */}
                    <h3 className='pt-8'>Bands</h3>
                    <div className='border-b pb-2 m-auto'></div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full py-4'>

                        {/* ZUGE GUERILLA BAND */}
                        <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/zugeguerillaband.jpg'
                                        alt='Zuge Guerilla Band'
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>ZUGE GUERILLA BAND</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Keyboards and Percussion</li>
                                        <li>Production, Recording, Mixing</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                        {/* MYLLYNEN JA SALOMAA */}
                        <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://tommisalomaa.com/myllynenjasalomaa/' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/impputommi.jpg'
                                        alt='Myllynen ja Salomaa'
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>MYLLYNEN & SALOMAA PLAYS M.A. NUMMINEN</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Tribute to Finnish folk artist M.A. Numminen</li>
                                        <li>Accordion, Piano and Electronics</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                        {/* DJ MEGATOMMI */}
                        <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/DJMegatommi.png'
                                        alt='DJ MegaTommi'
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>DJ MEGATOMMI</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Specializing in electro, chiptune and synthwave</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                        {/* THK */}
                        <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://www.facebook.com/triohenkinenkesoil' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/THK.jpeg'
                                        alt='Trio Henkinen Kesoil'
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>TRIO HENKINEN KESOIL (2018-2022)</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Accordion</li>
                                        <li>Gig booking</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                        {/* WOTZC */}
                        <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://open.spotify.com/artist/6R9dTrKWg5HaP7we7KtKWM?si=Gkeu08HfSRqtMEEId23EMw' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/WOTZC.png'
                                        alt='WOTZC'
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>WOTZC (2007-20016)</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Keyboards Live & Studio</li>
                                        <li>Co-production</li>
                                        <li>Co-Recording</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects