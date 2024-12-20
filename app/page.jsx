import React from 'react'
import "./globals.css"
import  Video  from "@/components/video";
import ProductShop from "@/app/product/page";
import ImageSlider from '@/components/imageSlider';




export default function page() {
  return (
    <section className="w-full">
      <Video/>
      <ImageSlider/>
      <ProductShop/>
    </section>
  )
}


