'use client'
import React from 'react'
import useCartStore from '@/app/store/store'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();
  if (cart.length === 0) {
    return <div className=' mx-auto p-4 absolute right-0 top-0'> your cart is empty</div>
  }

  const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className='w-[400px] absolute right-0 top-0 text-center'>
      <h1 className='text-3xl font-bold text-slate-700 capitalize'>Your cart</h1>
      <ul>
        {cart.map((item) => {
          console.log(item);
          return (
            <li key={item.id} className='border p-4 rounded mb-4 flex justify-between items-center'>
              <h2>{item.name}</h2>
              <p>pirce:{item.price}</p>
              <p>count:{item.count}</p>
              <button onClick={() => removeFromCart(item.id)} className='bg-red-500 text-white px-4 py-2 rounded' >remove</button>
            </li>
            

          )
          
        })}
      </ul>
      <div className='my-4'>
        <h2>Total:${totalPrice}</h2>
        <button onClick={clearCart} className='bg-red-500 text-white px-4 py-2 rounded'>Clear cart</button>
      </div>

    </div>
  )
}
