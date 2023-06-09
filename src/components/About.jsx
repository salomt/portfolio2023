import React from 'react'

const About = () => {
    return (
        <div id='about' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>About</p>
                    <h2 className='py-4 text-rose-300'>Who am I?</h2>
                    <p>I am a guy who is passionate about music, sound, video games and nerd stuff.
                        I have worked 12 years as a professional composer, musician, producer and audio engineer.
                    </p>
                    <p>
                        In addition to these I work with digital content, sound design, and do development and scripting as well.
                    </p>
                    <p>
                        I run my own one-man company Megatommi Productions.
                    </p>
                    <h3 className='pt-8 border-b'>Why should you hire Megatommi for your project or gig?</h3>
                        <p className='pt-4'>Because he..</p>
                        <ul className='list-disc p-4'>
                            <li>
                                is passionate, reliable and really cares about your project
                            </li>
                            <li>
                                is a problem-solver with can-do attitude
                            </li>
                            <li>
                                has a balance of creative madness and detail-oriented technicality
                            </li>
                            <li>
                                has varied experience and skills in music, audio and IT
                            </li>
                            <li>
                                can deliver a top-notch musical performance for your event
                            </li>
                            <li>
                                has a large network of top talent in music, games and media
                            </li>
                        </ul>

                        <div> {/* RECOMMENDATIONS QUOTES */}
                            <h3 className='pt-8 border-b'>What others have to say?</h3>

                            <p className='italic  text-rose-300'>
                                &quot;Tommi provided the perfect musical supplement to our gaming themed event and handled both DJ and live playing duties with great skill.
                                Highly recommended.&quot;
                            </p>
                            <p className='text-sm'>&emsp;<span className='font-bold'>-Samuli Syvähuoko</span>, serial entrepreneur, founding member of several game studios including Remedy</p>

                            <p className='pt-8 italic text-rose-300'>
                                &quot;I have worked with Tommi in several projects. His ability to create music, sound effects and even build the whole set-up is amazing. His superpower is listening the customer and bring life to an idea from a scratch. Projects have always been on time and successful.&quot;
                            </p>
                            <p className='text-sm'>&emsp;-Milla Pennanen, producer/coordinator, Insinööriliitto/ Union of Professional Engineers</p>
                            

                        </div>

                </div>
            </div>
        </div>
    )
}

export default About 