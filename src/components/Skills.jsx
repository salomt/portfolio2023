import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 h-screen py-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>Skills</p>
                    <h2 className='py-4 text-rose-300'>What is it that I do?</h2>
                    <div className='py-2'>
                        <h3>Music composition</h3>
                        <div className='border-b pb-2'></div>
                        <p>I write music in various styles and genres.</p>
                        <p>During my career I&#39;ve written hundreds of songs for games, videos, learning products, etc.</p>
                    </div>
                    <div className='py-2'>
                        <h3>Performing live</h3>
                        <div className='border-b pb-2'></div>
                        <p>
                            I play piano, keyboards and accordion and perform as a DJ.
                        </p>
                    </div>
                    <div className='py-2'>
                        <h3>AV Engineering and Event Coordination</h3>
                        <div className='border-b pb-2'></div>
                        <p>
                            Working as an AV engineer, roadie and event coordinator. From big festivals to the corner of local pub.
                        </p>
                    </div>
                    <div className='py-2'>
                        <h3>Producing, Recording, Mixing, Arranging</h3>
                        <div className='border-b pb-2'></div>
                        <p>
                            I record, mix and produce music, and arrange keyboards, strings and other instruments.
                        </p>
                    </div>
                    <div className='py-2'>
                        <h3>Sound Design</h3>
                        <div className='border-b'></div>
                        <p>
                            I design sound and audio for games, apps and linear media. Voiceover, Foley, Synthesis, etc.
                        </p>

                    </div>
                    <div className='py-4'>
                        <h3>Content production, Coordination and Video editing</h3>
                        <div className='border-b'></div>
                        <p>
                            I produce and maintain content for various customers, specializing in music and language learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills 