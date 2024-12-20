'use client'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

export default function About() {
  const [images, setImages] = useState([
    {
      src: 'https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png',
      alt: 'card'
    },
    {
      src: 'https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png',
      alt: 'pc'
    },
    {
      src: 'https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_delivery__fyzranm9416y_large.png',
      alt: 'track'
    },
    {
      src: 'https://www.apple.com/v/mac/home/cb/images/overview/incentive/icon_specialist_alt__fht15dmiclei_large.png',
      alt: 'calender'
    },

  ])

  const moveLeft = () => {
    const updateImage = [...images]
    const first = updateImage.shift()
    if (first) {
      updateImage.push(first);
    }
    setImages(updateImage);
  }

  const moveRight = () => {
    const updatedImages = [...images];
    const last = updatedImages.pop();
    if (last) {
      updatedImages.unshift(last);
    }
    setImages(updatedImages);
  };
  return (
    <section className='w-full flex flex-wrap justify-evenly  my-20 *:my-5 capitalize  relative text-center lg:text-start *:shadow-xl '>
      <article className='w-full lg:w-[500px] rounded-2xl border bg-gray-100 *:m-5'>
        <figure>
          <Image width={80} height={80} src={images[0].src} alt={images[0].alt} />
        </figure>
        <h2 className='text-lg lg:text-3xl font-bold'>pay over time,<br />interest-free</h2>
        <p className='text-sm lg:text-xl'>when you choose out to cheak out <br /> with apple card monthly <br />installments</p>
      </article>
      <article className='w-full lg:w-[500px] rounded-2xl border bg-gray-100 *:m-5'>
        <figure>
          <Image width={80} height={80} src={images[1].src} alt={images[1].alt} />
        </figure>
        <h2 className='text-lg lg:text-3xl font-bold'>costumaise your mac <br /> iphone , watch</h2>
        <p className='text-sm lg:text-xl'>choose your chip , memmory <br /> storage , even color</p>
      </article>
      <article className='w-full lg:w-[500px] rounded-2xl border bg-gray-100 *:m-5'>
        <figure>
          <Image width={80} height={80} src={images[2].src} alt={images[2].alt} />
        </figure>
        <h2 className='text-lg lg:text-3xl font-bold'>get flexible delivery<br />and easy pickup</h2>
        <p className='text-sm lg:text-xl'>choose from two - delivery <br /> from an apple store , free delivery <br />or easy pickup option</p>
      </article>
      <article className='w-full lg:w-[500px] rounded-2xl border bg-gray-100 *:m-5'>
        <figure>
          <Image width={80} height={80} src={images[3].src} alt={images[3].alt} />
        </figure>
        <h2 className='text-lg lg:text-3xl font-bold'>shop live with<br />a spealist</h2>
        <p className='text-sm lg:text-xl'>let us guide you live over vvideo <br /> and awnser all of your questions</p>
      </article>
    </section>
  )
}
