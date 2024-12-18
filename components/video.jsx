import React from 'react'

export default function video() {
  return (
    <div className='w-full flex flex-wrap justify-center pt-32 '>
      <h1 className='uppercase w-10/12  text-6xl'>mac</h1>
      <video className='w-10/12 h-[500px] object-cover rounded-lg' src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/large.mp4" autoPlay muted loop></video>
    </div>
  )
}
