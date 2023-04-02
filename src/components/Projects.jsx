import React from 'react'

const Projects = () => {
    return (
        <div id='projects' className='page-top-div'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 h-screen py-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest underline'>Projects</p>
                    <h2 className='py-4 text-rose-300'>What have I been doing?</h2>
                </div>
            </div>
        </div>
    )
}

export default Projects