import React from 'react'

const Skills = () => {
    return (
        <div id='skills' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 h-screen py-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>Skills</p>
                    <h2 className='py-4 text-rose-300'>What is it that I do?</h2>
                    <div className='py-2'>
                        <h3 className=''>MUSIC PRODUCTION</h3>
                        <ul class='list-disc ml-8'>
                            <li>composing & arranging</li>
                            <li>recording & mixing</li>
                            <li>producing</li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <h3 className=''>LIVE PERFORMING</h3>

                        <ul class='list-disc ml-8'>
                            <li>piano & keys</li>
                            <li>vocals</li>
                            <li>DJ</li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <h3 className=''>AV ENGINEERING</h3>
                        <ul class='list-disc ml-8'>
                           <li>festivals</li>
                           <li>company events</li>
                           <li>private events</li>
                           <li>clubs and gigs</li>
                        </ul>
                    </div>
                    <div className='py-2'>
                        <h3 className=''>AUDIO DESIGN</h3>
                        <ul class='list-disc ml-8'>
                            <li>foley</li>
                            <li>field recording</li>
                            <li>voiceover</li>
                            <li>sound synthesis</li>
                        </ul>

                    </div>
                    <div className='py-4'>
                        <h3 className=''>OTHER SKILLS</h3>
                        <ul class='list-disc ml-8'>
                            <li>game & software development</li>
                            <li>video editing</li>
                            <li>project management</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills 