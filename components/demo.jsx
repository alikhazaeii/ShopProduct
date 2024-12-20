'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Demo() {
  const images = [
    { src: '/one.jpg', alt: 'Apple Intelligence and macOS Easy to use. Easy to love' },
    { src: '/two.jpg', alt: 'Performance and Battery Life Go fast. Go far.' },
    { src: '/three.jpg', alt: 'Mac and iPhone Dream team' },
    { src: '/four.jpg', alt: 'Compatibility Mac runs your favorite apps.' },
    { src: '/five.jpg', alt: 'Privacy and Security Your business is nobody else’s.' },
    { src: '/six.jpg', alt: 'Built to stand the test of time.' },
    { src: '/seven.jpg', alt: 'Our values drive everything we do.' },
  ];

  const [currentOffset, setCurrentOffset] = useState(0);
  const [isLg, setIsLg] = useState(false);
  const cardWidth = 400;

  useEffect(() => {
    // Check screen size and update `isLg`
    const updateSize = () => {
      setIsLg(window.innerWidth >= 1024);
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    let interval;
    if (isLg) {
      interval = setInterval(() => {
        setCurrentOffset((prevOffset) => {
          const maxOffset = -(cardWidth * (images.length - 3));
          if (prevOffset <= maxOffset) {
            return 0;
          }
          return prevOffset - cardWidth;
        });
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isLg, images.length]);

  return (
    <section
      className={`w-full flex flex-wrap ${
        isLg ? 'lg:flex-nowrap overflow-hidden' : 'flex-col'
      } ml-10 my-8`}
    >
      <div
        className={`flex transition-transform duration-1000 ease-linear ${
          isLg ? '' : 'flex-wrap'
        }`}
        style={isLg ? { transform: `translateX(${currentOffset}px)` } : undefined}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`p-4 ${isLg ? 'flex-shrink-0' : 'w-full'}`}
            style={isLg ? { width: `${cardWidth}px` } : undefined}
          >
            <div className="border rounded-lg shadow-md relative flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={isLg ? 400 : 300}
                height={isLg ? 350 : 250}
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-center text-sm text-white absolute top-10 left-2 lg:text-xl">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
