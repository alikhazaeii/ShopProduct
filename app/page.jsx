import React from 'react'
import Home from "./product/page";
import CartPage from './cart/page';
export default function App() {
  return (
    <main className='relative'>
      <Home/>
      <CartPage/> 
    </main>
  )
}
