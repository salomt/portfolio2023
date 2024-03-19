import React from 'react'

const About = () => {
    return (
        <div id='about' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>About</p>

                    <h2 className='py-4 text-rose-300'>Who am I?</h2>

                    <p className='py-4'>I'm a guy who has dabbled his whole life with music, audio and some nerdy stuff as well.</p>
                    <p className='py-4'>With my 14 years of experience as a composer, musician, DJ, audio designer and AV engineer, I can make your project or event sound amazing and unique.</p>

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
                        <p className='text-sm'>&emsp;<span className='font-bold'>-Milla Pennanen</span>, producer/coordinator, Insinööriliitto/ Union of Professional Engineers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About 