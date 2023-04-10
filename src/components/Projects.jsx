import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div id='projects' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 py-8 p-4'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>Projects</p>
                    <h2 className='py-4 text-rose-300'>What have I been doing?</h2>

                    {/* GAMES */}
                    <h3>Games and digital learning products</h3>
                    <div className='border-b pb-2'></div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full py-4'>

                        {/* HOTEL HIDEAWAY */}
                        <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <a href='https://www.hotelhideawaythegame.com/' target='_blank'>
                                    <Image
                                        src='/assets/projectpics/hotelhideaway.png'
                                        alt="Sulake"
                                        width={300}
                                        height={200}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </a>
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>HOTEL HIDEAWAY</h4>
                                <p>
                                    Music composition and audio design for a social mobile game Hotel Hideaway (Sulake Corporation)
                                </p>
                            </div>
                        </div>

                         {/* DIZED */}
                        <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <a href='https://dized.com/' target='_blank'>
                                    <Image
                                        src='/assets/projectpics/Dized_2017.jpeg'
                                        alt="Dized"
                                        width={300}
                                        height={200}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </a>
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>DIZED</h4>
                                <p>
                                    Music, SFX and audio direction for a board game learning product Dized. (Playmore Games Oy)
                                </p>
                            </div>
                        </div>

                         {/* RETRO SHOT */}
                         <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <a href='https://open.spotify.com/album/4kfOjrIS3j0tpgcbgWHZDw?si=u0zF3ALKRDa1goZiIjXHdA' target='_blank'>
                                    <Image
                                        src='/assets/projectpics/retroshot.jpeg'
                                        alt="Dized"
                                        width={300}
                                        height={200}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </a>
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>RETRO SHOT</h4>
                                <p>
                                    Co-composing, producing, mixing and mastering original oundtrack for a mobile game in collaboration with Retro Thruster.
                                    The soundtrack was awarded 3rd place at Finnish Game Music Awards in 2016.
                                </p>
                            </div>
                        </div>

                         {/* AG DRIVE */}
                         <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <Image
                                    src='/assets/projectpics/agdrive.jpeg'
                                    alt="Dized"
                                    width={500}
                                    height={200}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>AG DRIVE</h4>
                                <p>
                                    Producing a track 'Riding High' for a game soundtrack for AG Drive futuristic driving game.
                                </p>
                            </div>
                        </div>

                         {/* ROCK RUNNERS */}
                         <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <Image
                                    src='/assets/projectpics/rockrunners.png'
                                    alt="Rock Runners"
                                    width={500}
                                    height={200}
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                />
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>ROCK RUNNERS</h4>
                                <p>
                                    Composing and producing soundtrack and SFX for mobile game Rock Runners (Recoil Games)
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* MUSIC ALBUMS AND GIGS */}
                    <h3>Albums and bands</h3>
                    <div className='border-b pb-2 m-auto'></div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full py-4'>

                       {/* WALTARI */}
                       <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://open.spotify.com/album/3slotRsmfCgt89DfJqf23d?si=yfzQvSJuTMmB8uu6tOxElQ' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/Waltari_3rdDecade.jpeg'
                                        alt="Waltari 3rd Decade"
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>WALTARI - 3RD DECADE</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Synth arrangements and sound design</li>
                                        <li>Recording children's choir in <span className='italic'>So Fine 2021</span></li>
                                        <li>Co-mixing some tracks</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                       {/* BABA GANOUSH */}
                       <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://open.spotify.com/album/74JJd6RmHqD3deWsTIHEGq?si=NxXmosFESN2CDSgdUTk0vg' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/BabaGanoush_Meze.png'
                                        alt="Baba Ganoush Meze"
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>BABA GANOUSH ORKESTRA - MEZE</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Recording the instruments</li>
                                        <li>Mixing <a href='https://www.youtube.com/watch?v=9GWpZE_jZ8Q'>Sneak</a> studio live song</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                       {/* V FOR VIOLENCE */}
                       <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://open.spotify.com/album/5dkcKhZscVpiyY6dgGWGko?si=cnw1M6okQG2NE2o1IS1sOA' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/VforViolence_TheBookOfV.png'
                                        alt="V for Violence The Book of V"
                                        width={250}
                                        height={250}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>V FOR VIOLENCE - THE BOOK OF V</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Strings arrangements, production and recording</li>
                                        <li>Synth, piano and noise arrangements and playing</li>
                                        <li>Co-production</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                       {/* STORBO */}
                       <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://open.spotify.com/album/1lYL6yGqw8TqHhaxfvyaeR?si=pibOB18-RdSdEoeI2EyTuA' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                        <Image
                                            src='/assets/projectpics/Storbo_GatesOfTheOverlord.png'
                                            alt="Storbo - Gates Of The Overlord"
                                            width={250}
                                            height={250}
                                            // blurDataURL="data:..." automatically provided
                                            // placeholder="blur" // Optional blur-up while loading
                                        />
            
                                </div>
                                <div className='py2 p-4 text-black'>
                                    <h4>STORBO - GATES OF THE OVERLORD</h4>
                                <ul className='list-disc p-2'>
                                    <li>Keyboards, synths and sound design</li>
                                </ul>
                                </div>
                            </a>
                        </div>

                    </div>

                    {/* CUSTOMERS AND PARTNERS */}
                    <h3>Customers</h3>
                    <div className='border-b pb-2 m-auto'></div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 w-full py-4'>

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