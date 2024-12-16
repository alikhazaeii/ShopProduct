'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

 
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('https://673fa428a9bc276ec4b93059.mockapi.io/prodoctShop');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts([]);
      setIsDropdownVisible(false); 
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsDropdownVisible(true); // اگر مقداری وارد شود، لیست نشان داده شود
    }
  }, [searchTerm, products]);

  // مدیریت کلیک روی نتیجه و پنهان کردن لیست
  const handleResultClick = () => {
    setIsDropdownVisible(false); // بستن لیست هنگام کلیک روی یک گزینه
    setSearchTerm(''); // پاک کردن فیلد جستجو
  };

  return (
    <div className="relative w-full max-w-lg mx-auto text-black">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-5 rounded w-full h-[50px] border-none outline-none border-b-2"
      />

      {isDropdownVisible && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow-md z-10">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id} className="p-2 hover:bg-gray-100">
                <Link href={`${product.id}`} onClick={handleResultClick}>
                  {product.name}
                </Link>
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-500">No products found</li>
          )}
        </ul>
      )}
    </div>
  );
}
