'use client'
import React from 'react'
import useCartStore from '@/app/store/store'
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  if (cart.length === 0) {
    return <div className=' mx-auto p-4'> your cart is empty</div>
  }

  const totalItemPrice = cart.reduce((total, item) => total + item.price * item.count, 0);
  const tax = totalItemPrice * 0.03
  const taxFormated = tax.toFixed(2)
  const totalPrice = tax + totalItemPrice

  return (
    <div className='w-full flex flex-wrap items-center justify-center text-center py-20'>
      <ul>
        {cart.map((item) => {
          console.log(item);
          return (
            <li key={item.id} className='border p-4 rounded mb-4 flex flex-wrap justify-between items-center *:md:w-3/12 *:w-full'>
              <figure className='flex justify-center my-5'>
                <Image width={300} height={300} alt='img' src={item.avatar} className='object-contain' />
              </figure>
              <h2>{item.name}</h2>
              <p>pirce:{item.price}</p>
              <p>count:{item.count}</p>
              <button onClick={() => removeFromCart(item.id)} className='bg-red-500 text-white px-4 py-2 rounded' >remove</button>
            </li>


          )

        })}
      </ul>
      <div className='my-4 *:p-5 capitalize'>
        <h1 className='text-5xl font-bold text-slate-700 capitalize' >Your cart</h1>
        <h2>totalItemPrice : ${totalItemPrice}</h2>
        <h2>tax : ${taxFormated}</h2>
        <h2>totalPrice : ${totalPrice}</h2>
        <Button variant="contained" color="success" sx={{width:'200px', height:'50px' , margin:'5px' }} >
          Buy
        </Button>
        <br />
        <Button variant="outlined" color="error" onClick={clearCart} sx={{width:'200px', height:'50px' , margin:'5px'}}>
          Remove All
        </Button>
      </div>

        
    </div>
  )
}
