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
                                    Music composition and audio design for a social mobile game. <br /> (2015- Sulake Corporation)
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
                                    Music, SFX and audio direction for a board game learning product. <br />(2017-2018, Playmore Games Oy)
                                </p>
                            </div>
                        </div>

                         {/* MLS */}
                         <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <a href='https://www.moominls.com/' target='_blank'>
                                    <Image
                                        src='/assets/customerlogos/Logo_MLS.png'
                                        alt="Moomin Language School"
                                        width={500}
                                        height={200}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </a>
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>MOOMIN LANGUAGE SCHOOL</h4>
                                <p>
                                    Voiceover recording and editing, music composition for language learning product for children.
                                </p>
                            </div>
                        </div>

                         {/* YOUSICIAN */}
                         <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <a href='https://www.yousician.com' target='_blank'>
                                    <Image
                                        src='/assets/projectpics/YousicianHorizontal.png'
                                        alt="Yousician"
                                        width={500}
                                        height={200}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </a>
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>YOUSICIAN</h4>
                                <p>
                                    Piano content production and management for music learning application.
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
                                    Co-composing, producing, mixing and mastering original soundtrack for a mobile game in collaboration with Retro Thruster.
                                    The soundtrack was awarded 3rd place at Finnish Game Music Awards in 2016.
                                </p>
                            </div>
                        </div>

                         {/* AG DRIVE */}
                         <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <a href='https://open.spotify.com/album/4kfOjrIS3j0tpgcbgWHZDw?si=u0zF3ALKRDa1goZiIjXHdA' target='_blank'>
                                    <Image
                                        src='/assets/projectpics/agdrive.jpeg'
                                        alt="Dized"
                                        width={500}
                                        height={200}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </a>
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>AG DRIVE</h4>
                                <p>
                                    Producing a track <span className='italic'>Riding High</span> for a game soundtrack for AG Drive, a futuristic driving game.
                                </p>
                            </div>
                        </div>
                        
                         {/* ROCK RUNNERS */}
                         <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <div className=' py-2 p-4 flex items-center justify-center'>
                                <a href='https://tommisalomaa.bandcamp.com/album/rock-runners-soundtrack' target='_blank'>
                                    <Image
                                        src='/assets/projectpics/rockrunners.png'
                                        alt="Rock Runners"
                                        width={500}
                                        height={200}
                                        // blurDataURL="data:..." automatically provided
                                        // placeholder="blur" // Optional blur-up while loading
                                    />
                                </a>
                            </div>
                            <div className='py2 p-4 text-black'>
                            <h4>ROCK RUNNERS</h4>
                                <p>
                                    Composing and producing soundtrack and SFX for mobile game Rock Runners (Recoil Games)
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Studio Work */}
                    <h3 className='pt-8'>Studio Work</h3>
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
                                        <li>Recording children&apos;s choir in <span className='italic'>So Fine 2021</span></li>
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
                                        <li>Mixing <span className='italic'>Sneak</span> studio live song</li>
                                    </ul>
                                </div>
                            </a>
                        </div>

                       {/* V FOR VIOLENCE */}
                       <div className='grid justify-between bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300'>
                            <a href='https://open.spotify.com/album/5dkcKhZscVpiyY6dgGWGko?si=cnw1M6okQG2NE2o1IS1sOA' target='_blank'>
                                <div className=' py-2 p-4 flex items-center justify-center'>
                                    <Image
                                        src='/assets/projectpics/VforViolence_TheBook.png'
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

                    {/* Bands */}
                    <h3 className='pt-8'>Bands And Live</h3>
                    <div className='border-b pb-2 m-auto'></div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full py-4'>

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
                                    <h4>Myllynen & Salomaa plays M.A. Numminen</h4>
                                    <ul className='list-disc p-2'>
                                        <li>Tribute to Finnish folk artist M.A. Numminen</li>
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

                    {/* CUSTOMERS AND PARTNERS */}
                    <h3 className='pt-8'>Customers and Partners</h3>
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
                                src='/assets/customerlogos/Logo_Promentor.png'
                                alt="Promentor Solutions"
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

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center'>
                            <Image
                                src='/assets/customerlogos/Logo_IGDA.png'
                                alt="IGDA Finland"
                                width={300}
                                height={300}
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                        </div>

                        <div className='bg-gray-300 rounded-md p-2 flex items-center justify-center'>
                            <Image
                                src='/assets/customerlogos/Logo_HMQ.png'
                                alt="Housemarque"
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