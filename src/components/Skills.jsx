import React from "react"

const Skills = () => {
  return (
    <div id="skills" className="page-top-div">
      <div className="max-w-[1240px] m-auto w-full min-w-0 px-4 py-8 sm:px-8 md:grid md:grid-cols-1 md:gap-8 md:pl-16 md:pr-2">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest underline">Skills</p>
          <h2 className="py-4 text-rose-300">What is it that I do?</h2>
          <div className="md:grid grid-cols-2 gap-20">
            <div className="py-2">
              <h3 className="">MUSIC PRODUCTION</h3>
              <ul className="list-disc ml-8">
                <li>composing & arranging</li>
                <li>recording & mixing</li>
                <li>producing</li>
                <li>mastering</li>
              </ul>
            </div>
            <div className="py-2">
              <h3 className="">AUDIO DESIGN</h3>
              <ul className="list-disc ml-8">
                <li>foley</li>
                <li>field recording</li>
                <li>voiceover</li>
                <li>sound synthesis</li>
                <li>audio programming</li>
                <li>integration</li>
              </ul>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-20">
            <div className="py-2">
              <h3 className="">LIVE PERFORMING</h3>
              <ul className="list-disc ml-8">
                <li>piano & keys</li>
                <li>percussion</li>
                <li>vocals</li>
                <li>DJ</li>
              </ul>
            </div>
            <div className="py-2">
              <h3 className="">AV ENGINEERING</h3>
              <ul className="list-disc ml-8">
                <li>sound and light setup</li>
                <li>live audio mixing</li>
                <li>lights</li>
              </ul>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-20">
            <div className="py-2">
              <h3 className="">DEVELOPMENT</h3>
              <ul className="list-disc ml-8">
                <li>frontend</li>
                <li>backend</li>
                <li>testing </li>
                <li>devops & cloud</li>
                <li>game dev</li>
              </ul>
            </div>
            <div className="py-2">
              <h3 className="">OTHER SKILLS</h3>
              <ul className="list-disc ml-8">
                <li>video editing</li>
                <li>analog electronics</li>
                <li>microcontrollers</li>
                <li>basics of acoustics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
