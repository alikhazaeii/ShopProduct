import Image from 'next/image'
import React from 'react'

export default function Navlogos() {
  const logos = [
    { src: '/navone.svg', alt: 'Displays' },
    { src: '/navtwo.svg', alt: 'imac' },
    { src: '/navthree.svg', alt: 'accessories' },
    { src: '/navfour.svg', alt: 'compare' },
    { src: '/navfive.svg', alt: 'macmini' },
    { src: '/navsix.svg', alt: 'navsix' },
    { src: '/navseven.svg', alt: 'sequia' },
    { src: '/naveight.svg', alt: 'mac pro' },
    { src: '/navnine.svg', alt: 'mac studio' },
    { src: '/navten.svg', alt: 'macbook pro' },
    { src: '/naveleven.svg', alt: 'macbook air' },
  ];

  
  return (
    <div className='hidden md:w-full lg:flex justify-evenly my-20 items-center bg-[#fafafc] py-5 '>
      {logos.map((logo, index) => (
        <figure key={index} className='w-1/12 flex flex-wrap justify-center items-center text-lg *:p-2  '>
          <Image width={50} height={50} src={logo.src} alt={logo.alt} 
          className="w-20 h-20"
          />
          <figcaption>{logo.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
