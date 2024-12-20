'use client'
import React, { useEffect, useState } from 'react'

export default function video() {

  const videos = [
    "https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/large.mp4",
    "https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/large.mp4",
    "https://www.apple.com/105/media/us/ipad/2024/45762adb-901a-4726-8b0c-1f3ee092b09a/anim/welcome-hero/large.mp4",
    "https://www.apple.com/105/media/us/watch/2024/f0b51c31-e8a5-44d7-b23d-51bd2858454a/anim/hero/large.mp4",

  ]

  const [videoShow, setVideoShow] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoShow((pervIndex) => (pervIndex + 1) % videos.length)
    }, 9000);
    return () => clearInterval(interval)
  }, [])


  return (
    <>
      <div className='w-full flex flex-wrap justify-center pt-32  '>
        <div className='w-10/12 flex justify-evenly text-center text-lg lg:text-4xl capitalize my-5'>
        <h2>mac</h2>
        <h2>iphone</h2>
        <h2>ipad</h2>
        <h2>watch</h2>

        </div>
        <video src={videos[videoShow]} className='w-10/12 h-[500px]  object-cover rounded-2xl' autoPlay muted loop />

      </div>
      <div className='flex flex-wrap justify-center space-x-2 mt-4 w-full'>
        {videos.map((_, index) => (
          
            <button key={index} className={`w-3 h-3 rounded-full ${index === videoShow ? 'bg-blue-400' : 'bg-red-800'}`}
              onClick={() => setVideoShow(index)}>

            </button>
          
        ))}
      </div>
    </>
  )
}
