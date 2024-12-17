'use client';
import React, { useEffect, useState } from 'react';
import useCartStore from '@/app/store/store';
import { Alert } from '@mui/material';
import Image from 'next/image';
import HoverRating from '@/components/ui/rait';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

async function dataProduct(id) {
  const res = await fetch(`https://673fa428a9bc276ec4b93059.mockapi.io/prodoctShop/${id}`);
  if (!res.ok) {
    throw new Error('Error loading product details');
  }
  return res.json();
}

export default function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const [slug, setSlug] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [transform, setTransform] = useState('scale(.8) translate(0px, 0px)');

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const moveX = ((offsetX / rect.width) - .5) * 100;
    const moveY = ((offsetY / rect.height) - .5) * 100;

    setTransform(`scale(1.1) translate(${moveX}px, ${moveY}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('scale(.8) translate(0px, 0px)');
  };

  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return;
    async function fetchProduct() {
      const productData = await dataProduct(slug);
      setProduct(productData);
    }
    fetchProduct();
  }, [slug]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" p-5  w-full h-screen flex flex-wrap justify-evenly rounded-xl items-center relative bg-white">
      <figure
        className="relative w-full md:w-6/12 overflow-hidden border rounded-lg"
        style={{ height: '400px' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={product.avatar}
          width={500}
          height={500}
          alt="avatar"
          className="object-contain w-full h-full "
          style={{ transform }}
        />
      </figure>
        
      <article className="w-full md:w-5/12 *:my-5 text-center px-5 md:text-start border" >
        <h2 className="font-bold text-2xl md:text-5xl my-2">$ {product.price}</h2>
        <h1 className="font-bold text-lg md:text-2xl">{product.name}</h1>
        <p>{product.desc}</p>
        <HoverRating />
        <Button variant="contained" color="success" sx={{width:'120px'}}>
          buy

        </Button>
        <br />
        <button
          onClick={() => handleAddToCart(product)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          <ShoppingCartIcon/>
          Add to Cart
        </button>
      </article>

      {/* Alert */}
      {showAlert && (
        <Alert
          sx={{
            height: '50px',
            width: '300px',
            position: 'absolute',
            top: '50px',
            right: '10px',
          }}
          severity="success"
        >
          Product added to cart!
        </Alert>
      )}
    </div>
  );
}
