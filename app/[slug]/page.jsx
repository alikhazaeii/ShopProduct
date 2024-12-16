// app/[slug]/page.jsx
'use client';  // این خط را برای تبدیل کامپوننت به Client Component اضافه کنید

import React, { useEffect, useState } from 'react';
import useCartStore from '@/app/store/store';
import Link from 'next/link';
import CartPage from '../cart/page';

// تابع واکشی داده‌های محصول
async function dataProduct(id) {
  const res = await fetch(`https://673fa428a9bc276ec4b93059.mockapi.io/prodoctShop/${id}`);
  if (!res.ok) {
    throw new Error('Error loading product details');
  }
  return res.json();
}

export default function ProductDetails({ params }) {
  const [product, setProduct] = useState(null);  // ذخیره محصول در state
  const addToCart = useCartStore((state) => state.addToCart);  // دسترسی به متد addToCart از Zustand
  const [slug, setSlug] = useState(null);  // برای ذخیره‌ی مقدار slug

  // unwrap کردن params
  useEffect(() => {
    async function unwrapParams() {
      const resolvedParams = await params;  // unwrap کردن params به صورت صحیح
      setSlug(resolvedParams.slug);  // بعد از unwrap کردن params، مقدار slug را ذخیره می‌کنیم
    }

    unwrapParams();  // فراخوانی تابع unwrapParams
  }, [params]);  // زمانی که params تغییر کند، unwrap می‌شود

  // واکشی اطلاعات محصول تنها در سمت کلاینت
  useEffect(() => {
    if (!slug) return;  // اگر slug هنوز موجود نباشد، کاری نکنیم

    async function fetchProduct() {
      const productData = await dataProduct(slug);
      setProduct(productData);
    }

    fetchProduct();
  }, [slug]);  // فقط زمانی که slug تغییر کند، داده‌ها بارگذاری می‌شوند

  if (!product) {
    return <div>Loading...</div>;  // در صورتی که محصول بارگذاری نشده باشد
  }

  return (
    <div className="container mx-auto p-4">
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>{product.desc}</p>
      <Link href='./'>back</Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button><br />
      <CartPage/>

    </div>
  );
}
