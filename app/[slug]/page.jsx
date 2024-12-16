'use client'
import React, { useEffect, useState } from 'react';
import useCartStore from '@/app/store/store';
import Link from 'next/link';
import { Alert } from '@mui/material'; // Import Alert component
import { Height } from '@mui/icons-material';

// تابع واکشی داده‌های محصول
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
  const [showAlert, setShowAlert] = useState(false); // State to control Alert visibility

  // unwrap کردن params
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
    setShowAlert(true); // Show alert when product is added to cart

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="container mx-auto p-4">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.desc}</p>
      <Link href='./'>back</Link>
      <br/>
      <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      
      
      {showAlert && <Alert sx={{height:'50px',width:'300px', position:'absolute',bottom:'50px',left:'10px'}} severity="success">Product added to cart!</Alert>}
    </div>
  );
}
