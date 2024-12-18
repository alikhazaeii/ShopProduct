'use client'
import HoverRating from '@/components/ui/rait';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

async function dataProduct() {
  const res = await fetch('https://673fa428a9bc276ec4b93059.mockapi.io/prodoctShop/');
  if (!res.ok) {
    throw new Error('Error index');
  }
  return res.json();
}

export default async function ProductPage() {
  const product = await dataProduct();

  return (


    <div className="w-full">
      <h1 className='p-5 text-4xl'>Products</h1>
      <div className="flex flex-wrap justify-between w-full m-2">
        {product.map((product) => {
          return (
            <div key={product.id} className="border w-full md:w-6/12 lg:w-4/12  p-4 rounded shadow-sm *:py-2  ">

              <figure className='flex justify-center items-center'>
                <Image width={300} height={300} src={product.avatar} alt={product.name} className='object-cover' />
              </figure>
              <h2 className='text-3xl'>${product.price}</h2>
              <p>{product.desc}</p>
              <HoverRating />
              <Button variant="contained" color="success" sx={{ width: '120px' }}>
                <Link href={`${product.id}`} className="text-slate-600">
                  View Details
                </Link>
              </Button>

            </div>
          );
        })}
      </div>
    </div>
  );
}


