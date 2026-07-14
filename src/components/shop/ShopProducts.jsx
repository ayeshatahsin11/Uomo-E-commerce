"use client"
import React from 'react'
import { useState, useEffect } from 'react';
import ProductCards from '../common/ProductCards';
const ShopProducts = () => {
     const [products, setProducts] = useState([]);
    
      useEffect(() => {
        const fetchProducts = async () => {
          const res = await fetch("/api/products");
          const data = await res.json();
          setProducts(data);
        };
        fetchProducts();
      }, []);
  return (
    <div className='grid grid-cols-4 gap-y-5 mt-10'>

        {products?.map((product)=>(
            <ProductCards key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default ShopProducts