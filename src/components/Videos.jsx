import React from "react"
import { FaYoutube } from "react-icons/fa"

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "Music Production Tutorial",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Live Performance Showcase",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Audio Engineering Breakdown",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "Sound Design Workshop",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ]

  return (
    <div id="videos" className="page-top-div">
      <div className="max-w-[1240px] m-auto py-2 px-4">
        <p className="uppercase text-xl tracking-widest underline">Videos</p>
        <h2 className="py-4 text-rose-300">Featured Videos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full py-2">
          {videos.map((video) => (
            <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gray-300 rounded-md hover:scale-105 ease-in-out duration-300 p-8 h-full flex flex-col items-center justify-center text-center">
                <FaYoutube size={60} color="#FF0000" className="mb-4 group-hover:scale-110 ease-in-out duration-300" />
                <h3 className="text-black font-semibold">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Videos
