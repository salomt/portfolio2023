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
                        <p>During my career I&#39;ve written hundreds of songs for over ten games, videos, learning products, etc...
                            Cinematic/orchestral, folk, rock, jazz, electronic and everything in between.</p>
                    </div>
                    <div className='py-2'>
                        <h3>Performing live</h3>
                        <div className='border-b pb-2'></div>
                        <p>
                            I play piano, keyboards and accordion. I also perform as a DJ. I play both solo and with bands.
                            Weddings, funerals, x-mas parties, rock festivals, you name it, I can do it!
                        </p>
                        <p>
                            As a DJ I specialize in video game music, chiptune and electronic, but there are no limits really!
                        </p>
                    </div>
                    <div className='py-2'>
                        <h3>Producing, Recording and Mixing</h3>
                        <div className='border-b pb-2'></div>
                        <p>
                            Producing, recording and mixing music. 
                        </p>
                    </div>
                    <div className='py-2'>
                        <h3>Sound Design</h3>
                        <div className='border-b'></div>
                        <p>
                            Designing sound for video games and applications. 
                        </p>
                        <p>
                            Foley, field recording, sound synthesis, voiceovers, UI sounds, and more...
                        </p>
                    </div>
                    <div className='py-4'>
                        <h3>Teaching and tutoring</h3>
                        <div className='border-b'></div>
                        <p>
                            Yep, I also teach music recording and production stuff, as well as piano/keyboard playing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills 