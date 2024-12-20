import React from 'react'
import "./globals.css"
import  Video  from "@/components/video";
import ProductShop from "@/app/product/page";
import Demo from '@/components/demo';
import About from '@/components/about';
import Navlogos from '@/components/navlogos';




export default function page() {
  return (
    <section className="w-full overflow-x-hidden">
      <Navlogos/>
      <Video/>
      <Demo/>
      <ProductShop/>
      <About/>
    </section>
  )
}


