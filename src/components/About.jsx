import React from "react"

const About = () => {
  return (
    <div id="about" className="page-top-div">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest underline">About</p>

          <h2 className="py-4 text-rose-300">Who am I?</h2>

          <p className="py-4">As a creative and a tech-head I work where music, audio, and technology meet.</p>
          <p className="py-4">I care about building products in tech, in music, and especially where the two overlap — things that work and sound great.</p>

          <div>
            {" "}
            {/* RECOMMENDATIONS QUOTES */}
            <h3 className="pt-8 border-b">What others have to say?</h3>
            <p className="pt-4 italic text-rose-300">&quot;Tommi has composed several songs for us and done other sound work too. We are really happy with the quality of work he has done for us and it&apos;s always a pleasure to work with him!</p>
            <p className="text-sm">
              &emsp;<span className="font-bold">-Jouni Jussila</span>, CEO, Co-founder at DIZED
            </p>
            <p className="pt-8 italic text-rose-300">&quot;Tommi is a very talented musician and delight to work with. His knowledge of video game soundtracks is vast and can be useful for reference and entertainment...I was also impressed with his eagerness to help in other areas, such as learning scripting for game design and development tasks.</p>
            <p className="text-sm">
              &emsp;<span className="font-bold">-Shane Culp</span>, Game Producer, Engineering Lead, Creative Technologist
            </p>
            <p className="pt-8 italic text-rose-300">&quot;Tommi provided the perfect musical supplement to our gaming themed event and handled both DJ and live playing duties with great skill. Highly recommended.&quot;</p>
            <p className="text-sm">
              &emsp;<span className="font-bold">-Samuli Syvähuoko</span>, Serial Entrepreneur, Founding member of several game studios including Remedy
            </p>
            <p className="pt-8 italic text-rose-300">&quot;I have worked with Tommi in several projects. His ability to create music, sound effects and even build the whole set-up is amazing. His superpower is listening the customer and bring life to an idea from a scratch. Projects have always been on time and successful.&quot;</p>
            <p className="text-sm">
              &emsp;<span className="font-bold">-Milla Pennanen</span>, Producer/Coordinator, Insinööriliitto/ Union of Professional Engineers
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
