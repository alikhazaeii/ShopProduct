import React from 'react'
import "./globals.css"
import  Video  from "@/components/video";
import ProductShop from "@/app/product/page";
import Demo from '@/components/demo';
import About from '@/components/about';




export default function page() {
  return (
    <section className="w-full overflow-x-hidden">
      <Video/>
      <Demo/>
      <ProductShop/>
      <About/>
    </section>
  )
}


