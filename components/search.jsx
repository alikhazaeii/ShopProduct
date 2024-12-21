'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
        product.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsDropdownVisible(true);
    }
  }, [searchTerm, products]);


  const handleResultClick = () => {
    setIsDropdownVisible(false);
    setSearchTerm('');
  };

  return (
    <div className="relative w-full max-w-lg mx-auto text-black">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-5 rounded w-full h-[25px] border-none outline-none border-b-2"
      />

      {isDropdownVisible && (
        <ul className="absolute top-full left-0  w-full lg:w-[500px] bg-[#efcfef] border border-gray-300 rounded shadow-md z-10 opacity-90">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <li key={product.id} className="p-2 hover:bg-gray-100 w-full flex border *:mx-2 my-2 items-center">
                <Image width={50} height={50} src={product.avatar} alt='images' />
                <Link href={`${product.id}`} onClick={handleResultClick} className='w-5/12'>
                  {product.desc}
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
